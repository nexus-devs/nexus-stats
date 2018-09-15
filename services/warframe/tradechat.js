/**
 * Dev-only service that listens to orders sent to the real API, just to have
 * some sample data when developing.
 */
const Client = require('cubic-client')
const client = new Client({
  api_url: 'https://api.nexus-stats.com'
})
const staging = new Client({
  api_url: 'https://api.staging.nexushub.co'
})
const local = new Client({
  user_key: cubic.config.warframe.core.userKey,
  user_secret: cubic.config.warframe.core.userSecret
})

// Orders
client.subscribe('/warframe/v1/requests', req => {
  try {
    local.post('/warframe/v1/orders', {
      user: req.user,
      offer: req.offer,
      item: req.item,
      component: req.component,
      price: req.price,
      rank: req.rank,
      quantity: req.count,
      source: 'Trade Chat'
    })
  } catch (err) {
    // just try again later, these are usually issues when bootstrapping
  }
})

// Chat messages
staging.subscribe('/warframe/v1/orders/tradechat', message => {
  try {
    local.post('/warframe/v1/orders/tradechat', message)
  } catch (err) {}
})

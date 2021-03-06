const Endpoint = require('cubic-ui/endpoint')

class Index extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.url = '/warframe/items/:item/trading'
    this.schema.view = '/sites/warframe/items/trade.vue'
  }
}

module.exports = Index

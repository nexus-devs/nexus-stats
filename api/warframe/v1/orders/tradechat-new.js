const Endpoint = cubic.nodes.warframe.core.Endpoint

class Tradechat extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Trade chat tracker which returns raw messages from the chat.'
    this.schema.method = 'POST'
    this.schema.scope = 'write_orders_warframe'
    this.schema.url = '/warframe/v1/orders/tradechat'
    this.schema.request = {
      url: '/warframe/v1/orders/tradechat',
      body: {
        user: 'MoiD_Glitch',
        message: 'WTB someone to carry me, i\'ll pay in datamines',
        createdAt: new Date()
      }
    }
    this.schema.response = String
  }

  async main (req, res) {
    await this.db.collection('tradechat').insert(req.body)
    res.send('ok')
  }
}

module.exports = Tradechat

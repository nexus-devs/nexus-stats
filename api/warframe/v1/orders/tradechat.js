const Endpoint = cubic.nodes.warframe.core.Endpoint

class Tradechat extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Trade chat tracker which returns raw messages from the chat.'
    this.schema.response = [{
      user: String,
      message: String,
      createdAt: String
    }]
    this.schema.pubsub = {
      url: '/warframe/v1/orders/tradechat',
      response: this.schema.response
    }
  }

  async main (req, res) {
    const messages = await this.db.collection('tradechat').find().project({ _id: 0 }).toArray()
    res.send(messages)
    this.cache(messages)
  }
}

module.exports = Tradechat

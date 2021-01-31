const Endpoint = require('cubic-ui/endpoint')

class Ads extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.url = '/ads.txt'
  }

  async main (req, res) {
    res.status(301).redirect('https://adstxt.venatusmedia.com/master_ads.txt')
  }
}

module.exports = Ads

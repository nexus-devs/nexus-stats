const Endpoint = require(blitz.config[blitz.id].endpointParent)

class Foo extends Endpoint {
  constructor(api, db, url) {
    super(api, db, url)
    this.schema.description = "Simple testing method which returns 'bar'."
  }

  async main(req, res) {
    res.send('bar')
  }
}

module.exports = Foo
'use strict'

const Endpoint = require(blitz.config.core.endpointParent)

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
class Base extends Endpoint {
    /**
     * Creates a new statistics call
     * @constructor
     */
    constructor(api, db, url) {
        super(api, db, url)

        /**
         * Schema description
         * @type {string}
         */
        this.schema.description = "Get clan details for specified clan"

        /**
         * Url used for routing by express/custom middleware handler
         * @type {string}
         */
        this.schema.url = "/warframe/v1/clans/:clan"
    }


    /**
     * Main method which is called by EndpointHandler on request
     */
    main(clan) {
        return new Promise((resolve, reject) => {
            this.db.collection('players').find({
                "clan.name": new RegExp("^" + clan + "$", "i")
            }).toArray().then((players) => {
                if (players.length > 0) {
                    let clan = {
                        name: players[0].clan.name,
                        type: players[0].clan.type,
                        rank: players[0].clan.rank,
                        saved: {
                            count: players.length,
                            members: players
                        }
                    }
                    this.cache(this.url, clan, 60)
                    resolve(clan)
                } else {
                    this.cache(this.url, "No player data saved for " + clan + ".", 60)
                    resolve("No players data saved for " + clan + ".")
                }
            })
        })
    }
}

module.exports = Base
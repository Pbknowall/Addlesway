const { Client } = require('discord.js')
const Mongoose = require('mongoose')
//const { Config } = require('./Mongoose/Config.js')

const Events = require('./Managers/EventHandler')
const Commands = require('./Managers/CommandHandler')
/*const Webhooks = require('./Managers/Webhooks')
const Embeds = require('./Managers/Embeds')*/

require('dotenv').config()

class Addlesway extends Client {
    constructor(options) {
        super({})
        this.start()
        this.connect()
    }

    start() {
        this.Events = new Events(this)
        this.Command = new Commands(this)
        /*this.Webhooks = new Webhooks(this)
        this.Embeds = new Embeds(this)*/
    }

    connect() {
        Mongoose.connect(`mongodb+srv://mongo:${process.env.DB}@mangodev.iuiew.mongodb.net/Addlesway?retryWrites=true&w=majority`,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            }
        )
        const db = Mongoose.connection
        db.on('error', console.error.bind(console, 'connection error:'));
        db.on('connected', () => {
            console.log(`Onnectedcay ithway OngomayDB otay Atabaseday '${db.db.namespace}' asway '${db.db.options.authSource}'`)
            //this.Guild = new Guild(Mongoose);
        })
    }
}

module.exports = Addlesway
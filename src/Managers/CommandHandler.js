const Discord = require('discord.js');
const fs = require('fs');

class CommandHandler {
    constructor(Client) {
        this.Client = Client;
        this.Client.Commands = new Discord.Collection();
        this.Client.Aliases = new Discord.Collection();
        this.Client.Cooldown = new Discord.Collection();
        this.LoadCommands()
    }

    LoadCommands() {
        fs.readdirSync('./src/Commands')
            .forEach(cat => {
                fs.readdir(`./src/Commands/${cat}`, (err, files) => {
                    if (err) {
                        console.log(err)
                    } else {
                        files = files.filter(f => f.endsWith('.js'))
                        for (let file of files) {
                            let cmd = require(`../Commands/${cat}/${file}`)
                            this.Client.Commands.set(cmd.name.toLowerCase(), cmd)
                            if (cmd.aliases) {
                                for (let alias of cmd.aliases) this.Client.Aliases.set(alias, cmd)
                            }
                            if (!cmd.cooldown) continue;
                            this.Client.Cooldown.set(cmd.name, { cooldown: cmd.cooldown, ids: [] })
                        }
                    }
                })
            })
    }
}

module.exports = CommandHandler;
/*const { Client, MessageEmbed } = require('discord.js');
const client = new Client();

client.Commands = new Map();
client.Aliases = new Map();
client.Cooldowns = new Map();

require('dotenv').config();

client.login(process.env.Token)

client.on('ready', () => {
    console.log(`${client.user.username} isway onlineway on ${client.guilds.cache.size} uildsgay.`)

    fs.readDirSync('./src/Commands')
        .forEach((cat) => {
            fs.readDir(`./src/Commands/${cat}`, (err, files) => {
                if (err) return console.log(err)
                let cmdFiles = files.filter((file) => file.endsWith('.js'))
                for (let cmd of cmdFiles) {
                    let command = require(`./src/Commands/${cat}/${cmd}`)
                    client.Commands.set(command.name, command)
                }
            })
        })
})*/

const Addlesway = require('./src/')
let Client = new Addlesway()
require('discord-buttons')(Client)

Client.login(process.env.Token)
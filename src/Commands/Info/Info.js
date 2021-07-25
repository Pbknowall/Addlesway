const { MessageEmbed } = require('discord.js');
const packageJSON = require('../../../package.json');

module.exports = {
    name: 'info',
    description: 'Shows info',
    category: 'Info',
    aliases: ['i'],
    cooldown: 10,
    run: async (Client, message, args, Guild, Locale) => {
        let owner = await Client.users.fetch('283312969931292672')
        owner = owner.tag || 'Pbknowall#7857'

        let days = Math.floor((process.uptime() % 31536000) / 86400)
        let hours = Math.floor((process.uptime() / 3600) % 24)
        let minutes = Math.floor((process.uptime() / 60) % 60)
        const string = `${days ? `\`${days}\` ${Locale.data.String[0]}, ` : ""} \`${hours}\` ${Locale.data.String[1]}, \`${minutes}\` ${Locale.data.String[2]}`

        let embed = new MessageEmbed()
            .setTitle(Locale.data.EmbedTitle)
            .setDescription(Locale.data.EmbedDescription)
            .addFields([
                { name: Locale.data.EmbedFields[0], value: owner, inline: true },
                { name: Locale.data.EmbedFields[1], value: Client.ws.ping + 'ms', inline: true },
                { name: Locale.data.EmbedFields[2], value: '[Igpay Atinlay](https://discord.gg/8Nxj2FmRfc)', inline: true },
                { name: Locale.data.EmbedFields[3], value: Client.Commands.size, inline: true },
                { name: Locale.data.EmbedFields[4], value: string, inline: true },
                { name: Locale.data.EmbedFields[5], value: packageJSON.version, inline: true },
                { name: Locale.data.EmbedFields[6], value: `Discord.js (v${packageJSON.dependencies["discord.js"].slice(1)})`, inline: true },
            ])
            .setFooter(Locale.data.EmbedFooter)
            .setColor(Guild.Settings.EmbedColour)
            .setThumbnail(Client.user.avatarURL())
        try {
            message.channel.send(embed)
        } catch (e) {
            console.log(e)
        }
    }
}
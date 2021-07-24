const { inspect } = require("util")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'Eval',
    description: 'Developer Command',
    category: 'Utilities',
    aliases: ['ev'],
    cooldown: 0,
    run: async (Client, message, args, Guild, Locale) => {
        if (!message.author.id === "283312969931292672") return;
        const command = args.slice(0).join(" ")
        if (!command) return message.channel.send(Locale.arguments.MissingArgs)
        try {
            const evaled = await eval(command)
            let embed = new MessageEmbed()
                .setColor(Guild.Settings.EmbedColour)
                .setAuthor(Locale.data.EmbedTitle, message.author.avatarURL())
                .addField(Locale.data.EmbedInput, `\`\`\`${command}\`\`\``)
                .addField(Locale.data.EmbedOutput, `\`\`\`js\n${inspect(evaled, { depth: 0 })}\`\`\``)
            message.channel.send(embed).catch((err) => {
                let embed = new MessageEmbed()
                    .setAuthor(Locale.data.EmbedErrorTitle, message.author.avatarURL())
                    .addField(Locale.data.EmbedErrorField, `\`\`\`${err}\`\`\``)
                    .setColor("#FF0000")
                message.channel.send(embed)
            })
        } catch (err) {
            let embed = new MessageEmbed()
                .setAuthor(Locale.data.EmbedErrorTitle, message.author.avatarURL())
                .addField(Locale.data.EmbedErrorField, `\`\`\`${err}\`\`\``)
                .setColor("#FF0000")
            message.channel.send(embed).catch(() => { })
        }
    }
}
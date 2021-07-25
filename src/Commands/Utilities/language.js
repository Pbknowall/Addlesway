const { MessageEmbed } = require("discord.js")
const newLocaleFile = require('../../Locales/Utilities/LanguageLocales.js')
const languages = {
    "English": "en_IE",
    "Português": "pt_PT",
    "Español": "es_ES",
    "Français": "fr_FR",
    "Igpay Atinlay": "ia_IA"
}
const english = ["english", "inglês", "inglés", "anglais", "englishway"]
const portuguese = ["portuguese", "português", "portugués", "portugais", "ortuguesepay"]
const spanish = ["spanish", "espanhol", "español", "espagnol", "panishsay"]
const french = ["french", "francês", "francés", "français", "renchfay"]
const piglatin = ["piglatin", "pig latin", "igpayatinlay", "igpay atinlay", "latim de porco", "latimdeporco", "latín de cerdo", "latíndecerdo", "latin de cochon", "latindecochon"]

module.exports = {
    name: 'Language',
    description: 'Developer Command',
    category: 'Utilities',
    aliases: ['lang'],
    cooldown: 0,
    run: async (Client, message, args, Guild, Locale) => {
        if (!args.length) {
            let embed = new MessageEmbed()
            .setTitle()
        }
        let input = args.join(' ').toLowerCase()
        let language;
        if (english.includes(input)) language = "English"
        else if (portuguese.includes(input)) language = "Português"
        else if (spanish.includes(input)) language = "Español"
        else if (french.includes(input)) language = "Français"
        else if (piglatin.includes(input)) language = "Igpay Atinlay"

        if (language) {
            let newLocale = languages[language]
            await Client.Guild.Update(message.guild.id, 'Settings.Locale', newLocale)
            let newLocaleData = newLocaleFile[newLocale]
            let successEmbed = new MessageEmbed()
                .setTitle(newLocaleData.Embeds[0].Title)
                .setDescription(`${newLocaleData.Embeds[0].Description} ${language}.`)
                .setColor('#00FF00')
                .setThumbnail(message.guild.iconURL())
            try {
                message.channel.send(successEmbed)
            } catch (err) {
                console.log(err)
            }
        } else {
            let usageEmbed = new MessageEmbed()
                .setTitle(Locale.Embeds[1].Title)
                .setDescription(Locale.Embeds[1].Description)
                .setFooter(Locale.Embeds[1].Footer.replace(/{prefix}/g, Guild.Settings.Prefix))
                .setColor(Guild.Settings.EmbedColour)
                .setTimestamp()
                .setThumbnail(message.guild.iconURL())
            try {
                message.channel.send(usageEmbed)
            } catch (err) {
                console.log(err)
            }

        }
    }
}
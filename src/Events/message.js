class Message {
    constructor() {
        this.name = 'message'
    }
    async run(message) {
        if (message.author.bot || message.channel.type === 'dm') return;
        let Guild = await this.Client.Guild.Get(message.guild.id)
        let Locale = require('./../Locales/' + (Guild.Settings.Locale || 'en-IE') + '.js')
        let prefix = message.content.match(new RegExp(`^<@!?${this.Client.user.id}> `)) ? message.content.match(new RegExp(`^<@!?${this.Client.user.id}> `))[0] : Guild.Settings.Prefix;
        if (!message.content.startsWith(prefix) || !prefix) return;
        let args = message.content.slice(prefix.length).trim().split(/ +/);
        let cmd = args.shift().toLowerCase();

        let command = this.Client.Commands.get(cmd) || this.Client.Aliases.get(cmd)
        cmd = command
        if (!cmd) return;
        if (Guild.DisabledCommands.filter(c => c.name === cmd.name).length && message.author.id !== '283312969931292672') return;
        if (Guild.DisabledCategories.filter(c => c.name === cmd.category).length && message.author.id !== '283312969931292672') return;
        //cooldown isn't implemented, ik
        try {
            if(Locale.Commands[cmd.name]) Locale = Locale.Commands[cmd.name]
            cmd.run(message.client, message, args, Guild, Locale)
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = Message
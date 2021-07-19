class Message {
    constructor() {
        this.name = 'message'
    }
    async run(message) {
        if (message.author.bot || message.channel.type === 'dm') return;
        let prefix = message.content.match(new RegExp(`^<@!?${this.Client.user.id}> `)) ? message.content.match(new RegExp(`^<@!?${this.Client.user.id}> `))[0] : 'a!'
        if (!message.content.startsWith(prefix) || !prefix) return;
        let args = message.content.slice(prefix.length).trim().split(/ +/);
        let cmd = args.shift().toLowerCase();

        let command = this.Client.Commands.get(cmd) || this.Client.Aliases.get(cmd)
        cmd = command
        if (!cmd) return;

        try {
            if (cmd.cooldown) {
                let cmdCooldown = this.Client.Cooldown.get(cmd.name)
                if (cmdCooldown.ids.includes(message.author.id)) {
                    return message.channel.send('Ou\'reyay endingsay essagesmay ootay astfay!')
                } else {
                    cmdCooldown.ids.push(message.author.id)
                }

                setTimeout(() => {
                    let index = cmdCooldown.ids.indexOf(message.author.id)
                    cmdCooldown.ids.splice(index, 1)
                }, cmdCooldown.cooldown)
            }
            cmd.run(message.client, message, args)
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = Message
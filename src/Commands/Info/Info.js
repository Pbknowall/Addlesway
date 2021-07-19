module.exports = {
    name: 'info',
    description: 'Shows info',
    aliases: ['i'],
    cooldown: 10,
    run: (Client, message, args, config) => {
        message.channel.send('Ellohay erethey!')
    }
}
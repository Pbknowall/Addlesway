const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const vowels = ['a', 'e', 'i', 'o', 'u']
const digraphs = ['sh', 'ch', 'th', 'wh', 'ph']

module.exports = {
    name: 'translate',
    description: 'Shows info',
    aliases: ['t', 'igpay', 'igpayatinlay', 'atinlay'],
    cooldown: 1,
    run: (Client, message, args, config) => {

        function translate(array) {
            let result = [];
            for (let word of array) {
                if (digraphs.some(digraph => word.startsWith(digraph))) {
                    let digraph = word.substring(0, 2)
                    let upperCase;
                    if (word.charAt(0).toUpperCase() === word.charAt(0)) upperCase = true;
                    word = word.substring(2)
                    if (upperCase === true) word = word.charAt(0).toUpperCase() + word.substring(1)
                    word = word + digraph.toLowerCase() + 'ay'
                    result.push(word)
                }
                else if (vowels.some(vowel => word.startsWith(vowel))) {
                    word = word + 'way'
                    result.push(word)
                }
                else {
                    let firstLetter = word.charAt(0)
                    let upperCase;
                    if (word.charAt(0).toUpperCase() === word.charAt(0)) upperCase = true;
                    word = word.substring(1)
                    if (upperCase === true) word = word.charAt(0).toUpperCase() + word.substring(1)
                    word = word + firstLetter.toLowerCase() + 'ay'
                    result.push(word)
                }
            }
            return result
        }

        let result = translate(args)
        let output = result.join(' ')
        message.channel.send(output)
    }
}
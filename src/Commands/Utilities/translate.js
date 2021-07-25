const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const vowels = ['a', 'e', 'i', 'o', 'u']
const digraphs = ['sh', 'ch', 'th', 'wh', 'ph']

module.exports = {
    name: 'Translate',
    description: 'Shows info',
    category: 'Utilities',
    aliases: ['t', 'igpay', 'igpayatinlay', 'atinlay'],
    cooldown: 1,
    run: (Client, message, args, Guild, Locale) => {

        function englishTranslate(array) {
            let output = [];
            for (let word of array) {
                if (digraphs.some(digraph => word.toLowerCase().startsWith(digraph))) {
                    let digraph = word.substring(0, 2)
                    let upperCase;
                    if (word.charAt(0).toUpperCase() === word.charAt(0)) upperCase = true;
                    word = word.substring(2)
                    if (upperCase === true) word = word.charAt(0).toUpperCase() + word.substring(1)
                    word = word + digraph.toLowerCase() + 'ay'
                    output.push(word)
                }
                else if (vowels.some(vowel => word.toLowerCase().startsWith(vowel))) {
                    word = word + 'way'
                    output.push(word)
                }
                else {
                    let firstLetter = word.charAt(0)
                    let upperCase;
                    if (word.charAt(0).toUpperCase() === word.charAt(0)) upperCase = true;
                    word = word.substring(1)
                    if (upperCase === true) word = word.charAt(0).toUpperCase() + word.substring(1)
                    word = word + firstLetter.toLowerCase() + 'ay'
                    output.push(word)
                }
                continue
            }
            return output
        }

        function pigLatinTranslate(array) {
            let output = []
            for (let word of array) {
                let ending = word.substring(word.length - 4)
                let start;
                if (digraphs.some(d => ending.toLowerCase().includes(d))) {
                    start = ending.substring(0, 2)
                } else {
                    start = ending.charAt(1)
                }
                word.replace(`${ending}ay`, '')
                let rawEnding = `${start}ay`
                output.push(start + word.substring(0, word.length - rawEnding.length))
            }
            return output;
        }
        if (!args.length) return message.channel.send(Locale.arguments.MissingArgs)
        let sourceIsPiglatin = false;
        if (args.filter(arg => arg.endsWith('ay')).length >= (args.length / 2)) sourceIsPiglatin = true;
        if (!sourceIsPiglatin) {
            let translated = englishTranslate(args)
            message.channel.send(translated.join(' '))
        } else {
            let translated = pigLatinTranslate(args)
            message.channel.send(translated.join(' '))
        }
    }
}
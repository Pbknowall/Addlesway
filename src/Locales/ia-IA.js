module.exports = {
    Events: {
        Message: {
            "OnCooldown": "Ou'reyay endingsay essagesmay ootay astfay!"
        }
    },
    Commands: {
        Translate: {
            name: "ranslatetay",
            description: "Ranslatetay exttay otay Igpay Atinlay orway icevay-ersavay",
            aliases: ["t", "tr", "igpay", "igpayatinlay", "atinlay"],
            usage: "{prefix}tr <exttay>",
            category: "Utilities",
            arguments: {
                MissingArgs: "`Issingmay Argumentway:` Exttay otay Ranslatetay"
            }
        },
        Eval: {
            name: "Evalway",
            description: "Eveloperday Ommandcay",
            aliases: ["ev"],
            usage: "{prefix}ev <odecay>",
            category: "Utilities",
            arguments: {
                MissingArgs: "`Issingmay Argumentway:` Odecay otay Valuateeay"
            },
            data: {
                EmbedTitle: "Evaluationway",
                EmbedInput: "Inputway",
                EmbedOutput: "Outputway",
                EmbedErrorTitle: "Evaluationway Errorway",
                EmbedErrorField: "Errorway"
            }
        }
    }
}
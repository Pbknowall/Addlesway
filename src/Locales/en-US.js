module.exports = {
    Events: {
        Message: {
            "OnCooldown": "You're sending messages too fast!"
        }
    },
    Commands: {
        Translate: {
            name: "translate",
            description: "Translate text to Pig Latin or vice-versa.",
            aliases: ["t", "tr", "igpay", "igpayatinlay", "atinlay"],
            usage: "{prefix}tr <text>",
            category: "Utilities",
            arguments: {
                MissingArgs: "`Missing Argument:` Text to Translate"
            }
        },
        Eval: {
            name: "Eval",
            description: "Developer Command",
            aliases: ["ev"],
            usage: "{prefix}ev <code>",
            category: "Utilities",
            arguments: {
                MissingArgs: "`Missing Argument:` Code to Evaluate"
            },
            data: {
                EmbedTitle: "Evaluation",
                EmbedInput: "Input",
                EmbedOutput: "Output",
                EmbedErrorTitle: "Evaluation Error",
                EmbedErrorField: "Error"
            }
        }
    }
}
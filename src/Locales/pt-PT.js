module.exports = {
    Events: {
        Message: {
            "OnCooldown": "Estás a enviar mensagens muito rapidamente!"
        }
    },
    Commands: {
        Translate: {
            name: "traduzir",
            description: "Traduzir texto para Latim de Porco ou vice-versa.",
            aliases: ["t", "tr", "igpay", "igpayatinlay", "atinlay"],
            usage: "{prefix}tr <texto>",
            category: "Utilities",
            arguments: {
                MissingArgs: "`Argumento em Falta:` Texto para Traduzir"
            }
        },
        Eval: {
            name: "Eval",
            description: "Comando do Desenvolvedor",
            aliases: ["ev"],
            usage: "{prefix}ev <código>",
            category: "Utilities",
            arguments: {
                MissingArgs: "`Argumento em Falta:` Código para Avaliar"
            },
            data: {
                EmbedTitle: "Avaliação",
                EmbedInput: "Entrada",
                EmbedOutput: "Saída",
                EmbedErrorTitle: "Erro de Avaliação",
                EmbedErrorField: "Erro"
            }
        }
    }
}
module.exports = {
    name: "Eval",
    description: "Developer Command.",
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
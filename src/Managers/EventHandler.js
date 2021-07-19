const fs = require('fs')

class EventHandler {
    constructor(Client) {
        this.Client = Client;
        this.Events();
    }

    Events() {
        fs.readdir('./src/Events/', (err, files) => {
            if (err) {
                console.log(err);
            } else {
                files.forEach(file => {
                    let event = new (require(`../Events/${file}`));
                    Object.defineProperty(this, file.replace('.js', ''), { value: event });
                    this.Client.on(event.name, event.run.bind(this));
                })
            }
        })
    }
}

module.exports = EventHandler;
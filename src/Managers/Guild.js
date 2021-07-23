const GuildDef = require('./Defaults');

class Guild {
    constructor(Mongoose) {
        Object.defineProperty(this, 'Mongoose', { value: Mongoose })
        this.Model = Mongoose.model('Guild', {
            id: String,
            name: String,
            DisabledCategories: Array,
            DisabledCommands: Array,
            Settings: Object
        })
    }

    async Create(options) {
        if (typeof (options) !== 'object') throw new Error('Invalid Options Passed')
        let defaultOptions = Object.assign({ _id: this.Mongoose.Types.ObjectId() }, GuildDef.Default);
        let merge = Object.assign(defaultOptions, options)
        let create = new this.Model(merge)
        return await new Promise(resolve => {
            create.save((err, res) => {
                if (err) throw err
                else resolve(res)
            })
        })
    }

    async Get(id) {
        if (!id || typeof id !== 'string') throw new Error('Invalid ID Passed');
        let doc = await new Promise((resolve) => {
            this.Model.findOne({ id: id }, (err, object) => {
                if (err) throw err
                resolve(object)
            })
        })
        return doc ? doc : false;
    }

    async Delete(id) {
        return await new Promise((resolve) => {
            this.Model.findOneAndDelete({ id: id }, (err, res) => {
                if (err) throw err;
                else resolve(res);
            })
        })
    }

    async Update(id, path, value) {
        let up = new Object();
        up[path] = value;
        return await new Promise((resolve) => {
            this.Model.updateOne({ id: id }, { $set: up }, (err, res) => {
                if (err) throw err;
                else resolve(res);
            })
        })
    }

    async Push(id, path, value) {
        let up = new Object();
        up[path] = value;
        return await new Promise((resolve) => {
            this.Model.updateOne({ id: id }, { $push: up }, (err, res) => {
                if (err) throw err;
                else resolve(res);
            })
        })
    }
}

module.exports = Guild
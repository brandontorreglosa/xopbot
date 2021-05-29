const mongoose = require("mongoose");
const { Client, Collection } = require("discord.js");
class reconDB {
    /**
     * @name reconDB
     * @kind constructor
     * @param {Client} client DIscord.JS Client
     * @param {Object} options options
     * @param {String} [options.uri] mongodb connection string (required)
     * @description Estabilishing an connection
     */
    constructor(client, options) {
        this.client = client;
        if (mongoose.connection.readyState !== 1) {
            if (!options.uri)
                throw new Error(
                    "There is no established  connection with mongoose and a mongoose connection is required!"
                );
            mongoose.connect(options.uri, {
                useUnifiedTopology: true,
            });
        }
        this.model = require(require("path").join(__dirname, "schema.js"));
        this.dbCollection = new Collection();
        this.client.on("ready", () => this.ready());
    }
    ready() {
        this.model.find().then((data) => {
            data.forEach((value) => {
                this.dbCollection.set(value.key, value.value);
            });
        });
    }
    /**
     * @method
     * @param {String} [key] The key, so you can get it with <MongoClient>.get("key")
     * @param {*} [value] The value which will be saved to the key
     * @example
     * <reconDB>.set("test","js is cool")
     */
    async set(key, value) {
        if (!key) throw new TypeError(`recon.db => Please specify a "key"`);
        if (!value) throw new TypeError(`recon.db => Please specify a "value"`);
        this.model.findOne({ key: key }, async (err, data) => {
            if (err) throw err;
            if (data) {
                data.value = value;
                data.save();
            } else {
                data = new this.model({ key: key, value: value });
                data.save();
            }
            this.dbCollection.set(key, value);
        });
    }
    /**
     * @method
     * @param {String} key The key you wish to get, and returns value
     * @example
     * <reconDB>.get("test") //Will return "js is cool" (if you have set it)
     */
    async get(key) {
        if (!key) throw new TypeError(`recon.db => Please specify a "key"`);
        return this.dbCollection.get(key);
    }
    /**
     * @method
     * @param {String} key The key you wish to check, returns boolean
     * @example
     * <reconDB>.has("test") // will return true if there is a key
     */
    async has(key) {
        if (!key) throw new TypeError(`recon.db => Please specify a "key"`);
        return !!(await this.get(key));
    }

    /**
     * @method
     * @param {String} key They key you wish to delete
     * @example
     * <reconDB>.delete("test")
     */

    async delete(key) {
        if (!key) throw new TypeError(`recon.db => Please specify a "key"`);
        this.model.findOne({ key: key }, async (err, data) => {
            if (err) throw err;
            if (data) {
                this.model
                    .findOneAndDelete({ key: key })
                    .catch((err) => console.log(err));
            } else {
                throw new TypeError(`recon.db => Data does not exist`);
            }
        });
        this.dbCollection.delete(key);
    }

    async collection() {
        return this.dbCollection;
    }
}
module.exports = reconDB;

import { Client, Collection } from 'discord.js';
import { readdirSync } from "fs";
import { path } from "path";
import { connect } from "mongoose";
import { Command } from "../COMMAND/COMMANDS";
import { Event } from "../EVENTS/MESSAGE";
import { Config } from "../config";
import ConfigJson from "../../config.json";

class ExtendedClient extends Client {
    public commands: Collection<string, Command> = new Collection();
    public events: Collection<string, Event> = new Collection();
    public config: Config = ConfigJson;
    public aliases: Collection<string, Command> = new Collection();

    public async init() {
        this.login(this.config.X_Token);
        connect(this.config.X_MongodbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
        })
    }
}

export default ExtendedClient;
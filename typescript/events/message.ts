import Client from "../client";
import { ClientEvents } from "discord.js";

interface Run {
    (client: Client, ...args: any[])
};

export interface Event {
    name: keyof ClientEvents;
    run: Run;
}
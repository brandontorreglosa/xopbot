import Client from "../client";
import { Message } from "discord.js";

interface Run {
    (client: Client, message: Message, args: string[0])
};

export interface Command {
    name: string;
    description?: string;
    aliases?: string[];
    run: Run;
};
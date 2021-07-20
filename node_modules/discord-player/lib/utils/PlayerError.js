"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerError = void 0;
class PlayerError extends Error {
    constructor(msg, name) {
        super();
        this.name = name !== null && name !== void 0 ? name : 'PlayerError';
        this.message = msg;
        Error.captureStackTrace(this);
    }
}
exports.default = PlayerError;
exports.PlayerError = PlayerError;

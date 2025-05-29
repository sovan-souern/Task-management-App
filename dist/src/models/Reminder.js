"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reminder = void 0;
class Reminder {
    constructor(id, time, message, sendTo) {
        this.id = id;
        this.time = time;
        this.message = message;
        this.sendTo = sendTo;
        console.log(`Reminder ${this.id} set for ${this.sendTo.getName()} at ${this.time.toISOString()}: ${this.message}`);
    }
}
exports.Reminder = Reminder;

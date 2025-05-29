"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
class Notification {
    constructor(id, message, user) {
        this.id = id;
        this.message = message;
        this.isRead = false;
        this.sendTo = user;
        console.log(`Notification ${this.id} created for ${user.getName()}: ${this.message}`);
    }
    send() {
        this.isRead = false;
        console.log(`Notification ${this.id} sent to ${this.sendTo.getName()}`);
    }
}
exports.Notification = Notification;

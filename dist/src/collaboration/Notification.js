"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
class Notification {
    constructor(id, message) {
        this.id = id;
        this.message = message;
        this.isRead = false;
    }
    send() {
        console.log(`Notification sent: ${this.message}`);
    }
}
exports.Notification = Notification;
//# sourceMappingURL=Notification.js.map
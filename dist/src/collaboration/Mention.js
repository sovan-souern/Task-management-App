"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mention = void 0;
class Mention {
    constructor(id, mentionedUser) {
        this.id = id;
        this.mentionedUser = mentionedUser;
        this.createdAt = new Date();
        this.isRead = false;
    }
    method(type) {
        // Generic method as shown in UML
        return type;
    }
}
exports.Mention = Mention;
//# sourceMappingURL=Mention.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
class Comment {
    constructor(id, content, author) {
        this.id = id;
        this.content = content;
        this.author = author;
        this.createdAt = new Date();
    }
}
exports.Comment = Comment;
//# sourceMappingURL=Comment.js.map
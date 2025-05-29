"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
class Comment {
    constructor(id, content, author, createdAt) {
        this.id = id;
        this.content = content;
        this.author = author;
        this.createdAt = createdAt;
        console.log(`Comment ${this.id} created by ${this.author.getName()} at ${this.createdAt.toISOString()}: ${this.content}`);
    }
}
exports.Comment = Comment;

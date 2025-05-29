import { User } from "./User";

export class Comment {
    private id: string;
    private content: string;
    private author: User;
    private createdAt: Date;

    constructor(id: string, content: string, author: User, createdAt: Date) {
        this.id = id;
        this.content = content;
        this.author = author;
        this.createdAt = createdAt;
        console.log(`Comment ${this.id} created by ${this.author.getName()} at ${this.createdAt.toISOString()}: ${this.content}`);
    }
}
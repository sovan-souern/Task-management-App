import { User } from "./User";

export class Notification {
    private id: string;
    private message: string;
    private isRead: boolean;
    private sendTo: User;

    constructor(id: string, message: string, user: User) {
        this.id = id;
        this.message = message;
        this.isRead = false;
        this.sendTo = user;
        console.log(`Notification ${this.id} created for ${user.getName()}: ${this.message}`);
    }

    public send(): void {
        this.isRead = false;
        console.log(`Notification ${this.id} sent to ${this.sendTo.getName()}`);
    }
}
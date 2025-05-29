import { User } from "./User";

export class Reminder {
    private id: string;
    private time: Date;
    private message: string;
    private sendTo: User;

    constructor(id: string, time: Date, message: string, sendTo: User) {
        this.id = id;
        this.time = time;
        this.message = message;
        this.sendTo = sendTo;
        console.log(`Reminder ${this.id} set for ${this.sendTo.getName()} at ${this.time.toISOString()}: ${this.message}`);
    }
}
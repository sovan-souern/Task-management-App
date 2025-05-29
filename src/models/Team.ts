import { User } from "./User";
import { Task } from "./Task";

export class Team {
    private id: string;
    private name: string;
    private members: User[] = [];
    private tasks: Task[] = [];

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        console.log(`Team ${this.name} (ID: ${this.id}) created`);
    }

    public addMember(user: User): void {
        this.members.push(user);
        console.log(`User ${user.getName()} added to team ${this.name}`);
    }

    public assignTask(task: Task): void {
        this.tasks.push(task);
        console.log(`Task ${task['title']} assigned to team ${this.name}`);
    }

    public getMemberCount(): number {
        const count = this.members.length;
        console.log(`Team ${this.name} has ${count} members`);
        return count;
    }
}
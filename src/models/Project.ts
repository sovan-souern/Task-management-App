import { Task } from "./Task";
import { User } from "./User";

export class Project {
    private id: string;
    private title: string;
    private description: string;
    private tasks: Task[] = [];
    private members: User[] = [];
    private status: string = "Active";

    constructor(id: string, title: string, description: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        console.log(`Project ${this.title} (ID: ${this.id}) created with description: ${this.description}`);
    }

    public addTask(task: Task): void {
        this.tasks.push(task);
        console.log(`Task ${task['title']} added to project ${this.title}`);
    }

    public shareWithUser(user: User): void {
        this.members.push(user);
        console.log(`User ${user.getName()} added to project ${this.title} members`);
    }

    public getProjectStatus(): string {
        const completedTasks = this.tasks.filter(t => t['status'] === "Complete").length;
        const totalTasks = this.tasks.length;
        const status = totalTasks === 0 ? "No tasks" : (completedTasks === totalTasks ? "Completed" : "In Progress");
        console.log(`Project ${this.title} status: ${status} (${completedTasks}/${totalTasks} tasks completed)`);
        return status;
    }
}
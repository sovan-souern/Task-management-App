import { FileType } from "../enums/FileType";
import { Task } from "./Task";

export class Report {
    private startDate: Date;
    private endDate: Date;
    private tasksCompleted: number;
    private tasksMissed: number;
    private tasksDelayed: Task[];

    constructor() {
        this.startDate = new Date();
        this.endDate = new Date();
        this.tasksCompleted = 0;
        this.tasksMissed = 0;
        this.tasksDelayed = [];
        console.log(`Report initialized: Start=${this.startDate.toISOString()}, End=${this.endDate.toISOString()}`);
    }

    public exportFile(): FileType {
        console.log(`Report exported as ${FileType.Document}`);
        return FileType.Document;
    }

    public addDelayedTask(task: Task): void {
        this.tasksDelayed.push(task);
        console.log(`Delayed task ${task['title']} added to report`);
    }
}
import { TaskStatus } from "../enums/TaskStatus";
import { User } from "./User";
import { Label } from "./Label";
import { Comment } from "./Comment";
import { Attachment } from "./Attachment";
import { Reminder } from "./Reminder";

export class Task {
    private id: string;
    private title: string;
    private description: string;
    private dueDate: Date;
    private priority: Date;
    private status: TaskStatus;
    private isRecurring: boolean;
    private assignedUsers: User[] = [];
    private labels: Label[] = [];
    private comments: Comment[] = [];
    private attachments: Attachment[] = [];
    private reminders: Reminder[] = [];

    constructor(id: string, title: string, description: string, dueDate: Date, priority: Date, status: TaskStatus, isRecurring: boolean = false) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.isRecurring = isRecurring;
        console.log(`Task ${this.title} (ID: ${this.id}) created with due date: ${this.dueDate.toISOString()}`);
    }

    public setPriority(newPriority: Date): void {
        this.priority = newPriority;
        console.log(`Priority updated for task ${this.title} to ${this.priority.toISOString()}`);
    }

    public assignTo(user: User): void {
        this.assignedUsers.push(user);
        console.log(`User ${user.getName()} assigned to task ${this.title}`);
    }

    public addComment(comment: Comment): void {
        this.comments.push(comment);
        console.log(`Comment added to task ${this.title} by ${comment['author'].getName()}`);
    }

    public uploadAttachment(attachment: Attachment): void {
        this.attachments.push(attachment);
        console.log(`Attachment ${attachment['filename']} uploaded to task ${this.title}`);
    }

    public addLabel(label: Label): void {
        this.labels.push(label);
        console.log(`Label ${label['name']} added to task ${this.title}`);
    }

    public setReminder(reminder: Reminder): void {
        this.reminders.push(reminder);
        console.log(`Reminder set for task ${this.title} at ${reminder['time'].toISOString()}`);
    }

    public markComplete(): void {
        this.status = TaskStatus.Complete;
        console.log(`Task ${this.title} marked as complete`);
    }

    public getProgress(): string {
        const progress = this.status === TaskStatus.Complete ? "100%" : (this.status === TaskStatus.In_progress ? "50%" : "0%");
        console.log(`Task ${this.title} progress: ${progress}`);
        return progress;
    }
}
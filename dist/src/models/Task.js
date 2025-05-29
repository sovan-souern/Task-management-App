"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const TaskStatus_1 = require("../enums/TaskStatus");
class Task {
    constructor(id, title, description, dueDate, priority, status, isRecurring = false) {
        this.assignedUsers = [];
        this.labels = [];
        this.comments = [];
        this.attachments = [];
        this.reminders = [];
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.isRecurring = isRecurring;
        console.log(`Task ${this.title} (ID: ${this.id}) created with due date: ${this.dueDate.toISOString()}`);
    }
    setPriority(newPriority) {
        this.priority = newPriority;
        console.log(`Priority updated for task ${this.title} to ${this.priority.toISOString()}`);
    }
    assignTo(user) {
        this.assignedUsers.push(user);
        console.log(`User ${user.getName()} assigned to task ${this.title}`);
    }
    addComment(comment) {
        this.comments.push(comment);
        console.log(`Comment added to task ${this.title} by ${comment['author'].getName()}`);
    }
    uploadAttachment(attachment) {
        this.attachments.push(attachment);
        console.log(`Attachment ${attachment['filename']} uploaded to task ${this.title}`);
    }
    addLabel(label) {
        this.labels.push(label);
        console.log(`Label ${label['name']} added to task ${this.title}`);
    }
    setReminder(reminder) {
        this.reminders.push(reminder);
        console.log(`Reminder set for task ${this.title} at ${reminder['time'].toISOString()}`);
    }
    markComplete() {
        this.status = TaskStatus_1.TaskStatus.Complete;
        console.log(`Task ${this.title} marked as complete`);
    }
    getProgress() {
        const progress = this.status === TaskStatus_1.TaskStatus.Complete ? "100%" : (this.status === TaskStatus_1.TaskStatus.In_progress ? "50%" : "0%");
        console.log(`Task ${this.title} progress: ${progress}`);
        return progress;
    }
}
exports.Task = Task;

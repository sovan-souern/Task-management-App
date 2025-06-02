"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const Status_1 = require("../enum/Status");
class Task {
    constructor(id, title, description, dueDate, priority) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = Status_1.TaskStatus.TODO;
        this.isRecurring = false;
        this.recurrencePattern = "";
        this.assignedUsers = [];
        this.labels = [];
        this.comments = [];
        this.attachments = [];
        this.reminders = [];
        this.subtasks = [];
    }
    setPriority(priority) {
        this.priority = priority;
    }
    assignToUser(user) {
        if (!this.assignedUsers.find((u) => u.id === user.id)) {
            this.assignedUsers.push(user);
        }
    }
    addComment(comment) {
        this.comments.push(comment);
    }
    uploadAttachment(file) {
        // Implementation for file upload
        console.log(`File ${file.name} uploaded to task ${this.id}`);
    }
    addLabel(label) {
        if (!this.labels.find((l) => l.id === label.id)) {
            this.labels.push(label);
        }
    }
    setReminder(reminder) {
        this.reminders.push(reminder);
    }
    addSubtask(subtask) {
        this.subtasks.push(subtask);
    }
    markCompleted() {
        this.status = Status_1.TaskStatus.COMPLETED;
    }
    isOverdue() {
        return new Date() > this.dueDate && this.status !== Status_1.TaskStatus.COMPLETED;
    }
}
exports.Task = Task;
//# sourceMappingURL=Task.js.map
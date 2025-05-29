"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Report = void 0;
const FileType_1 = require("../enums/FileType");
class Report {
    constructor() {
        this.startDate = new Date();
        this.endDate = new Date();
        this.tasksCompleted = 0;
        this.tasksMissed = 0;
        this.tasksDelayed = [];
        console.log(`Report initialized: Start=${this.startDate.toISOString()}, End=${this.endDate.toISOString()}`);
    }
    exportFile() {
        console.log(`Report exported as ${FileType_1.FileType.Document}`);
        return FileType_1.FileType.Document;
    }
    addDelayedTask(task) {
        this.tasksDelayed.push(task);
        console.log(`Delayed task ${task['title']} added to report`);
    }
}
exports.Report = Report;

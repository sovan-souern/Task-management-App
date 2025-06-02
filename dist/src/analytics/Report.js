"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Report = void 0;
class Report {
    constructor(startDate, endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.tasksCompleted = 0;
        this.tasksMissed = 0;
        this.tasksDelegated = 0;
    }
    generateReport(tasks) {
        const filteredTasks = tasks.filter((task) => task.dueDate >= this.startDate && task.dueDate <= this.endDate);
        this.tasksCompleted = filteredTasks.filter((task) => task.status === "Completed").length;
        this.tasksMissed = filteredTasks.filter((task) => task.isOverdue() && task.status !== "Completed").length;
        this.tasksDelegated = filteredTasks.filter((task) => task.assignedUsers.length > 0).length;
    }
    export() {
        const reportData = {
            period: `${this.startDate.toDateString()} - ${this.endDate.toDateString()}`,
            tasksCompleted: this.tasksCompleted,
            tasksMissed: this.tasksMissed,
            tasksDelegated: this.tasksDelegated,
            generatedAt: new Date().toISOString(),
        };
        const blob = new Blob([JSON.stringify(reportData, null, 2)], {
            type: "application/json",
        });
        return new File([blob], `report-${Date.now()}.json`, {
            type: "application/json",
        });
    }
}
exports.Report = Report;
//# sourceMappingURL=Report.js.map
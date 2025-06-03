"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dashboard = void 0;
class Dashboard {
    constructor() {
        this.tasksCompleted = 0;
        this.tasksPending = 0;
        this.overdueTasks = [];
    }
    getProgressChart() {
        const total = this.tasksCompleted + this.tasksPending;
        if (total === 0)
            return "No tasks available";
        const percentage = Math.round((this.tasksCompleted / total) * 100);
        return "Progress: " + percentage + "% (" + this.tasksCompleted + "/" + total + " tasks completed)";
    }
    updateStats(tasks) {
        this.tasksCompleted = tasks.filter((task) => task.status === "Completed").length;
        this.tasksPending = tasks.filter((task) => task.status !== "Completed").length;
        this.overdueTasks = tasks.filter((task) => task.isOverdue());
    }
}
exports.Dashboard = Dashboard;
//# sourceMappingURL=Dashboard.js.map
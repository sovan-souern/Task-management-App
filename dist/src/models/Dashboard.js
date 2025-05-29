"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dashboard = void 0;
class Dashboard {
    constructor() {
        this.tasksCompleted = 0;
        this.tasksPending = 0;
        this.overdueTasks = 0;
        console.log(`Dashboard initialized: ${this.tasksCompleted} completed, ${this.tasksPending} pending, ${this.overdueTasks} overdue`);
    }
    getProgressChart() {
        const chartData = `Chart: Completed=${this.tasksCompleted}, Pending=${this.tasksPending}, Overdue=${this.overdueTasks}`;
        console.log(`Dashboard progress chart: ${chartData}`);
        return chartData;
    }
    updateTaskStatus(completed, pending, overdue) {
        this.tasksCompleted = completed;
        this.tasksPending = pending;
        this.overdueTasks = overdue;
        console.log(`Dashboard updated: ${this.tasksCompleted} completed, ${this.tasksPending} pending, ${this.overdueTasks} overdue`);
    }
}
exports.Dashboard = Dashboard;

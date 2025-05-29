export class Dashboard {
    private tasksCompleted: number;
    private tasksPending: number;
    private overdueTasks: number;

    constructor() {
        this.tasksCompleted = 0;
        this.tasksPending = 0;
        this.overdueTasks = 0;
        console.log(`Dashboard initialized: ${this.tasksCompleted} completed, ${this.tasksPending} pending, ${this.overdueTasks} overdue`);
    }

    public getProgressChart(): string {
        const chartData = `Chart: Completed=${this.tasksCompleted}, Pending=${this.tasksPending}, Overdue=${this.overdueTasks}`;
        console.log(`Dashboard progress chart: ${chartData}`);
        return chartData;
    }

    public updateTaskStatus(completed: number, pending: number, overdue: number): void {
        this.tasksCompleted = completed;
        this.tasksPending = pending;
        this.overdueTasks = overdue;
        console.log(`Dashboard updated: ${this.tasksCompleted} completed, ${this.tasksPending} pending, ${this.overdueTasks} overdue`);
    }
}
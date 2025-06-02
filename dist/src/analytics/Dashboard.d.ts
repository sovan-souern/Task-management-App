import type { Task } from "../project/Task";
export declare class Dashboard {
    tasksCompleted: number;
    tasksPending: number;
    overdueTasks: any[];
    constructor();
    getProgressChart(): string;
    updateStats(tasks: Task[]): void;
}
//# sourceMappingURL=Dashboard.d.ts.map
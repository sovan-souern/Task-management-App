import type { Task } from "../project/Task";
export declare class Report {
    startDate: Date;
    endDate: Date;
    tasksCompleted: number;
    tasksMissed: number;
    tasksDelegated: number;
    constructor(startDate: Date, endDate: Date);
    generateReport(tasks: Task[]): void;
    export(): File;
}
//# sourceMappingURL=Report.d.ts.map
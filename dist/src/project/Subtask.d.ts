import { TaskStatus } from "../enum/Status";
export declare class Subtask {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    dueDate: Date;
    constructor(id: string, title: string, description: string, dueDate: Date);
    markCompleted(): void;
}
//# sourceMappingURL=Subtask.d.ts.map
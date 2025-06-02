import type { Task } from "./Task";
import type { User } from "../core/User";
export declare class Project {
    id: string;
    title: string;
    description: string;
    tasks: Task[];
    member: User[];
    constructor(id: string, title: string, description: string);
    addTask(task: Task): void;
    shareWithUser(user: User): void;
}
//# sourceMappingURL=Project.d.ts.map
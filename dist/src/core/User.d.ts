import { Project } from "../project/Project";
import type { Task } from "../project/Task";
import type { Notification } from "../collaboration/Notification";
import type { Session } from "./Session";
import type { Team } from "./Team";
import { Dashboard } from "../analytics/Dashboard";
import { Report } from "../analytics/Report";
export declare class User {
    id: string;
    name: string;
    email: string;
    password: string;
    projects: Project[];
    assignedTasks: Task[];
    notifications: Notification[];
    sessions: Session[];
    teams: Team[];
    isActive: boolean;
    role: string;
    constructor(id: string, name: string, email: string, password: string, role?: string);
    createProject(): Project;
    assignTask(task: Task): void;
    getDashboard(): Dashboard;
    generateReport(): Report;
}
//# sourceMappingURL=User.d.ts.map
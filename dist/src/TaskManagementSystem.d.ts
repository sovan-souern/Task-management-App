import { User } from "./core/User";
import { Team } from "./core/Team";
import { Task } from "./project/Task";
import { Project } from "./project/Project";
import { Notification } from "./collaboration/Notification";
import type { Priority } from "./enum/Priority";
import { TaskStatus } from "./enum/Status";
import { UserService } from "./services/UserService";
import { AuthService } from "./services/AuthService";
export declare class TaskManagementSystem {
    private users;
    private teams;
    private projects;
    private tasks;
    private notifications;
    private dashboard;
    userService: UserService;
    authService: AuthService;
    constructor();
    createUser(id: string, name: string, email: string, role: string, password?: string): User;
    getUser(id: string): User | undefined;
    createTeam(id: string, name: string): Team;
    getTeam(id: string): Team | undefined;
    getAllTeams(): Team[];
    createProject(id: string, title: string, description: string): Project;
    getProject(id: string): Project | undefined;
    getAllProjects(): Project[];
    createTask(id: string, title: string, description: string, dueDate: Date, priority: Priority, status?: TaskStatus): Task;
    getTask(id: string): Task | undefined;
    getAllTasks(): Task[];
    getTasksByUser(userId: string): Task[];
    getOverdueTasks(): Task[];
    createNotification(id: string, message: string, recipient: string, isRead?: boolean): Notification;
    updateDashboard(tasksComplete: number, tasksPending: number, overdueTasks: any[]): void;
    getFormattedData(): any;
    displayData(): void;
}
//# sourceMappingURL=TaskManagementSystem.d.ts.map
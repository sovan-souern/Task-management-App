import { User } from "../core/User";
import type { Task } from "../project/Task";
export declare class UserService {
    private users;
    createUser(id: string, name: string, email: string, role: string): User;
    getUserById(id: string): User | undefined;
    getUserByEmail(email: string): User | undefined;
    updateUser(id: string, updates: Partial<User>): boolean;
    deleteUser(id: string): boolean;
    getAllUsers(): User[];
    getActiveUsers(): User[];
    getUserTasks(userId: string, tasks: Task[]): Task[];
    notifyUser(userId: string, message: string): void;
}
//# sourceMappingURL=UserService.d.ts.map
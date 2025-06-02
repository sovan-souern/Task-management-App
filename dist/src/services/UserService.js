"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const User_1 = require("../core/User");
const Notification_1 = require("../collaboration/Notification");
class UserService {
    constructor() {
        this.users = new Map();
    }
    createUser(id, name, email, role) {
        const user = new User_1.User(id, name, email, role);
        this.users.set(id, user);
        return user;
    }
    getUserById(id) {
        return this.users.get(id);
    }
    getUserByEmail(email) {
        return Array.from(this.users.values()).find((user) => user.email === email);
    }
    updateUser(id, updates) {
        const user = this.users.get(id);
        if (user) {
            Object.assign(user, updates);
            return true;
        }
        return false;
    }
    deleteUser(id) {
        return this.users.delete(id);
    }
    getAllUsers() {
        return Array.from(this.users.values());
    }
    getActiveUsers() {
        return Array.from(this.users.values()).filter((user) => user.isActive);
    }
    getUserTasks(userId, tasks) {
        return tasks.filter((task) => task.assignedUsers.some((user) => user.id === userId));
    }
    notifyUser(userId, message) {
        const user = this.users.get(userId);
        if (user) {
            const notification = new Notification_1.Notification("notif_" + Date.now(), message);
            notification.send();
        }
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map
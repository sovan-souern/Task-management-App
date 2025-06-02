"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManagementSystem = void 0;
const User_1 = require("./core/User");
const Team_1 = require("./core/Team");
const Task_1 = require("./project/Task");
const Project_1 = require("./project/Project");
const Dashboard_1 = require("./analytics/Dashboard");
const Notification_1 = require("./collaboration/Notification");
const Status_1 = require("./enum/Status");
const UserService_1 = require("./services/UserService");
const AuthService_1 = require("./services/AuthService");
class TaskManagementSystem {
    constructor() {
        this.users = new Map();
        this.teams = new Map();
        this.projects = new Map();
        this.tasks = new Map();
        this.notifications = [];
        this.dashboard = new Dashboard_1.Dashboard();
        this.userService = new UserService_1.UserService();
        this.authService = new AuthService_1.AuthService();
    }
    // User Management
    createUser(id, name, email, role, password = "defaultPassword") {
        const user = new User_1.User(id, name, email, password, role); // <-- Pass role to constructor
        this.users.set(id, user);
        return user;
    }
    getUser(id) {
        return this.users.get(id);
    }
    // Team Management
    createTeam(id, name) {
        const team = new Team_1.Team(id, name);
        this.teams.set(id, team);
        return team;
    }
    getTeam(id) {
        return this.teams.get(id);
    }
    getAllTeams() {
        return Array.from(this.teams.values());
    }
    // Project Management
    createProject(id, title, description) {
        const project = new Project_1.Project(id, title, description);
        this.projects.set(id, project);
        return project;
    }
    getProject(id) {
        return this.projects.get(id);
    }
    getAllProjects() {
        return Array.from(this.projects.values());
    }
    // Task Management
    createTask(id, title, description, dueDate, priority, status = Status_1.TaskStatus.TODO) {
        const task = new Task_1.Task(id, title, description, dueDate, priority);
        task.status = status;
        this.tasks.set(id, task);
        return task;
    }
    getTask(id) {
        return this.tasks.get(id);
    }
    getAllTasks() {
        return Array.from(this.tasks.values());
    }
    getTasksByUser(userId) {
        return Array.from(this.tasks.values()).filter((task) => task.assignedUsers.some((user) => user.id === userId));
    }
    getOverdueTasks() {
        return Array.from(this.tasks.values()).filter((task) => task.isOverdue());
    }
    // Notification Management
    createNotification(id, message, recipient, isRead = false) {
        const notification = new Notification_1.Notification(id, message);
        notification.isRead = isRead;
        notification.recipient = recipient;
        this.notifications.push(notification);
        return notification;
    }
    // Dashboard Management
    updateDashboard(tasksComplete, tasksPending, overdueTasks) {
        this.dashboard.tasksCompleted = tasksComplete;
        this.dashboard.tasksPending = tasksPending;
        this.dashboard.overdueTasks = overdueTasks;
    }
    // Get formatted data structure
    getFormattedData() {
        return {
            users: Array.from(this.users.values()).map((user) => ({
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role || "User",
            })),
            teams: Array.from(this.teams.values()).map((team) => ({
                id: team.id,
                name: team.name,
                members: team.members.map((member) => member.id),
                projects: team.projects.map((project) => project.id),
            })),
            tasks: Array.from(this.tasks.values()).map((task) => ({
                id: task.id,
                title: task.title,
                description: task.description,
                dueDate: task.dueDate,
                priority: task.priority,
                status: task.status,
                assignedUsers: task.assignedUsers.map((user) => user.id),
                labels: task.labels.map((label) => label.name),
                comments: task.comments.map((comment) => ({
                    user: comment.author.id,
                    text: comment.content,
                    date: comment.createdAt,
                })),
            })),
            notifications: this.notifications.map((notification) => ({
                id: notification.id,
                message: notification.message,
                isRead: notification.isRead,
                recipient: notification.recipient,
            })),
            dashboard: {
                tasksComplete: this.dashboard.tasksCompleted,
                tasksPending: this.dashboard.tasksPending,
                overdueTasks: this.dashboard.overdueTasks.map((task) => ({
                    id: task.id,
                    title: task.title,
                    dueDate: task.dueDate,
                })),
            },
        };
    }
    // Display formatted data
    displayData() {
        const data = this.getFormattedData();
        console.log("const taskManagementSystem =", JSON.stringify(data, null, 2));
        console.log("\n" + JSON.stringify(data, null, 2));
    }
}
exports.TaskManagementSystem = TaskManagementSystem;
//# sourceMappingURL=TaskManagementSystem.js.map
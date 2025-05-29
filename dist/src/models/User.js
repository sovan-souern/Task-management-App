"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Notification_1 = require("./Notification");
const Dashboard_1 = require("./Dashboard");
const Report_1 = require("./Report");
class User {
    constructor(id, name, email) {
        this.projects = [];
        this.assignedTasks = [];
        this.notifications = [];
        this.teams = [];
        this.id = id;
        this.name = name;
        this.email = email;
        console.log(`User ${this.name} (ID: ${this.id}) created with email ${this.email}`);
    }
    getId() { return this.id; }
    getName() { return this.name; }
    getEmail() { return this.email; }
    createProject(project) {
        this.projects.push(project);
        console.log(`User ${this.name} created project: ${project['title']}`);
    }
    assignTask(task) {
        this.assignedTasks.push(task);
        console.log(`User ${this.name} assigned task: ${task['title']}`);
    }
    joinTeam(team) {
        this.teams.push(team);
        console.log(`User ${this.name} joined team: ${team['name']}`);
    }
    getTaskCount() {
        const count = this.assignedTasks.length;
        console.log(`User ${this.name} has ${count} assigned tasks`);
        return count;
    }
    getDashboard() {
        const dashboard = new Dashboard_1.Dashboard();
        console.log(`Dashboard generated for ${this.name}`);
        return dashboard;
    }
    generateReport() {
        const report = new Report_1.Report();
        console.log(`Report generated for ${this.name}`);
        return report;
    }
    sendNotification(message) {
        const notification = new Notification_1.Notification(`notif_${Date.now()}`, message, this);
        this.notifications.push(notification);
        console.log(`Notification sent to ${this.name}: ${message}`);
    }
}
exports.User = User;

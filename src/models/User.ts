import { Project } from "./Project";
import { Task } from "./Task";
import { Notification } from "./Notification";
import { Dashboard } from "./Dashboard";
import { Report } from "./Report";
import { Team } from "./Team";

export class User {
    private id: string;
    private name: string;
    private email: string;
    private projects: Project[] = [];
    private assignedTasks: Task[] = [];
    private notifications: Notification[] = [];
    private teams: Team[] = [];

    constructor(id: string, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        console.log(`User ${this.name} (ID: ${this.id}) created with email ${this.email}`);
    }

    public getId(): string { return this.id; }
    public getName(): string { return this.name; }
    public getEmail(): string { return this.email; }

    public createProject(project: Project): void {
        this.projects.push(project);
        console.log(`User ${this.name} created project: ${project['title']}`);
    }

    public assignTask(task: Task): void {
        this.assignedTasks.push(task);
        console.log(`User ${this.name} assigned task: ${task['title']}`);
    }

    public joinTeam(team: Team): void {
        this.teams.push(team);
        console.log(`User ${this.name} joined team: ${team['name']}`);
    }

    public getTaskCount(): number {
        const count = this.assignedTasks.length;
        console.log(`User ${this.name} has ${count} assigned tasks`);
        return count;
    }

    public getDashboard(): Dashboard {
        const dashboard = new Dashboard();
        console.log(`Dashboard generated for ${this.name}`);
        return dashboard;
    }

    public generateReport(): Report {
        const report = new Report();
        console.log(`Report generated for ${this.name}`);
        return report;
    }

    public sendNotification(message: string): void {
        const notification = new Notification(`notif_${Date.now()}`, message, this);
        this.notifications.push(notification);
        console.log(`Notification sent to ${this.name}: ${message}`);
    }
}
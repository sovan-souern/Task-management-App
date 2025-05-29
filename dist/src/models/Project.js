"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
class Project {
    constructor(id, title, description) {
        this.tasks = [];
        this.members = [];
        this.status = "Active";
        this.id = id;
        this.title = title;
        this.description = description;
        console.log(`Project ${this.title} (ID: ${this.id}) created with description: ${this.description}`);
    }
    addTask(task) {
        this.tasks.push(task);
        console.log(`Task ${task['title']} added to project ${this.title}`);
    }
    shareWithUser(user) {
        this.members.push(user);
        console.log(`User ${user.getName()} added to project ${this.title} members`);
    }
    getProjectStatus() {
        const completedTasks = this.tasks.filter(t => t['status'] === "Complete").length;
        const totalTasks = this.tasks.length;
        const status = totalTasks === 0 ? "No tasks" : (completedTasks === totalTasks ? "Completed" : "In Progress");
        console.log(`Project ${this.title} status: ${status} (${completedTasks}/${totalTasks} tasks completed)`);
        return status;
    }
}
exports.Project = Project;

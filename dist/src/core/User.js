"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Project_1 = require("../project/Project");
const Dashboard_1 = require("../analytics/Dashboard");
const Report_1 = require("../analytics/Report");
class User {
    constructor(id, name, email, password, role = "User") {
        this.isActive = true;
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.projects = [];
        this.assignedTasks = [];
        this.notifications = [];
        this.sessions = [];
        this.teams = [];
        this.isActive = true;
        this.role = role; // <-- Add this line
    }
    createProject() {
        const projectId = `project_${Date.now()}`;
        const project = new Project_1.Project(projectId, "", "");
        this.projects.push(project);
        return project;
    }
    assignTask(task) {
        this.assignedTasks.push(task);
    }
    getDashboard() {
        const dashboard = new Dashboard_1.Dashboard();
        dashboard.updateStats(this.assignedTasks);
        return dashboard;
    }
    generateReport() {
        const report = new Report_1.Report(new Date(), new Date());
        report.generateReport(this.assignedTasks);
        return report;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map
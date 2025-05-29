"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./src/models/User");
const Project_1 = require("./src/models/Project");
const Task_1 = require("./src/models/Task");
const TaskStatus_1 = require("./src/enums/TaskStatus");
const FileType_1 = require("./src/enums/FileType");
const Attachment_1 = require("./src/models/Attachment");
const Comment_1 = require("./src/models/Comment");
const Label_1 = require("./src/models/Label");
const Reminder_1 = require("./src/models/Reminder");
const Team_1 = require("./src/models/Team");
// Create users
const user1 = new User_1.User("u1", "John Doe", "john@example.com");
const user2 = new User_1.User("u2", "Jane Smith", "jane@example.com");
// Create a team
const team = new Team_1.Team("t1", "Development Team");
user1.joinTeam(team);
user2.joinTeam(team);
team.getMemberCount();
// Create a project
const project = new Project_1.Project("p1", "Project X", "A sample project");
user1.createProject(project);
project.shareWithUser(user2);
project.getProjectStatus();
// Create tasks
const dueDate = new Date(2025, 4, 30); // May 30, 2025
const priority = new Date(dueDate);
const task1 = new Task_1.Task("t1", "Task 1", "First task", dueDate, priority, TaskStatus_1.TaskStatus.To_do);
const task2 = new Task_1.Task("t2", "Task 2", "Second task", dueDate, priority, TaskStatus_1.TaskStatus.In_progress);
project.addTask(task1);
project.addTask(task2);
team.assignTask(task1);
user1.assignTask(task1);
user2.assignTask(task2);
task1.assignTo(user1);
task2.assignTo(user2);
task1.getProgress();
task2.getProgress();
task2.markComplete();
task2.getProgress();
// Add attachments, comments, labels, and reminders
const attachment = new Attachment_1.Attachment("a1", "design.pdf", FileType_1.FileType.Document, user1, new Date());
task1.uploadAttachment(attachment);
const comment = new Comment_1.Comment("c1", "Great progress!", user1, new Date());
task1.addComment(comment);
const label = new Label_1.Label("l1", "Urgent");
task1.addLabel(label);
const reminder = new Reminder_1.Reminder("r1", new Date(2025, 4, 29), "Deadline tomorrow", user1);
task1.setReminder(reminder);
// Send notifications
user1.sendNotification("Project X update: Task 1 assigned");
user2.sendNotification("Task 2 assigned to you");
// Generate dashboard and report
const dashboard = user1.getDashboard();
dashboard.updateTaskStatus(1, 1, 0);
dashboard.getProgressChart();
const report = user1.generateReport();
report.addDelayedTask(task1);
report.exportFile();
// Final logs
user1.getTaskCount();
project.getProjectStatus();
console.log(`Current Date and Time: ${new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" })}`);
// Pretty print utility for objects (shows class name, fields, and nested structure)
function prettyPrint(obj, indent = 0) {
    const pad = (n) => " ".repeat(n);
    const getClass = (o) => o && o.constructor && o.constructor.name ? o.constructor.name : typeof o;
    function print(o, level) {
        if (o === null) {
            console.log(pad(level) + "null");
        }
        else if (Array.isArray(o)) {
            if (o.length === 0) {
                console.log(pad(level) + "[]");
                return;
            }
            console.log(pad(level) + "[");
        }
    }
}

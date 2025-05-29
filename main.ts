import { User } from "./src/models/User";
import { Project } from "./src/models/Project";
import { Task } from "./src/models/Task";
import { TaskStatus } from "./src/enums/TaskStatus";
import { FileType } from "./src/enums/FileType";
import { Attachment } from "./src/models/Attachment";
import { Comment } from "./src/models/Comment";
import { Label } from "./src/models/Label";
import { Reminder } from "./src/models/Reminder";
import { Team } from "./src/models/Team";
import { Dashboard } from "./src/models/Dashboard";
import { Report } from "./src/models/Report";


// Create users
const user1 = new User("u1", "John Doe", "john@example.com");
const user2 = new User("u2", "Jane Smith", "jane@example.com");

// Create a team
const team = new Team("t1", "Development Team");
user1.joinTeam(team);
user2.joinTeam(team);
team.getMemberCount();

// Create a project
const project = new Project("p1", "Project X", "A sample project");
user1.createProject(project);
project.shareWithUser(user2);
project.getProjectStatus();

// Create tasks
const dueDate = new Date(2025, 4, 30); // May 30, 2025
const priority = new Date(dueDate);
const task1 = new Task("t1", "Task 1", "First task", dueDate, priority, TaskStatus.To_do);
const task2 = new Task("t2", "Task 2", "Second task", dueDate, priority, TaskStatus.In_progress);

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
const attachment = new Attachment("a1", "design.pdf", FileType.Document, user1, new Date());
task1.uploadAttachment(attachment);

const comment = new Comment("c1", "Great progress!", user1, new Date());
task1.addComment(comment);

const label = new Label("l1", "Urgent");
task1.addLabel(label);

const reminder = new Reminder("r1", new Date(2025, 4, 29), "Deadline tomorrow", user1);
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




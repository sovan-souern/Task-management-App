import { TaskManagementSystem } from "./src/TaskManagementSystem"
import { Priority } from "./src/enum/Priority"
import { TaskStatus } from "./src/enum/Status"
import { Comment } from "./src/collaboration/Comment"
import { Label } from "./src/project/Label"

// Initialize the task management system
const taskSystem = new TaskManagementSystem()

// Create users exactly as shown in your example
const user1 = taskSystem.createUser("user-101", "Alex Johnson", "alex.johnson@company.com", "Project Manager")

const user2 = taskSystem.createUser("user-102", "Sarah Williams", "sarah.w@company.com", "Frontend Developer")

const user3 = taskSystem.createUser("user-103", "Raj Patel", "raj.patel@company.com", "Backend Developer")

// Create teams
const webTeam = taskSystem.createTeam("team-web", "Web Development Team")
webTeam.addMember(user1)
webTeam.addMember(user2)
webTeam.addMember(user3)

const mobileTeam = taskSystem.createTeam("team-mobile", "Mobile App Team")
mobileTeam.addMember(user1)

// Create projects
const websiteProject = taskSystem.createProject("project-website", "Website Project", "Company website development")
const appProject = taskSystem.createProject("project-app", "Mobile App Project", "Mobile application development")

// Add projects to teams
webTeam.projects.push(websiteProject)
mobileTeam.projects.push(appProject)

// Create tasks exactly as shown in your example
const task1 = taskSystem.createTask(
  "task-2023-001",
  "Implement user authentication",
  "Create login and signup pages with JWT support",
  new Date("2023-11-15"),
  Priority.HIGH,
  TaskStatus.IN_PROGRESS,
)

const task2 = taskSystem.createTask(
  "task-2023-002",
  "Design dashboard UI",
  "Create mockups for the admin dashboard",
  new Date("2023-10-30"),
  Priority.MEDIUM,
  TaskStatus.COMPLETED,
)

// Assign users to tasks
task1.assignToUser(user2)
task1.assignToUser(user3)
task2.assignToUser(user2)

// Add labels to tasks
const frontendLabel = new Label("label-1", "Frontend")
const backendLabel = new Label("label-2", "Backend")
const designLabel = new Label("label-3", "Design")

task1.addLabel(frontendLabel)
task1.addLabel(backendLabel)
task2.addLabel(designLabel)

// Add comments to tasks
const comment1 = new Comment("comment-1", "Please prioritize this for the release", user1)
comment1.createdAt = new Date("2023-10-20")
task1.addComment(comment1)

// Create notifications
taskSystem.createNotification("notif-001", "Your task 'Design dashboard UI' was completed", "user-101", false)

taskSystem.createNotification("notif-002", "New comment on 'Implement user authentication'", "user-102", true)

// Update dashboard with sample data
const overdueTask = {
  id: "task-2023-003",
  title: "Update documentation",
  dueDate: new Date("2023-10-10"),
}

taskSystem.updateDashboard(42, 18, [overdueTask])

// Display the formatted data exactly as requested
console.log("=== Task Management System Data ===\n")
taskSystem.displayData()

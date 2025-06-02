import { User } from "./core/User"
import { Team } from "./core/Team"
import { Task } from "./project/Task"
import { Project } from "./project/Project"
import { Dashboard } from "./analytics/Dashboard"
import { Notification } from "./collaboration/Notification"
import type { Priority } from "./enum/Priority"
import { TaskStatus } from "./enum/Status"
import { UserService } from "./services/UserService"
import { AuthService } from "./services/AuthService"

export class TaskManagementSystem {
  private users: Map<string, User> = new Map()
  private teams: Map<string, Team> = new Map()
  private projects: Map<string, Project> = new Map()
  private tasks: Map<string, Task> = new Map()
  private notifications: Notification[] = []
  private dashboard: Dashboard = new Dashboard()
  public userService: UserService
  public authService: AuthService

  constructor() {
    this.userService = new UserService()
    this.authService = new AuthService()
  }

  // User Management
  public createUser(id: string, name: string, email: string, role: string, password = "defaultPassword"): User {
    const user = new User(id, name, email, password, role) // <-- Pass role to constructor
    this.users.set(id, user)
    return user
  }

  public getUser(id: string): User | undefined {
    return this.users.get(id)
  }

  // Team Management
  public createTeam(id: string, name: string): Team {
    const team = new Team(id, name)
    this.teams.set(id, team)
    return team
  }

  public getTeam(id: string): Team | undefined {
    return this.teams.get(id)
  }

  public getAllTeams(): Team[] {
    return Array.from(this.teams.values())
  }

  // Project Management
  public createProject(id: string, title: string, description: string): Project {
    const project = new Project(id, title, description)
    this.projects.set(id, project)
    return project
  }

  public getProject(id: string): Project | undefined {
    return this.projects.get(id)
  }

  public getAllProjects(): Project[] {
    return Array.from(this.projects.values())
  }

  // Task Management
  public createTask(
    id: string,
    title: string,
    description: string,
    dueDate: Date,
    priority: Priority,
    status: TaskStatus = TaskStatus.TODO,
  ): Task {
    const task = new Task(id, title, description, dueDate, priority)
    task.status = status
    this.tasks.set(id, task)
    return task
  }

  public getTask(id: string): Task | undefined {
    return this.tasks.get(id)
  }

  public getAllTasks(): Task[] {
    return Array.from(this.tasks.values())
  }

  public getTasksByUser(userId: string): Task[] {
    return Array.from(this.tasks.values()).filter((task) => task.assignedUsers.some((user) => user.id === userId))
  }

  public getOverdueTasks(): Task[] {
    return Array.from(this.tasks.values()).filter((task) => task.isOverdue())
  }

  // Notification Management
  public createNotification(id: string, message: string, recipient: string, isRead = false): Notification {
    const notification = new Notification(id, message)
    notification.isRead = isRead
    ;(notification as any).recipient = recipient
    this.notifications.push(notification)
    return notification
  }

  // Dashboard Management
  public updateDashboard(tasksComplete: number, tasksPending: number, overdueTasks: any[]): void {
    this.dashboard.tasksCompleted = tasksComplete
    this.dashboard.tasksPending = tasksPending
    this.dashboard.overdueTasks = overdueTasks
  }

  // Get formatted data structure
  public getFormattedData(): any {
    return {
      users: Array.from(this.users.values()).map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        role: (user as any).role || "User",
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
        recipient: (notification as any).recipient,
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
    }
  }

  // Display formatted data
  public displayData(): void {
    const data = this.getFormattedData()
    console.log("const taskManagementSystem =", JSON.stringify(data, null, 2))
    console.log("\n" + JSON.stringify(data, null, 2))
  }
}

import { Project } from "../project/Project"
import type { Task } from "../project/Task"
import type { Notification } from "../collaboration/Notification"
import type { Session } from "./Session"
import type { Team } from "./Team"
import { Dashboard } from "../analytics/Dashboard"
import { Report } from "../analytics/Report"
export class User {
  public id: string
  public name: string
  public email: string
  public password: string
  public projects: Project[]
  public assignedTasks: Task[]
  public notifications: Notification[]
  public sessions: Session[]
  public teams: Team[]
  public isActive: boolean = true
  public role: string // <-- Add this line

  constructor(id: string, name: string, email: string, password: string, role: string = "User") {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
    this.projects = []
    this.assignedTasks = []
    this.notifications = []
    this.sessions = []
    this.teams = []
    this.isActive = true
    this.role = role // <-- Add this line
  }

  public createProject(): Project {
    const projectId = `project_${Date.now()}`
    const project = new Project(projectId, "", "")
    this.projects.push(project)
    return project
  }

  public assignTask(task: Task): void {
    this.assignedTasks.push(task)
  }

  public getDashboard(): Dashboard {
    const dashboard = new Dashboard()
    dashboard.updateStats(this.assignedTasks)
    return dashboard
  }

  public generateReport(): Report {
    const report = new Report(new Date(), new Date())
    report.generateReport(this.assignedTasks)
    return report
  }
}

import type { Priority } from "../enum/Priority"
import { TaskStatus } from "../enum/Status"
import type { User } from "../core/User"
import type { Label } from "./Label"
import type { Comment } from "../collaboration/Comment"
import type { Attachment } from "../collaboration/Attachment"
import type { Reminder } from "../collaboration/Reminder"
import type { Subtask } from "./Subtask"

export class Task {
  public id: string
  public title: string
  public description: string
  public dueDate: Date
  public priority: Priority
  public status: TaskStatus
  public isRecurring: boolean
  public recurrencePattern: string
  public assignedUsers: User[]
  public labels: Label[]
  public comments: Comment[]
  public attachments: Attachment[]
  public reminders: Reminder[]
  public subtasks: Subtask[]

  constructor(id: string, title: string, description: string, dueDate: Date, priority: Priority) {
    this.id = id
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.status = TaskStatus.TODO
    this.isRecurring = false
    this.recurrencePattern = ""
    this.assignedUsers = []
    this.labels = []
    this.comments = []
    this.attachments = []
    this.reminders = []
    this.subtasks = []
  }

  public setPriority(priority: Priority): void {
    this.priority = priority
  }

  public assignToUser(user: User): void {
    if (!this.assignedUsers.find((u) => u.id === user.id)) {
      this.assignedUsers.push(user)
    }
  }

  public addComment(comment: Comment): void {
    this.comments.push(comment)
  }

  public uploadAttachment(file: File): void {
    // Implementation for file upload
    console.log(`File ${file.name} uploaded to task ${this.id}`)
  }

  public addLabel(label: Label): void {
    if (!this.labels.find((l) => l.id === label.id)) {
      this.labels.push(label)
    }
  }

  public setReminder(reminder: Reminder): void {
    this.reminders.push(reminder)
  }

  public addSubtask(subtask: Subtask): void {
    this.subtasks.push(subtask)
  }

  public markCompleted(): void {
    this.status = TaskStatus.COMPLETED
  }

  public isOverdue(): boolean {
    return new Date() > this.dueDate && this.status !== TaskStatus.COMPLETED
  }
}

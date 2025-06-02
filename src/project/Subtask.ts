import { TaskStatus } from "../enum/Status"

export class Subtask {
  public id: string
  public title: string
  public description: string
  public status: TaskStatus
  public dueDate: Date

  constructor(id: string, title: string, description: string, dueDate: Date) {
    this.id = id
    this.title = title
    this.description = description
    this.status = TaskStatus.TODO
    this.dueDate = dueDate
  }

  public markCompleted(): void {
    this.status = TaskStatus.COMPLETED
  }
}

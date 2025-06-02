import type { Task } from "./Task"
import type { User } from "../core/User"

export class Project {
  public id: string
  public title: string
  public description: string
  public tasks: Task[]
  public member: User[]

  constructor(id: string, title: string, description: string) {
    this.id = id
    this.title = title
    this.description = description
    this.tasks = []
    this.member = []
  }

  public addTask(task: Task): void {
    this.tasks.push(task)
  }

  public shareWithUser(user: User): void {
    if (!this.member.find((m) => m.id === user.id)) {
      this.member.push(user)
    }
  }
}

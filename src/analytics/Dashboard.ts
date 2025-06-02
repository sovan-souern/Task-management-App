import type { Task } from "../project/Task"

export class Dashboard {
  public tasksCompleted: number
  public tasksPending: number
  public overdueTasks: any[]

  constructor() {
    this.tasksCompleted = 0
    this.tasksPending = 0
    this.overdueTasks = []
  }

  public getProgressChart(): string {
    const total = this.tasksCompleted + this.tasksPending
    if (total === 0) return "No tasks available"

    const percentage = Math.round((this.tasksCompleted / total) * 100)
    return `Progress: ${percentage}% (${this.tasksCompleted}/${total} tasks completed)`
  }

  public updateStats(tasks: Task[]): void {
    this.tasksCompleted = tasks.filter((task) => task.status === "Completed").length
    this.tasksPending = tasks.filter((task) => task.status !== "Completed").length
    this.overdueTasks = tasks.filter((task) => task.isOverdue())
  }
}

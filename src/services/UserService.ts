import { User } from "../core/User"
import type { Task } from "../project/Task"
import { Notification } from "../collaboration/Notification"

export class UserService {
  private users: Map<string, User> = new Map()

  public createUser(id: string, name: string, email: string, role: string): User {
    const user = new User(id, name, email, role)
    this.users.set(id, user)
    return user
  }

  public getUserById(id: string): User | undefined {
    return this.users.get(id)
  }

  public getUserByEmail(email: string): User | undefined {
    return Array.from(this.users.values()).find((user) => user.email === email)
  }

  public updateUser(id: string, updates: Partial<User>): boolean {
    const user = this.users.get(id)
    if (user) {
      Object.assign(user, updates)
      return true
    }
    return false
  }

  public deleteUser(id: string): boolean {
    return this.users.delete(id)
  }

  public getAllUsers(): User[] {
    return Array.from(this.users.values())
  }

  public getActiveUsers(): User[] {
    return Array.from(this.users.values()).filter((user) => user.isActive)
  }

  public getUserTasks(userId: string, tasks: Task[]): Task[] {
    return tasks.filter((task) => task.assignedUsers.some((user) => user.id === userId))
  }

  public notifyUser(userId: string, message: string): void {
    const user = this.users.get(userId)
    if (user) {
      const notification = new Notification("notif_" + Date.now(), message)
      notification.send()
    }
  }
}

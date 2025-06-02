import type { User } from "../core/User"

export class Mention {
  public id: string
  public mentionedUser: User
  public createdAt: Date
  public isRead: boolean

  constructor(id: string, mentionedUser: User) {
    this.id = id
    this.mentionedUser = mentionedUser
    this.createdAt = new Date()
    this.isRead = false
  }

  public method(type: any): any {
    // Generic method as shown in UML
    return type
  }
}

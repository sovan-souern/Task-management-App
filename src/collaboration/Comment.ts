import type { User } from "../core/User"

export class Comment {
  public id: string
  public content: string
  public author: User
  public createdAt: Date

  constructor(id: string, content: string, author: User) {
    this.id = id
    this.content = content
    this.author = author
    this.createdAt = new Date()
  }
}

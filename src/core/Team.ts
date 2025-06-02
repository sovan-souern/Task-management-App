import type { User } from "./User"
import type { Project } from "../project/Project"

export class Team {
  public id: string
  public name: string
  public members: User[]
  public projects: Project[]

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
    this.members = []
    this.projects = []
  }

  public addMember(user: User): void {
    if (!this.members.find((member) => member.id === user.id)) {
      this.members.push(user)
    }
  }
}

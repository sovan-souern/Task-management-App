import type { User } from "../core/User"

export class Reminder {
  public id: string
  public time: Date
  public message: string
  public sendTo: User

  constructor(id: string, time: Date, message: string, sendTo: User) {
    this.id = id
    this.time = time
    this.message = message
    this.sendTo = sendTo
  }
}

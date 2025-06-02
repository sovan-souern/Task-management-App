export class Notification {
  public id: string
  public message: string
  public isRead: boolean

  constructor(id: string, message: string) {
    this.id = id
    this.message = message
    this.isRead = false
  }

  public send(): void {
    console.log(`Notification sent: ${this.message}`)
  }
}

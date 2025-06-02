export class Session {
  public id: string
  public userId: string
  public createdAt: Date
  public expiresAt: Date
  public ipAddress: string
  public deviceInfo: string

  constructor(id: string, userId: string, ipAddress: string, deviceInfo: string) {
    this.id = id
    this.userId = userId
    this.createdAt = new Date()
    this.expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
    this.ipAddress = ipAddress
    this.deviceInfo = deviceInfo
  }

  public isValid(): boolean {
    return new Date() < this.expiresAt
  }
}

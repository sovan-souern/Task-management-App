import type { User } from "../core/User"

export class Attachment {
  public id: string
  public filename: string
  public filetype: string
  public uploadedAt: Date
  public uploadedBy: User

  constructor(id: string, filename: string, filetype: string, uploadedBy: User, fileSize: number, fileUrl: string) {
    this.id = id
    this.filename = filename
    this.filetype = filetype
    this.uploadedBy = uploadedBy
    this.uploadedAt = new Date()
  }
}

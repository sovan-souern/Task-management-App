import { FileType } from "../enums/FileType";
import { User } from "./User";

export class Attachment {
    private id: string;
    private filename: string;
    private filetype: FileType;
    private uploadedBy: User;
    private uploadedAt: Date;

    constructor(id: string, filename: string, filetype: FileType, uploadedBy: User, uploadedAt: Date) {
        this.id = id;
        this.filename = filename;
        this.filetype = filetype;
        this.uploadedBy = uploadedBy;
        this.uploadedAt = uploadedAt;
        console.log(`Attachment ${this.filename} (ID: ${this.id}) uploaded by ${this.uploadedBy.getName()} at ${this.uploadedAt.toISOString()}`);
    }
}
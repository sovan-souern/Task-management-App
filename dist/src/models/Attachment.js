"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attachment = void 0;
class Attachment {
    constructor(id, filename, filetype, uploadedBy, uploadedAt) {
        this.id = id;
        this.filename = filename;
        this.filetype = filetype;
        this.uploadedBy = uploadedBy;
        this.uploadedAt = uploadedAt;
        console.log(`Attachment ${this.filename} (ID: ${this.id}) uploaded by ${this.uploadedBy.getName()} at ${this.uploadedAt.toISOString()}`);
    }
}
exports.Attachment = Attachment;

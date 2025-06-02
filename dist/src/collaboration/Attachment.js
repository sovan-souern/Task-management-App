"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attachment = void 0;
class Attachment {
    constructor(id, filename, filetype, uploadedBy, fileSize, fileUrl) {
        this.id = id;
        this.filename = filename;
        this.filetype = filetype;
        this.uploadedBy = uploadedBy;
        this.uploadedAt = new Date();
    }
}
exports.Attachment = Attachment;
//# sourceMappingURL=Attachment.js.map
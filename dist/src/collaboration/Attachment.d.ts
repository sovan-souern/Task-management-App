import type { User } from "../core/User";
export declare class Attachment {
    id: string;
    filename: string;
    filetype: string;
    uploadedAt: Date;
    uploadedBy: User;
    constructor(id: string, filename: string, filetype: string, uploadedBy: User, fileSize: number, fileUrl: string);
}
//# sourceMappingURL=Attachment.d.ts.map
import type { User } from "../core/User";
export declare class Mention {
    id: string;
    mentionedUser: User;
    createdAt: Date;
    isRead: boolean;
    constructor(id: string, mentionedUser: User);
    method(type: any): any;
}
//# sourceMappingURL=Mention.d.ts.map
export declare class Session {
    id: string;
    userId: string;
    createdAt: Date;
    expiresAt: Date;
    ipAddress: string;
    deviceInfo: string;
    constructor(id: string, userId: string, ipAddress: string, deviceInfo: string);
    isValid(): boolean;
}
//# sourceMappingURL=Session.d.ts.map
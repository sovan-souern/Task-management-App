"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
class Session {
    constructor(id, userId, ipAddress, deviceInfo) {
        this.id = id;
        this.userId = userId;
        this.createdAt = new Date();
        this.expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
        this.ipAddress = ipAddress;
        this.deviceInfo = deviceInfo;
    }
    isValid() {
        return new Date() < this.expiresAt;
    }
}
exports.Session = Session;
//# sourceMappingURL=Session.js.map
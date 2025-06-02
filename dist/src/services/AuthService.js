"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const Session_1 = require("../core/Session");
class AuthService {
    constructor() {
        this.sessions = new Map();
    }
    login(email, pwd) {
        // Simplified login logic
        const sessionId = this.generateSessionId();
        const session = new Session_1.Session(sessionId, "user_id", "127.0.0.1", "Browser");
        this.sessions.set(sessionId, session);
        return session;
    }
    logout(sessionId) {
        this.sessions.delete(sessionId);
    }
    validateSession(sessionId) {
        const session = this.sessions.get(sessionId);
        return session ? session.isValid() : false;
    }
    resetPWD(email) {
        // Logic to reset password
        console.log(`Password reset email sent to ${email}`);
    }
    generateSessionId() {
        return "session_" + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=AuthService.js.map
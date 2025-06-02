import { Session } from "../core/Session";
export declare class AuthService {
    private sessions;
    login(email: string, pwd: string): Session;
    logout(sessionId: string): void;
    validateSession(sessionId: string): boolean;
    resetPWD(email: string): void;
    private generateSessionId;
}
//# sourceMappingURL=AuthService.d.ts.map
import { Session } from "../core/Session"

export class AuthService {
  private sessions: Map<string, Session> = new Map()

  public login(email: string, pwd: string): Session {
    // Simplified login logic
    const sessionId = this.generateSessionId()
    const session = new Session(sessionId, "user_id", "127.0.0.1", "Browser")
    this.sessions.set(sessionId, session)
    return session
  }

  public logout(sessionId: string): void {
    this.sessions.delete(sessionId)
  }

  public validateSession(sessionId: string): boolean {
    const session = this.sessions.get(sessionId)
    return session ? session.isValid() : false
  }

  public resetPWD(email: string): void {
    // Logic to reset password
    console.log(`Password reset email sent to ${email}`)
  }

  private generateSessionId(): string {
    return "session_" + Math.random().toString(36).substr(2, 9) + Date.now().toString(36)
  }
}

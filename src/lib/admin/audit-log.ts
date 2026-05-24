export type AuditEvent =
  | { type: "agent_request"; userId: string; email: string; sessionId: string; messageCount: number }
  | { type: "commit"; userId: string; email: string; sessionId: string; sha: string; files: string[]; summary: string }
  | { type: "undo"; userId: string; email: string; sessionId: string; revertedSha: string; newSha: string }
  | { type: "error"; userId: string; email: string; sessionId: string; message: string }

export function logAudit(event: AuditEvent) {
  console.log(JSON.stringify({ audit: true, ts: new Date().toISOString(), ...event }))
}

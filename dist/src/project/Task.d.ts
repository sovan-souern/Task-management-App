import type { Priority } from "../enum/Priority";
import { TaskStatus } from "../enum/Status";
import type { User } from "../core/User";
import type { Label } from "./Label";
import type { Comment } from "../collaboration/Comment";
import type { Attachment } from "../collaboration/Attachment";
import type { Reminder } from "../collaboration/Reminder";
import type { Subtask } from "./Subtask";
export declare class Task {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    priority: Priority;
    status: TaskStatus;
    isRecurring: boolean;
    recurrencePattern: string;
    assignedUsers: User[];
    labels: Label[];
    comments: Comment[];
    attachments: Attachment[];
    reminders: Reminder[];
    subtasks: Subtask[];
    constructor(id: string, title: string, description: string, dueDate: Date, priority: Priority);
    setPriority(priority: Priority): void;
    assignToUser(user: User): void;
    addComment(comment: Comment): void;
    uploadAttachment(file: File): void;
    addLabel(label: Label): void;
    setReminder(reminder: Reminder): void;
    addSubtask(subtask: Subtask): void;
    markCompleted(): void;
    isOverdue(): boolean;
}
//# sourceMappingURL=Task.d.ts.map
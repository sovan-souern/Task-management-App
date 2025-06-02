"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subtask = void 0;
const Status_1 = require("../enum/Status");
class Subtask {
    constructor(id, title, description, dueDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = Status_1.TaskStatus.TODO;
        this.dueDate = dueDate;
    }
    markCompleted() {
        this.status = Status_1.TaskStatus.COMPLETED;
    }
}
exports.Subtask = Subtask;
//# sourceMappingURL=Subtask.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
class Project {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.tasks = [];
        this.member = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }
    shareWithUser(user) {
        if (!this.member.find((m) => m.id === user.id)) {
            this.member.push(user);
        }
    }
}
exports.Project = Project;
//# sourceMappingURL=Project.js.map
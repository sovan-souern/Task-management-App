"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
class Team {
    constructor(id, name) {
        this.members = [];
        this.tasks = [];
        this.id = id;
        this.name = name;
        console.log(`Team ${this.name} (ID: ${this.id}) created`);
    }
    addMember(user) {
        this.members.push(user);
        console.log(`User ${user.getName()} added to team ${this.name}`);
    }
    assignTask(task) {
        this.tasks.push(task);
        console.log(`Task ${task['title']} assigned to team ${this.name}`);
    }
    getMemberCount() {
        const count = this.members.length;
        console.log(`Team ${this.name} has ${count} members`);
        return count;
    }
}
exports.Team = Team;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
class Team {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.members = [];
        this.projects = [];
    }
    addMember(user) {
        if (!this.members.find((member) => member.id === user.id)) {
            this.members.push(user);
        }
    }
}
exports.Team = Team;
//# sourceMappingURL=Team.js.map
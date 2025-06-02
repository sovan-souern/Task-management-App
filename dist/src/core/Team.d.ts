import type { User } from "./User";
import type { Project } from "../project/Project";
export declare class Team {
    id: string;
    name: string;
    members: User[];
    projects: Project[];
    constructor(id: string, name: string);
    addMember(user: User): void;
}
//# sourceMappingURL=Team.d.ts.map
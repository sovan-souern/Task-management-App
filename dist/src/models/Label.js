"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
class Label {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(`Label ${this.name} (ID: ${this.id}) created`);
    }
}
exports.Label = Label;

export class Label {
    private id: string;
    private name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        console.log(`Label ${this.name} (ID: ${this.id}) created`);
    }
}
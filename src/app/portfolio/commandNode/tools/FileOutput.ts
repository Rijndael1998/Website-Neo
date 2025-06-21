import { Parameter, ToolNode } from "./ToolNode.interface";

export default class FileOutput extends ToolNode {
    parameters = [];

    file: string;

    constructor(file: string) {
        super("");
        this.file = file;
    }

    generateOutput(): string {
        return this.file;
    }
}
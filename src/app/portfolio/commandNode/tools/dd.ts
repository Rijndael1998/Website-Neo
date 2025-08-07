import { Parameter, ToolNode } from "./ToolNode.interface";

export default class Dd extends ToolNode {
    parameters: Parameter[];

    constructor() {
        super("dd");
        this.parameters = [
            { name: "bs", defaultValue: "bs=1M" },
            // { name: "status", defaultValue: "status=progress" },
        ];
    }

    generateOutput(): string {
        let st = this.command;
        this.parameters.forEach((v) => st += " " + (v.value ?? v.defaultValue));

        if(this.stdout)
            st = `${st} 1>${this.stdout.generateOutput()}`;

        if(this.stderr)
            st = `${st} 2>${this.stderr.generateOutput()}`

        return st;
    }
}
export interface Parameter {
    name?: string;
    mandatory?: boolean;

    defaultValue: string;
    value?: string;
}

export abstract class ToolNode {
    readonly command: string;
    parameters: Parameter[] = [];
    stdout?: ToolNode;
    stderr?: ToolNode;

    constructor(command: string) {
        this.command = command;
    }

    generateOutput(): string {
        let st = this.command;
        this.parameters.forEach((v) => st += " " + v);

        if(this.stdout)
            st = `${st} 1>${this.stdout.generateOutput()}`;

        if(this.stderr)
            st = `${st} 2>${this.stderr.generateOutput()}`

        return st;
    }
}
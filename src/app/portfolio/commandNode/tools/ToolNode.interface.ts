export interface Parameter {
    defaultValue: string;
    value?: string;
}

export interface ToolNode {
    parameters: Parameter[];
    stdout?: ToolNode;
    stderr?: ToolNode;
    generateOutput(): string;
}
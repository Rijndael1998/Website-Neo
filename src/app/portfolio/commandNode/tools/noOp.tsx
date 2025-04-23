import { Parameter, ToolNode } from "./ToolNode.interface";

export default class NoOp implements ToolNode {
    parameters = [];
    generateOutput(): string {
        return "/dev/null";
    }
}
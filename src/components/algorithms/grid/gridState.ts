import { StyledGridState } from "./_grid";

// Take in an array of 
export class GridState<T> implements StyledGridState {

    state: Array<Array<T>>;

    constructor(public width: number, public height: number, public styles: Map<T, string>, public defaultState: T, oldState?: Array<Array<T>>) {
        // set default squares
        this.state = oldState ?? [];
        if(oldState === undefined)
            for(let y = 0; y < height; y++) {
                this.state.push([]);
                for(let x = 0; x < width; x++) {
                    this.state[y].push(defaultState);
                }
            }
    }

    getStyledGridState(): Array<Array<string>> {
        return this.state.map((row) => row.map((item) => {
            const styles = this.styles.get(item);
            if(styles === undefined)
                throw new Error(`${item} not in map`);

            return styles;
        }));
    }

    setState(x: number, y: number, state: T) {
        this.state[y][x] = state;
    }

    new() {
        return new GridState<T>(this.width, this.height, this.styles, this.defaultState, [...this.state.map(cells => [...cells])]);
    }
}
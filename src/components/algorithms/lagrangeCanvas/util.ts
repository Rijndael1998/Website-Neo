import { Point } from "./point";

export type DivMouseEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;

export function round(n: number) {
    return Math.round(n * 100) / 100;
}

export function filterPercent(styleString: string) {
    return round(Number.parseFloat(styleString.replaceAll("%", "")));
}

export function getLeftTopByElement(e: HTMLElement) {
    const styles = e.style;
    const left = filterPercent(styles.left);
    const top = filterPercent(styles.top);

    return [left, top];
}

export function getLeftTop(e: React.MouseEvent) {
    const tar = e.target as HTMLDivElement;

    return getLeftTopByElement(tar);
}

export function getRelativeLeftTopByElement(e: HTMLElement) {

    const [x, y] = correctClick(e);

    return new Point(100 * x / tar.clientWidth, 100 * y / tar.clientHeight);
}

/**
 * 
 * @param e 
 * @returns in percent
 */
export function getRelativeLeftTop(e: DivMouseEvent) {
    const tar = e.target as HTMLDivElement;
    const [x, y] = correctClick(e);

    return new Point(100 * x / tar.clientWidth, 100 * y / tar.clientHeight);
}

/**
 * 
 * @param point 
 * @param x 
 * @param y 
 * @returns true if points are the same
 */
export function comparePoint(point: Point, x: number, y: number) {
    return round(point.x) == x && round(point.y) == y;
}

export function correctClick(e: DivMouseEvent) {
    const tar = e.target as HTMLDivElement;
    const correctedX = e.pageX - tar.offsetLeft;
    const correctedY = e.pageY - tar.offsetTop;

    return [correctedX, correctedY];
}

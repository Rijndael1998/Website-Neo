"use client";

import { useEffect, useState } from "react";
import styles from "./lagrange.module.scss";
import { Point } from "./point";
import { LagrangeFunction } from "./lagrangeFunction";
import { DivMouseEvent, comparePoint, filterPercent, getLeftTop, getRelativeLeftTop, round } from "./util";
import classNames from "classnames";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

function findPoint(e: HTMLDivElement, points: Array<Point>) {
    const x = filterPercent(e.style.left);
    const y = filterPercent(e.style.top);

    console.log("point", x, y);

    let pointIndex = undefined;
    points.forEach((point, i) => {
        const pointx = round(point.x);
        const pointy = round(point.y);
        if (pointx == x && pointy == y) {
            pointIndex = i;
        }
    })

    return pointIndex;
}

export default function LagrangeCanvas() {
    const [points, setPoints] = useState<Array<Point>>([]);
    const [lf, setLF] = useState<LagrangeFunction>();

    const [pressedIndex, setPressedIndex] = useState<number>();
    const [lastDrag, setLastDrag] = useState<number>(0);

    useEffect(() => {
        if (points.length < 2)
            setLF(undefined);


    }, [points]);

    const addPoint = (e: DivMouseEvent) => {
        console.log(e);
        if (e.timeStamp < lastDrag + 16)
            return;

        const newPoint = getRelativeLeftTop(e);

        console.log(newPoint);

        setPoints([...points, newPoint]);
    }

    const removePoint = (e: DivMouseEvent) => {
        if (e.timeStamp < lastDrag + 16)
            return;

        e.preventDefault();
        e.stopPropagation();

        const [x, y] = getLeftTop(e);

        const newPoints = points.filter((point) => !comparePoint(point, x, y));

        setPoints(newPoints);
    }

    const onStart = (e: DraggableEvent, d: DraggableData) => {
        console.log("start", e, d);

        const index = findPoint(d.node as HTMLDivElement, points);

        console.log(index);

        setPressedIndex(index);
    }

    const onDrag = (e: DraggableEvent, d: DraggableData) => {
        e.stopPropagation();
        e.preventDefault();

        // if(!pressedIndex)
        //     return false;

        console.log("drag", e, d);
    }

    const onStop = (e: DraggableEvent, d: DraggableData) => {
        console.log("stop", e, d);

        const w = d.node.parentElement!.clientWidth;
        const h = d.node.parentElement!.clientHeight;

        const dx = 100 * d.x / w;
        const dy = 100 * d.y / h;

        console.log(dx, dy);

        if(pressedIndex === undefined)
            return;

        const newPoints = [...points];
        newPoints[pressedIndex].x = dx;
        newPoints[pressedIndex].y = dy;

        d.node.style.transform = "";

        setLastDrag(e.timeStamp);
        setPoints(newPoints);
    }


    return <>
        <div
            className={styles.wrapper}
            onClick={(e) => addPoint(e)}>
            {
                points.map((point, i) => {
                    return <Draggable
                        key={`${i}`}
                        onStart={(e, d) => onStart(e, d)}
                        onDrag={(e, d) => onDrag(e, d)}
                        onStop={(e, d) => onStop(e, d)}
                    >
                        <div
                            className={classNames(styles.point, point.hidden && styles.hidden)}
                            style={{ left: `${point.x}%`, top: `${point.y}%` }}
                            onClick={(e) => removePoint(e)}
                        />
                    </Draggable>
                })
            }
        </div>
    </>
}
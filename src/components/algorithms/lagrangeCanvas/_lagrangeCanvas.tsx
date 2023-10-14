"use client";

import { useEffect, useState } from "react";
import styles from "./lagrange.module.scss";
import { Point } from "./point";
import { LagrangeFunction } from "./lagrangeFunction";
import { DivMouseEvent, comparePoint, getLeftTop, getRelativeLeftTop } from "./util";
import classNames from "classnames";




export default function LagrangeCanvas() {
    const [points, setPoints] = useState<Array<Point>>([]);
    const [lf, setLF] = useState<LagrangeFunction>();

    // the index of the dragged points within the points variable
    const [draggedPoint, setDraggedPoint] = useState<Point>();

    useEffect(() => {
        if (points.length < 2)
            setLF(undefined);


    }, [points]);

    const addPoint = (e: DivMouseEvent) => {
        console.log(e);

        const newPoint = getRelativeLeftTop(e);

        console.log(newPoint);

        setPoints([...points, newPoint]);
    }

    const removePoint = (e: DivMouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        const [x, y] = getLeftTop(e);

        const newPoints = points.filter((point) => !comparePoint(point, x, y));

        setPoints(newPoints);
    }

    const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
        console.log("started drag");
        console.log(e);

        const [x, y] = getLeftTop(e);
        
        points.forEach((point, i) => {
            if(comparePoint(point, x, y)) {
                const newPoints = [...points];

                const newPoint = point.clone();
                newPoint.hidden = true;

                newPoints[i] = newPoint;
                setDraggedPoint(newPoint);
                setPoints(newPoints);
            }
        });
    }

    const dragFinish = () => {
        console.log("finished drag");
        if(!draggedPoint)
            return;

        const newPoints = [...points];

        const newPoint = draggedPoint.clone()
        newPoint.hidden = false;

        newPoints[points.indexOf(draggedPoint)] = newPoint;

        setDraggedPoint(undefined);
        setPoints(newPoints);
    }

    const mouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(!draggedPoint)
            return;

        console.log(e);
    }

    return <>
        <div 
        className={styles.wrapper} 
        onClick={(e) => addPoint(e)}
        onMouseMove={(e) => mouseMove(e)}>
            {
                points.map((point, i) => {
                    return <div
                        draggable
                        key={`${i}`}
                        className={classNames(styles.point, point.hidden && styles.hidden)}
                        style={{ left: `${point.x}%`, top: `${point.y}%` }}
                        onClick={(e) => removePoint(e)}
                        onDragStart={(e) => dragStart(e)}
                        onDragEnd={() => dragFinish()}
                    />
                })
            }
        </div>
    </>
}
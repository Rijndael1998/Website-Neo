"use client";

import Lazy from "@/components/lazy/_lazy";
import { deciderP1, deciderQuestions } from "@/content/portfolio/decider/Decider";
import { useState } from "react";
import styles from "./decision.module.scss";

export default function Decider() {
    const [answers, setAnswers] = useState<Array<boolean | undefined>>(new Array(deciderQuestions.length));

    return <Lazy>
        <h1>Decision</h1>
        <p>{deciderP1}</p>
        <div className={styles.table}>
            <div className={styles.top}>
                <div>
                    <h4>Question</h4>
                </div>
                <div>
                    <h4>Answer</h4>
                </div>
            </div>
            {
                deciderQuestions.map((q, i) => {
                    return <div 
                    className={styles.question}
                    key={i}>
                        <div>{`${q.question}`}</div>
                        <div className={styles.answer}>
                            <div>Yes</div>
                            <div>No</div>
                        </div>
                    </div>;
                })
            }
        </div>
    </Lazy>
}
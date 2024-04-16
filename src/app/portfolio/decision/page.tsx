"use client";

import Lazy from "@/components/lazy/_lazy";
import { deciderP1, deciderQuestions } from "@/content/portfolio/decider/Decider";
import { useState } from "react";
import styles from "./decision.module.scss";
import { RiCheckboxBlankFill, RiCheckboxFill, RiCheckboxIndeterminateFill, RiInformationFill, RiInformationOffFill } from "@remixicon/react";
import { assert } from "console";

enum AnswerLoop {
    Unchecked,
    Checked,
    NotApplicable,
}

export default function Decider() {
    const [answers, setAnswers] = useState<Array<AnswerLoop | undefined>>(new Array(deciderQuestions.length));

    const answerLoop = [
        AnswerLoop.Unchecked,
        AnswerLoop.Checked,
        AnswerLoop.NotApplicable,
    ];

    const toggleAnswer = (index: number) => {
        const newAnswers = [...answers];

        // get current value
        const answer = newAnswers[index] ?? AnswerLoop.Unchecked;

        // get index in loop
        const currentAnswerLoopIndex = answerLoop.indexOf(answer);

        // set the next value
        newAnswers[index] = answerLoop[(currentAnswerLoopIndex + 1) % answerLoop.length];

        // set the next value
        setAnswers(newAnswers);
    }

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
                        <div>
                            <p>{q.question}</p>
                            <RiInformationFill />
                        </div>
                        <div className={styles.answer} onClick={() => toggleAnswer(i)}>
                            <div>
                                {
                                    answers[i] == AnswerLoop.Checked ? <RiCheckboxFill /> : answers[i] == AnswerLoop.NotApplicable ? <RiCheckboxIndeterminateFill /> : <RiCheckboxBlankFill />
                                }
                            </div>
                        </div>
                    </div>;
                })
            }
        </div>
    </Lazy>
}
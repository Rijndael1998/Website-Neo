"use client";

import Lazy from "@/components/lazy/_lazy";
import { deciderP1, deciderQuestions } from "@/content/portfolio/decider/Decider";
import { useState } from "react";
import styles from "./decision.module.scss";
import { RiCheckboxBlankCircleFill, RiCheckboxCircleFill, RiCloseCircleFill, RiInformationFill } from "@remixicon/react";

enum Answer {
    NotApplicable,
    Checked,
    Crossed,
}

export default function Decider() {
    const [answers, setAnswers] = useState<Array<Answer | undefined>>(new Array(deciderQuestions.length));

    const answerLoop = [
        Answer.NotApplicable,
        Answer.Checked,
        Answer.Crossed,
    ];

    const toggleAnswer = (index: number) => {
        const newAnswers = [...answers];

        // get current value
        const answer = newAnswers[index] ?? Answer.Crossed;

        // get index in loop
        const currentAnswerLoopIndex = answerLoop.indexOf(answer);

        // set the next value
        newAnswers[index] = answerLoop[(currentAnswerLoopIndex + 1) % answerLoop.length];

        // set the next value
        setAnswers(newAnswers);
    }

    const renderIcon = (answer?: Answer) => {
        switch (answer) {
            case Answer.Crossed:
                return <RiCloseCircleFill />
            case Answer.Checked:
                return <RiCheckboxCircleFill />

            case Answer.NotApplicable:
            default:
                return <RiCheckboxBlankCircleFill />
        }
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
                                    renderIcon(answers[i])
                                }
                            </div>
                        </div>
                    </div>;
                })
            }
        </div>
    </Lazy>
}
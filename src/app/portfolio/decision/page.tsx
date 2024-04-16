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
        const answer = newAnswers[index] ?? Answer.NotApplicable;

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

    const renderInfo = (info?: string) => {
        if(!info)
            return <></>;

        return <RiInformationFill />;
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
                    const question = q.question[0];
                    const description = q.question[1];
                    return <div
                        className={styles.question}
                        key={i}>
                        <div className={styles.query}>
                            <p>{question}</p>
                            {
                                renderInfo(description)
                            }
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
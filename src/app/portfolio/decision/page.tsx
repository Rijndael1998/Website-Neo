"use client";

import Lazy from "@/components/lazy/_lazy";
import { deciderP1, deciderQuestions } from "@/content/portfolio/decider/Decider";
import React, { useState } from "react";
import style from "./decision.module.scss";
import InfoIcon from '@mui/icons-material/Info';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Tooltip } from "@mui/material";

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
                return <CancelIcon />
            case Answer.Checked:
                return <CheckCircleIcon />

            case Answer.NotApplicable:
            default:
                return <CircleIcon />
        }
    }

    const RenderInfo = ({ info }: { info?: string }) => {
        if (!info)
            return <></>;

        return <Tooltip title={info} arrow placement="right">
            <InfoIcon />
        </Tooltip>;
    }

    return <Lazy>
        <h1>Decision</h1>
        <p>{deciderP1}</p>
        <div className={style.table}>
            <div className={style.top}>
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
                        className={style.question}
                        key={i}>
                        <div className={style.query}>
                            <p>{question}?</p>
                            <RenderInfo info={description} />
                        </div>
                        <div className={style.answer} onClick={() => toggleAnswer(i)}>
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

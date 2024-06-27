"use client";

import Lazy from "@/components/lazy/_lazy";
import { deciderQuestions } from "@/content/portfolio/decider/Decider";
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

function Score({ answers }: { answers: Array<Answer | undefined> }) {
    const score = answers.reduce<number>((prev, curr, index) => {
        const question = deciderQuestions[index];
        switch (curr) {
            case Answer.Checked:
                return prev + question.yes;
            case Answer.Crossed:
                return prev + question.no;
        }

        return prev;
    }, 0);

    return <>
        <h2>Verdict</h2>
        <p>{score}</p>
    </>
}

function RenderIcon({ answer }: { answer?: Answer }) {
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

function RenderInfo({ info }: { info?: string }) {
    if (!info)
        return <></>;

    return <Tooltip title={info} arrow placement="right">
        <InfoIcon />
    </Tooltip>;
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

    return <Lazy>
        <h1>Decision helper</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quasi, labore facere dicta aspernatur illum mollitia totam accusamus ipsa ex alias sint natus dignissimos aliquid autem dolorem, quas accusantium repudiandae?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam omnis debitis optio asperiores numquam! Sequi voluptates dolorum quia adipisci provident minus repellendus placeat expedita totam molestias, ullam numquam, tempore iste.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam nihil ipsum quas eveniet odit explicabo veniam qui tenetur quo quae vero, vel nulla impedit aliquid unde saepe commodi a aliquam!</p>

        <p>To help me with this, I have made this very simple tool that helps me figure out if I should or should not buy something.</p>
        <p style={{ display: "flex" }}>
            Choose yes (<CheckCircleIcon />), no (<CancelIcon />) or leave the question blank if not applicable.
        </p>
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
                                <RenderIcon answer={answers[i]} />
                            </div>
                        </div>
                    </div>;
                })
            }
        </div>
        <Score answers={answers} />
    </Lazy>
}

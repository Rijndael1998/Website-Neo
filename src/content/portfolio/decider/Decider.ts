export type QuestionEntryType = [
    question: string,
    description?: string,
];

export type QuestionYesNoType = {
    // yes
    y: number;

    // no
    n: number;

    // invert
    inv: boolean;
};

export class Question {
    question: QuestionEntryType;
    yn: QuestionYesNoType;

    constructor(question: QuestionEntryType, yn: Partial<QuestionYesNoType>) {
        this.question = question;
        this.yn = {
            y: yn.y ?? 0,
            n: yn.n ?? yn.y ?? 0,
            inv: yn.inv ?? false,
        };

        if (this.yn.inv) {
            this.yn = {
                ...this.yn,
                y: this.yn.n,
                n: this.yn.y,
            }
        }
    }

    get yes() {
        return this.yn.y;
    }

    get no() {
        return this.yn.n;
    }

    scale(ynScale: Omit<QuestionYesNoType, "inv">) {
        this.yn = {
            ...this.yn,
            y: this.yn.y / ynScale.y,
            n: this.yn.n / ynScale.n,
        };
    }
}

/**
 * Question Factory
 * @param q Question and details
 * @param y Yes value
 * @param n No value
 * @returns Question Object
 */
const Q = (q: QuestionEntryType, yn: Partial<QuestionYesNoType>) => new Question(q, yn);

const inv = true;
export const questions: Array<Question> = [
    Q(
        [
            "Have I considered this for over two weeks",
            "Reflect on whether you have given enough time to think about this purchase. A long contemplation period often results in a more rational decision.",
        ],
        {
            y: 3,
        },
    ),
    Q(
        [
            "Is this an impulsive purchase",
            "Determine if you are acting on a whim rather than a well-thought-out decision. Impulsive buys can lead to regret.",
        ],
        {
            y: 5,
            n: 0,
            inv,
        },
    ),
    Q(
        [
            "Does it address a real problem I have",
            "Assess if the item will solve or improve an issue you are currently facing. Effective solutions justify the expense.",
        ],
        {
            y: 5,
        },
    ),
    Q(
        [
            "Do I already own something like it",
            "Check if you have anything similar that serves the same purpose. Redundancy is often unnecessary.",
        ],
        {
            y: 4,
            n: 3,
            inv,
        },
    ),
    Q(
        [
            "Is it worth delaying financial goals",
            "Weigh if the purchase justifies postponing more significant financial objectives like savings or investments.",
        ],
        {
            y: 5,
        },
    ),
    Q(
        [
            "Will I use it in five years",
            "Forecast if the item will remain useful or relevant in your life for the long term. Durable utility justifies the cost.",
        ],
        {
            y: 2,
            n: 0,
        },
    ),
    Q(
        [
            "Do I have space for it",
            "Consider if you have the physical space to store or use the item. Clutter can detract from your living environment.",
        ],
        {
            y: 1,
        },
    ),
    Q(
        [
            "Will it lead to debt",
            "Evaluate if purchasing the item will cause you to incur debt. Future financial strain is a high cost.",
        ],
        {
            y: 5,
            n: 0,
            inv,
        },
    ),
    Q(
        [
            "Can I quickly pay for it",
            "Check if you have readily available funds to cover the cost. Immediate affordability is a positive indicator.",
        ],
        {
            y: 4,
        },
    ),
    Q(
        [
            "Is there a better way to get it",
            "Think if there's an alternative method to obtaining the item, such as borrowing or negotiating a better price.",
        ],
        {
            y: 3,
            n: 3,
            inv,
        },
    ),
    Q(
        [
            "Have I compared prices from different vendors",
            "Check for the best deal. For a smartphone, you might find it cheaper through a different retailer or carrier.",
        ],
        {
            y: 3,
            n: 2,
        },
    ),
    Q(
        [
            "Am I swayed by others",
            "Reflect on whether your decision is influenced by others' opinions. Peer pressure can lead to unnecessary purchases.",
        ],
        {
            y: 2,
            n: 0,
            inv,
        },
    ),
    Q(
        [
            "Is this purchase within my budget",
            "Evaluate if the cost fits into your current financial plan without causing strain. For example, buying a new laptop should not interfere with your ability to pay your monthly bills.",
        ],
        {
            y: 1,
            n: 5,
        },
    ),
    Q(
        [
            "Is there a less expensive alternative",
            "Consider if there's a more affordable option that meets your needs. Instead of a brand-new book, maybe a used copy or a library loan could suffice.",
        ],
        {
            y: 3,
            n: 0,
            inv,
        },
    ),
    Q(
        [
            "Will this purchase add value to my life",
            "Think about whether this item or service will positively impact your daily routine. A coffee machine might save you time and money spent at cafes.",
        ],
        {
            y: 4,
            n: 3,
        },
    ),
    Q(
        [
            "Am I expecting a discount or sale soon",
            "Delay purchases if a sale or discount is anticipated, like waiting for Black Friday to buy that new TV.",
        ],
        {
            y: 3,
            n: 0,
            inv,
        },
    ),
    Q(
        [
            "Could my money be better spent elsewhere",
            "Consider the opportunity cost of spending on this item versus another expense or investment. Joining a gym might have long-term health benefits over buying a gaming console.",
        ],
        {
            y: 4,
            inv,
        },
    ),
    Q(
        [
            "Is this purchase influenced by a short-term emotion",
            "Identify if your desire to buy is driven by an impulse, such as stress shopping after a tough day at work.",
        ],
        {
            y: 5,
            n: 0,
            inv,
        },
    ),
    Q(
        [
            "Is this a limited-time offer influencing my decision",
            "Challenge if the urgency is artificial. A 'sale ending soon' might push you to buy luggage you don't need immediately.",
        ],
        {
            y: 3,
            n: 0,
            inv,
        },
    ),
    Q(
        [
            "Could I borrow or rent instead of buying",
            "Explore temporary options. Renting a suit for a single event may be wiser than purchasing.",
        ],
        {
            y: 2,
            n: 0,
            inv,
        },
    ),
];

export const adjustmentYes = questions.reduce<number>((prev, curr) => {
    return prev + curr.yn.y;
}, 0);

export const adjustmentNo = questions.reduce<number>((prev, curr) => {
    return prev + curr.no;
}, 0);

const adjScale: Omit<QuestionYesNoType, "inv"> = {
    y: adjustmentYes,
    n: adjustmentNo,
};

export const deciderQuestions = questions.map((q) => {
    q.scale(adjScale);
    return Object.freeze(q);
});


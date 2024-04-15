export const deciderP1 = ``;

export class Question {
    public question: string;
    public yes: number = 1;
    public no: number = 1;
    
    constructor(question: string, yes?: number, no?: number) {
        this.question = question + "?";
        this.yes = yes ?? this.yes;
        this.no = no ?? this.yes ?? this.no;
    }
}

/**
 * Question Factory
 * @param q Question
 * @param y Yes value
 * @param n No value
 * @returns Question Object
 */
const Q = (q: string, y?: number, n?: number) => new Question(q, y, n);

export const questions: Array<Question> = [
    Q("Have I considered this for over two weeks", 3), // Reflection period importance
    Q("Is this an impulsive purchase", 0, 5), // Impulse control
    Q("Does it address a real problem I have", 5), // Necessity and problem-solving
    Q("Do I already own something like it", 0, 4), // Avoiding redundancy
    Q("Is it worth delaying financial goals", 5), // Financial goal significance
    Q("Will I use it in five years", 2, 0), // Long-term utility
    Q("Do I have space for it", 1), // Spatial consideration
    Q("Will it lead to debt", 0, 5), // Debt avoidance
    Q("Can I quickly pay for it", 4), // Financial flexibility
    Q("Is there a better way to get it", 0, 3), // Alternative solutions
    Q("Have I compared prices from different vendors", 3), // Price comparison
    Q("Am I swayed by others", 0, 2), // External influence
    Q("Is this purchase within my budget", 2, 5), // Budget alignment
    Q("Is there a less expensive alternative", 0, 3), // Cost-effective options
    Q("Will this purchase add value to my life", 4, 3), // Value addition
    Q("Am I expecting a discount or sale soon", 3, 2), // Potential savings
    Q("Could my money be better spent elsewhere", 4), // Opportunity cost
    Q("Is this purchase influenced by a short-term emotion", 5), // Emotional buying
    Q("Is this a limited-time offer influencing my decision", 3), // Scarcity influence
    Q("Could I borrow or rent instead of buying", 2), // Ownership alternatives
];

export const adjustmentYes = questions.reduce<number>((prev, curr) => {
    return prev + curr.yes;
}, 0);

export const adjustmentNo = questions.reduce<number>((prev, curr) => {
    return prev + curr.no;
}, 0);

export const deciderQuestions = questions.map((q) => {
    q.yes /= adjustmentYes;
    q.no /= adjustmentNo;
    return Object.freeze(q);
});


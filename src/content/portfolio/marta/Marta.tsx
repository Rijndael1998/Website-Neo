import { LazyLink } from "@/components/lazy/_lazyLink";
import Link from "next/link";

export const content = [
    "Taking care of three small children is not easy. Being a single mother is harder. Battling cancer is incredibly challenging beyond words. Yet, it showcases your immense strength, resilience, and determination. This was the reality for our friend Marta. She was suffering from breast cancer, a cancer likely to affect 1 in 8 women, while also being a single parent to three children.",

    "In December of 2022, Marta had very little, mostly just the essentials, and she was struggling to get by. She didn't have much furniture: an old table set, some drawers, a small sofa, and some chairs. One of the problems we recognized was her difficulty in drying clothes after they were washed. She was air-drying clothes on a simple clothes dryer, which often took over 24 hours to dry because of the poor weather. We also noted that she did not have a place to store clothes. She also expressed difficulty studying for her university course online.",

    <>{"My mom, Matylda, wanted to help her but neither she or I had the means to do so. We have helped her in the past with smaller things, but this was too big for the two of us to do alone. My mom turned to her "}<Link href="https://matilda-gifts.shop/">{"business"}</Link>{" and recognised that she could raise some money by selling candles that she made, and then use the revenue to get the things that Marta needed. The only problem that we had was the location to sell the candles."}</>,

    "Me and my mom were close friends with a priest in Bolton overseeing a Polish Catholic mission. He very politely allowed us to sell the candles at the churches that he performed mass in. ",

    <>{"We sold sold almost all of the candles and raised a total of £471. I also reached out to my employer, "} <Link href="/portfolio/ipf">IPF</Link>{", and they boosted the amount by £250. We used this money to buy her the furniture, a clothes drier and a new laptop for her classes along with gifts for her children for Christmas."}</>,
];

export const citations = [
    <LazyLink link="https://www.breastcancer.org/facts-statistics" />,
    <>
        American Cancer Society: “Breast Cancer Facts & Figures 2022-2024,” “Cancer Facts & Figures 2023.”
        Available at: <LazyLink link="https://www.cancer.org/content/dam/cancer-org/research/cancer-facts-and-statistics/breast-cancer-facts-and-figures/2022-2024-breast-cancer-fact-figures-acs.pdf" /> and <LazyLink link="https://www.cancer.org/content/dam/cancer-org/research/cancer-facts-and-statistics/annual-cancer-facts-and-figures/2023/2023-cancer-facts-and-figures.pdf" />.
    </>
];
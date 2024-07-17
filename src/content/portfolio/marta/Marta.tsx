import { LazyLink } from "@/components/lazy/_lazyLink";
import Link from "next/link";

export const content = [
    "Taking care of three small children is no easy task. Being a single mother adds to the challenge, and facing the battle with cancer can feel overwhelming. Our friend Marta embodied remarkable strength, resilience, and determination during such a difficult time. She was fighting breast cancer, an illness that affects 1 in 8 women, while also raising her three children on her own.",

    "By December 2022, Marta was struggling with only the bare essentials to get by. She had minimal furniture: an old table set, some drawers, a small sofa, and a few chairs. One of the issues she faced was finding an efficient way to dry clothes, as she relied on a simple clothes dryer that often took over 24 hours to dry due to the poor weather. Additionally, she didn't have sufficient storage for clothes and expressed challenges in studying for her university course online.",

    <>
        {"My mom, Matylda, and I wanted to assist her in a meaningful way. Although we had helped her with smaller tasks in the past, this time the need was greater than what we could manage on our own. My mom, who owns a small business, recognized an opportunity to raise some funds by selling handmade candles through her "}
        <Link href="https://matilda-gifts.shop/">{"shop"}</Link>
        {". However, finding a suitable place to sell the candles was a challenge."}
    </>,

    "We turned to a close family friend, a priest in Bolton overseeing a Polish Catholic mission, who graciously allowed us to sell the candles at the churches where he held masses.",

    <>
        {"Nearly all of the candles were sold, and we managed to raise a total of £471. In addition, my employer, "}
        <Link href="/portfolio/ipf">{"IPF"}</Link>
        {", generously contributed an additional £250. With the combined funds, we were able to purchase new furniture, a clothes drier, and a new laptop for Marta to use in her studies, along with Christmas gifts for her children."}
    </>,
];

export const citations = [
    <LazyLink key={"link1"} link="https://www.breastcancer.org/facts-statistics" />,
    <>
        American Cancer Society: “Breast Cancer Facts & Figures 2022-2024,” “Cancer Facts & Figures 2023.”
        Available at: <LazyLink link="https://www.cancer.org/content/dam/cancer-org/research/cancer-facts-and-statistics/breast-cancer-facts-and-figures/2022-2024-breast-cancer-fact-figures-acs.pdf" /> and <LazyLink link="https://www.cancer.org/content/dam/cancer-org/research/cancer-facts-and-statistics/annual-cancer-facts-and-figures/2023/2023-cancer-facts-and-figures.pdf" />.
    </>
];
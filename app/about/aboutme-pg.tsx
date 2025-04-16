'use client'

import "@/app/globals/globals.css";

const vidBackA  = "_aboutme/aboutme_a_back.mp4";
const vidFrontA = "_aboutme/aboutme_a_front.mp4";
const vidBackB  = "_aboutme/aboutme_b_back.mp4";
const vidFrontB = "_aboutme/aboutme_b_front.mp4";
const vidBackC  = "_aboutme/aboutme_c_back.mp4";
const vidFrontC = "_aboutme/aboutme_c_front.mp4";
const vidBackD  = "_aboutme/aboutme_d_back.mp4";
const vidFrontD = "_aboutme/aboutme_d_front.mp4";

import { IDoubleSideAboutCard, AboutCardContainer } from "@/app/globals/double-sided-cards";
import * as fonts from "@/app/globals/fonts";
import * as pages from "@/app/globals/pages-main";

const cardStyle = "group-hover:m-[-20px] md:group-hover:m-[-40px] 2xl:group-hover:m-[-60px] group-hover:w-[200px] md:group-hover:w-[320px] lg:group-hover:w-[400px] xl:group-hover:w-[440px] 2xl:group-hover:w-[540px] w-[160px] md:w-[240px] lg:w-[275px] xl:w-[320px] 2xl:w-[360px]"
const titleSmlTextStyle= `${fonts.dotoBlack.className} h-fit w-fit text-[8px] sm:text-[12px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] text-secColor leading-none tracking-tighter self-end my-[8px] laptop:my-[16px]`;
const titleTextStyle = `${fonts.dotoBlack.className} text-priColor text-[16px] sm:text-[36px] md:text-[44px] lg:text-[56px] 2xl:text-[64px] text-left text-balance leading-none -my-[2px] laptop:-my-[12px]`;

function DoubleSidedCardPageText() {
    return (
        <div className={`absolute left-0 bottom-0 w-full h-fit flex p-[24px] sm:p-[30px] md:p-[36px] lg:p-[42px] xl:p-[48px] place-items-end justify-self-center`}>
            <div className={`relative w-full h-fit flex-inline justify-self-start text-nowrap tracking-tighter`}>
                <p className={`${titleSmlTextStyle}`}>Get to know me</p>
                <p className={`${titleTextStyle}`}>EVELYN &quot;EEVEE&quot; YOUNGBLOOD</p>
            </div>
        </div>
    )
}

const cardMedia2: IDoubleSideAboutCard[] = [
    {
        cardVideoFront: vidFrontA,
        cardVideoBack: vidBackA,
        cardStyle: cardStyle,
        rotatedAngle: "rotate-[5deg]",
    },
    {
        cardVideoFront: vidFrontB,
        cardVideoBack: vidBackB,
        cardStyle: cardStyle,
        rotatedAngle: "rotate-[-5deg]",
    },
    {
        cardVideoFront: vidFrontC,
        cardVideoBack: vidBackC,
        cardStyle: cardStyle,
        rotatedAngle: "rotate-[5deg]",
    },
    {
        cardVideoFront: vidFrontD,
        cardVideoBack: vidBackD,
        cardStyle: cardStyle,
        rotatedAngle: "rotate-[-5deg]",
    },
]

export function AboutMePage() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-hidden">
            <AboutCardContainer dataArray={cardMedia2} />
            <DoubleSidedCardPageText />
        </pages.GroupProjectPage>

    )
}

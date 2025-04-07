'use client'

import "@/app/globals/globals.css";
import * as themes from "@/tailwind.config";

import vidBackA from "@/app/assets/videos/_aboutme/aboutme_a_back.mp4";
import vidFrontA from "@/app/assets/videos/_aboutme/aboutme_a_front.mp4";
import vidBackB from "@/app/assets/videos/_aboutme/aboutme_b_back.mp4";
import vidFrontB from "@/app/assets/videos/_aboutme/aboutme_b_front.mp4";
import vidBackC from "@/app/assets/videos/_aboutme/aboutme_c_back.mp4";
import vidFrontC from "@/app/assets/videos/_aboutme/aboutme_c_front.mp4";
import vidBackD from "@/app/assets/videos/_aboutme/aboutme_d_back.mp4";
import vidFrontD from "@/app/assets/videos/_aboutme/aboutme_d_front.mp4";

import { DoubleSidedAboutCardContainer, IDoubleSideAboutCard } from "@/app/globals/double-sided-cards";
import * as fonts from "@/app/globals/fonts";
import * as pages from "@/app/globals/pages-main";

const cardStyle = "group-hover:m-[-20px] md:group-hover:m-[-40px] 2xl:group-hover:m-[-60px] group-hover:w-[200px] md:group-hover:w-[320px] lg:group-hover:w-[400px] xl:group-hover:w-[440px] 2xl:group-hover:w-[540px] w-[160px] md:w-[240px] lg:w-[275px] xl:w-[320px] 2xl:w-[360px]"
const titleSmlTextStyle= `${fonts.dotoBold.className} h-fit w-fit text-[9px] sm:text-[12px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] text-secColor leading-none tracking-tighter self-end my-[8px] laptop:my-[16px]`;
const titleTextStyle = `${fonts.dotoBlack.className} text-priColor text-[28px] sm:text-[40px] md:text-[48px] lg:text-[64px] 2xl:text-[72px] text-left text-balance leading-none -my-[2px] laptop:-my-[12px]`;

function LandingPageText() {
    return (
        <div className={`relative w-full h-full flex px-[24px] sm:px-[30px] md:px-[36px] lg:px-[42px] xl:px-[48px] place-items-end justify-self-center`}>
            <div className={`relative w-full h-fit flex-inline justify-self-start text-nowrap tracking-tighter`}>
                <p className={`${titleSmlTextStyle}`}>Get to know me</p>
                <p className={`${titleTextStyle}`}>EVELYN "EEVEE" YOUNGBLOOD</p>
            </div>
        </div>
    )
}

const cardMedia: IDoubleSideAboutCard[] = [
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
            <LandingPageText />
            <DoubleSidedAboutCardContainer dataArray={cardMedia} />
        </pages.GroupProjectPage>

    )
}

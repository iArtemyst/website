'use client'

import { DoubleSidedCardContainer, IDoubleSideCard } from "@/app/globals/double-sided-cards";
import * as fonts from "@/app/globals/fonts";
import "@/app/globals/globals.css";
import * as pages from "@/app/globals/pages-main";

const vidBackA = "_landing/grp_card_3d_back.mp4";
const vidFrontA = "_landing/grp_card_3d_front.mp4";
const vidBackB = "_landing/grp_card_code_back.mp4";
const vidFrontB = "_landing/grp_card_code_front.mp4";
const vidBackC = "_landing/grp_card_game_back.mp4";
const vidFrontC = "_landing/grp_card_game_front.mp4";
const vidBackD = "_landing/grp_card_motion_back.mp4";
const vidFrontD = "_landing/grp_card_motion_front.mp4";

const group3D = './grpProjects3D';
const groupCode = './grpProjectsCode';
const groupGame = './grpProjectsGame';
const groupMotion = './grpProjectsMotion';

const width = "w-[120px] md:w-[240px] lg:w-[275px] xl:w-[320px] 2xl:w-[360px]";
const hWidth = "group-hover:w-[200px] md:group-hover:w-[320px] lg:group-hover:w-[400px] xl:group-hover:w-[440px] 2xl:group-hover:w-[540px]";
const hMargin = "group-hover:m-[-20px] md:group-hover:m-[-40px] 2xl:group-hover:m-[-60px]";
const cMargin = "mx-[24px]";
const paraTextStyle = `${fonts.dotoBlack.className} text-balance text-[6px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px]`;
const titleSmlTextStyle= `${fonts.dotoBlack.className} h-fit w-fit text-[9px] sm:text-[12px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] text-secColor leading-none tracking-tighter self-end my-[4px] sm:my-[10px] md:my-[16px]`;
const titleTextStyle = `${fonts.dotoBlack.className} text-priColor text-[28px] sm:text-[40px] md:text-[48px] lg:text-[64px] 2xl:text-[72px] text-left text-balance leading-none -my-[2px] sm:-my-[6px] md:-my-[12px]`;

function LandingPageText() {
    return (
        <div className={`absolute w-[90%] sm:w-[80%] h-full flex p-[36px] md:p-[64px] xl:p-[72px] place-items-end justify-self-center`}>
            <div className={`relative w-fit h-fit flex-inline justify-self-start text-nowrap`}>
                <p className={`${titleSmlTextStyle}`}>Hello, I&apos;m Eevee, and I am a </p>
                <p className={`${titleTextStyle}`}>CREATIVE</p>
                <p className={`${titleTextStyle}`}>DESIGNER</p>
            </div>
            
            <div className="relative ml-[12px] justify-self-end w-full text-secColor text-right">
                <p className={`${paraTextStyle} text-balance`}>I make things, all sorts of things. <br/> I like to model stuff, animate things, generate procedural systems, create better experiences, and make things beautiful. Welcome to my portfolio.</p>
            </div>
        </div>
    )
}

const cardMedia: IDoubleSideCard[] = [
    {
        cardLink: group3D,
        cardTitle: "3D",
        cardDescription: "Description",
        cardVideoFront: vidFrontA,
        cardVideoBack: vidBackA,
        rotatedAngle: "rotate-[8deg]",
        cardWidth: width,
        hoverWidth: hWidth,
        hoverMargin: hMargin,
        conMargin: cMargin,
    },
    {
        cardLink: groupGame,
        cardTitle: "Game Design and Tech Art",
        cardDescription: "Description",
        cardVideoFront: vidFrontC,
        cardVideoBack: vidBackC,
        rotatedAngle: "rotate-[-8deg]",
        cardWidth: width,
        hoverWidth: hWidth,
        hoverMargin: hMargin,
        conMargin: cMargin,
    },
    {
        cardLink: groupMotion,
        cardTitle: "Motion Design and UI/UX",
        cardDescription: "Description",
        cardVideoFront: vidFrontD,
        cardVideoBack: vidBackD,
        rotatedAngle: "rotate-[8deg]",
        cardWidth: width,
        hoverWidth: hWidth,
        hoverMargin: hMargin,
        conMargin: cMargin,
    },
    {
        cardLink: groupCode,
        cardTitle: "Web Design and Code Playground",
        cardDescription: "Description",
        cardVideoFront: vidFrontB,
        cardVideoBack: vidBackB,
        rotatedAngle: "rotate-[-8deg]",
        cardWidth: width,
        hoverWidth: hWidth,
        hoverMargin: hMargin,
        conMargin: cMargin,
    },
]

export default function LandingMain() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-hidden">
            <LandingPageText />
            <DoubleSidedCardContainer dataArray={cardMedia} />
        </pages.GroupProjectPage>
    )
}

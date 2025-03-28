'use client'

import "./globals/globals.css";
import * as themes from "@/tailwind.config";

import vidBackA from "/app/assets/videos/grp_card_3d_back.mp4";
import vidFrontA from "/app/assets/videos/grp_card_3d_front.mp4";
import vidBackB from "/app/assets/videos/grp_card_code_back.mp4";
import vidFrontB from "/app/assets/videos/grp_card_code_front.mp4";
import vidBackC from "/app/assets/videos/grp_card_game_back.mp4";
import vidFrontC from "/app/assets/videos/grp_card_game_front.mp4";
import vidBackD from "/app/assets/videos/grp_card_motion_back.mp4";
import vidFrontD from "/app/assets/videos/grp_card_motion_front.mp4";

const group3D = './grpProjects3D';
const groupCode = './grpProjectsCode';
const groupGame = './grpProjectsGame';
const groupMotion = './grpProjectsMotion';

import { DoubleSidedCardContainer, IDoubleSideCard } from "@/app/globals/card-generator";
import * as fonts from "@/app/globals/fonts";
import * as pages from "@/app/globals/pages-main";

const width = "w-[160px] laptop:w-[240px] desktop:w-[320px] xl:w-[400px]";
const hWidth = "group-hover:w-[360px]";
const hMargin = "group-hover:m-[-60px]";
const cMargin = "mx-[24px]";
const columnAmount = 'grid-cols-2 laptop:grid-cols-4';
const paraTextStyle = `${fonts.dotoBlack.className} text-balance text-[10px] laptop:text-[14px] desktop:text-[32px]`;
const titleSmlTextStyle= `${fonts.dotoBold.className} h-fit w-fit text-[9px] laptop:text-[16px] desktop:text-[32px] text-secColor leading-none tracking-tighter self-end my-[8px] laptop:my-[16px]`;
const titleTextStyle = `${fonts.dotoBlack.className} text-priColor w-[600px] text-[28px] laptop:text-[48px] desktop:text-[72px] text-left text-balance leading-none -my-[2px] laptop:-my-[12px]`;

function LandingPageText() {
    return (
        <div className={`absolute left-[50%] -translate-x-[50%] bottom-0 w-[90%] tablet:w-[85%] laptop:w-[80%] xl:w-[50%] h-auto grid grid-cols-2 py-[8px] tablet:py-[24px] laptop:py-[24px] place-items-end`}>
            <div className={`w-fit h-fit flex-inline justify-self-start`}>
                <p className={`${titleSmlTextStyle}`}>Hello, I'm Eevee, and I am a </p>
                <p className={`${titleTextStyle}`}>CREATIVE</p>
                <p className={`${titleTextStyle}`}>DESIGNER</p>
            </div>
            
            <div className="relative justify-self-end w-full text-secColor text-right ">
                <p className={`${paraTextStyle}`}>I make things, all sorts of things. <br/> I like to model stuff, animate things, generate procedural systems, create better experiences, and make things beautiful. Welcome to my portfolio.</p>
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
        rotatedAngle: "rotate-[15deg]",
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
        rotatedAngle: "rotate-[-15deg]",
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
        rotatedAngle: "rotate-[15deg]",
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
        rotatedAngle: "rotate-[-15deg]",
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
            <DoubleSidedCardContainer dataArray={cardMedia} gridCols={columnAmount} />
        </pages.GroupProjectPage>

    )
}

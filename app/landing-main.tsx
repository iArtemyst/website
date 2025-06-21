'use client'

import { LandingCardContainer, IDoubleSideLandingCard } from "@/app/globals/double-sided-cards";
import * as fonts from "@/app/globals/fonts";
import "@/app/globals/globals.css";
import * as pages from "@/app/globals/pages-main";
import { CheckIfMobileBrowser } from "./globals/mobile-check";
import { NoSelect } from "./globals/styles";
import { shuffle_landing_cards } from "./globals/shuffle-functions";

const vidBackA = "_landing/grp_card_3d_back.mp4";
const vidFrontA = "_landing/grp_card_3d_front_v3.mp4";
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

const cardStyle = "w-[120px] md:w-[240px] lg:w-[275px] xl:w-[320px] 2xl:w-[360px] group-hover:w-[200px] md:group-hover:w-[320px] lg:group-hover:w-[400px] xl:group-hover:w-[440px] 2xl:group-hover:w-[540px] group-hover:m-[-20px] md:group-hover:m-[-40px] 2xl:group-hover:m-[-60px]";
const paraTextStyle = `${fonts.dotoBlack.className} text-balance text-[6px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px]`;
const titleSmlTextStyle= `${fonts.dotoBlack.className} h-fit w-fit text-[9px] sm:text-[12px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] text-secColor leading-none tracking-tighter self-end my-[4px] sm:my-[10px] md:my-[16px]`;
const titleTextStyle = `${fonts.dotoBlack.className} text-priColor text-[28px] sm:text-[40px] md:text-[48px] lg:text-[64px] 2xl:text-[72px] text-left text-balance leading-none -my-[2px] sm:-my-[6px] md:-my-[12px]`;

function LandingPageText() {
    return (
        <div className={`${CheckIfMobileBrowser() ? "flex-inline" : "flex"} absolute w-full h-fit bottom-0 left-[50%] -translate-x-[50%] z-10 p-[36px] sm:p-[48px] md:p-[64px] xl:p-[72px] place-items-end justify-self-center`}
                style={NoSelect}>
            <div className={`${CheckIfMobileBrowser() ? "" : ""} relative w-fit h-fit flex-inline text-nowrap shrink`}>
                <p className={`${titleSmlTextStyle} ${CheckIfMobileBrowser() ? "justify-self-end" : "justify-self-start"}`}>Hello, I&apos;m Eevee, and I am a </p>
                    <div>
                        <p className={`${titleTextStyle} text-nowrap`}>CREATIVE DESIGNER</p>
                    </div>
            </div>
            
            <div className={`${CheckIfMobileBrowser() ? "text-right mt-[4px] w-[80%] text-pretty" : " w-full text-balance"} text-right relative justify-self-end  text-secColor`}>
                <p className={`${paraTextStyle} text-balance`}>I make things, all sorts of things. <br/> I like to model stuff, animate things, generate procedural systems, create better experiences, and make things beautiful. Welcome to my portfolio.</p>
            </div>
        </div>
    )
}

function randomgenerate() {
    const max = 20;
    let random = (max * -1) + Math.floor(((Math.random() * max)));

    if (random >= 0 || random <= 5 ) {
        random += 5;
    }
    if (random < 0 || random >= -5) {
        random -= 5;
    }

    return random
}

const card3dVideos : string[] = [
    "_landing/grp_card_3d_front_v1.mp4",
    "_landing/grp_card_3d_front_v2.mp4",
    "_landing/grp_card_3d_front_v3.mp4",
    "_landing/grp_card_3d_front_v4.mp4",
    "_landing/grp_card_3d_front_v5.mp4",
    "_landing/grp_card_3d_front_v6.mp4",
]

const cardCodeVideos : string[] = [
    "_landing/grp_card_code_front_v1.mp4",
    "_landing/grp_card_code_front_v2.mp4",
]

const cardMotionVideos : string[] = [
    "_landing/grp_card_motion_front_v1.mp4",
    "_landing/grp_card_motion_front_v2.mp4",
    "_landing/grp_card_motion_front_v3.mp4",
    "_landing/grp_card_motion_front_v4.mp4",
    "_landing/grp_card_motion_front_v5.mp4",
    "_landing/grp_card_motion_front_v6.mp4",
]

const cardGameVideos : string[] = [
    "_landing/grp_card_game_front_v1.mp4",
    "_landing/grp_card_game_front_v2.mp4",
    "_landing/grp_card_game_front_v3.mp4",
    "_landing/grp_card_game_front_v4.mp4",
    "_landing/grp_card_game_front_v5.mp4",
]


let rotdegrees1 = randomgenerate()
let rotdegrees2 = randomgenerate()
let rotdegrees3 = randomgenerate()
let rotdegrees4 = randomgenerate()

const cardMedia: IDoubleSideLandingCard[] = [
    {
        cardLink: group3D,
        cardTitle: "3D",
        cardDescription: "Description",
        cardVideoFront: card3dVideos[Math.floor(Math.random() * (card3dVideos.length))],
        cardVideoBack: vidBackA,
        rotatedAngle: `rotate-[${rotdegrees1}deg]`,
        cardStyle: cardStyle,
    },
    {
        cardLink: groupGame,
        cardTitle: "Game Design and Tech Art",
        cardDescription: "Description",
        cardVideoFront: cardGameVideos[Math.floor(Math.random() * (cardGameVideos.length))],
        cardVideoBack: vidBackC,
        rotatedAngle: `rotate-[${rotdegrees2}deg]`,
        cardStyle: cardStyle,
    },
    {
        cardLink: groupMotion,
        cardTitle: "Motion Design and UI/UX",
        cardDescription: "Description",
        cardVideoFront: cardMotionVideos[Math.floor(Math.random() * (cardMotionVideos.length))],
        cardVideoBack: vidBackD,
        rotatedAngle: `rotate-[${rotdegrees3}deg]`,
        cardStyle: cardStyle,
    },
    {
        cardLink: groupCode,
        cardTitle: "Web Design and Code Playground",
        cardDescription: "Description",
        cardVideoFront: cardCodeVideos[Math.floor(Math.random() * (cardCodeVideos.length))],
        cardVideoBack: vidBackB,
        rotatedAngle: `rotate-[${rotdegrees4}deg]`,
        cardStyle: cardStyle,
    },
]

export default function LandingMain() {
    let shuffled_cards = shuffle_landing_cards(cardMedia)
    
    return (
        <pages.GroupProjectPage overflowStyle="overflow-hidden">
            <LandingPageText />
            <LandingCardContainer dataArray={shuffled_cards} />
        </pages.GroupProjectPage>
    )
}

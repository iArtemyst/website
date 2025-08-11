'use client'

import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";
import { MediaType } from "@/app/globals/project-galleries";
import { CheckIfMobileBrowser } from "@/app/globals/mobile-check";
import { useEffect, useState } from "react";
import Loading from "../globals/loading-text";

const vidAnimLoop001 = "_motionui/_loops/anim-loop_001_540px.mp4";
const vidAnimLoop002 = "_motionui/_loops/anim-loop_002_540px.mp4";
const vidAnimLoop003 = "_motionui/_loops/anim-loop_003_540px.mp4";
const vidAnimLoop004 = "_motionui/_loops/anim-loop_004_540px.mp4";
const vidAnimLoop005 = "_motionui/_loops/anim-loop_005_540px.mp4";
const vidAnimLoop006 = "_motionui/_loops/anim-loop_006_540px.mp4";
const vidAnimLoop007 = "_motionui/_loops/anim-loop_007_540px.mp4";
const vidAnimLoop008 = "_motionui/_loops/anim-loop_008_540px.mp4";
const vidAnimLoop009 = "_motionui/_loops/anim-loop_009_540px.mp4";
const vidAnimLoop010 = "_motionui/_loops/anim-loop_010_540px.mp4";
const vidAnimLoop011 = "_motionui/_loops/anim-loop_011_540px.mp4";
const vidAnimLoop012 = "_motionui/_loops/anim-loop_012_540px.mp4";
const vidAnimLoop013 = "_motionui/_loops/anim-loop_013_540px.mp4";
const vidAnimLoop014 = "_motionui/_loops/anim-loop_014_540px.mp4";
const vidAnimLoop015 = "_motionui/_loops/anim-loop_015_540px.mp4";
const vidAnimLoop016 = "_motionui/_loops/anim-loop_016_540px.mp4";
const vidAnimLoop017 = "_motionui/_loops/anim-loop_017_540px.mp4";
const vidAnimLoop018 = "_motionui/_loops/anim-loop_018_540px.mp4";
const vidAnimLoop019 = "_motionui/_loops/anim-loop_019_540px.mp4";
const vidAnimLoop020 = "_motionui/_loops/anim-loop_020_540px.mp4";
const vidAnimLoop021 = "_motionui/_loops/anim-loop_021_540px.mp4";

export interface IVideoData {
    vidLink: string,
}

const cellData: string[] = [
    vidAnimLoop017,
    vidAnimLoop019,
    vidAnimLoop005,
    vidAnimLoop001,
    vidAnimLoop002,
    vidAnimLoop003,
    vidAnimLoop004,
    vidAnimLoop006,
    vidAnimLoop007,
    vidAnimLoop008,
    vidAnimLoop018,
    vidAnimLoop009,
    vidAnimLoop010,
    vidAnimLoop011,
    vidAnimLoop012,
    vidAnimLoop013,
    vidAnimLoop014,
    vidAnimLoop015,
    vidAnimLoop016,
    vidAnimLoop020,
    vidAnimLoop021,
];

function BentoBoxA() {
    let isMobile = CheckIfMobileBrowser()
    const [shuffledCards, setArray] = useState<string[]>([])
    useEffect(() => {
        setArray(shuffle_about_cards(cellData))
    }, []);

    function VideoCell({link}:{link:string}){
        return (
            <div>
                {
                    isMobile === false ?
                    <bentos.CellMediaOnClick mediaLink={link} mediaType={MediaType.Video} mediaText="" cellSpan="col-span-1"  hoverTextColor="text-textColor"/>
                    :
                    <bentos.CellMediaOnClickMobile mediaLink={link} mediaType={MediaType.Video} mediaText="" cellSpan="col-span-1"  hoverTextColor="text-textColor"/>
                }
            </div>

        )
    }

    function shuffle_about_cards(new_cards: string[]) 
    {
        let shuffled_array = structuredClone(new_cards);

        for (let i = new_cards.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i - 1));
            [shuffled_array[i], shuffled_array[j]] = [shuffled_array[j], shuffled_array[i]];
        }
        return shuffled_array;
    }

    return shuffledCards.length != 0 ?
        <div className={`${isMobile ? "grid-cols-2 my-[4px]" : "grid-cols-3 my-[24px]"} relative z-0 grid w-[80%] h-auto justify-self-center rounded-3xl place-content-center gap-[12px] text-white`}>
            {
                shuffledCards.map((data, i) => <VideoCell link={data} key={i}/>)
            }
        </div>
        :
        <Loading />
}

export default function ProjectLoopAnims() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
                <bentos.ProjectDetailTextTop 
                    TitleText="LOOPING DOODLES" 
                    MoreText="I consider these animations my doodles. While these started as simple loops, I quickly expanded into procedurally generated motion and modeling systems, simulations, and more, while still challenging myself to create an appealing loop. For more of my Looping Doodles, please visit my Artstation Page."/>
                <BentoBoxA />
        </pages.GroupProjectPage>
    )
}

'use client'

import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";

import vidAnimLoop007 from "@/app/assets/_motionui/_loops/anim-loop_06.mp4";
import vidAnimLoop009 from "@/app/assets/_motionui/_loops/anim-loop_08.mp4";
import vidAnimLoop010 from "@/app/assets/_motionui/_loops/anim-loop_09.mp4";
import vidAnimLoop012 from "@/app/assets/_motionui/_loops/anim-loop_11.mp4";
import vidAnimLoop013 from "@/app/assets/_motionui/_loops/anim-loop_12.mp4";
import vidAnimLoop014 from "@/app/assets/_motionui/_loops/anim-loop_13.mp4";
import vidAnimLoop015 from "@/app/assets/_motionui/_loops/anim-loop_14.mp4";
import vidAnimLoop018 from "@/app/assets/_motionui/_loops/anim-loop_17.mp4";
import vidAnimLoop022 from "@/app/assets/_motionui/_loops/anim-loop_21.mp4";
import vidAnimLoop025 from "@/app/assets/_motionui/_loops/anim-loop_24.mp4";
import vidAnimLoop027 from "@/app/assets/_motionui/_loops/anim-loop_26.mp4";
import vidAnimLoop028 from "@/app/assets/_motionui/_loops/anim-loop_27.mp4";
import vidAnimLoop031 from "@/app/assets/_motionui/_loops/anim-loop_30.mp4";
import vidAnimLoop032 from "@/app/assets/_motionui/_loops/anim-loop_31.mp4";
import vidAnimLoop033 from "@/app/assets/_motionui/_loops/anim-loop_32.mp4";
import vidAnimLoop034 from "@/app/assets/_motionui/_loops/anim-loop_33.mp4";
import vidAnimLoop035 from "@/app/assets/_motionui/_loops/anim-loop_34.mp4";
import vidAnimLoop037 from "@/app/assets/_motionui/_loops/anim-loop_36.mp4";
import vidAnimLoop039 from "@/app/assets/_motionui/_loops/anim-loop_38.mp4";
import vidAnimLoop041 from "@/app/assets/_motionui/_loops/anim-loop_40.mp4";
import vidAnimLoop042 from "@/app/assets/_motionui/_loops/anim-loop_41.mp4";

export interface IVideoData {
    vidLink: string,
}

function BentoBoxA() {
    const cellData: string[] = [
        vidAnimLoop035,
        vidAnimLoop039,
        vidAnimLoop013,
        vidAnimLoop007,
        vidAnimLoop009,
        vidAnimLoop010,
        vidAnimLoop012,
        vidAnimLoop014,
        vidAnimLoop015,
        vidAnimLoop018,
        vidAnimLoop037,
        vidAnimLoop022,
        vidAnimLoop025,
        vidAnimLoop027,
        vidAnimLoop028,
        vidAnimLoop031,
        vidAnimLoop032,
        vidAnimLoop033,
        vidAnimLoop034,
        vidAnimLoop041,
        vidAnimLoop042,
    ];

    function VideoCell({link}:{link:string}){
        return (
            <bentos.CellMediaOnClick mediaLink={link} mediaText="" cellSpan="col-span-1"  hoverTextColor="text-textColor"/>
        )
    }

    return (
        <div className="relative z-0 grid grid-cols-2 md:grid-cols-3 w-[80%] h-auto justify-self-center rounded-3xl place-content-center gap-[12px] my-[24px] hover:z-20 text-white hover:cursor-pointer">
            {
            cellData.map((data, i) => {
                return <VideoCell link={data} key={i}/>
            })
            }
        </div>
    )
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

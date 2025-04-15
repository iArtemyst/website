'use client'

import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";
import { MediaType } from "@/app/globals/project-galleries";

const vidAnimLoop007 = "_motionui/_loops/anim-loop_06.mp4";
const vidAnimLoop009 = "_motionui/_loops/anim-loop_08.mp4";
const vidAnimLoop010 = "_motionui/_loops/anim-loop_09.mp4";
const vidAnimLoop012 = "_motionui/_loops/anim-loop_11.mp4";
const vidAnimLoop013 = "_motionui/_loops/anim-loop_12.mp4";
const vidAnimLoop014 = "_motionui/_loops/anim-loop_13.mp4";
const vidAnimLoop015 = "_motionui/_loops/anim-loop_14.mp4";
const vidAnimLoop018 = "_motionui/_loops/anim-loop_17.mp4";
const vidAnimLoop022 = "_motionui/_loops/anim-loop_21.mp4";
const vidAnimLoop025 = "_motionui/_loops/anim-loop_24.mp4";
const vidAnimLoop027 = "_motionui/_loops/anim-loop_26.mp4";
const vidAnimLoop028 = "_motionui/_loops/anim-loop_27.mp4";
const vidAnimLoop031 = "_motionui/_loops/anim-loop_30.mp4";
const vidAnimLoop032 = "_motionui/_loops/anim-loop_31.mp4";
const vidAnimLoop033 = "_motionui/_loops/anim-loop_32.mp4";
const vidAnimLoop034 = "_motionui/_loops/anim-loop_33.mp4";
const vidAnimLoop035 = "_motionui/_loops/anim-loop_34.mp4";
const vidAnimLoop037 = "_motionui/_loops/anim-loop_36.mp4";
const vidAnimLoop039 = "_motionui/_loops/anim-loop_38.mp4";
const vidAnimLoop041 = "_motionui/_loops/anim-loop_40.mp4";
const vidAnimLoop042 = "_motionui/_loops/anim-loop_41.mp4";

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
            <bentos.CellMediaOnClick mediaLink={link} mediaType={MediaType.Video} mediaText="" cellSpan="col-span-1"  hoverTextColor="text-textColor"/>
        )
    }

    return (
        <div className="relative z-0 grid grid-cols-2 md:grid-cols-3 w-[80%] h-auto justify-self-center rounded-3xl place-content-center gap-[12px] my-[24px] text-white hover:cursor-pointer">
            {
                cellData.map((data, i) => <VideoCell link={data} key={i}/>)
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

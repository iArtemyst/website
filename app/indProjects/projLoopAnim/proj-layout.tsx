'use client'

import React from "react";
import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import { CardHoverFX } from "@/app/globals/card-hover-fx";
import * as fonts from "@/app/globals/fonts";

import vidAnimLoop001 from "@/app/assets/videos/_motionui/_loops/anim-loop_00.mp4";
import vidAnimLoop002 from "@/app/assets/videos/_motionui/_loops/anim-loop_01.mp4";
import vidAnimLoop003 from "@/app/assets/videos/_motionui/_loops/anim-loop_02.mp4";
import vidAnimLoop004 from "@/app/assets/videos/_motionui/_loops/anim-loop_03.mp4";
import vidAnimLoop005 from "@/app/assets/videos/_motionui/_loops/anim-loop_04.mp4";
import vidAnimLoop006 from "@/app/assets/videos/_motionui/_loops/anim-loop_05.mp4";
import vidAnimLoop007 from "@/app/assets/videos/_motionui/_loops/anim-loop_06.mp4";
import vidAnimLoop008 from "@/app/assets/videos/_motionui/_loops/anim-loop_07.mp4";
import vidAnimLoop009 from "@/app/assets/videos/_motionui/_loops/anim-loop_08.mp4";
import vidAnimLoop010 from "@/app/assets/videos/_motionui/_loops/anim-loop_09.mp4";
import vidAnimLoop011 from "@/app/assets/videos/_motionui/_loops/anim-loop_10.mp4";
import vidAnimLoop012 from "@/app/assets/videos/_motionui/_loops/anim-loop_11.mp4";
import vidAnimLoop013 from "@/app/assets/videos/_motionui/_loops/anim-loop_12.mp4";
import vidAnimLoop014 from "@/app/assets/videos/_motionui/_loops/anim-loop_13.mp4";
import vidAnimLoop015 from "@/app/assets/videos/_motionui/_loops/anim-loop_14.mp4";
import vidAnimLoop016 from "@/app/assets/videos/_motionui/_loops/anim-loop_15.mp4";
import vidAnimLoop017 from "@/app/assets/videos/_motionui/_loops/anim-loop_16.mp4";
import vidAnimLoop018 from "@/app/assets/videos/_motionui/_loops/anim-loop_17.mp4";
import vidAnimLoop019 from "@/app/assets/videos/_motionui/_loops/anim-loop_18.mp4";
import vidAnimLoop020 from "@/app/assets/videos/_motionui/_loops/anim-loop_19.mp4";
import vidAnimLoop021 from "@/app/assets/videos/_motionui/_loops/anim-loop_20.mp4";
import vidAnimLoop022 from "@/app/assets/videos/_motionui/_loops/anim-loop_21.mp4";
import vidAnimLoop023 from "@/app/assets/videos/_motionui/_loops/anim-loop_22.mp4";
import vidAnimLoop024 from "@/app/assets/videos/_motionui/_loops/anim-loop_23.mp4";
import vidAnimLoop025 from "@/app/assets/videos/_motionui/_loops/anim-loop_24.mp4";
import vidAnimLoop026 from "@/app/assets/videos/_motionui/_loops/anim-loop_25.mp4";
import vidAnimLoop027 from "@/app/assets/videos/_motionui/_loops/anim-loop_26.mp4";
import vidAnimLoop028 from "@/app/assets/videos/_motionui/_loops/anim-loop_27.mp4";
import vidAnimLoop029 from "@/app/assets/videos/_motionui/_loops/anim-loop_28.mp4";
import vidAnimLoop030 from "@/app/assets/videos/_motionui/_loops/anim-loop_29.mp4";
import vidAnimLoop031 from "@/app/assets/videos/_motionui/_loops/anim-loop_30.mp4";
import vidAnimLoop032 from "@/app/assets/videos/_motionui/_loops/anim-loop_31.mp4";
import vidAnimLoop033 from "@/app/assets/videos/_motionui/_loops/anim-loop_32.mp4";
import vidAnimLoop034 from "@/app/assets/videos/_motionui/_loops/anim-loop_33.mp4";
import vidAnimLoop035 from "@/app/assets/videos/_motionui/_loops/anim-loop_34.mp4";
import vidAnimLoop036 from "@/app/assets/videos/_motionui/_loops/anim-loop_35.mp4";
import vidAnimLoop037 from "@/app/assets/videos/_motionui/_loops/anim-loop_36.mp4";
import vidAnimLoop038 from "@/app/assets/videos/_motionui/_loops/anim-loop_37.mp4";
import vidAnimLoop039 from "@/app/assets/videos/_motionui/_loops/anim-loop_38.mp4";
import vidAnimLoop040 from "@/app/assets/videos/_motionui/_loops/anim-loop_39.mp4";
import vidAnimLoop041 from "@/app/assets/videos/_motionui/_loops/anim-loop_40.mp4";
import vidAnimLoop042 from "@/app/assets/videos/_motionui/_loops/anim-loop_41.mp4";

function ProjectDetailText({TitleText="", MoreText=""}:{TitleText:String, MoreText:String}) {
    return (
        <div className="relative w-[80%] grid grid-rows-auto h-fit justify-self-center border-white border-[1px] gap-[8px] px-[16px] py-[8px] mb-[24px]">

            <div className={`${fonts.dotoBlack.className} text-priColor w-full text-[48px] text-left text-nowrap leading-none relative h-auto content-center`}>
                <p>{TitleText}</p>
            </div>

            <div className={`${fonts.dotoBlack.className} text-textSml relative flex-row right-0 bottom-0 w-full text-secColor text-left`}>
                <p>{MoreText}</p>
            </div>

            <div>
                <p className={`${fonts.dotoReg.className} text-left text-gray-400 text-textSml h-fit`}>Hover Over a Video to Play</p>
            </div>
        </div>
    )
}

function ImportVideoMute({vidLink}:{vidLink:string}) {
    return (
        <video src={vidLink} width="100%" height="auto" muted loop className="self-center"/>
    )
}

function BentoBoxA() {
    return (
        <div className="relative z-0 grid grid-cols-3 grid-rows-auto w-[80%] h-auto justify-self-center rounded-3xl place-content-center gap-[12px] text-white
                        hover:cursor-pointer">
                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidAnimLoop035} />
                </bentos.Cell1ColChildrenVideo>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidAnimLoop039} />
                </bentos.Cell1ColChildrenVideo>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidAnimLoop013} />
                </bentos.Cell1ColChildrenVideo>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidAnimLoop007} />
                </bentos.Cell1ColChildrenVideo>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidAnimLoop009} />
                </bentos.Cell1ColChildrenVideo>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidAnimLoop010} />
                </bentos.Cell1ColChildrenVideo>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidAnimLoop012} />
                </bentos.Cell1ColChildrenVideo>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidAnimLoop014} />
                </bentos.Cell1ColChildrenVideo>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidAnimLoop015} />
                </bentos.Cell1ColChildrenVideo>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidAnimLoop018} />
                </bentos.Cell1ColChildrenVideo>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidAnimLoop037} />
                </bentos.Cell1ColChildrenVideo>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidAnimLoop022} />
                </bentos.Cell1ColChildrenVideo>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidAnimLoop025} />
                </bentos.Cell1ColChildrenVideo>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidAnimLoop027} />
                </bentos.Cell1ColChildrenVideo>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidAnimLoop028} />
                </bentos.Cell1ColChildrenVideo>


                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidAnimLoop031} />
                </bentos.Cell1ColChildrenVideo>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidAnimLoop032} />
                </bentos.Cell1ColChildrenVideo>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidAnimLoop033} />
                </bentos.Cell1ColChildrenVideo>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidAnimLoop034} />
                </bentos.Cell1ColChildrenVideo>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidAnimLoop041} />
                </bentos.Cell1ColChildrenVideo>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidAnimLoop042} />
                </bentos.Cell1ColChildrenVideo>
        </div>
    )
}

export default function ProjectLoopAnims() {
    return (
        <div className="absolute left-0 right-0 top-0 bottom-0 overflow-scroll no-scrollbar bg-bgColor py-[48px]">
            <ProjectDetailText 
                TitleText="LOOPING DOODLES" 
                MoreText="I consider these animations my doodles. While these started as simple loops, I quickly expanded into procedurally generated motion and modeling systems, simulations, and more, while still challenging myself to create an appealing loop. For more of my Looping Doodles, please visit my Artstation Page."/>
            <BentoBoxA />
        </div>
    )
}

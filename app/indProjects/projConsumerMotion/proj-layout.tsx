'use client'

import React from "react";
import "@/app/globals/globals.css";
import Link from "next/link";
import { CardHoverFX } from "@/app/globals/card-hover-fx";

import * as fonts from "@/app/globals/fonts";
import * as bentos from "@/app/globals/bento-boxes";

import imgConMotionA01 from "@/app/assets/images/_motionui/_consumermotion/MidMark_Stills0.png";
import imgConMotionA02 from "@/app/assets/images/_motionui/_consumermotion/MidMark_Stills1.png";
import imgConMotionA03 from "@/app/assets/images/_motionui/_consumermotion/MidMark_Stills2.png";
import imgConMotionA04 from "@/app/assets/images/_motionui/_consumermotion/MidMark_Stills3.png";
import imgConMotionA05 from "@/app/assets/images/_motionui/_consumermotion/MidMark_Stills4.png";
import imgConMotionB01 from "@/app/assets/images/_motionui/_consumermotion/PepsicoRD-Stills00.png";
import imgConMotionB02 from "@/app/assets/images/_motionui/_consumermotion/PepsicoRD-Stills01.png";
import imgConMotionC01 from "@/app/assets/images/_motionui/_consumermotion/PepsicoRD-Stills02.png";
import imgConMotionC02 from "@/app/assets/images/_motionui/_consumermotion/PepsicoRD-Stills03.png";
import imgConMotionC03 from "@/app/assets/images/_motionui/_consumermotion/PepsicoRD-Stills04.png";
import imgConMotionC04 from "@/app/assets/images/_motionui/_consumermotion/PepsicoRD-Stills05.png";
import imgConMotionC05 from "@/app/assets/images/_motionui/_consumermotion/PepsicoRD-Stills06.png";
import imgConMotionC06 from "@/app/assets/images/_motionui/_consumermotion/PepsicoRD-Stills07.png";
import imgConMotionC07 from "@/app/assets/images/_motionui/_consumermotion/PepsicoRD-Stills08.png";
import imgConMotionC08 from "@/app/assets/images/_motionui/_consumermotion/PepsicoRD-Stills09.png";
import imgConMotionC09 from "@/app/assets/images/_motionui/_consumermotion/PepsicoRD-Stills10.png";
import imgConMotionC10 from "@/app/assets/images/_motionui/_consumermotion/PepsicoRD-Stills11.png";
import imgConMotionC11 from "@/app/assets/images/_motionui/_consumermotion/PepsicoRD-Stills12.png";
import imgConMotionC12 from "@/app/assets/images/_motionui/_consumermotion/PepsicoRD-Stills13.png";
import imgConMotionD01 from "@/app/assets/images/_motionui/_consumermotion/PepsicoRD-Stills14.png";
import imgConMotionD02 from "@/app/assets/images/_motionui/_consumermotion/PepsicoRD-Stills15.png";
import imgConMotionD03 from "@/app/assets/images/_motionui/_consumermotion/PepsicoRD-Stills16.png";

import vidConMotionA01 from "@/app/assets/videos/_motionui/_consumermotion/MidMark_Clip001.mp4";
import vidConMotionA02 from "@/app/assets/videos/_motionui/_consumermotion/MidMark_Clip002.mp4";
import vidConMotionA03 from "@/app/assets/videos/_motionui/_consumermotion/MidMark_Clip003.mp4";
import vidConMotionB01 from "@/app/assets/videos/_motionui/_consumermotion/PepsicoRD-A-Clip001.mp4";
import vidConMotionB02 from "@/app/assets/videos/_motionui/_consumermotion/PepsicoRD-A-Clip002.mp4";
import vidConMotionB03 from "@/app/assets/videos/_motionui/_consumermotion/PepsicoRD-A-Clip003.mp4";
import vidConMotionC01 from "@/app/assets/videos/_motionui/_consumermotion/PepsicoRD-B-Clip001.mp4";
import vidConMotionC02 from "@/app/assets/videos/_motionui/_consumermotion/PepsicoRD-B-Clip002.mp4";
import vidConMotionC03 from "@/app/assets/videos/_motionui/_consumermotion/PepsicoRD-B-Clip003.mp4";
import vidConMotionC04 from "@/app/assets/videos/_motionui/_consumermotion/PepsicoRD-B-Clip004.mp4";
import vidConMotionC05 from "@/app/assets/videos/_motionui/_consumermotion/PepsicoRD-B-Clip005.mp4";
import vidConMotionC06 from "@/app/assets/videos/_motionui/_consumermotion/PepsicoRD-B-Clip006.mp4";
import vidConMotionC07 from "@/app/assets/videos/_motionui/_consumermotion/PepsicoRD-B-Clip007.mp4";
import vidConMotionD01 from "@/app/assets/videos/_motionui/_consumermotion/PepsicoRD-C-Clip001.mp4";
import vidConMotionD02 from "@/app/assets/videos/_motionui/_consumermotion/PepsicoRD-C-Clip002.mp4";
import vidConMotionD03 from "@/app/assets/videos/_motionui/_consumermotion/PepsicoRD-C-Clip003.mp4";

const bentoGap = "gap-[12px]";
const titleTextSize= "text-[24px]";
const paraTextSize = "text-[12px]";


function ImportVideoMute({vidLink}:{vidLink:string}) {
    return (
        <video src={vidLink} width="100%" height="auto" muted controls loop className="self-center"/>
    )
}

function BentoBox() {
    return (
        <div className={`${bentoGap} relative z-0 grid grid-cols-1 w-[80%] h-auto justify-self-center rounded-3xl place-content-center gap-[12px] text-textVariant hover:cursor-pointer`}>
            <div className="w-full h-full rounded-3xl content-center p-[8px] col-span-full row-span-full shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30] transition-all duration-200">
                <bentos.HeaderText text="CONSUMER MOTION DESIGN" textSize={titleTextSize}/>
            </div>

            <div className={`${bentoGap} grid grid-cols-2 gap-[12px]`}>
                <bentos.Cell1ColImage cellImgAlt="Dental Map" cellImgLink={imgConMotionA04} />

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidConMotionA01} />
                </bentos.Cell1ColChildrenVideo>

                <div className="w-full h-full rounded-3xl content-center p-[32px] row-span-1 shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30] transition-all duration-200">
                    <bentos.ParagraphText text="In my years of professional design, I have had the great oppurtunity to work on numerous motion design videos for great companies. Storytelling through 2D assets and animations, creating emphasis and focus to engage or assist a user, and create a better experience through motion." textSize={paraTextSize}/>
                </div>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidConMotionB02} />
                </bentos.Cell1ColChildrenVideo> 

                <div className={`${bentoGap} grid grid-cols-2 col-span-1 gap-[12px]`}>
                    <bentos.Cell1ColImage cellImgAlt="Internal Research" cellImgLink={imgConMotionB01} />
                    <bentos.Cell1ColImage cellImgAlt="Connected Software" cellImgLink={imgConMotionA03} />
                    <bentos.Cell1ColImage cellImgAlt="Discovery" cellImgLink={imgConMotionB02} />
                    <bentos.Cell1ColImage cellImgAlt="Connected Alerts" cellImgLink={imgConMotionA05} />
                </div>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidConMotionA03} />
                </bentos.Cell1ColChildrenVideo>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidConMotionC02} />
                </bentos.Cell1ColChildrenVideo>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidConMotionD01} />
                </bentos.Cell1ColChildrenVideo>

                <div className={`${bentoGap} grid grid-cols-4 col-span-2 gap-[12px]`}>
                    <bentos.Cell1ColImage cellImgAlt="Branding Refresh" cellImgLink={imgConMotionC11} />
                    <bentos.Cell1ColImage cellImgAlt="Shared Intelligence" cellImgLink={imgConMotionD03} />
                    <bentos.Cell1ColImage cellImgAlt="Virtual Graphics" cellImgLink={imgConMotionC12} />
                    <bentos.Cell1ColImage cellImgAlt="Generating Interest" cellImgLink={imgConMotionC03} />
                </div>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidConMotionC07} />
                </bentos.Cell1ColChildrenVideo>

                <div className="w-full h-full rounded-3xl content-center p-[32px] row-span-1 shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30] transition-all duration-200">
                    <bentos.ParagraphText text="With over 8 years of experience in After Effects, and over 15 years of experience with 3D Design and the Adobe Creative Suite, I excel at producing high quality motion graphics work for any scenario." textSize={paraTextSize}/>
                </div>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidConMotionD02} />
                </bentos.Cell1ColChildrenVideo>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidConMotionC03} />
                </bentos.Cell1ColChildrenVideo>

            </div>

        </div>
    )
}

export default function ProjectConsumerMotion() {
    return (
        <div className="absolute left-0 right-0 top-0 bottom-0 py-[48px] overflow-scroll no-scrollbar bg-bgColor">
            <div className="grid grid-cols-1 w-full h-auto gap-[12px]">
                <BentoBox />
            </div>
        </div>
    )
}

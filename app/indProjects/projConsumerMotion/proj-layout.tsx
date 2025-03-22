'use client'

import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";

import imgConMotionA03 from "@/app/assets/images/_motionui/_consumermotion/MidMark_Stills2.png";
import imgConMotionA04 from "@/app/assets/images/_motionui/_consumermotion/MidMark_Stills3.png";
import imgConMotionA05 from "@/app/assets/images/_motionui/_consumermotion/MidMark_Stills4.png";
import imgConMotionB01 from "@/app/assets/images/_motionui/_consumermotion/PepsicoRD-Stills00.png";
import imgConMotionB02 from "@/app/assets/images/_motionui/_consumermotion/PepsicoRD-Stills01.png";
import imgConMotionC01 from "@/app/assets/images/_motionui/_consumermotion/PepsicoRD-Stills02.png";
import imgConMotionC03 from "@/app/assets/images/_motionui/_consumermotion/PepsicoRD-Stills04.png";
import imgConMotionC06 from "@/app/assets/images/_motionui/_consumermotion/PepsicoRD-Stills07.png";
import imgConMotionC11 from "@/app/assets/images/_motionui/_consumermotion/PepsicoRD-Stills12.png";
import imgConMotionC12 from "@/app/assets/images/_motionui/_consumermotion/PepsicoRD-Stills13.png";
import imgConMotionD02 from "@/app/assets/images/_motionui/_consumermotion/PepsicoRD-Stills15.png";
import imgConMotionD03 from "@/app/assets/images/_motionui/_consumermotion/PepsicoRD-Stills16.png";

import vidConMotionA01 from "@/app/assets/videos/_motionui/_consumermotion/MidMark_Clip001.mp4";
import vidConMotionA03 from "@/app/assets/videos/_motionui/_consumermotion/MidMark_Clip003.mp4";
import vidConMotionB02 from "@/app/assets/videos/_motionui/_consumermotion/PepsicoRD-A-Clip002.mp4";
import vidConMotionC03 from "@/app/assets/videos/_motionui/_consumermotion/PepsicoRD-B-Clip003.mp4";
import vidConMotionD01 from "@/app/assets/videos/_motionui/_consumermotion/PepsicoRD-C-Clip001.mp4";
import vidConMotionD02 from "@/app/assets/videos/_motionui/_consumermotion/PepsicoRD-C-Clip002.mp4";

const bentoGap = "gap-[12px]";
const titleTextSize= "text-[24px]";
const paraTextSize = "text-[12px]";


function ImportVideoMute({vidLink}:{vidLink:string}) {
    return (
        <video src={vidLink} width="100%" height="auto" muted loop/>
    )
}

function BentoBox() {
    return (
        <div className={`${bentoGap} relative z-0 grid grid-cols-1 w-[80%] h-auto justify-self-center rounded-3xl place-content-center gap-[12px] text-textVariant hover:cursor-pointer`}>
            <div className="w-full h-full rounded-3xl content-center p-[8px] col-span-full row-span-full shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30] transition-all duration-200">
                <bentos.HeaderText text="CONSUMER MOTION DESIGN" textSize={titleTextSize}/>
            </div>

            <div className={`${bentoGap} grid grid-cols-2 gap-[12px]`}>
                <div className={`${bentoGap} grid grid-cols-2 gap-[12px]`}>
                <bentos.CellImage cellImgAlt="Derisking through trial" cellImgLink={imgConMotionC01} cellSpan="col-span-1"/>
                <bentos.CellImage cellImgAlt="Dental Map" cellImgLink={imgConMotionA04} cellSpan="col-span-1"/>
                <bentos.CellImage cellImgAlt="Shared Intelligence" cellImgLink={imgConMotionD03} cellSpan="col-span-1"/>
                <bentos.CellImage cellImgAlt="Reduced lead times" cellImgLink={imgConMotionC06} cellSpan="col-span-1"/>
                </div>

                <bentos.CellVideo cellVidLink={vidConMotionA01} cellSpan="col-span-1" />

                <bentos.CellVideo cellVidLink={vidConMotionB02} cellSpan="col-span-1" /> 

                <div className="w-full h-full rounded-3xl content-center p-[32px] row-span-1 shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30] transition-all duration-200">
                    <bentos.ParagraphText text="In my years of professional design, I have had the great oppurtunity to work on numerous motion design videos for great companies. Storytelling through 2D assets and animations, creating emphasis and focus to engage or assist a user, and create a better experience through motion." textSize={paraTextSize}/>
                </div>

                <div className={`${bentoGap} grid grid-cols-2 col-span-1 gap-[12px]`}>
                    <bentos.CellImage cellImgAlt="Internal Research" cellImgLink={imgConMotionB01} cellSpan="col-span-1"/>
                    <bentos.CellImage cellImgAlt="Connected Software" cellImgLink={imgConMotionA03} cellSpan="col-span-1"/>
                    <bentos.CellImage cellImgAlt="Discovery" cellImgLink={imgConMotionB02} cellSpan="col-span-1"/>
                    <bentos.CellImage cellImgAlt="Connected Alerts" cellImgLink={imgConMotionA05} cellSpan="col-span-1"/>
                </div>

                <bentos.CellVideo cellVidLink={vidConMotionA03} cellSpan="col-span-1" />

                <bentos.CellVideo cellVidLink={vidConMotionD02} cellSpan="col-span-1" />

                <bentos.CellVideo cellVidLink={vidConMotionD01} cellSpan="col-span-1" />

                <div className={`${bentoGap} grid grid-cols-4 col-span-2 gap-[12px]`}>
                    <bentos.CellImage cellImgAlt="Branding Refresh" cellImgLink={imgConMotionC11} cellSpan="col-span-1"/>
                    <bentos.CellImage cellImgAlt="Human Intelligence" cellImgLink={imgConMotionD02} cellSpan="col-span-1"/>
                    <bentos.CellImage cellImgAlt="Virtual Graphics" cellImgLink={imgConMotionC12} cellSpan="col-span-1"/>
                    <bentos.CellImage cellImgAlt="Generating Interest" cellImgLink={imgConMotionC03} cellSpan="col-span-1"/>
                </div>

                <div className="w-full h-full rounded-3xl content-center p-[32px] row-span-1 shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30] transition-all duration-200">
                    <bentos.ParagraphText text="With over 8 years of experience in After Effects, and over 15 years of experience with 3D Design and the Adobe Creative Suite, I excel at producing high quality motion graphics work for any scenario." textSize={paraTextSize}/>
                </div>

                <bentos.CellVideo cellVidLink={vidConMotionC03} cellSpan="col-span-1" />

            </div>

        </div>
    )
}

export default function ProjectConsumerMotion() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <div className="grid grid-cols-1 w-full h-auto gap-[12px]">
                <BentoBox />
            </div>
        </pages.GroupProjectPage>
    )
}

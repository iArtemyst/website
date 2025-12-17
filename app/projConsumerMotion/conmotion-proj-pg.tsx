'use client'

import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";
import { MediaType } from "@/app/globals/project-galleries";
import { CheckIfMobileBrowser } from "@/app/globals/mobile-check";
import { LockedProjectPage } from "../globals/locked-project";

const imgConMotionA03 = "_motionui/_consumermotion/MidMark_Stills2.png";
const imgConMotionA04 = "_motionui/_consumermotion/MidMark_Stills3.png";
const imgConMotionA05 = "_motionui/_consumermotion/MidMark_Stills4.png";
const imgConMotionB01 = "_motionui/_consumermotion/PepsicoRD-Stills00.png";
const imgConMotionB02 = "_motionui/_consumermotion/PepsicoRD-Stills01.png";
const imgConMotionC01 = "_motionui/_consumermotion/PepsicoRD-Stills02.png";
const imgConMotionC03 = "_motionui/_consumermotion/PepsicoRD-Stills04.png";
const imgConMotionC06 = "_motionui/_consumermotion/PepsicoRD-Stills07.png";
const imgConMotionC11 = "_motionui/_consumermotion/PepsicoRD-Stills12.png";
const imgConMotionC12 = "_motionui/_consumermotion/PepsicoRD-Stills13.png";
const imgConMotionD02 = "_motionui/_consumermotion/PepsicoRD-Stills15.png";
const imgConMotionD03 = "_motionui/_consumermotion/PepsicoRD-Stills16.png";

const vidConMotionA01 = "_motionui/_consumermotion/MidMark_Clip002.mp4";
const vidConMotionA03 = "_motionui/_consumermotion/MidMark_Clip001.mp4";
const vidConMotionB02 = "_motionui/_consumermotion/PepsicoRD-Clip01.mp4";
const vidConMotionC03 = "_motionui/_consumermotion/PepsicoRD-Clip02.mp4";
const vidConMotionD01 = "_motionui/_consumermotion/PepsicoRD-Clip03.mp4";
const vidConMotionD02 = "_motionui/_consumermotion/PepsicoRD-Clip04.mp4";

const bentoGap = "gap-[12px]";
const titleTextSize= "text-[24px]";
const paraTextSize = "text-[12px]";

function BentoBox() {
    let isMobile = CheckIfMobileBrowser()
    return (
        <div className={`${isMobile ? "grid-cols-1" : "grid-cols-2"} ${bentoGap} relative z-auto grid w-[80%] h-fit justify-self-center rounded-3xl place-content-center gap-[12px] text-textVariant hover:cursor-pointer`}>
            <bentos.CellText cellSpan={`${isMobile ? "col-span-1" : "col-span-2"}`}>
                <bentos.HeaderText text="CONSUMER MOTION DESIGN" textSize={titleTextSize}/>
            </bentos.CellText>

            <div className={`${isMobile ? "col-span-1 grid-cols-2" : "col-span-2 grid-cols-4"} ${bentoGap} grid gap-[12px] hover:z-40`}>
                <bentos.CellMediaOnClick mediaText="Derisking through trial" mediaLink={imgConMotionC01} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaText="Dental Map" mediaLink={imgConMotionA04} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaText="Shared Intelligence" mediaLink={imgConMotionD03} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaText="Reduced lead times" mediaLink={imgConMotionC06} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            </div>

            <bentos.CellMediaOnClick mediaLink={vidConMotionA01} mediaType={MediaType.Video} mediaText="Mograph clip connected technology" cellSpan={`${isMobile ? "col-span-1" : "col-span-1"}`}  hoverTextColor="text-textColor"/>

            <bentos.CellMediaOnClick mediaLink={vidConMotionB02} mediaType={MediaType.Video} mediaText="Mograph clip simplifying search" cellSpan={`${isMobile ? "col-span-1" : "col-span-1"}`}  hoverTextColor="text-textColor"/> 

            <bentos.CellText cellSpan={`${isMobile ? "col-span-1" : "col-span-2"}`}>
                <bentos.ParagraphText text="In my years of professional design, I have had the great oppurtunity to work on numerous motion design videos for great companies. Storytelling through 2D assets and animations, creating emphasis and focus to engage or assist a user, and create a better experience through motion." textSize={paraTextSize}/>
            </bentos.CellText>

            <div className={`${isMobile ? "col-span-1 grid-cols-2" : "col-span-2 grid-cols-4"} ${bentoGap} grid gap-[12px] hover:z-20`}>
                <bentos.CellMediaOnClick mediaText="Internal Research" mediaLink={imgConMotionB01} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaText="Connected Software" mediaLink={imgConMotionA03} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaText="Discovery" mediaLink={imgConMotionB02} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaText="Connected Alerts" mediaLink={imgConMotionA05} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            </div>

            <bentos.CellMediaOnClick mediaLink={vidConMotionA03} mediaType={MediaType.Video} mediaText="Mograph clip connected devices" cellSpan={`${isMobile ? "col-span-1" : "col-span-1"}`}  hoverTextColor="text-textColor"/>

            <bentos.CellMediaOnClick mediaLink={vidConMotionD02} mediaType={MediaType.Video} mediaText="Mograph clip worldwide information" cellSpan={`${isMobile ? "col-span-1" : "col-span-1"}`}  hoverTextColor="text-textVariant"/>

            <bentos.CellMediaOnClick mediaLink={vidConMotionD01} mediaType={MediaType.Video} mediaText="Mograph clip shared intelligence" cellSpan={`${isMobile ? "col-span-1" : "col-span-2"}`}  hoverTextColor="text-textVariant"/>

            <div className={`${isMobile ? "col-span-1 grid-cols-2" : "col-span-2 grid-cols-4"} ${bentoGap} grid gap-[12px] hover:z-20`}>
                <bentos.CellMediaOnClick mediaText="Branding Refresh" mediaLink={imgConMotionC11} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaText="Human Intelligence" mediaLink={imgConMotionD02} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaText="Virtual Graphics" mediaLink={imgConMotionC12} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaText="Generating Interest" mediaLink={imgConMotionC03} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            </div>

            <div className="w-full h-full hover:z-20 rounded-3xl content-center p-[32px] row-span-1 shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30] transition-all duration-200">
                <bentos.ParagraphText text="With over 8 years of experience in After Effects, and over 15 years of experience with 3D Design and the Adobe Creative Suite, I excel at producing high quality motion graphics work for any scenario." textSize={paraTextSize}/>
            </div>

            <bentos.CellMediaOnClick mediaLink={vidConMotionC03} mediaType={MediaType.Video} mediaText="Mograph clip reduced costs and lead times" cellSpan="col-span-1"  hoverTextColor="text-textVariant"/>
        </div>
    )
}

export default function ProjectConsumerMotion() {
    return (
        <>
        <LockedProjectPage />
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <div className="grid grid-cols-1 w-full h-auto gap-[12px]">
                <BentoBox />
            </div>
        </pages.GroupProjectPage>
        </>
    )
}

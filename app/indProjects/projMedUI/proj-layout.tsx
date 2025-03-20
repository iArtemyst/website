'use client'

import React from "react";
import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import { CardHoverFX } from "@/app/globals/card-hover-fx";
import Link from "next/link";

import imgMedMotionA01 from "@/app/assets/images/_motionui/_medmotion/BWI_Stills0.png";
import imgMedMotionA02 from "@/app/assets/images/_motionui/_medmotion/BWI_Stills1.png";
import imgMedMotionA03 from "@/app/assets/images/_motionui/_medmotion/BWI_Stills2.png";
import imgMedMotionA04 from "@/app/assets/images/_motionui/_medmotion/BWI_Stills3.png";
import imgMedMotionB01 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills13.png";
import imgMedMotionB02 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills14.png";
import imgMedMotionB03 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills15.jpg";
import imgMedMotionB04 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills16.jpg";
import imgMedMotionB05 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills17.jpg";
import imgMedMotionC01 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills00.png";
import imgMedMotionC02 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills01.png";
import imgMedMotionC03 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills02.png";
import imgMedMotionC04 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills03.png";
import imgMedMotionC05 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills04.png";
import imgMedMotionC06 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills05.png";
import imgMedMotionC07 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills06.png";
import imgMedMotionC08 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills07.png";
import imgMedMotionC09 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills08.png";
import imgMedMotionD01 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills09.png";
import imgMedMotionD02 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills10.png";
import imgMedMotionD03 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills11.png";
import imgMedMotionD04 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills12.png";

import vidMedMotionA01 from "@/app/assets/videos/_motionui/_medmotion/BWI_Clip001.mp4";
import vidMedMotionA02 from "@/app/assets/videos/_motionui/_medmotion/BWI_Clip002.mp4";
import vidMedMotionB01 from "@/app/assets/videos/_motionui/_medmotion/EES-UI_A_Clip001.mp4";
import vidMedMotionB02 from "@/app/assets/videos/_motionui/_medmotion/EES-UI_B_Clip001.mp4";
import vidMedMotionB03 from "@/app/assets/videos/_motionui/_medmotion/EES-UI_C_Clip001.mp4";
import vidMedMotionB04 from "@/app/assets/videos/_motionui/_medmotion/EES-UI_G_Clip001.mp4";
import vidMedMotionC01 from "@/app/assets/videos/_motionui/_medmotion/EES-UI_E_Clip001.mp4";
import vidMedMotionC02 from "@/app/assets/videos/_motionui/_medmotion/EES-UI_F_Clip001.mp4";
import vidMedMotionC03 from "@/app/assets/videos/_motionui/_medmotion/EES-UI_D_Clip001.mp4";

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
                <bentos.HeaderText text="MEDICAL INTERFACE AND MOTION DESIGN" textSize={titleTextSize}/>
            </div>

            <div className={`${bentoGap} grid grid-cols-2 gap-[12px]`}>
                <bentos.Cell1ColImage cellImgAlt="Electric Flow in Tissue" cellImgLink={imgMedMotionC03} />

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidMedMotionB04} />
                </bentos.Cell1ColChildrenVideo>

                <div className="w-full h-full rounded-3xl content-center p-[32px] row-span-1 shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30] transition-all duration-200">
                    <bentos.ParagraphText text="My work in Medical Animation began over 6 years ago, after I graduated college. Since graduating I have produced dozens of videos, app designs, print collateral, and muchc more for several large medical companies. While much of my work is unreleased still, a notable amount of what is released can be found on Youtube under client channels, or directly on their websites." textSize={paraTextSize}/>
                </div>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidMedMotionC03} />
                </bentos.Cell1ColChildrenVideo> 

                <div className={`${bentoGap} grid grid-cols-4 col-span-2 gap-[12px]`}>
                    <bentos.Cell1ColImage cellImgAlt="Staple Comparison" cellImgLink={imgMedMotionD02} />
                    <bentos.Cell1ColImage cellImgAlt="Tapered Pockets" cellImgLink={imgMedMotionD04} />
                    <bentos.Cell1ColImage cellImgAlt="Sealing Vessels" cellImgLink={imgMedMotionC06} />
                    <bentos.Cell1ColImage cellImgAlt="Staple Cartridge Chart" cellImgLink={imgMedMotionB02} />
                </div>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidMedMotionC02} />
                </bentos.Cell1ColChildrenVideo>

                <div className="w-full h-full rounded-3xl content-center p-[32px] row-span-1 shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30] transition-all duration-200">
                    <bentos.ParagraphText text="My work in motion for the medical field has expanded from trade show presentations, to full marketing collateral suites accompanying device launches, and even editing for surgical overviews or training videos." textSize={paraTextSize}/>
                </div>

                <bentos.Cell1ColChildrenVideo>
                    <ImportVideoMute vidLink={vidMedMotionB02} />
                </bentos.Cell1ColChildrenVideo>

                <div className={`${bentoGap} grid grid-cols-2 col-span-1 gap-[12px]`}>
                    <bentos.Cell1ColImage cellImgAlt="Medical Interface Flow" cellImgLink={imgMedMotionA01} />
                    <bentos.Cell1ColImage cellImgAlt="Energy Devices" cellImgLink={imgMedMotionC05} />
                    <bentos.Cell1ColImage cellImgAlt="Device Heat Profile" cellImgLink={imgMedMotionC04} />
                    <bentos.Cell1ColImage cellImgAlt="Bipolar Energy Timeline" cellImgLink={imgMedMotionC08} />
                </div>

                <bentos.Cell1ColImage cellImgAlt="Enseal Sales Application" cellImgLink={imgMedMotionB05} />
                <bentos.Cell1ColImage cellImgAlt="Endopath Sales Application" cellImgLink={imgMedMotionB03} />

            </div>

        </div>
    )
}

export default function ProjectMedMotion() {
    return (
        <div className="absolute left-0 right-0 top-0 bottom-0 py-[48px] overflow-scroll no-scrollbar bg-bgColor">
            <div className="grid grid-cols-1 w-full h-auto gap-[12px]">
                <BentoBox />
            </div>
        </div>
    )
}
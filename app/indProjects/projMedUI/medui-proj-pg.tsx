'use client'

import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";

import imgMedMotionA01 from "@/app/assets/images/_motionui/_medmotion/BWI_Stills0.png";
import imgMedMotionC03 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills02.png";
import imgMedMotionC04 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills03.png";
import imgMedMotionC05 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills04.png";
import imgMedMotionC06 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills05.png";
import imgMedMotionC08 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills07.png";
import imgMedMotionD01 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills09.png";
import imgMedMotionD02 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills10.png";
import imgMedMotionD04 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills12.png";
import imgMedMotionB02 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills14.png";
import imgMedMotionB03 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills15.png";
import imgMedMotionB05 from "@/app/assets/images/_motionui/_medmotion/EES-UI_Stills17.png";

import vidMedMotionB02 from "@/app/assets/videos/_motionui/_medmotion/EES-UI_B_Clip001.mp4";
import vidMedMotionC03 from "@/app/assets/videos/_motionui/_medmotion/EES-UI_D_Clip001.mp4";
import vidMedMotionC02 from "@/app/assets/videos/_motionui/_medmotion/EES-UI_F_Clip001.mp4";
import vidMedMotionB04 from "@/app/assets/videos/_motionui/_medmotion/EES-UI_G_Clip001.mp4";

const bentoGap = "gap-[12px]";
const titleTextSize= "text-[24px]";
const paraTextSize = "text-[12px]";

function BentoBox() {
    return (
        <div className={`${bentoGap} relative z-auto grid grid-cols-1 w-[80%] h-auto justify-self-center rounded-3xl place-content-center text-textVariant hover:cursor-pointer`}>
            <bentos.CellText cellSpan="col-span-full">
                <bentos.HeaderText text="MEDICAL INTERFACE AND MOTION DESIGN" textSize={titleTextSize}/>
            </bentos.CellText>

            <div className={`${bentoGap} grid grid-cols-2`}>
                <div className={`${bentoGap} grid grid-cols-2`}>
                <bentos.CellMediaOnClick mediaText="Electric Flow in Tissue" mediaLink={imgMedMotionC03} cellSpan="col-span-1"/>
                <bentos.CellMediaOnClick mediaText="Enseal Sales Application" mediaLink={imgMedMotionB05} cellSpan="col-span-1"/>
                <bentos.CellMediaOnClick mediaText="Tapered Pockets" mediaLink={imgMedMotionD04} cellSpan="col-span-1"/>
                <bentos.CellMediaOnClick mediaText="Device Heat Profile" mediaLink={imgMedMotionC04} cellSpan="col-span-1"/>
                </div>

                <bentos.CellMediaOnClick mediaLink={vidMedMotionB04} mediaText="Test Text" cellSpan="col-span-1" />


                <bentos.CellText cellSpan="col-span-1">
                    <bentos.ParagraphText text="My work in Medical Animation began over 6 years ago, after I graduated college. Since graduating I have produced dozens of videos, app designs, print collateral, and muchc more for several large medical companies. While much of my work is unreleased still, a notable amount of what is released can be found on Youtube under client channels, or directly on their websites." textSize={paraTextSize}/>
                </bentos.CellText>

                <bentos.CellMediaOnClick mediaLink={vidMedMotionC03} mediaText="Test Text" cellSpan="col-span-1" /> 

                <div className={`${bentoGap} grid grid-cols-4 col-span-2`}>
                    <bentos.CellMediaOnClick mediaText="Staple Comparison" mediaLink={imgMedMotionD02} cellSpan="col-span-1"/>
                    <bentos.CellMediaOnClick mediaText="Endopath Sales Application" mediaLink={imgMedMotionB03} cellSpan="col-span-1"/>
                    <bentos.CellMediaOnClick mediaText="Sealing Vessels" mediaLink={imgMedMotionC06} cellSpan="col-span-1"/>
                    <bentos.CellMediaOnClick mediaText="Staple Cartridge Chart" mediaLink={imgMedMotionB02} cellSpan="col-span-1"/>
                </div>

                <bentos.CellMediaOnClick mediaLink={vidMedMotionC02} mediaText="Test Text" cellSpan="col-span-1" />

                <bentos.CellText cellSpan="col-span-1">
                    <bentos.ParagraphText text="My work in motion for the medical field has expanded from trade show presentations, to full marketing collateral suites accompanying device launches, and even editing for surgical overviews or training videos." textSize={paraTextSize}/>
                </bentos.CellText>

                <bentos.CellMediaOnClick mediaLink={vidMedMotionB02} mediaText="Test Text" cellSpan="col-span-1" />

                <div className={`${bentoGap} grid grid-cols-2 col-span-1`}>
                    <bentos.CellMediaOnClick mediaText="Medical Interface Flow" mediaLink={imgMedMotionA01} cellSpan="col-span-1"/>
                    <bentos.CellMediaOnClick mediaText="Energy Devices" mediaLink={imgMedMotionC05} cellSpan="col-span-1"/>
                    <bentos.CellMediaOnClick mediaText="Bipolar Energy Timeline" mediaLink={imgMedMotionC08} cellSpan="col-span-1"/>
                    <bentos.CellMediaOnClick mediaText="Device Heat Profile" mediaLink={imgMedMotionD01} cellSpan="col-span-1"/>
                </div>

            </div>

        </div>
    )
}

export default function ProjectMedMotion() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <BentoBox />
        </pages.GroupProjectPage>
    )
}
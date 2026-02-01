'use client'

import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";
import { MediaType } from "@/app/globals/project-galleries";
import { CheckIfMobileBrowser } from "../globals/mobile-check";
import { LockedProjectPage } from "../globals/locked-project";

const imgMedMotionA01 = "_motionui/_medmotion/BWI_Stills0.png";
const imgMedMotionC03 = "_motionui/_medmotion/EES-UI_Stills02.png";
const imgMedMotionC04 = "_motionui/_medmotion/EES-UI_Stills03.png";
const imgMedMotionC05 = "_motionui/_medmotion/EES-UI_Stills04.png";
const imgMedMotionC06 = "_motionui/_medmotion/EES-UI_Stills05.png";
const imgMedMotionC08 = "_motionui/_medmotion/EES-UI_Stills07.png";
const imgMedMotionD01 = "_motionui/_medmotion/EES-UI_Stills09.png";
const imgMedMotionD02 = "_motionui/_medmotion/EES-UI_Stills10.png";
const imgMedMotionD04 = "_motionui/_medmotion/EES-UI_Stills12.png";
const imgMedMotionB02 = "_motionui/_medmotion/EES-UI_Stills14.png";
const imgMedMotionB03 = "_motionui/_medmotion/EES-UI_Stills15.png";
const imgMedMotionB05 = "_motionui/_medmotion/EES-UI_Stills17.png";

const vidMedMotionB02 = "_motionui/_medmotion/EES-UI_B_Clip001.mp4";
const vidMedMotionC03 = "_motionui/_medmotion/EES-UI_D_Clip001.mp4";
const vidMedMotionC02 = "_motionui/_medmotion/EES-UI_F_Clip001.mp4";
const vidMedMotionB04 = "_motionui/_medmotion/EES-UI_G_Clip001.mp4";

const bentoGap = "gap-[12px]";
const titleTextSize= "text-[24px]";
const paraTextSize = "text-[12px]";

function BentoBox() {
    let isMobile = CheckIfMobileBrowser()
    return (
        <div className={`${bentoGap} grid-cols-1 relative z-auto grid w-[90%] h-auto justify-self-center rounded-3xl place-content-center text-textVariant`}>
            <div className={`${isMobile ? "col-span-1" : "col-span-2"} h-fit w-fit place-self-center relative`}>
                <bentos.CellText cellSpan="col-span-1">
                    <bentos.HeaderText text="MEDICAL INTERFACE AND MOTION DESIGN"/>
                </bentos.CellText>
            </div>

            <div className={`${isMobile ? "col-span-1 grid-cols-1" : "col-span-2 grid-cols-1"} grid w-fit h-fit`}>
                <bentos.CellMediaOnClick mediaLink={vidMedMotionB04} mediaType={MediaType.Video} mediaText="Mograph clip medical device comparisons" cellSpan="col-span-1"  hoverTextColor="text-textColor"/>

                <bentos.CellText cellSpan="col-span-1">
                    <bentos.ParagraphText text="My work in Medical Animation began over 6 years ago, after I graduated college. Since graduating I have produced dozens of videos, app designs, print collateral, and muchc more for several large medical companies. While much of my work is unreleased still, a notable amount of what is released can be found on Youtube under client channels, or directly on their websites." />
                </bentos.CellText>
            </div>

            <div className={`${isMobile ? "grid-cols-2 col-span-1" : "grid-cols-4 col-span-2"} ${bentoGap} grid hover:z-40`}>
                <bentos.CellMediaOnClick mediaText="Electric Flow in Tissue" mediaLink={imgMedMotionC03} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                <bentos.CellMediaOnClick mediaText="Enseal Sales Application" mediaLink={imgMedMotionB05} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                <bentos.CellMediaOnClick mediaText="Tapered Pockets" mediaLink={imgMedMotionD04} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                <bentos.CellMediaOnClick mediaText="Device Heat Profile" mediaLink={imgMedMotionC04} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textColor"/>
            </div>

            <div className={`${isMobile ? "col-span-1" : "col-span-2"} h-fit w-fit place-self-center relative`}>
                <bentos.CellMediaOnClick mediaLink={vidMedMotionC03} mediaType={MediaType.Video} mediaText="Mograph clip medical staple compression" cellSpan="col-span-1"  hoverTextColor="text-textColor"/>
            </div>

            <div className={`${isMobile ? "grid-cols-2 col-span-1" : "grid-cols-4 col-span-2"} ${bentoGap} grid hover:z-20`}>
                <bentos.CellMediaOnClick mediaText="Staple Comparison" mediaLink={imgMedMotionD02} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                <bentos.CellMediaOnClick mediaText="Endopath Sales Application" mediaLink={imgMedMotionB03} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                <bentos.CellMediaOnClick mediaText="Sealing Vessels" mediaLink={imgMedMotionC06} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                <bentos.CellMediaOnClick mediaText="Staple Cartridge Chart" mediaLink={imgMedMotionB02} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textColor"/>
            </div>

            <bentos.CellText cellSpan={`${isMobile ? "col-span-1" : "col-span-2"}`}>
                <bentos.ParagraphText text="My work in motion for the medical field has expanded from trade show presentations, to full marketing collateral suites accompanying device launches, and even editing for surgical overviews or training videos."/>
            </bentos.CellText>

            <div className={`${isMobile ? "col-span-1" : "col-span-2 grid-cols-2"} grid ${bentoGap} h-fit w-fit place-self-center relative`}>
                <bentos.CellMediaOnClick mediaLink={vidMedMotionC02} mediaType={MediaType.Video} mediaText="Mograph clip medical stapler device" cellSpan="col-span-1"  hoverTextColor="text-textColor"/>
                <bentos.CellMediaOnClick mediaLink={vidMedMotionB02} mediaType={MediaType.Video} mediaText="Mograph clip energy devices" cellSpan="col-span-1"  hoverTextColor="text-textVariant"/>
            </div>

            <div className={`${isMobile ? "grid-cols-2 col-span-1" : "grid-cols-4 col-span-2"} ${bentoGap} grid hover:z-20`}>
                <bentos.CellMediaOnClick mediaText="Medical Interface Flow" mediaLink={imgMedMotionA01} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                <bentos.CellMediaOnClick mediaText="Energy Devices" mediaLink={imgMedMotionC05} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaText="Bipolar Energy Timeline" mediaLink={imgMedMotionC08} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaText="Device Staple Compression" mediaLink={imgMedMotionD01} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textColor"/>
            </div>
        </div>
    )
}

export default function ProjectMedMotion() {
    return (
        <>
        <LockedProjectPage />
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <BentoBox />
        </pages.GroupProjectPage>
        </>
    )
}
'use client'

import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";
import { MediaType } from "@/app/globals/project-galleries";
import { CheckIfMobileBrowser } from "../globals/mobile-check";
import StyledLink from "../globals/styled-link";
import { NoSelect } from "../globals/styles";
import { hoverShadow } from "@/tailwind.config";

const imgDDRMelee01 = "_motionui/_ddrmelee/ddr-melee_stills_00.png";
const imgDDRMelee03 = "_motionui/_ddrmelee/ddr-melee_stills_02.png";
const imgDDRMelee05 = "_motionui/_ddrmelee/ddr-melee_stills_04.png";
const imgDDRMelee06 = "_motionui/_ddrmelee/ddr-melee_stills_05.png";
const imgDDRMelee08 = "_motionui/_ddrmelee/ddr-melee_stills_07.png";
const imgDDRMelee09 = "_motionui/_ddrmelee/ddr-melee_stills_08.png";
const vidDDRMelee01 = "_motionui/_ddrmelee/ddr-melee-intro_collat-edit_compressed.mp4";
const vidDDRMelee02 = "_motionui/_ddrmelee/ddr-melee_outro_collat-edit_compressed.mp4";

const youtubeLink = "https://youtu.be/IljUm6WHTXE?si=hxR6P6yWpDYSHC0l";

const bentoGap = "gap-[12px]";
const titleTextSize= "text-[24px]";
const paraTextSize = "text-[12px]";

function BentoBoxA() {
    return (
        <div className="relative z-0 grid grid-cols-1 w-[80%] h-fit justify-self-center text-white hover:cursor-pointer gap-[12px]">
            
            <bentos.CellText cellSpan="col-span-1 w-full">
                <bentos.HeaderText text="DDR Melee Motion Graphics" textSize={titleTextSize}/>
            </bentos.CellText>

            <div className={`${CheckIfMobileBrowser() ? "grid-cols-1" : "grid-cols-3"} h-fit gap-[12px] grid`}>
                <bentos.CellMediaOnClick mediaLink={vidDDRMelee01} mediaType={MediaType.Video} mediaText="DDR Melee Intro Video" cellSpan={`${CheckIfMobileBrowser() ? "col-span-1" : "col-span-2"}`} hoverTextColor="text-textVariant" />
                <bentos.CellText cellSpan={`col-span-1`}>
                    <bentos.ParagraphText textSize={paraTextSize} text="When my partner came to me with the idea for a Super Smash Bros Melee combo video, I was immediately on board. The idea they had developed was a program that identified the moves that were being performed by the player, and would display graphics for each button hit, similar to Dance Dance Revolution." />
                </bentos.CellText>
            </div>

            <div className="grid grid-cols-3 h-fit gap-[12px] hover:z-20">
                <bentos.CellMediaOnClick mediaText="Opening menu screen" mediaLink={imgDDRMelee01} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaText="Game type selection screen" mediaLink={imgDDRMelee03} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaText="Song selection screen" mediaLink={imgDDRMelee05} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            </div>

            <div className={`${CheckIfMobileBrowser() ? "grid-cols-1" : "grid-cols-3"} w-full justify-self-center grid  gap-[12px] hover:z-20`}>
                <bentos.CellMediaOnClick mediaLink={vidDDRMelee02} mediaType={MediaType.Video} mediaText="DDR Melee Outro Video" cellSpan="col-span-2"  hoverTextColor="text-textVariant"/>

                <bentos.CellText cellSpan="col-span-1">
                    <bentos.ParagraphText textSize={paraTextSize} text="While they took the helm on programming the functionality of coordinating button presses from controller to on screen assets in time, I started tackling all asset design and video editing. I referenced old videos and photos of the DDR games, including those that I played growing up, and tried to accurately recreate the feel and experience of playing DDR, but with SSBM. Each asset (except for the landing screen 3d text) was hand made in After Effects with vectors and shapes, and all scenes were animated and edited in Adobe After Effects" />
                </bentos.CellText>
            </div>

            <div className="grid grid-cols-3 h-fit gap-[12px] hover:z-20">
                <bentos.CellMediaOnClick mediaText="Cleared stage screen" mediaLink={imgDDRMelee06} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaText="Score counting screen" mediaLink={imgDDRMelee08} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaText="Score results screen" mediaLink={imgDDRMelee09} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            </div>
        </div>
    )
}

function BentoBoxB() {
    return (
        <div className="relative z-auto flex w-[70%] h-auto justify-self-center grid-cols-1 gap-[12px] rounded-3xl place-content-center text-white hover:cursor-pointer">
            <div className="">
                {
                    CheckIfMobileBrowser() ?
                        <div className={`${hoverShadow} w-fit h-fit rounded-xl`} style={NoSelect}>
                            <StyledLink href={youtubeLink}>
                                <bentos.CellText cellSpan="col-span-1">
                                    <bentos.ParagraphText text="View the full video on Youtube!" textSize="text-[10px]" />
                                </bentos.CellText>
                            </StyledLink>
                        </div>
                        :
                        <div className={`justify-self-center rounded-xl overflow-clip w-full h-auto place-items-center`}>
                            <bentos.ParagraphText text="View the full video on Youtube!" textSize="text-[10px]" />
                            <iframe width="800" height="600" src={`https://www.youtube.com/embed/IljUm6WHTXE?si=4s3xr9SH-IXMZTYM&amp;start=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                }
            </div>
        </div>
    )
}

export function DDRMeleePage() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <div className="relative grid grid-cols-1 gap-[24px]">
                <BentoBoxA />
                <BentoBoxB />
            </div>
        </pages.GroupProjectPage>
    )
}

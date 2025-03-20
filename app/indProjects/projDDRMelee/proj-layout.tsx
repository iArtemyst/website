'use client'

import React from "react";
import "@/app/globals/globals.css";
import Link from "next/link";

import * as fonts from "@/app/globals/fonts";
import * as bentos from "@/app/globals/bento-boxes";
import { CardHoverFX } from "@/app/globals/card-hover-fx";

import imgDDRMelee01 from "@/app/assets/images/_motionui/_ddrmelee/ddr-melee_stills_00.png";
import imgDDRMelee02 from "@/app/assets/images/_motionui/_ddrmelee/ddr-melee_stills_01.png";
import imgDDRMelee03 from "@/app/assets/images/_motionui/_ddrmelee/ddr-melee_stills_02.png";
import imgDDRMelee04 from "@/app/assets/images/_motionui/_ddrmelee/ddr-melee_stills_03.png";
import imgDDRMelee05 from "@/app/assets/images/_motionui/_ddrmelee/ddr-melee_stills_04.png";
import imgDDRMelee06 from "@/app/assets/images/_motionui/_ddrmelee/ddr-melee_stills_05.png";
import imgDDRMelee07 from "@/app/assets/images/_motionui/_ddrmelee/ddr-melee_stills_06.png";
import imgDDRMelee08 from "@/app/assets/images/_motionui/_ddrmelee/ddr-melee_stills_07.png";
import imgDDRMelee09 from "@/app/assets/images/_motionui/_ddrmelee/ddr-melee_stills_08.png";
import vidDDRMelee01 from "@/app/assets/videos/_motionui/_ddrmelee/ddr-melee-intro_collat-edit_compressed.mp4"
import vidDDRMelee02 from "@/app/assets/videos/_motionui/_ddrmelee/ddr-melee_outro_collat-edit_compressed.mp4"

const ddrMeleeYTLink = "https://youtu.be/IljUm6WHTXE?si=CqcDqtQnCYTAc_Q4";
const bentoGap = "gap-[12px]";
const titleTextSize= "text-[24px]";
const paraTextSize = "text-[12px]";

export function KeypointText({keypointText=""}:{keypointText:String}) {
    return (
        <div className="relative h-auto w-full flex justify-center py-8 align-middle">
            <p className={`${fonts.dotoBlack.className} text-textSml text-pretty text-center content-center`}>{keypointText}</p>
        </div>
    )
}

export function ParagraphText({paraText=""}:{paraText:String}) {
    return (
        <div className="relative h-auto w-full flex justify-center">
            <p className={`${fonts.dotoBold.className} text-textMed text-balance text-center content-center`}>{paraText}</p>
        </div>
    )
}

function BentoBoxA() {
    return (
        <div className="relative z-0 grid grid-cols-1 w-[80%] h-fit justify-self-center text-white hover:cursor-pointer gap-[12px]">

                <div className="w-full justify-self-center grid grid-cols-3 gap-[12px]">
                    <bentos.CellAutoText>
                        <bentos.HeaderText text="DDR Melee Motion Graphics" textSize={titleTextSize}/>
                        <bentos.ParagraphText textSize="text-[14px]" text="When my partner came to me with the idea for a Super Smash Bros Melee combo video, I was immediately on board. The idea they had developed was a program that identified the moves that were being performed by the player, and would display graphics for each button hit, similar to Dance Dance Revolution." />
                    </bentos.CellAutoText>
                    
                    <bentos.Cell2ColChildrenVideo>
                        <ImportVideoMute vidLink={vidDDRMelee01} />
                    </bentos.Cell2ColChildrenVideo>
                </div>

                <div className="grid grid-cols-3 h-fit gap-[12px]">
                    <bentos.Cell1ColImage cellImgAlt="Opening menu screen" cellImgLink={imgDDRMelee01} />
                    <bentos.Cell1ColImage cellImgAlt="Game type selection screen" cellImgLink={imgDDRMelee03} />
                    <bentos.Cell1ColImage cellImgAlt="Song selection screen" cellImgLink={imgDDRMelee05} />
                </div>

                <div className="w-full justify-self-center grid grid-cols-3 gap-[12px]">
                    <bentos.Cell2ColChildrenVideo>
                        <ImportVideoMute vidLink={vidDDRMelee02} />
                    </bentos.Cell2ColChildrenVideo>

                    <div className="w-full h-full rounded-3xl content-center p-[32px] row-span-1 shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30] transition-all duration-200">
                        <bentos.ParagraphText text="While they took the helm on programming the functionality of coordinating button presses from controller to on screen assets in time, I started tackling all asset design and video editing. I referenced old videos and photos of the DDR games, including those that I played growing up, and tried to accurately recreate the feel and experience of playing DDR, but with SSBM." textSize="text-[14px]"/>
                        <bentos.ParagraphText text="View the full video on Youtube!" textSize="text-[10px]" />
                    </div>
                </div>

                <div className="grid grid-cols-3 h-fit gap-[12px]">
                    <bentos.Cell1ColImage cellImgAlt="Cleared stage screen" cellImgLink={imgDDRMelee06} />
                    <bentos.Cell1ColImage cellImgAlt="Score counting screen" cellImgLink={imgDDRMelee08} />
                    <bentos.Cell1ColImage cellImgAlt="Score results screen" cellImgLink={imgDDRMelee09} />
                </div>
        </div>
    )
}

function BentoBoxC() {
    return (
        <div className="relative z-0 flex w-[70%] h-auto justify-self-center grid-cols-1 gap-[12px] rounded-3xl place-content-center text-white hover:cursor-pointer">
            <div className="row-span-1">
            <YoutubeVideo />
            </div>
        </div>
    )
}

function ImportVideo({vidLink}:{vidLink:string}) {
    return (
        <video src={vidLink} width="100%" height="auto" loop className="self-center"/>
    )
}

function ImportVideoMute({vidLink}:{vidLink:string}) {
    return (
        <video src={vidLink} width="100%" height="auto" controls muted loop className="self-center"/>
    )
}

function MainVideoBox({videoLink}:{videoLink:string}) {
    return (
        <div className="group">
            <CardHoverFX bufferZone={0} rotateAmount={24}>
                <div className="relative w-[70%] h-[auto] justify-self-center rounded-[24px] overflow-hidden my-[24px] shadow-[0px_0px_8px_#FFFFFF90] group-hover:shadow-[0px_0px_16px_#FFFFFF45] z-0 group-hover:z-10">
                    <ImportVideo vidLink={videoLink} />
                </div>
            </CardHoverFX>
        </div>
    )
}

function YoutubeVideo(){
    return(
        <div className="justify-self-center rounded-xl overflow-clip w-full">
            <iframe width="600" height="400" src="https://www.youtube.com/embed/IljUm6WHTXE?si=O7ujp9CXz2Yt9O0X" title="DDR Melee Combo Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        </div>
    )
}

export default function ProjectDartPubPage() {
    return (
        <div className="absolute left-0 right-0 top-0 bottom-0 py-[48px] overflow-scroll no-scrollbar bg-bgColor">
            {/* <MainVideoBox videoLink={vidDDRMelee01}/> */}
            <div className="relative grid grid-cols-1 gap-[24px]">
                <BentoBoxA />
                <BentoBoxC />
            </div>
        </div>
    )
}

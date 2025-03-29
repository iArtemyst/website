'use client'

import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";

import imgDDRMelee01 from "@/app/assets/images/_motionui/_ddrmelee/ddr-melee_stills_00.png";
import imgDDRMelee03 from "@/app/assets/images/_motionui/_ddrmelee/ddr-melee_stills_02.png";
import imgDDRMelee05 from "@/app/assets/images/_motionui/_ddrmelee/ddr-melee_stills_04.png";
import imgDDRMelee06 from "@/app/assets/images/_motionui/_ddrmelee/ddr-melee_stills_05.png";
import imgDDRMelee08 from "@/app/assets/images/_motionui/_ddrmelee/ddr-melee_stills_07.png";
import imgDDRMelee09 from "@/app/assets/images/_motionui/_ddrmelee/ddr-melee_stills_08.png";
import vidDDRMelee01 from "@/app/assets/videos/_motionui/_ddrmelee/ddr-melee-intro_collat-edit_compressed.mp4";

const ddrMeleeYTLink = "https://youtu.be/IljUm6WHTXE?si=CqcDqtQnCYTAc_Q4";
const bentoGap = "gap-[12px]";
const titleTextSize= "text-[24px]";
const paraTextSize = "text-[12px]";

function BentoBoxA() {
    return (
        <div className="relative z-0 grid grid-cols-1 w-[80%] h-fit justify-self-center text-white hover:cursor-pointer gap-[12px]">

                <div className="w-full justify-self-center grid grid-cols-3 gap-[12px]">
                    <bentos.CellText cellSpan="col-span-1">
                        <bentos.HeaderText text="DDR Melee Motion Graphics" textSize={titleTextSize}/>
                        <bentos.ParagraphText textSize={paraTextSize} text="When my partner came to me with the idea for a Super Smash Bros Melee combo video, I was immediately on board. The idea they had developed was a program that identified the moves that were being performed by the player, and would display graphics for each button hit, similar to Dance Dance Revolution." />
                    </bentos.CellText>
                    
                    <bentos.CellVideo cellVidLink={vidDDRMelee01} cellSpan="col-span-2" />
                </div>

                <div className="grid grid-cols-3 h-fit gap-[12px]">
                    <bentos.CellImage cellImgAlt="Opening menu screen" cellImgLink={imgDDRMelee01} cellSpan="col-span-1"/>
                    <bentos.CellImage cellImgAlt="Game type selection screen" cellImgLink={imgDDRMelee03} cellSpan="col-span-1"/>
                    <bentos.CellImage cellImgAlt="Song selection screen" cellImgLink={imgDDRMelee05} cellSpan="col-span-1"/>
                </div>

                <div className="w-full justify-self-center grid grid-cols-3 gap-[12px]">
                    <bentos.CellVideo cellVidLink={vidDDRMelee01} cellSpan="col-span-2" />

                    <bentos.CellText cellSpan="col-span-1">
                        <bentos.ParagraphText text="While they took the helm on programming the functionality of coordinating button presses from controller to on screen assets in time, I started tackling all asset design and video editing. I referenced old videos and photos of the DDR games, including those that I played growing up, and tried to accurately recreate the feel and experience of playing DDR, but with SSBM." textSize={paraTextSize}/>
                        <bentos.ParagraphText text="View the full video on Youtube!" textSize="text-[10px]" />
                    </bentos.CellText>
                </div>

                <div className="grid grid-cols-3 h-fit gap-[12px]">
                    <bentos.CellImage cellImgAlt="Cleared stage screen" cellImgLink={imgDDRMelee06} cellSpan="col-span-1"/>
                    <bentos.CellImage cellImgAlt="Score counting screen" cellImgLink={imgDDRMelee08} cellSpan="col-span-1"/>
                    <bentos.CellImage cellImgAlt="Score results screen" cellImgLink={imgDDRMelee09} cellSpan="col-span-1"/>
                </div>
        </div>
    )
}

function BentoBoxB() {
    return (
        <div className="relative z-0 flex w-[70%] h-auto justify-self-center grid-cols-1 gap-[12px] rounded-3xl place-content-center text-white hover:cursor-pointer">
            <div className="row-span-1">
            <YoutubeVideo />
            </div>
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

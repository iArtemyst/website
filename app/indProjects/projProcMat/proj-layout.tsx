'use client'

import React from "react";
import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import { CardHoverFX } from "@/app/globals/card-hover-fx";
import * as fonts from "@/app/globals/fonts";

import vidProcMat01 from "@/app/assets/videos/_game/_procmats/procmats_loop_00.mp4";
import vidProcMat02 from "@/app/assets/videos/_game/_procmats/procmats_loop_01.mp4";
import vidProcMat03 from "@/app/assets/videos/_game/_procmats/procmats_loop_02.mp4";
import vidProcMat04 from "@/app/assets/videos/_game/_procmats/procmats_loop_03.mp4";
import vidProcMat05 from "@/app/assets/videos/_game/_procmats/procmats_loop_04.mp4";
import vidProcMat06 from "@/app/assets/videos/_game/_procmats/procmats_loop_05.mp4";
import vidProcMat07 from "@/app/assets/videos/_game/_procmats/procmats_loop_06.mp4";
import vidProcMat08 from "@/app/assets/videos/_game/_procmats/procmats_loop_07.mp4";
import vidProcMat09 from "@/app/assets/videos/_game/_procmats/procmats_loop_08.mp4";
import vidProcMat10 from "@/app/assets/videos/_game/_procmats/procmats_loop_09.mp4";

function ProjectDetailText({TitleText="", MoreText=""}:{TitleText:String, MoreText:String}) {
    return (
        <div className="w-full relative justify-self-center z-0">
            <div className="w-[70%] justify-self-center border-white border-[1px] px-[16px] py-[8px] opacity-30 hover:opacity-100 transition-all duration-200">
                <div className={`${fonts.dotoBlack.className} text-priColor w-full text-[48px] text-left text-nowrap leading-none relative h-auto content-center my-[8px]`}>
                    <p>{TitleText}</p>
                </div>
                <div className={`${fonts.dotoBlack.className} text-[12px] relative flex-row right-0 bottom-0 w-full text-secColor text-left`}>
                    <p>{MoreText}</p>
                </div>
            </div>
        </div>
    )
}

function BentoBoxA() {
    function VideoCell({link, vidTitle=""}:{link:string, vidTitle:String}){
        return (
            <CardHoverFX bufferZone={0} rotateAmount={10}>
                <div className="relative group">
                    <bentos.Cell1ColVideo cellVidLink={link} />
                    <p className={`absolute left-[4%] bottom-[2%] text-textSml opacity-0 group-hover:opacity-100 group-hover:translate-y-[0px] -translate-y-[12px] text-white transition-all duration-400 drop-shadow-[0px_0px_8px_#000000] ${fonts.dotoBlack.className}`}>{vidTitle}</p>
                </div>
            </CardHoverFX>
        )
    }
    
    return (
        <div className="relative z-0 grid grid-cols-2 w-[80%] h-auto justify-self-center rounded-3xl place-content-center gap-[12px] my-[24px] text-white hover:cursor-pointer">
            <VideoCell link={vidProcMat01} vidTitle="Asphalt Material"/>
            <VideoCell link={vidProcMat02} vidTitle="Green Bark and Wood Material"/>
            <VideoCell link={vidProcMat03} vidTitle="White Bark and Wood Material"/>
            <VideoCell link={vidProcMat04} vidTitle="Brick Material"/>
            <VideoCell link={vidProcMat05} vidTitle="Refractive Glass Material"/>
            <VideoCell link={vidProcMat06} vidTitle="Snow and Ice Material"/>
            <VideoCell link={vidProcMat07} vidTitle="Lava Material"/>
            <VideoCell link={vidProcMat08} vidTitle="Worn Metal Material"/>
            <VideoCell link={vidProcMat09} vidTitle="Quartz Rock Material"/>
            <VideoCell link={vidProcMat10} vidTitle="Sand Dunes Material"/>
        </div>
    )
}

export default function ProjectProcMatPage() {
    return (
        <div className="absolute left-0 right-0 top-0 bottom-0 overflow-scroll py-[48px] no-scrollbar bg-bgColor">
            <ProjectDetailText 
                TitleText="PROCEDUAL MATERIALS" 
                MoreText="Creating a library of reusable materials and shaders, with detailed parameters for adjusting the materials to future scenes. For a deeper look at the nodes behind these materials, please visit my Artstation Page."/>
            <BentoBoxA />
        </div>
    )
}

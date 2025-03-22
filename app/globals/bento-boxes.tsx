'use client'

import "@/app/globals/globals.css";
import { StaticImageData } from "next/image";

import * as media from "@/app/globals/media";
import * as themes from "@/tailwind.config";
import * as fonts from "./fonts";


export function ProjectDetailText({TitleText="", MoreText=""}:{TitleText:String, MoreText:String}) {
    return (
        <div className="absolute z-0 left-[50%] -translate-x-[50%] bottom-[36px] w-[80%] grid grid-rows-auto h-fit justify-self-center border-white border-[1px] gap-[8px] px-[16px] py-[8px] mb-[24px]">

            <div className={`${fonts.dotoBlack.className} text-priColor w-full text-[48px] text-left text-nowrap leading-none relative h-auto content-center`}>
                <p>{TitleText}</p>
            </div>

            <div className={`${fonts.dotoBlack.className} text-textSml text-pretty relative flex-row right-0 bottom-0 w-full text-secColor text-left`}>
                <p>{MoreText}</p>
            </div>
        </div>
    )
}

export function ProjectDetailTextTop({TitleText="", MoreText=""}:{TitleText:String, MoreText:String}) {
    return (
        <div className="relative w-[80%] grid grid-rows-auto h-fit justify-self-center border-white border-[1px] gap-[8px] px-[16px] py-[8px]">

            <div className={`${fonts.dotoBlack.className} text-priColor w-full text-[48px] text-left text-nowrap leading-none relative h-auto content-center`}>
                <p>{TitleText}</p>
            </div>

            <div className={`${fonts.dotoBlack.className} text-textSml relative flex-row right-0 bottom-0 w-full text-secColor text-left`}>
                <p>{MoreText}</p>
            </div>
        </div>
    )
}

// ----------------------------------------------
export function HeaderText({text="", textSize=""}:{text:string, textSize:string}) {
    return (
        <div className={`relative h-auto w-full flex justify-center align-middle`}>
            <p className={`${fonts.dotoBlack.className} ${textSize} text-balance text-center content-center`}>{text}</p>
        </div>
    )
}

export function ParagraphText({text="", textSize=""}:{text:string, textSize:string}) {
    return (
        <div className={`relative h-auto w-auto flex justify-center my-[8px]`}>
            <p className={`${fonts.dotoBold.className} ${textSize} text-pretty text-center`}>{text}</p>
        </div>
    )
}
// ----------------------------------------------
export function CellText({children, cellSpan=""}: {children:any, cellSpan:String}) {
    return (
        <div className={`${cellSpan} ${themes.hoverShadow} w-full h-full rounded-3xl content-center p-[16px]  transition-all duration-200`}>
            {children}
        </div> 
    )
}

export function CellVideo({cellVidLink, cellSpan=""}: {cellVidLink:string, cellSpan:String}) {
    return (
        <div className={` ${cellSpan} ${themes.hoverShadow} relative w-full h-fit justify-self-center rounded-3xl overflow-hidden self-center border-2 border-green-300 transition-all duration-200`} >
            <media.GetHoverVideo vidLink={cellVidLink}/>
        </div>
    )
}

export function CellImage({cellImgLink, cellImgAlt="", cellSpan=""}: {cellImgLink:StaticImageData, cellImgAlt:string, cellSpan:String}) {
    return (
        <div className={` ${cellSpan} ${themes.hoverShadow} group relative w-full h-full justify-self-center rounded-3xl overflow-hidden`}>
            <media.GetImage imgLink={cellImgLink} imgAlt={cellImgAlt}/>
            <p className={`absolute left-[16px] bottom-[8px] text-textSml opacity-0 group-hover:opacity-100 group-hover:translate-y-[0px] -translate-y-[12px] transition-all duration-400 drop-shadow-[0px_0px_4px_#000000] ${fonts.dotoBlack.className}`}>{cellImgAlt}</p>
        </div>
    )
}
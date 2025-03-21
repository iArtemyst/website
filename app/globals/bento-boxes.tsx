'use client'

import React, { useState, MouseEvent, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import "@/app/globals/globals.css"

import * as fonts from "./fonts";
import * as themes from "@/tailwind.config";

const handleMouseEnter = (e:any) => {
    const vid = e.target
    vid.muted = true
    vid.play()
}

const handleMouseLeave = (e:any) => {
    const vid = e.target
    vid.muted = false
    vid.pause()
}
// ----------------------------------------------
export function ImportImage({imgLink, imgAlt = "Default Image",}: {imgLink:StaticImageData, imgAlt:string}) {
    return (
        <Image
            src={imgLink}
            alt={imgAlt}
            className="w-full h-full object-cover"
            />
    )
}

export function ImportVideo({vidLink}:{vidLink:string}) {
    return (
        <video src={vidLink} width="100%" height="100%" muted loop className=""/>
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
        <div className={` ${cellSpan} ${themes.hoverShadow} relative w-full h-fit justify-self-center rounded-3xl overflow-hidden self-center border-2 border-green-300 transition-all duration-200`}        
        onMouseMove={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <ImportVideo vidLink={cellVidLink}/>
        </div>
    )
}

export function CellImage({cellImgLink, cellImgAlt="", cellSpan=""}: {cellImgLink:StaticImageData, cellImgAlt:string, cellSpan:String}) {
    return (
        <div className={` ${cellSpan} ${themes.hoverShadow} group relative w-full h-full justify-self-center rounded-3xl overflow-hidden`}>
            <ImportImage imgLink={cellImgLink} imgAlt={cellImgAlt}/>
            <p className={`absolute left-[16px] bottom-[8px] text-textSml opacity-0 group-hover:opacity-100 group-hover:translate-y-[0px] -translate-y-[12px] transition-all duration-400 drop-shadow-[0px_0px_4px_#000000] ${fonts.dotoBlack.className}`}>{cellImgAlt}</p>
        </div>
    )
}
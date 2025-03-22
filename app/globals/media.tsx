'use client'

import "@/app/globals/globals.css";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { CardHoverFX } from "./card-hover-fx";

const handleMouseEnterVideo = (e: React.MouseEvent<HTMLVideoElement>) => {
    if (e.target instanceof HTMLVideoElement) {
        e.target.play();
    }
}

const handleMouseLeaveVideo = (e: React.MouseEvent<HTMLVideoElement>) => {
    if (e.target instanceof HTMLVideoElement) {
        e.target.pause();
    }
}

// ----------------------------------------------

export function GetImage({imgLink, imgAlt = "Default Image",}: {imgLink:StaticImageData, imgAlt:string}) {
    return (
        <Image
            src={imgLink}
            alt={imgAlt}
            className="w-full h-full object-cover"
            />
    )
}

export function GetHoverImage({imgLink, imgAlt = "Default Image",}: {imgLink:StaticImageData, imgAlt:string}) {
    return (
        <CardHoverFX bufferZone={0} rotateAmount={12}>
            <Image
                src={imgLink}
                alt={imgAlt}
                className="w-full h-full object-cover"
                />
        </CardHoverFX>
    )
}

export function GetHoverVideo({vidLink}:{vidLink:string}) {
    return (
        <video onMouseEnter={handleMouseEnterVideo} onMouseLeave={handleMouseLeaveVideo} src={vidLink} width="100%" height="100%" muted loop className=""/>
    )
}

export function GetAutoPlayVideo({vidLink}:{vidLink:string}) {
    return (
        <video src={vidLink} width="100%" height="100%" autoPlay muted loop className=""/>
    )
}
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

export function GetGalleryImage({imgLink, imgAlt = "Default Image",}: {imgLink:StaticImageData, imgAlt:string}) {
    return (
        <Image
            src={imgLink}
            alt={imgAlt}
            fill
            className="w-full h-full relative object-cover rounded-[8px] aspect-square"
            />
    )
}


export function GetGallerySmlImage({imgLink, imgAlt = "Default Image",}: {imgLink:StaticImageData, imgAlt:string}) {
    return (
        <Image
            src={imgLink}
            alt={imgAlt}
            fill
            className="w-full h-full relative object-cover rounded-[8px] aspect-square"
            />
    )
}

export function GetGalleryLrgImage({imgLink, imgAlt = "Default Image",}: {imgLink:StaticImageData, imgAlt:string}) {
    return (
        <Image
            src={imgLink}
            alt={imgAlt}
            className="w-full h-full object-cover rounded-[8px]"
            />
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

export function GetGalleryVideo({vidLink}:{vidLink:string}) {
    return (
        <video src={vidLink} width="full" height="full" autoPlay muted controls loop className="rounded-[12px]"/>
    )
}

export function GetGalleryLrgMedia({mediaLink, mediaText}:{mediaLink:string|StaticImageData, mediaText:string}) {
    return (
        <div>
            {
                typeof mediaLink === "string" ?
                <video src={mediaLink} width="full" height="full" autoPlay muted controls loop className="rounded-[12px]"/> :
                <Image src={mediaLink} alt={mediaText} className="w-full h-full object-cover rounded-[8px]" />
            }
        </div>
    )
}
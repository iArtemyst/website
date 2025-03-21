'use client'

import React, { useState, MouseEvent, useCallback } from "react";
import "@/app/globals/globals.css"
import * as fonts from "./fonts";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { CardHoverFX } from "./card-hover-fx";



function CardText({title = "", date = ""}:{title:String, date:String}) {
    return (
        <div className="relative flex justify-between h-[32px]">
            <p className={`${fonts.dotoBlack.className} text-black text-left self-center text-nowrap`}>{title}</p>
            <p className={`${fonts.dotoReg.className} text-black text-right self-center`}>{date}</p>
        </div>
    )
}

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

export function VideoCardA({projectTitle = "", projectDate = "", projectVideo, cardLink=""}: {projectTitle:String, projectDate:String, projectVideo:string, cardLink:Url}) {
    return(
        <CardHoverFX bufferZone={0} rotateAmount={7}>
            <Link href={cardLink} className="group">
                <div className="relative grid aspect-square w-full h-auto px-[10px] bg-slate-100 pt-3 shadow-[0px_0px_5px_#00000050] hover:shadow-[0px_0px_20px_#00000050] opacity-80 hover:opacity-100 scale-[80%] hover:scale-110 transition-all duration-100 rounded-md">
                    <div className="relative grid grid-cols-1 content-center w-full h-full overflow-hidden rounded-t-md rounded-b-sm z-20"
                        onMouseMove={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <video src={projectVideo} width="100%" height="auto" muted loop/>
                    </div>
                    <CardText title={projectTitle} date={projectDate} />
                </div>
            </Link>
        </CardHoverFX>
    )
}

export function VideoCardNoLink({projectTitle = "", projectDate = "", projectVideo}: {projectTitle:String, projectDate:String, projectVideo:string}) {
    return(
        <CardHoverFX bufferZone={0} rotateAmount={7}>
                <div className="group relative grid aspect-square w-full h-auto px-[10px] bg-red-200 pt-3 shadow-[0px_0px_5px_#00000050] hover:shadow-[0px_0px_20px_#00000050] opacity-80 hover:opacity-100 scale-[80%] hover:scale-110 transition-all duration-100 rounded-md">
                    <div className="relative grid grid-cols-1 content-center w-full h-full overflow-hidden rounded-t-md rounded-b-sm z-20"
                        onMouseMove={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <video src={projectVideo} width="100%" height="auto" muted loop/>
                    </div>
                    <CardText title={projectTitle} date={projectDate} />
                </div>
        </CardHoverFX>
    )
}

export function SkillCard({cardLink="", cardTitle ="", cardDesc ="", cardVid, cardBack, startAngle="" }: {cardLink:Url, cardTitle:String, cardDesc:String, cardVid:string, cardBack:string, startAngle:String}) {
    
    function CardSideFront () {
        return (
            <div className="relative h-full w-full">
                <div className="relative w-full h-full grid grid-cols-1 content-center">
                    <video src={cardVid} width="100%" height="auto" muted loop                
                        onMouseMove={handleMouseEnter}
                        onMouseLeave={handleMouseLeave} />
                </div>

                <div className="absolute left-0 bottom-0 px-3 py-3">
                    <p className={`text-nowrap text-left text-textMed ${fonts.bebasNeue.className}  text-textVariant drop-shadow-[0_3px_3px_rgba(0,0,0,0.7)]`}>{cardTitle}</p>
                    <p className={`text-pretty text-left text-textSml ${fonts.poppins.className} text-textVariant drop-shadow-[0_3px_3px_rgba(0,0,0,0.7)]`}>{cardDesc}</p>
                </div>
            </div>
        )
    }
    
    function CardSideBack () {
        return (
            <div className="relative w-full h-full grid grid-cols-1 content-center">
                <video src={cardBack} width="100%" height="auto" autoPlay muted loop                
                        onMouseMove={handleMouseLeave}
                        onMouseLeave={handleMouseEnter} />
            </div>
        )
    }

    return (
        <div className="group w-fit h-fit duration-700 hover:animate-none self-center hover:z-10 animate-wiggle-bounce">
            <div className={`w-fit h-auto ${startAngle} group-hover:rotate-0 self-center hover:mx-[-60px]`}>
                <Link href={cardLink} className="-mx-[96px] hover:mx-[24px] z-0 hover:z-10 transition-all duration-200 ">
                    <CardHoverFX bufferZone={0} rotateAmount={7}>
                        <div className="group relative w-[240px] h-[360px] group-hover:w-[360px] group-hover:h-[480px]" >
                            <div className="">
                                <div className="absolute w-full h-full rounded-[16px] overflow-clip z-1
                                                shadow-[0px_0px_12px_rgba(0,0,0,0.4)] backface-hidden transition-all duration-500 rotate-y-180 group-hover:rotate-y-0">
                                    <CardSideFront />
                                </div>
                                <div className="absolute w-full h-full rounded-[16px] overflow-clip z-0
                                                shadow-[0px_0px_12px_rgba(0,0,0,0.4)] backface-hidden transition-all duration-500 rotate-y-0 group-hover:rotate-y-180">
                                    <CardSideBack />
                                </div>
                            </div>
                        </div>
                    </CardHoverFX>
                </Link>
            </div>
        </div>
    )
}

export function VidDetailCard({cardVid=""}:{cardVid:string}) {
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
    
    return(
        <div className="relative w-full h-full content-center">
            <video src={cardVid} width="100%" height="auto" muted loop                
                onMouseMove={handleMouseEnter}
                onMouseLeave={handleMouseLeave} />
        </div>
    )
}

export function VidDetailPlayCard({cardVid=""}:{cardVid:string}) {
    return(
        <div className="relative w-full h-full content-center">
            <video src={cardVid} width="100%" height="auto" autoPlay muted loop/>              
        </div>
    )
}

export function ImgDetailCard({imgSrc, imgAlt=""}:{imgSrc:StaticImageData, imgAlt:string}) {
    return(
        <div>
            <Image 
                src={imgSrc}
                alt={imgAlt}
                className="w-full h-full object-cover"
                >
            </Image>
        </div>
    )
}

export function DetailCard({cardText, width, containerMargin, hoverWidth, hoverMargin, children}:{children:any, containerMargin:string, cardText:String, width:string, hoverWidth:string, hoverMargin:string}) {  
    return (
        <div className={`group w-auto h-auto hover:animate-none ${containerMargin} hover:z-10 content-center self-center animate-wiggle-bounce transition-all duration-300`}>
            <CardHoverFX bufferZone={0} rotateAmount={7}>
                <div className={`${width} ${hoverWidth} ${hoverMargin} relative h-auto shadow-[0px_0px_12px_rgba(0,0,0,0.4)] transition-all duration-400`}>
                    <div className="overflow-clip rounded-[8px]">
                        {children}
                    </div>
                    <div className="absolute left-0 bottom-0 w-auto h-auto translate-y-[0px] opacity-0 group-hover:opacity-100 -z-10 group-hover:translate-y-[32px] transition-all duration-300">
                        <p className={`${fonts.dotoBlack.className} text-textMed text-priColor`}>{cardText}</p>
                    </div>
                </div>
            </CardHoverFX>
        </div>
    )
}

export function DetailCardGrid({cardText="", width="", hoverWidth="", containerMargin, hoverMargin="", children}:{children:any, containerMargin:string, cardText:String, width:string, hoverWidth:string, hoverMargin:string}) {  
    return (
        <div className={`group w-auto h-auto hover:animate-none ${containerMargin} col-auto row-auto content-center self-center animate-wiggle-bounce transition-all duration-300`}>
            <CardHoverFX bufferZone={0} rotateAmount={7}>
                <div className={`${width} ${hoverWidth} ${hoverMargin}  relative h-auto shadow-[0px_0px_12px_rgba(0,0,0,0.4)] transition-all duration-400`}>
                    <div className="overflow-clip rounded-[8px]">
                        {children}
                    </div>
                    <div className="absolute left-0 bottom-0 w-auto h-auto translate-y-[0px] opacity-0 group-hover:opacity-100 -z-10 group-hover:translate-y-[32px] transition-all duration-300">
                        <p className={`${fonts.dotoBlack.className} text-textMed text-priColor drop-shadow-[0px_0px_8px_#000000]`}>{cardText}</p>
                    </div>
                </div>
            </CardHoverFX>
        </div>
    )
}

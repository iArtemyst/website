'use client'

import "@/app/globals/globals.css";
import * as media from "@/app/globals/media";
import * as themes from "@/tailwind.config";
import { Url } from "next/dist/shared/lib/router/router";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CardHoverFX } from "./card-hover-fx";
import * as fonts from "./fonts";


function CardText({title = "", date = ""}:{title:String, date:String}) {
    return (
        <div className="relative flex justify-between h-[24px]">
            <p className={`${fonts.dotoBlack.className} text-black text-left self-center text-nowrap`}>{title}</p>
            <p className={`${fonts.dotoReg.className} text-black text-right self-center`}>{date}</p>
        </div>
    )
}

export function ProjectCardWithLink({projectTitle = "", projectDate = "", projectVideo, cardLink=""}: {projectTitle:String, projectDate:String, projectVideo:string, cardLink:Url}) {
    return(
        <CardHoverFX bufferZone={0} rotateAmount={7}>
            <Link href={cardLink} className="group">
                <div className={` ${themes.hoverShadow} relative grid w-full h-auto p-[10px] bg-slate-100 opacity-80 hover:opacity-100 scale-[80%] hover:border-[4px] border-[0px] border-green-400 hover:scale-110 transition-all duration-100 rounded-md`}>
                    <div className="relative grid grid-cols-1 content-center w-full h-full overflow-hidden rounded-md z-20">
                        <media.GetHoverVideo vidLink={projectVideo}/>
                    </div>
                    <CardText title={projectTitle} date={projectDate} />
                </div>
            </Link>
        </CardHoverFX>
    )
}

export function ProjectCardNoLink({projectTitle = "", projectDate = "", projectVideo}: {projectTitle:String, projectDate:String, projectVideo:string}) {
    const [effect, setEffect] = useState(false);

    return(
        <CardHoverFX bufferZone={0} rotateAmount={7}>
                <div className={` ${effect && "animate-error-wiggle"} ${themes.hoverShadow} group relative w-full h-auto hover:border-[4px] border-[0px] border-red-400 opacity-80 hover:opacity-100 scale-[80%] hover:scale-110 transition-all duration-100 rounded-md hover:cursor-pointer`} 
                    onClick={() => {
                        setEffect(true)
                        }}
                    onAnimationEnd={() => {
                        setEffect(false)
                    }}
                    >

                    <div className="grid bg-slate-100 z-10 overflow-visible p-[10px]">
                        <div className="relative grid grid-cols-1 content-center w-full h-full overflow-hidden rounded-md z-20">
                            <media.GetHoverVideo vidLink={projectVideo}/>
                        </div>
                        <CardText title={projectTitle} date={projectDate} />
                    </div>

                    <div className={`absolute left-[50%] -translate-x-[50%] bottom-0 opacity-0 group-hover:opacity-100 -translate-y-[24px] group-hover:translate-y-[32px] text-red-400 transition-all duration-200`}>
                        <p className={`${fonts.dotoBlack.className} text-nowrap`}>Sorry! No Link for this Project.</p>
                    </div>
                </div>
        </CardHoverFX>
    )
}

//-----------------------------------

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

export function VidDetailCard({cardVid=""}:{cardVid:string}) {
    return(
        <div className="relative w-full h-full content-center cursor-pointer">
            <media.GetHoverVideo vidLink={cardVid} />
        </div>
    )
}


export function VidDetailPlayCard({cardVid=""}:{cardVid:string}) {
    return(
        <div className="relative w-full h-full content-center cursor-pointer">
            <media.GetHoverVideo vidLink={cardVid} />              
        </div>
    )
}

export function ImgDetailCard({imgSrc, imgAlt=""}:{imgSrc:StaticImageData, imgAlt:string}) {
    return(
        <div className="cursor-pointer">
            <media.GetImage imgLink={imgSrc} imgAlt={imgAlt} />
        </div>
    )
}




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


//--------------------------------------
//PROJECT GALLERY PAGE CARD COMPONENTS

function GroupProjectCards({dataArray}:{dataArray:IProjectLinkCard2}) {
    const [effect, setEffect] = useState(false);
    
    return (
        <div className={`w-full h-full place-items-center place-content-center`}>
            <CardHoverFX bufferZone={0} rotateAmount={7}>
                <div className={`${effect && "animate-error-wiggle"} bg-cardBGInactiveColor hover:bg-cardBGColor group w-fit h-fit cursor-pointer rounded-[8px] opacity-80 hover:opacity-100 hover:scale-[112%] active:scale-[105%] transition-all duration-200`} 
                                onClick={() => { !dataArray.cardLink && setEffect(true)}} onAnimationEnd={() => { setEffect(false)} } >
                    {
                        typeof dataArray.cardLink === "string" ?
                            <Link href={dataArray.cardLink}>
                                <CardInternals dataArray={dataArray}/>
                            </Link>
                            :
                            <div>
                                <CardInternals dataArray={dataArray}/>
                                <p className={`${fonts.dotoBlack.className} text-nowrap absolute w-full h-fit text-center bottom-0 group-hover:bottom-[-14px] sm:group-hover:bottom-[-18px] md:group-hover:bottom-[-22px] lg:group-hover:bottom-[-28px]  xl:group-hover:bottom-[-34px] opacity-0 group-hover:opacity-100 text-red-400 transition-all duration-200
                                        text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px]`}>{dataArray.errorText}</p>
                            </div>
                    }
                </div>
            </CardHoverFX>
        </div>
    )
}

export interface IProjectLinkCard
{
    projectTitle: String,
    projectDates: String,
    mediaLink: string,
    cardLink?: Url
}

export interface IProjectLinkCard2
{
    projectTitle: String,
    projectDates: String,
    mediaLink: string,
    cardLink: Url,
    errorText?: string,
}

function CardText({dataArray}:{dataArray:IProjectLinkCard2}) {
    return (
        <div className="relative flex justify-between w-full h-fit text-[0px] group-hover:text-[6px] sm:group-hover:text-[8px] md:group-hover:text-[10px] lg:group-hover:text-[12px] xl:group-hover:text-[14px] 2xl:group-hover:text-[20px] items-end transition-all duration-300">
            <p className={`${fonts.dotoBlack.className} text-black text-left text-nowrap`}>{dataArray.projectTitle}</p>
            <p className={`${fonts.dotoReg.className} text-black text-right text-nowrap`}>{dataArray.projectDates}</p>
        </div>
    )
}

function CardInternals({dataArray}:{dataArray:IProjectLinkCard2}) {
    return (
        <div className={`group relative grid hover:gap-[8px] hover:lg:gap-[10px] w-fit h-auto p-[8px] lg:p-[12px] transition-all duration-300 rounded-md place-items-center overflow-clip`}>
            <div className="relative content-center w-[140px] group-hover:w-[120px] md:group-hover:w-[180px] md:w-[200px] lg:group-hover:w-[220px] lg:w-[240px] xl:group-hover:w-[280px] xl:w-[300px] 2xl:group-hover:w-[340px] 2xl:w-[360px] h-[100%] group-hover:h-[90%] self-start overflow-hidden rounded-md z-20 group-hover:shadow-[0px_0px_12px_#00000090] transition-all duration-300">
                <media.GetHoverVideo vidLink={dataArray.mediaLink}/>
            </div>
            <div className={`absolute left-0 bottom-0 p-[6px] md:p-[8px] w-full h-auto group-hover:opacity-100 opacity-0 transition-all duration-300`}>
                <CardText dataArray={dataArray} />
            </div>
        </div>
    )
}

function GroupProjectCards2({dataArray}:{dataArray:IProjectLinkCard2}) {
    const [effect, setEffect] = useState(false);
    
    return (
        <div className={`w-full h-full place-items-center place-content-center`}>
            <CardHoverFX bufferZone={0} rotateAmount={7}>
                <div className={`${effect && "animate-error-wiggle"} bg-cardBGInactiveColor hover:bg-cardBGColor group w-fit h-fit cursor-pointer rounded-[8px] opacity-80 hover:opacity-100 hover:scale-[112%] active:scale-[105%] transition-all duration-200`} 
                                onClick={() => { !dataArray.cardLink && setEffect(true)}} onAnimationEnd={() => { setEffect(false)} } >
                    <Link href={dataArray.cardLink}>
                        <CardInternals dataArray={dataArray}/>
                    {
                        typeof dataArray.errorText === "string" ?
                            <div>
                                <p className={`${fonts.dotoBlack.className} text-nowrap absolute w-full h-fit text-center top-0 group-hover:top-[-.75rem] sm:group-hover:top-[-1rem] md:group-hover:top-[-1.25rem] lg:group-hover:top-[-1.5rem] xl:group-hover:top-[-1.75rem] opacity-0 group-hover:opacity-100 text-textVariant transition-all duration-200
                                    text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px]`}>{dataArray.errorText}</p>
                            </div>
                        :
                            <div/>
                    }
                    </Link>
                </div>
            </CardHoverFX>
        </div>
    )
}


export function ProjectLinkCardsContainer({dataArray}:{dataArray:IProjectLinkCard2[]}) {
    return (
        <div className={`grid grid-cols-2 sm:grid-cols-3 w-[420px] sm:w-[540px] md:w-[720px] lg:w-[1080px] xl:w-[1280px] 2xl:w-[1640px] justify-self-center gap-[24px] h-full content-center place-content-center`}>
            {
                dataArray.map((data, i) => {
                    return (
                        <GroupProjectCards2 key={i} dataArray={data}/>
                    )
                })
            }
        </div>
    )
}
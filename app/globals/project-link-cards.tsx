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

export interface IProjectLinkCard
{
    projectTitle: String,
    projectDates: String,
    mediaLink: string,
    cardLink?: Url
}

function CardText({dataArray}:{dataArray:IProjectLinkCard}) {
    return (
        <div className="relative flex justify-between w-full h-auto text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[20px] items-end">
            <p className={`${fonts.dotoBlack.className} text-black text-left text-nowrap`}>{dataArray.projectTitle}</p>
            <p className={`${fonts.dotoReg.className} text-black text-right text-nowrap`}>{dataArray.projectDates}</p>
        </div>
    )
}

function CardInternals({dataArray}:{dataArray:IProjectLinkCard}) {
    return (
        <div className={` ${themes.hoverShadow} relative grid gap-[8px] lg:gap-[10px] w-fit h-fit p-[8px] lg:p-[12px] transition-all duration-100 rounded-md place-items-center`}>
        <div className="relative content-center w-[140px] md:w-[200px] lg:w-[240px] xl:w-[300px] 2xl:w-[360px] h-fit overflow-hidden rounded-md z-20">
            <media.GetHoverVideo vidLink={dataArray.mediaLink}/>
        </div>
        <CardText dataArray={dataArray} />
    </div>
    )
}

function GroupProjectCards({dataArray}:{dataArray:IProjectLinkCard}) {
    const [effect, setEffect] = useState(false);
    
    return (
        <CardHoverFX bufferZone={0} rotateAmount={7}>
            <div className={`${effect && "animate-error-wiggle"} group w-fit h-fit cursor-pointer overflow-clip rounded-[8px] opacity-80 hover:opacity-100 bg-slate-100 hover:scale-[112%] transition-all duration-200`} onClick={() => { !dataArray.cardLink && setEffect(true)}} onAnimationEnd={() => { setEffect(false)} } >
                {
                    typeof dataArray.cardLink === "string" ?
                        <Link href={dataArray.cardLink}>
                            <CardInternals dataArray={dataArray}/>
                        </Link>
                        :
                        <div>
                            <CardInternals dataArray={dataArray}/>
                            <p className={`${fonts.dotoBlack.className} text-nowrap absolute w-full h-fit text-center bottom-0 group-hover:bottom-[-14px] sm:group-hover:bottom-[-18px] md:group-hover:bottom-[-22px] lg:group-hover:bottom-[-28px]  xl:group-hover:bottom-[-34px] opacity-0 group-hover:opacity-100 text-red-400 transition-all duration-200
                                    text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px]`}>PAGE IN PROGRESS CHECK BACK SOON!</p>
                        </div>
                }
            </div>
        </CardHoverFX>
    )
}

export function ProjectLinkCardsContainer({dataArray}:{dataArray:IProjectLinkCard[]}) {
    return (
        <div className={`grid grid-cols-2 sm:grid-cols-3 w-[420px] sm:w-[540px] md:w-[720px] lg:w-[1080px] xl:w-[1280px] 2xl:w-[1640px] justify-self-center gap-[24px] h-full content-center place-items-center`}>
            {
                dataArray.map((data, i) => {
                    return (
                        <GroupProjectCards key={i} dataArray={data} />
                    )
                })
            }
        </div>
    )
}
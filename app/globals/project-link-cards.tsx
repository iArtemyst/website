'use client'

import "@/app/globals/globals.css";
import Link from "next/link";
import { useState, lazy, Suspense } from "react";
import { CardHoverFX } from "./card-hover-fx";
import * as fonts from "./fonts";
import { LazyHoverVideo } from "./lazy-video";

//--------------------------------------
//PROJECT GALLERY PAGE CARD COMPONENTS

export interface IProjectLinkCard
{
    projectTitle: string,
    projectDates: string,
    mediaLink: string,
    cardLink: string,
    errorText?: string,
}

function CardText({dataArray}: {dataArray: IProjectLinkCard}) {
    return (
        <div className="relative flex justify-between w-full h-fit text-[0px] group-hover:text-[6px] sm:group-hover:text-[8px] md:group-hover:text-[10px] lg:group-hover:text-[12px] xl:group-hover:text-[14px] 2xl:group-hover:text-[20px] items-end transition-all duration-300">
            <p className={`${fonts.dotoBlack.className} text-black text-left text-nowrap`}>{dataArray.projectTitle}</p>
            <p className={`${fonts.dotoReg.className} text-black text-right text-nowrap`}>{dataArray.projectDates}</p>
        </div>
    )
}

function LazyCardInternals({dataArray}: {dataArray: IProjectLinkCard}) {
    return (
        <div className={`group relative grid hover:gap-[8px] hover:lg:gap-[10px] w-fit h-auto p-[8px] lg:p-[12px] transition-all duration-300 rounded-md place-items-center overflow-clip`}>
            <div className="relative content-center w-[140px] group-hover:w-[120px] md:group-hover:w-[180px] md:w-[200px] lg:group-hover:w-[220px] lg:w-[240px] xl:group-hover:w-[280px] xl:w-[300px] 2xl:group-hover:w-[340px] 2xl:w-[360px] h-[100%] group-hover:h-[90%] self-start overflow-hidden rounded-md z-20 group-hover:shadow-[0px_0px_12px_#00000090] transition-all duration-300">
                <LazyHoverVideo 
                    src={dataArray.mediaLink}
                    autoplay={false}
                    controls={false}
                    muted={true}
                    loop={true}
                    />
            </div>
            <div className={`absolute left-0 bottom-0 p-[6px] md:p-[8px] w-full h-auto group-hover:opacity-100 opacity-0 transition-all duration-300`}>
                <CardText dataArray={dataArray} />
            </div>
        </div>
    )
}

// function CardInternals({dataArray}:{dataArray:IProjectLinkCard2}) {
//     return (
//         <div className={`group relative grid hover:gap-[8px] hover:lg:gap-[10px] w-fit h-auto p-[8px] lg:p-[12px] transition-all duration-300 rounded-md place-items-center overflow-clip`}>
//             <div className="relative content-center w-[140px] group-hover:w-[120px] md:group-hover:w-[180px] md:w-[200px] lg:group-hover:w-[220px] lg:w-[240px] xl:group-hover:w-[280px] xl:w-[300px] 2xl:group-hover:w-[340px] 2xl:w-[360px] h-[100%] group-hover:h-[90%] self-start overflow-hidden rounded-md z-20 group-hover:shadow-[0px_0px_12px_#00000090] transition-all duration-300">
//                 <media.GetHoverVideo vidLink={dataArray.mediaLink}/>
//             </div>
//             <div className={`absolute left-0 bottom-0 p-[6px] md:p-[8px] w-full h-auto group-hover:opacity-100 opacity-0 transition-all duration-300`}>
//                 <CardText dataArray={dataArray} />
//             </div>
//         </div>
//     )
// }

function GroupProjectCards({dataArray}: {dataArray: IProjectLinkCard}) {
    const [effect, setEffect] = useState(false);
    
    return (
        <div className={`w-full h-full place-items-center place-content-center`}>
            <CardHoverFX bufferZone={0} rotateAmount={7}>
                <div className={`${effect && "animate-error-wiggle"} bg-cardBGInactiveColor hover:bg-cardBGColor group w-fit h-fit cursor-pointer rounded-[8px] opacity-80 hover:opacity-100 hover:scale-[112%] active:scale-[105%] transition-all duration-200`} 
                                onClick={() => { if (!dataArray.cardLink) { setEffect(true) } }} onAnimationEnd={() => { setEffect(false)} } >
                    <Link href={dataArray.cardLink}>
                        <LazyCardInternals dataArray={dataArray}/>
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

export function ProjectLinkCardsContainer({dataArray}: {dataArray: IProjectLinkCard[]}) {
    return (
        <div className={`grid grid-cols-2 sm:grid-cols-3 w-[420px] sm:w-[540px] md:w-[720px] lg:w-[1080px] xl:w-[1280px] 2xl:w-[1640px] justify-self-center gap-[24px] h-full content-center place-content-center`}>
            {
                dataArray.map((data, i) => {
                    return (
                        <GroupProjectCards key={i} dataArray={data}/>
                    )
                })
            }
        </div>
    )
}
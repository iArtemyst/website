'use client'

import "@/app/globals/globals.css";

import { hoverShadow } from "@/tailwind.config";
import { Url } from "next/dist/shared/lib/router/router";
import * as fonts from "./fonts";
import { LazyImageSizer } from "./lazy-image";
import StyledLink from "./styled-link";
import { MediaType } from "./project-galleries";
import { LazyNonHoverVideo } from "./lazy-video";
import { CardHoverFX } from "./card-hover-fx";
import { useState } from "react"

export interface IRecentProject
{
    projTitle:string, 
    projDesc:string, 
    projMedia:string, 
    projMediaAltText:string, 
    projLinkMediaType:MediaType, 
    projLink:Url,
    softwareUsed:string,
    cardColor:string
}

export function RecentProjectsShowcase({projectData}:{projectData:IRecentProject[]}) {
    const [visible, setVisible] = useState(false)

    function RecentProjectCard({project}:{project:IRecentProject}) {
        function CardText() {
            return (
                <div className="relative flex flex-col px-[8px] text-textVariant justify-between w-full h-full p-[0em] md:p-[1em]">
                    <p className={`${fonts.dotoBlack.className} w-full text-right text-pretty text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px]`}>{project.projTitle}</p>
                    <div className="flex flex-row gap-[1em] mb-0 md:mb-[.25em]">
                        <p className={`${fonts.dotoReg.className} w-full text-right text-balance md:text-nowrap text-[6px] md:text-[8px] xl:text-[10px]`}>{project.softwareUsed}</p>
                    </div>
                    <p className={`${fonts.poppins.className} w-full text-right text-pretty text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px]`}>{project.projDesc}</p>
                </div>
            )
        }
        
        return (
            <StyledLink href={project.projLink}>
                <div className="self-center justify-self-center place-self-center w-fit h-fit hover:scale-[.96] active:scale-[.93] my-[.5em] mx-[.5em] transition-all duration-200">
                    <CardHoverFX bufferZone={20} rotateAmount={120}>
                        <div className={`${hoverShadow} ${project.cardColor} w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[420px] h-fit 
                                rounded-2xl flex px-[1em] py-[.75em] place-self-center border-[2px] sm:border-[6px] flex-row place-content-end shadow-[2px_2px_6px_#00000050,-2px_-2px_6px_#ffffff30]`}>
                            <CardText/>
                            
                            
                                <div className="aspect-[4/3] h-fit flex flex-col self-center place-self-center order-2 rounded-xl overflow-clip w-[84px] sm:w-[96px] md:w-[96px] lg:w-[240px]">
                                    {
                                        project.projLinkMediaType === MediaType.Video ?
                                            <LazyNonHoverVideo 
                                                src={project.projMedia}
                                                autoplay={true}
                                                controls={false}
                                                muted={true}
                                                loop={true}
                                                /> 
                                        :
                                            <LazyImageSizer imgAlt={project.projMediaAltText} imgLink={project.projMedia} imgSize="w-full h-full"/>
                                    }
                                </div>
                            
                        </div>
                    </CardHoverFX>
                </div>
            </StyledLink>
        )
    }


    return (
        <div className={`${visible ? "opacity-100" : "opacity-[.5]"} absolute left-0 top-0 z-[100] m-[1em] w-fit h-fit cursor-pointer flex-col bg-[#FFFFFF90] backdrop-blur-md rounded-[1em] transition-transform duration-200`}>
            <p className={`${fonts.dotoBlack.className} w-full h-fit py-[.5em] px-[1em] text-center hover:scale-[.97] active:scale-[.95] text-[10px] md:text-[14px]`} onClick={() => setVisible(!visible)}>RECENT PROJECTS</p>
            { visible &&  
                    projectData.map((data, i) => <RecentProjectCard project={data} key={i}/>)
            }
        </div>
    )
}
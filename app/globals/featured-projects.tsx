'use client'

import "@/app/globals/globals.css";
import { CardHoverFX } from "./card-hover-fx";
import StyledLink from "./styled-link";
import { LazyHoverVideo } from "./lazy-video";
import { NoSelect } from "./styles";
import * as fonts from "@/app/globals/fonts"
import * as pages from "@/app/globals/pages-main";
import { IProjectLinkCard, ProjectLinkCardsContainer } from "@/app/globals/project-link-cards";
import { useState, useEffect } from "react";
import Loading from "../globals/loading-text";
import { CheckIfMobileBrowser } from "./mobile-check";
import { hoverShadow } from "@/tailwind.config";


export interface IFeaturedProjectCard
{
    projectTitle: string,
    projectDates: string,
    mediaLink: string,
    cardLink: string,
    softwareUsed?: string,
    cardColor?: string,
    projectDesc?: string,
}

function FeaturedGroupProjectCards({dataArray}: {dataArray: IFeaturedProjectCard}) {
    function ProjectVideo({src}:{src:string}) {
            return (
                <div className={`relative self-center aspect-[4/3] w-full h-fit overflow-hidden rounded-md z-20 shadow-[0px_0px_12px_#00000090]`}>
                    <LazyHoverVideo
                        src={src}
                        autoplay={false}
                        controls={false}
                        muted={true}
                        loop={true}
                        style="object-cover"
                        />
                </div>
            )
        }
    
    function CardText() {
            return (
                <div className="relative flex flex-col px-[8px] text-textVariant justify-between w-fit h-full p-[0em] md:p-[1em]">
                    <p className={`${fonts.dotoBlack.className} w-full text-right text-balance text-[10px] sm:text-[10px] md:text-[12px] lg:text-[14px]`}>{dataArray.projectTitle}</p>
                    <div className="flex flex-row gap-[1em] mb-0 md:mb-[.25em]">
                        <p className={`${fonts.dotoReg.className} w-full text-right text-balance md:text-nowrap text-[8px] md:text-[10px] xl:text-[12px]`}>{dataArray.softwareUsed}</p>
                    </div>
                    <p className={`${fonts.poppins.className} w-full text-right text-pretty text-[8px] sm:text-[8px] md:text-[10px] lg:text-[12px]`}>{dataArray.projectDesc}</p>
                </div>
            )
        }
    
    return (
        <div className={`group w-fit h-fit place-items-center place-content-center hover:z-20 self-center`}>
            <CardHoverFX bufferZone={0} rotateAmount={7}>
                <div className={`${dataArray.cardColor} border-[4px] rounded-[16px] w-fit h-fit cursor-pointer opacity-80 hover:opacity-100 hover:scale-[110%] active:scale-[95%] transition-all duration-200`} >
                    <StyledLink href={dataArray.cardLink}>
                        <div className={`group relative flex flex-row sm:w-[320px] md:w-[400px] lg:w-[460px] xl:w-[580px] 2xl:w-[640px] h-auto p-[8px] transition-all duration-300 rounded-md place-items-center overflow-clip`}>
                            <ProjectVideo src={dataArray.mediaLink} />
                            <CardText />
                        </div>
                    </StyledLink>
                </div>
            </CardHoverFX>
        </div>
    )
}


export function FeatureProjectLinkCardsContainer({dataArray}: {dataArray: IFeaturedProjectCard[]}) {    
    return (
        <div className={`w-[90%] h-fit justify-self-center flex flex-col`}>
            <div className={`flex flex-col md:flex-row place-self-center justify-self-center gap-x-[0px] gap-y-[16px] md:gap-y-[0px] md:gap-x-[36px] w-fit h-fit mb-[16px] md:mb-[0px]`}>
                {
                    dataArray.map((data, i) => <FeaturedGroupProjectCards key={i} dataArray={data}/> )
                }
            </div>
        </div>
    )
}


export function FeaturedProjectsDiv({dataArray}: {dataArray: IFeaturedProjectCard[]}) {
        const [shuffledCards, setArray] = useState<IFeaturedProjectCard[]>([])
        
        useEffect(() => {
            setArray(shuffle_about_cards(dataArray))
        }, []);
        
        function shuffle_about_cards(new_cards: IFeaturedProjectCard[]) 
        {
            let shuffled_array = structuredClone(new_cards);
    
            for (let i = new_cards.length -1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i - 1));
                [shuffled_array[i], shuffled_array[j]] = [shuffled_array[j], shuffled_array[i]];
            }
            
            return shuffled_array;
        }
    
    
    return (
        <div className="w-full h-fit flex flex-col justify-center items-center justify-items-center relative">
            <p className={`text-textVariant ${fonts.dotoBlack.className} text-center w-fit text-[24px] sm:text-[24px] xl:text-[32px] px-[1em] py-[.25em]`}>
                FEATURED PROJECTS
            </p>
            <FeatureProjectLinkCardsContainer dataArray={shuffledCards} />
        </div>
    )
}
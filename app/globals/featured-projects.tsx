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

function LazyCardInternals({dataArray}: {dataArray: IProjectLinkCard}) {
    function ProjectVideo({src}:{src:string}) {
        return (
            <div className="z-20">
            <LazyHoverVideo
                src={src}
                autoplay={false}
                controls={false}
                muted={true}
                loop={true}
                />
            </div>
        )
    }
    
    function CardText() {
        return (
            <div className="relative flex justify-between w-full h-fit text-[0px] sm:group-hover:text-[6px] md:group-hover:text-[8px] lg:group-hover:text-[10px] xl:group-hover:text-[12px] 2xl:group-hover:text-[16px] items-end transition-all duration-300"
                    style={NoSelect}>
                <p className={`${fonts.dotoBlack.className} text-black text-left text-nowrap`}>{dataArray.projectTitle}</p>
                <p className={`${fonts.dotoReg.className} text-black text-right text-nowrap`}>{dataArray.projectDates}</p>
            </div>
        )
    }

    return (
        <div className={`group relative grid hover:gap-[8px] hover:lg:gap-[10px] w-fit h-auto p-[8px] lg:p-[12px] transition-all duration-300 rounded-md place-items-center overflow-clip`}>
            <div className="relative content-center md:w-[220px] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] h-[100%] group-hover:h-[90%] self-start overflow-hidden rounded-md z-20 shadow-[0px_0px_12px_#00000090] transition-all duration-300">
                <ProjectVideo src={dataArray.mediaLink} />
            </div>
            <div className={`absolute left-0 bottom-0 p-[6px] md:p-[8px] w-full h-auto group-hover:opacity-100 opacity-0 transition-all duration-300`}>
                <CardText />
            </div>
        </div>
    )
}

function GroupProjectCards({dataArray}: {dataArray: IProjectLinkCard}) {
    return (
        <div className={`w-fit h-full place-items-center place-content-center self-center`}>
            <CardHoverFX bufferZone={0} rotateAmount={7}>
                <div className={`bg-cardBGInactiveColor hover:bg-cardBGColor group w-fit h-fit cursor-pointer rounded-[8px] opacity-80 hover:opacity-100 hover:scale-[108%] active:scale-[95%] transition-all duration-200`} >
                    <StyledLink href={dataArray.cardLink}>
                        <LazyCardInternals dataArray={dataArray}/>
                        {
                            typeof dataArray.errorText === "string" ?
                                <div>
                                    <p className={`${fonts.dotoBlack.className} text-nowrap absolute w-full h-fit text-center top-0 group-hover:top-[-.75rem] sm:group-hover:top-[-1rem] md:group-hover:top-[-1.25rem] lg:group-hover:top-[-1.5rem] xl:group-hover:top-[-1.75rem] opacity-0 group-hover:opacity-100 text-textVariant transition-all duration-200
                                        text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px]`}>{dataArray.errorText}</p>
                                </div>
                            :
                                <></>
                        }
                    </StyledLink>
                </div>
            </CardHoverFX>
        </div>
    )
}


function MobileProjectVideo({src}:{src:string}) {
    return (
        <div className="z-20">
        <LazyHoverVideo
            src={src}
            autoplay={false}
            controls={false}
            muted={true}
            loop={true}
            />
        </div>
    )
}

function MobileLazyCardInternal({card}: {card: IProjectLinkCard}) {
    function MobileCardText() {
        return (
            <div className="relative flex justify-between w-full h-fit text-[6px] items-end">
                <p className={`${fonts.dotoBlack.className} text-black text-left text-nowrap`}>{card.projectTitle}</p>
                <p className={`${fonts.dotoReg.className} text-black text-right text-nowrap`}>{card.projectDates}</p>
            </div>
        )
    }

    return (
        <div className={`relative grid w-fit h-auto p-[8px] transition-all duration-300 rounded-md place-items-center overflow-clip`}>
            <div className="relative content-center w-[240px] h-[95%] self-start overflow-hidden rounded-md z-20 shadow-[0px_0px_12px_#00000090]">
                <MobileProjectVideo src={card.mediaLink} />
            </div>
            <div className={`absolute left-0 bottom-0 p-[6px] w-full h-auto opacity-100`}>
                <MobileCardText />
            </div>
        </div>
    )
}

function MobileGroupProjectCard({card}: {card: IProjectLinkCard}) {
    return (
        <div className={`relative w-fit h-fit place-self-center`}>
            <div className={`bg-cardBGInactiveColor active:bg-cardBGColor w-fit h-fit rounded-[8px] opacity-80 active:opacity-100 active:scale-[110%] transition-all duration-200`} style={NoSelect} >
                <StyledLink href={card.cardLink}>
                    <MobileLazyCardInternal card={card}/>
                    {
                        typeof card.errorText === "string" ?
                            <div>
                                <p className={`${fonts.dotoBlack.className} text-nowrap absolute w-full h-fit text-center top-[-14px] text-textVariant text-[8px]`}>{card.errorText}</p>
                            </div>
                        :
                            <></>
                    }
                </StyledLink>
            </div>
        </div>
    )
}


export function FeatureProjectLinkCardsContainer({dataArray}: {dataArray: IProjectLinkCard[]}) {    
    let isMobile = CheckIfMobileBrowser()
    
    return (
        <div className={`w-fit sm:w-[90%] justify-self-center mt-[24px] rounded-2xl bg-bgColor shadow-[2px_2px_4px_#00000030,-2px_-2px_4px_#ffffff20]`}>
            <div>
                <p className={`text-textVariant ${fonts.dotoBlack.className} text-center w-full text-[32px] px-[1em] py-[.25em]`}>
                    FEATURED PROJECTS
                </p>
            </div>

            {
                isMobile === false ?
                    <div className={`flex flex-col sm:flex-row place-self-center justify-self-center gap-y-[54px] w-full h-full sm:place-content-around py-[24px] mt-[12px] mb-[24px]`}>
                        {
                            dataArray.map((data, i) => <GroupProjectCards key={i} dataArray={data}/> )
                        }
                    </div>
                    :
                    <div className={`flex flex-col w-full h-full relative gap-y-[36px] place-content-center place-self-center pb-[24px] mt-[12px] mb-[24px]`}>
                        {
                            dataArray.map((card, i) => <MobileGroupProjectCard key={i} card={card}/> )
                        }
                    </div>
            }
        </div>
    )
}


export function FeaturedProjectsDiv({dataArray}:{dataArray: IProjectLinkCard[]}) {
        const [shuffledCards, setArray] = useState<IProjectLinkCard[]>([])
        
        useEffect(() => {
            setArray(shuffle_about_cards(dataArray))
        }, []);
        
        function shuffle_about_cards(new_cards: IProjectLinkCard[]) 
        {
            let shuffled_array = structuredClone(new_cards);
    
            for (let i = new_cards.length -1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i - 1));
                [shuffled_array[i], shuffled_array[j]] = [shuffled_array[j], shuffled_array[i]];
            }
            
            return shuffled_array;
        }
    
    
    return (
        <div className="w-full place-self-center relative">
            <FeatureProjectLinkCardsContainer dataArray={shuffledCards} />
        </div>
    )
}
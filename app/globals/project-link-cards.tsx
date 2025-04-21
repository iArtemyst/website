'use client'

import "@/app/globals/globals.css";
import { CheckIfMobileBrowser } from "@/app/globals/mobile-check";
import { CardHoverFX } from "./card-hover-fx";
import * as fonts from "./fonts";
import { LazyHoverVideo } from "./lazy-video";
import StyledLink from "./styled-link";
import { NoSelect } from "./styles";

//--------------------------------------
//INTERFACE FOR PROJECT LINK CARDS

export interface IProjectLinkCard
{
    projectTitle: string,
    projectDates: string,
    mediaLink: string,
    cardLink: string,
    errorText?: string,
}

//--------------------------------------
// MAIN PROJECT LINK CARD COMPONENTS

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

function LazyCardInternals({dataArray}: {dataArray: IProjectLinkCard}) {
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
            <div className="relative content-center w-[200px] lg:w-[240px] xl:w-[280px] 2xl:w-[320px] h-[90%] self-start overflow-hidden rounded-md z-20 shadow-[0px_0px_12px_#00000090] transition-all duration-300">
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
        <div className={`w-full h-full place-items-center place-content-center`}>
            <CardHoverFX bufferZone={0} rotateAmount={7}>
                <div className={`bg-cardBGInactiveColor hover:bg-cardBGColor group w-fit h-fit cursor-pointer rounded-[8px] opacity-80 hover:opacity-100 hover:scale-[112%] active:scale-[105%] transition-all duration-200`} >
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

//--------------------------------------
// MOBILE PROJECT LINK CARD COMPONENTS

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
            <div className="relative content-center w-[120px] h-[90%] self-start overflow-hidden rounded-md z-20 shadow-[0px_0px_12px_#00000090]">
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
                                <p className={`${fonts.dotoBlack.className} text-nowrap absolute w-full h-fit text-center top-[-12px] text-textVariant text-[6px]`}>{card.errorText}</p>
                            </div>
                        :
                            <></>
                    }
                </StyledLink>
            </div>
        </div>
    )
}

//--------------------------------------
// PROJECT LINK CARD CONTAINER

export function ProjectLinkCardsContainer({dataArray}: {dataArray: IProjectLinkCard[]}) {
    return (
        <div className="">
            {
                CheckIfMobileBrowser() === false ?
                    <div className={`grid grid-cols-3 w-[90%] justify-self-center gap-[24px] h-full content-center place-content-center`}>
                        {
                            dataArray.map((data, i) => <GroupProjectCards key={i} dataArray={data}/> )
                        }
                    </div>
                    :
                    <div className={`grid grid-cols-2 w-[80%] h-full absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] gap-[12px] place-content-center`}>
                        {
                            dataArray.map((card, i) => <MobileGroupProjectCard key={i} card={card}/> )
                        }
                    </div>
            }
        </div>
    )
}
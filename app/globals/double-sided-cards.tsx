'use client'

import "@/app/globals/globals.css";
import Link from "next/link";
import { CardHoverFX } from "./card-hover-fx";
import * as fonts from "./fonts";
import { LazyHoverVideo, LazyNonHoverVideo } from "./lazy-video";
import { CheckIfMobileBrowser } from "@/app/globals/mobile-check";

//-----------------------------------
//Landing Page Double Sided Card Components

export interface IDoubleSideCard
{
    cardLink: string,
    cardTitle: string,
    cardDescription: string,
    cardVideoFront: string,
    cardVideoBack: string,
    rotatedAngle: string,
    cardWidth: string,
    hoverWidth: string,
    hoverMargin: string,
    conMargin: string,
}

export function DoubleSidedCard({card}: {card: IDoubleSideCard}) {
    function CardSideFront () {
        return (
            <div className={`relative h-full w-full backface-hidden transition-all duration-500 rotate-y-180 group-hover:rotate-y-0 group-hover:opacity-100 opacity-0`}>
                <div className={`absolute left-0 right-0 top-0 bottom-0`}>
                    <LazyHoverVideo 
                        src={card.cardVideoFront}
                        autoplay={false}
                        controls={false}
                        muted={true}
                        loop={true}
                        />
                </div>

                <div className="absolute left-0 bottom-0 px-[16px] py-[8px] w-full">
                    <p className={`${fonts.dotoBlack.className} text-nowrap text-left text-textMed text-textVariant drop-shadow-[0_3px_3px_rgba(0,0,0,0.7)]`}>{card.cardTitle}</p>
                </div>
            </div>
        )
    }

    function CardSideBack () {
        return (
            <div className={`relative h-full w-full shadow-[0px_0px_12px_rgba(0,0,0,0.4)] backface-hidden transition-all duration-500 rotate-y-0 group-hover:rotate-y-180 opacity-100 group-hover:opacity-0`}>
                <LazyHoverVideo 
                    src={card.cardVideoBack}
                    autoplay={true}
                    controls={false}
                    muted={true}
                    loop={true}
                    />
            </div>
        )
    }

    return (
        <div className={`${card.rotatedAngle} group hover:rotate-0 relative h-auto w-auto duration-500 hover:animate-none hover:z-10 animate-wiggle-bounce `}>
            <Link href={card.cardLink}>
                <CardHoverFX bufferZone={0} rotateAmount={7}>
                    <div className={`${card.cardWidth} ${card.hoverWidth} ${card.hoverMargin} ${card.conMargin} relative rounded-[24px] overflow-clip`} >
                        <CardSideFront />
                        <CardSideBack />
                    </div>
                </CardHoverFX>
            </Link>
        </div>
    )
}

export function LandingCardMobile({card}: {card: IDoubleSideCard}) {
    function CardSideBack () {
        return (
            <div className={`relative h-full w-full shadow-[0px_0px_12px_rgba(0,0,0,0.4)] backface-hidden transition-all duration-500 rotate-y-0 opacity-100`}>
                <Link href={card.cardLink}>
                    <LazyHoverVideo 
                        src={card.cardVideoBack}
                        autoplay={true}
                        controls={false}
                        muted={true}
                        loop={true}
                        />
                </Link>
            </div>
        )
    }

    return (
        <div className={`${card.rotatedAngle} group relative h-auto w-auto duration-500 active:animate-none animate-wiggle-bounce active:scale-110`}>
            <div className={`${card.cardWidth} ${card.conMargin} relative rounded-[24px] overflow-clip`} >
                <CardSideBack />
            </div>
        </div>
    )
}

export function DoubleSidedCardContainer({dataArray}:{dataArray:IDoubleSideCard[]}) {
    
    console.log(CheckIfMobileBrowser())

    return (
        <div>
            {
                CheckIfMobileBrowser() === false  ?
                <div className={`grid-cols-4 gap-[24px] sm:gap-[0px] absolute left-[50%] -translate-x-[50%] top-[40%] -translate-y-[50%] overflow-visible justify-self-center grid place-items-center w-[80%] md:w-[70%] h-auto items-center`}>
                    {
                        dataArray.map((data, i) => <DoubleSidedCard key={i} card={data}/>)
                    }
                </div>
                :
                <div className={`grid-cols-2 sm:grid-cols-4 gap-[24px] sm:gap-[0px] absolute left-[50%] -translate-x-[50%] top-[40%] -translate-y-[50%] overflow-visible justify-self-center grid place-items-center w-[80%] md:w-[70%] h-auto items-center`}>
                    {
                        dataArray.map((data, i) => <LandingCardMobile key={i} card={data}/>)
                    }
                </div>
            }
        </div>
        
    )
}

export function DoubleSidedCardContainer01({dataArray}:{dataArray:IDoubleSideCard[]}) {    
    return (
        <div>
            {
                <div className={`grid-cols-2 sm:grid-cols-4 gap-[24px] sm:gap-[0px] absolute left-[50%] -translate-x-[50%] top-[40%] -translate-y-[50%] overflow-visible justify-self-center grid place-items-center w-[80%] md:w-[70%] h-auto items-center`}>
                    {
                        dataArray.map((data, i) => <DoubleSidedCard key={i} card={data}/>)
                    }
                </div>
            }
        </div>
    )
}

//-----------------------------------
//About Me Double Sided Card Components

export interface IDoubleSideAboutCard
{
    cardVideoFront: string,
    cardVideoBack: string,
    rotatedAngle: string,
    cardStyle: string,
}

export function DoubleSidedAboutCard({card}: {card: IDoubleSideAboutCard}) {
    function CardSideFront () {
        return (
            <div className={`absolute left-0 right-0 top-0 bottom-0 backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-all duration-200 opacity-0 group-hover:opacity-100`}>
                <LazyHoverVideo
                    src={card.cardVideoFront}
                    autoplay={true}
                    controls={false}
                    muted={true}
                    loop={true}
                    />
            </div>
        )
    }

    function CardSideBack () {
        return (
            <div className={`relative h-full w-full backface-hidden transition-all duration-200 opacity-100 group-hover:opacity-0 group-hover:rotate-y-180`}>
                <LazyNonHoverVideo 
                    src={card.cardVideoBack}
                    autoplay={true}
                    controls={false}
                    muted={true}
                    loop={true}
                    />
            </div>
        )
    }

    return (
        <div className={`${card.rotatedAngle} group hover:rotate-0 relative h-auto w-auto duration-500 hover:animate-none hover:z-10 animate-wiggle-bounce `}>
            <CardHoverFX bufferZone={0} rotateAmount={15}>
                <div className={`${card.cardStyle} relative rounded-[24px] overflow-clip rotate-y-0 transition-all duration-500 shadow-[0px_0px_12px_rgba(0,0,0,0.4)]`} >
                    <CardSideFront />
                    <CardSideBack />
                </div>
            </CardHoverFX>
        </div>
    )
}

export function DoubleSidedAboutCardContainer({dataArray}: {dataArray: IDoubleSideAboutCard[]}) {
    return (
        <div className={`grid-cols-2 sm:grid-cols-4 absolute left-[50%] -translate-x-[50%] top-[45%] -translate-y-[50%] overflow-visible justify-self-center grid place-items-center w-[80%] md:w-[70%] h-auto items-center`}>
            {
                dataArray.map((data, i) => <DoubleSidedAboutCard key={i} card={data}/>)
            }
        </div>
    )
}
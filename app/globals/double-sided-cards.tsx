'use client'

import "@/app/globals/globals.css";
import Link from "next/link";
import { CardHoverFX } from "./card-hover-fx";
import * as fonts from "./fonts";
import { LazyHoverVideo, LazyNonHoverVideo } from "./lazy-video";
import { CheckIfMobileBrowser } from "@/app/globals/mobile-check";
import StyledLink from "./styled-link";
import { NoSelect } from "./styles";

//-----------------------------------
// INTERFACES FOR DOUBLE SIDED CARDS

export interface IDoubleSideLandingCard
{
    cardLink: string,
    cardTitle: string,
    cardDescription: string,
    cardVideoFront: string,
    cardVideoBack: string,
    rotatedAngle: string,
    cardStyle: string,
}

export interface IDoubleSideAboutCard
{
    cardVideoFront: string,
    cardVideoBack: string,
    rotatedAngle: string,
    cardStyle: string,
}

//------------------------------
// BASE CARD COMPONENTS

function CardVideoBG ({src}:{src:string}) {
    return (
        <div className={`relative w-full h-full rounded-[12px] sm:rounded-[16px] md:rounded-[24px] overflow-clip`}>
            <LazyHoverVideo 
                src={src}
                autoplay={true}
                controls={false}
                muted={true}
                loop={true}
                />
        </div>
    )
}

function CardReverseSide ({src, text}: {src:string, text:string | null,}) {
    return (
        <div className={`absolute w-full h-full rotate-y-180 opacity-0 group-hover:rotate-y-0 group-hover:opacity-100 transition-all duration-500`}>
            <CardVideoBG src={src}/>
            {
                text === "string" ?
                <div className="absolute left-0 bottom-0 px-[16px] py-[8px] w-full">
                    <p className={`${fonts.dotoBlack.className} text-nowrap text-left text-textMed text-textVariant drop-shadow-[0_3px_3px_rgba(0,0,0,0.7)]`}>{text}</p>
                </div>
                :
                <></>
            }
        </div>
    )
}

function CardInitialSide ({src}: {src:string,}) {
    return (
        <div className={`relative h-full w-full transition-all duration-500 opacity-100 group-hover:rotate-y-180 group-hover:opacity-0`}>
            <CardVideoBG src={src}/>
        </div>
    )
}

//------------------------------
// MAIN DOUBLE SIDED COMPONENTS

function DoubleSidedLandingCard({card}: {card: IDoubleSideLandingCard}) {
    return (
        <StyledLink href={card.cardLink} className="group">
            <div className={`${card.rotatedAngle} relative group-hover:rotate-0 backface-visible h-fit w-fit duration-300 group-hover:animate-none group-hover:z-10 animate-wiggle-bounce transition-all`}>
                <CardHoverFX bufferZone={0} rotateAmount={7}>
                    <div className={`${card.cardStyle} relative`} >
                        <CardReverseSide src={card.cardVideoFront} text={card.cardDescription}/>
                        <CardInitialSide src={card.cardVideoBack}/>
                    </div>
                </CardHoverFX>
            </div>
        </StyledLink>
    )
}

function DoubleSidedAboutCard({card}: {card: IDoubleSideAboutCard}) {
    return (
        <div className={`${card.rotatedAngle} group relative group-hover:rotate-0 backface-visible h-fit w-fit duration-300 group-hover:animate-none group-hover:z-10 animate-wiggle-bounce transition-all`}>
            <CardHoverFX bufferZone={0} rotateAmount={7}>
                <div className={`${card.cardStyle} relative`} >
                    <CardReverseSide src={card.cardVideoFront} text={null}/>
                    <CardInitialSide src={card.cardVideoBack}/>
                </div>
            </CardHoverFX>
        </div>
    )
}

//------------------------------
// MOBILE CARD COMPONENTS

function MobileDoubleSidedCardWithLink({card}: {card:IDoubleSideLandingCard}) {
    return (
        <div>
            <StyledLink href={card.cardLink}>
                <MobileDoubleSidedCardBase src={card.cardVideoBack} rotateAngle={card.rotatedAngle}/>
            </StyledLink>
        </div>
    )
}

function MobileDoubleSidedCardBase({src, rotateAngle}: {src:string, rotateAngle:string,}) {
    return (
        <div className={`${rotateAngle} animate-wiggle-bounce h-fit w-fit duration-0 z-10 active:z-20 active:animate-none hover:scale-110 active:scale-110  `} style={NoSelect}>
            <CardVideoBG src={src}/>
        </div>
    )
}

//--------------------------------------------
// CARD CONTAINER FUNCTIONS

export function LandingCardContainer({dataArray}:{dataArray:IDoubleSideLandingCard[]}) {
    return (
        <div className="">
        {
            CheckIfMobileBrowser() === false ?
            <div className={`grid-cols-4 absolute left-[50%] -translate-x-[50%] top-[44%] -translate-y-[50%] overflow-visible justify-self-center grid place-items-center w-[90%] h-[70%] items-center`}>
                {
                    dataArray.map((data, i) => <DoubleSidedLandingCard key={i} card={data}/>)
                }
            </div>
            :
            <div className={`grid-cols-2 gap-[12px] absolute left-[50%] -translate-x-[50%] top-[44%] -translate-y-[50%] overflow-visible justify-self-center grid place-items-center w-[80%] h-[70%] items-center`}>
                {
                    dataArray.map((data, i) => <MobileDoubleSidedCardWithLink key={i} card={data}/>)
                }
            </div>
        }
        </div>
    )
}

export function AboutCardContainer({dataArray}:{dataArray:IDoubleSideAboutCard[]}) {
    return (
        <div className="">
        {
            CheckIfMobileBrowser() === false ?
            <div className={`grid-cols-4 absolute left-[50%] -translate-x-[50%] top-[44%] -translate-y-[50%] overflow-visible justify-self-center grid place-items-center w-[90%] h-[70%] items-center`}>
                {
                    dataArray.map((data, i) => <DoubleSidedAboutCard key={i} card={data}/>)
                }
            </div>
            :
            <div className={`grid-cols-2 gap-[12px] absolute left-[50%] -translate-x-[50%] top-[44%] -translate-y-[50%] overflow-visible justify-self-center grid place-items-center w-[80%] h-[70%] items-center`}>
                {
                    dataArray.map((data, i) => <MobileDoubleSidedCardBase key={i} src={data.cardVideoFront} rotateAngle={data.rotatedAngle}/>)
                }
            </div>
        }
        </div>
    )
}
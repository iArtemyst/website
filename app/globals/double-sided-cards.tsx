'use client'

import "@/app/globals/globals.css";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { CardHoverFX } from "./card-hover-fx";
import * as fonts from "./fonts";
import { lazy, Suspense } from "react";
import Loading from "./loading-text";


const LazyImage = lazy(() => import('@/app/globals/import-image'));
const LazyHoverVideo = lazy(() => import('@/app/globals/import-hover-video'));
const LazyVideo = lazy(() => import('@/app/globals/import-nonhover-video'));

export interface IDoubleSideCard
{
    cardLink: string,
    cardTitle: String,
    cardDescription: String,
    cardVideoFront: string,
    cardVideoBack: string,
    rotatedAngle: string,
    cardWidth: string,
    hoverWidth: string,
    hoverMargin: string,
    conMargin: string,
}

export function DoubleSidedCard({cardLink="", cardTitle ="", cardDesc ="", vidFront, vidBack, startAngle="", cardWidth, hoverWidth, hoverMargin, margin}: {cardLink:Url, cardTitle:String, cardDesc:String, vidFront:string, vidBack:string, startAngle:string, cardWidth:string, hoverWidth:string, hoverMargin:string, margin:string}) {
    function CardSideFront () {
        return (
            <div className={`relative h-full w-full backface-hidden transition-all duration-500 rotate-y-180 group-hover:rotate-y-0 group-hover:opacity-100 opacity-0`}>
                <div className={`absolute left-0 right-0 top-0 bottom-0`}>
                    <Suspense fallback={<Loading />}>
                    <LazyHoverVideo 
                        src={vidFront}
                        autoplay={false}
                        controls={false}
                        muted={true}
                        loop={true}
                        />
                    </Suspense>
                </div>

                <div className="absolute left-0 bottom-0 px-[16px] py-[8px] w-full">
                    <p className={`${fonts.dotoBlack.className} text-nowrap text-left text-textMed text-textVariant drop-shadow-[0_3px_3px_rgba(0,0,0,0.7)]`}>{cardTitle}</p>
                </div>
            </div>
        )
    }

    function CardSideBack () {
        return (
            <div className={`relative h-full w-full shadow-[0px_0px_12px_rgba(0,0,0,0.4)] backface-hidden transition-all duration-500 rotate-y-0 group-hover:rotate-y-180 opacity-100 group-hover:opacity-0`}>
                <Suspense fallback={<Loading />}>
                    <LazyHoverVideo 
                        src={vidBack}
                        autoplay={true}
                        controls={false}
                        muted={true}
                        loop={true}
                        />
                </Suspense>
            </div>
        )
    }

    return (
        <div className={`${startAngle} group hover:rotate-0 relative h-auto w-auto duration-500 hover:animate-none hover:z-10 animate-wiggle-bounce `}>
                <Link href={cardLink}>
                    <CardHoverFX bufferZone={0} rotateAmount={7}>
                        <div className={`${cardWidth} ${hoverWidth} ${hoverMargin} ${margin} relative rounded-[24px] overflow-clip`} >
                            <CardSideFront />
                            <CardSideBack />
                        </div>
                    </CardHoverFX>
                </Link>
        </div>
    )
}

export function DoubleSidedCardContainer({dataArray}:{dataArray:IDoubleSideCard[]}) {
    return (
        <div className={`grid-cols-2 sm:grid-cols-4 absolute left-[50%] -translate-x-[50%] top-[40%] -translate-y-[50%] overflow-visible justify-self-center grid place-items-center w-[80%] tablet:w-[60%] h-auto items-center`}>
            {
                dataArray.map((data, i) =>{
                    return <DoubleSidedCard key={i} cardLink={data.cardLink} cardTitle={data.cardTitle} cardDesc={data.cardTitle} vidFront={data.cardVideoFront} vidBack={data.cardVideoBack} startAngle={data.rotatedAngle} cardWidth={data.cardWidth} hoverWidth={data.hoverWidth} hoverMargin={data.hoverMargin} margin={data.conMargin}/>
                })
            }
        </div>
    )
}

export interface IDoubleSideAboutCard
{
    cardVideoFront: string,
    cardVideoBack: string,
    rotatedAngle: string,
    cardStyle: string,
}

export function DoubleSidedAboutCard({backVideo, frontVideo, cardStyle, rotationAngle}: {backVideo:string, frontVideo:string, cardStyle:string, rotationAngle:string}) {
    function CardSideFront () {
        return (
            <div className={`relative h-full w-full backface-hidden transition-all duration-500 rotate-y-180 group-hover:rotate-y-0 group-hover:opacity-100 opacity-0`}>
                <div className={`absolute left-0 right-0 top-0 bottom-0`}>
                    <Suspense fallback={<Loading />}>
                        <LazyHoverVideo 
                            src={frontVideo}
                            autoplay={true}
                            controls={false}
                            muted={true}
                            loop={true}
                            />
                    </Suspense>
                </div>
            </div>
        )
    }

    function CardSideBack () {
        return (
            <div className={`relative h-full w-full shadow-[0px_0px_12px_rgba(0,0,0,0.4)] backface-hidden transition-all duration-500 rotate-y-0 group-hover:rotate-y-180 opacity-100 group-hover:opacity-0 bg-blue-300`}>
                    <Suspense fallback={<Loading />}>
                        <LazyVideo 
                            src={backVideo}
                            autoplay={true}
                            controls={false}
                            muted={true}
                            loop={true}
                            />
                    </Suspense>
            </div>
        )
    }

    return (
        <div className={`${rotationAngle} group hover:rotate-0 relative h-auto w-auto duration-500 hover:animate-none hover:z-10 animate-wiggle-bounce `}>
                    <CardHoverFX bufferZone={0} rotateAmount={7}>
                        <div className={`${cardStyle} relative rounded-[24px] overflow-clip`} >
                            <CardSideFront />
                            <CardSideBack />
                        </div>
                    </CardHoverFX>
        </div>
    )
}

export function DoubleSidedAboutCardContainer({dataArray}:{dataArray:IDoubleSideAboutCard[]}) {
    return (
        <div className={`grid-cols-2 sm:grid-cols-4 absolute left-[50%] -translate-x-[50%] top-[45%] -translate-y-[50%] overflow-visible justify-self-center grid place-items-center w-[80%] tablet:w-[60%] h-auto items-center`}>
            {
                dataArray.map((data, i) =>{
                    return <DoubleSidedAboutCard key={i} backVideo={dataArray[i].cardVideoBack} frontVideo={dataArray[i].cardVideoFront} cardStyle={dataArray[i].cardStyle} rotationAngle={dataArray[i].rotatedAngle}/>
                })
            }
        </div>
    )
}
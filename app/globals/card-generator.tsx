'use client'

import "@/app/globals/globals.css";
import * as cards from "@/app/globals/hover-cards";
import * as media from "@/app/globals/media";
import * as themes from "@/tailwind.config";
import { Url } from "next/dist/shared/lib/router/router";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CardHoverFX } from "./card-hover-fx";
import * as fonts from "./fonts";

const galleryBarImageSize = "w-[120px] h-[120px]";
const galleryMainAssetSize = ""
const gridGap = "gap-[12px]";

//--------------------------------------
//INDIVIDUAL PROJECT PAGE CARD COMPONENTS

export interface IProjectCardData
{
    cardWidth: string,
    hoverWidth: string,
    hoverMargin: string,
    containerMargin: string,
    cardText: string,
    cardMediaLink: string|StaticImageData,
}

export function ProjectCardGenerator({cardWidth, hovWidth, conMargin, hovMargin, cardText, children}:{cardWidth:string, hovWidth:string, conMargin:string, hovMargin:string, cardText:string, children:any}) {
    return (
        <cards.DetailCard width={cardWidth} containerMargin={conMargin} cardText={cardText} hoverMargin={hovMargin} hoverWidth={hovWidth}>
            {children}
        </cards.DetailCard>
    )
}

export function CardsContainer({dataArray, gridCols}:{dataArray:IProjectCardData, gridCols:string})
{
    return <div className="absolute left-[50%] z-10 -translate-x-[50%] top-[40%] -translate-y-[50%] overflow-visible w-[75%]">
        <div className={` ${gridCols} relative grid w-full h-auto justify-center place-items-center`}>
            {
                dataArray.map((data,i ) => {
                    return <ProjectCardGenerator key={i} cardWidth={data.cardWidth} hovWidth={data.hoverWidth} hovMargin={data.hoverMargin} conMargin={data.containerMargin} cardText={data.cardText}>
                        {
                            typeof data.cardMediaLink === "string" ? 
                                <cards.VidDetailCard cardVid={data.cardMediaLink} /> : 
                                <cards.ImgDetailCard imgAlt={data.cardText} imgSrc={data.cardMediaLink} />
                        }
                    </ProjectCardGenerator>
                })
            };
        </div>
    </div>
}


//--------------------------------------
//LANDING PAGE DOUBLE SIDE CARD COMPONENTS

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
                    <media.GetHoverVideo vidLink={vidFront}/>
                </div>

                <div className="absolute left-0 bottom-0 px-[16px] py-[8px] w-full">
                    <p className={`${fonts.dotoBlack.className} text-nowrap text-left text-textMed text-textVariant drop-shadow-[0_3px_3px_rgba(0,0,0,0.7)]`}>{cardTitle}</p>
                </div>
            </div>
        )
    }

    function CardSideBack () {
        return (
            <div className={`relative h-full w-full shadow-[0px_0px_12px_rgba(0,0,0,0.4)] backface-hidden transition-all duration-500 rotate-y-0 group-hover:rotate-y-180 opacity-100 group-hover:opacity-0 bg-blue-300`}>
                <media.GetAutoPlayVideo vidLink={vidBack}/>
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

export function DoubleSidedCardContainer({dataArray, gridCols}:{dataArray:IDoubleSideCard[], gridCols:string}) {
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

//--------------------------------------
//PROJECT GALLERY PAGE CARD COMPONENTS

export interface IProjectLinkCard
{
    projectTitle: String,
    projectDates: String,
    mediaLink: any,
    cardLink: Url,
}

function CardText({title = "", date = ""}:{title:String, date:String}) {
    return (
        <div className="relative flex justify-between h-[24px]">
            <p className={`${fonts.dotoBlack.className} text-black text-left self-center text-nowrap`}>{title}</p>
            <p className={`${fonts.dotoReg.className} text-black text-right self-center`}>{date}</p>
        </div>
    )
}

export function ProjectCardWithLink({projectTitle = "", projectDate = "", projectVideo, cardLink=""}: {projectTitle:String, projectDate:String, projectVideo:string, cardLink:Url}) {
    return(
        <CardHoverFX bufferZone={0} rotateAmount={7}>
            <Link href={cardLink} className="group">
                <div className={` ${themes.hoverShadow} relative grid w-full h-auto p-[10px] bg-slate-100 opacity-80 hover:opacity-100 scale-[80%] hover:border-[4px] border-[0px] border-green-400 hover:scale-110 transition-all duration-100 rounded-md`}>
                    <div className="relative grid grid-cols-1 content-center w-full h-full overflow-hidden rounded-md z-20">
                        <media.GetHoverVideo vidLink={projectVideo}/>
                    </div>
                    <CardText title={projectTitle} date={projectDate} />
                </div>
            </Link>
        </CardHoverFX>
    )
}

export function ProjectCardNoLink({projectTitle = "", projectDate = "", projectVideo}: {projectTitle:String, projectDate:String, projectVideo:string}) {
    const [effect, setEffect] = useState(false);
    return(
        <CardHoverFX bufferZone={0} rotateAmount={7}>
                <div className={` ${effect && "animate-error-wiggle"} ${themes.hoverShadow} group relative w-full h-auto hover:border-[4px] border-[0px] border-red-400 opacity-80 hover:opacity-100 scale-[80%] hover:scale-110 transition-all duration-100 rounded-md hover:cursor-pointer`} 
                    onClick={() => {
                        setEffect(true)
                        }}
                    onAnimationEnd={() => {
                        setEffect(false)
                    }}
                    >

                    <div className="grid bg-slate-100 z-10 overflow-visible p-[10px]">
                        <div className="relative grid grid-cols-1 content-center w-full h-full overflow-hidden rounded-md z-20">
                            <media.GetHoverVideo vidLink={projectVideo}/>
                        </div>
                        <CardText title={projectTitle} date={projectDate} />
                    </div>

                    <div className={`absolute left-[50%] -translate-x-[50%] bottom-0 opacity-0 group-hover:opacity-100 -translate-y-[24px] group-hover:translate-y-[32px] text-red-400 transition-all duration-200`}>
                        <p className={`${fonts.dotoBlack.className} text-nowrap`}>Sorry! No Link for this Project.</p>
                    </div>
                </div>
        </CardHoverFX>
    )
}

export function ProjectLinkCardsContainer({dataArray, gridCols}:{dataArray:IProjectLinkCard[], gridCols:string}) {
    return (
        <div className={`${gridCols} w-[90%] justify-self-center grid gap-[24px] h-auto content-center`}>
            {
                dataArray.map((data, i) => {
                    return (
                        <ProjectCardWithLink key={i} projectTitle={data.projectTitle} projectDate={data.projectDates} projectVideo={data.mediaLink} cardLink={data.cardLink} />
                    )
                })
            }
        </div>
    )
}
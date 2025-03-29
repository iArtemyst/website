'use client'

import "@/app/globals/globals.css";
import * as media from "@/app/globals/media";
import * as themes from "@/tailwind.config";
import { StaticImageData } from "next/image";
import { useState } from "react";
import { CardHoverFX } from "./card-hover-fx";
import * as fonts from "./fonts";

const galleryBarImageSize = 'w-[40px] sm:w-[48px] md:w-[92px] lg:w-[108px]';
const gallerySize = 'w-[360px] sm:w-[480px] md:w-[640px] lg:w-[720px] 2xl:w-[960px]';
const gridGap = "gap-[12px]";
const projectTextPadding = 'px-[2px] py-[2px] md:px-[4px] md:py-[4px] lg:px-[8px] lg:py-[8px]';

//--------------------------------------
// INTERFACES FOR INDIVIDUAL PROJECT CARDS AND ASSOCIATED GALLERIES

export interface IGalleryMedia
{
    assetText: string,
    assetMediaLink: string|StaticImageData,
    assetStillLink: StaticImageData,
}

export interface IProjectCardData
{
    cardMedia: string|StaticImageData,
    cardText: string,
    cardStyleWHM: string,
    cardContainerMargin: string,
}

export interface ICardWithGalleryArrays
{
    cardData: IProjectCardData,
    galleryData: IGalleryMedia[], 
}

// MAIN PROJECT DESCTIPTION TEXT COMPONENTS

export function ProjectDetailRelativeText({TitleText="", MoreText=""}:{TitleText:String, MoreText:String}) {
    return (
        <div className={`${projectTextPadding} relative z-0 w-[80%] flex-row h-fit justify-self-center self-end border-white border-[1px] px-[8px] py-[8px] mb-[24px] flex-grow-0`}>
            <p className={`${fonts.dotoBlack.className} ${projectTextPadding} text-priColor w-full text-[18px] sm:text-[24px] md:text-[32px] lg:text-[48px] xl:text-[64px] 2xl:text-[92px] text-left text-nowrap leading-none relative h-auto content-center`}>{TitleText}</p>
            <p className={`${fonts.dotoBlack.className} ${projectTextPadding} text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] text-pretty relative flex-row right-0 bottom-0 w-full text-secColor text-left`}>{MoreText}</p>
        </div>
    )
}

// PROJECT DETAIL CARDS (THE ONES THAT APPEAR FIRST ON SCREEN, AND HOLD THE GALLERY WITHIN THEMSELVES)

function ProjDetailMediaCard({mediaSrc, mediaText,}:{mediaSrc:string | StaticImageData, mediaText:string}) {
    return(
        <div className="cursor-pointer overflow-clip rounded-[8px]">
                    {
                        typeof mediaSrc === "string" ?
                        <media.GetHoverVideo vidLink={mediaSrc} /> : 
                        <media.GetImage imgLink={mediaSrc} imgAlt={mediaText} />
                    }
        </div>
    )
}

function ProjectDetailCard({card, showGallery, setShowGallery} : { card:ICardWithGalleryArrays,  showGallery:boolean,  setShowGallery: (x: boolean) => void }) 
{              
    return (
        <div className={`${card.cardData.cardContainerMargin} group relative w-fit h-full hover:animate-none hover:z-10 self-center animate-wiggle-bounce transition-all duration-300 flex-grow`} 
                onClick={(e) => { setShowGallery(!showGallery); }}>
            <CardHoverFX bufferZone={0} rotateAmount={7}>
                <div className={`${card.cardData.cardStyleWHM} relative h-auto shadow-[0px_0px_12px_rgba(0,0,0,0.4)] transition-all duration-400`}>
                    <ProjDetailMediaCard mediaSrc={card.cardData.cardMedia} mediaText={card.cardData.cardText}/> 
                    <div className="absolute left-0 bottom-0 w-auto h-auto translate-y-[0px] opacity-0 group-hover:opacity-100 -z-10 group-hover:translate-y-[32px] transition-all duration-300">
                        <p className={`${fonts.dotoBlack.className} text-textMed text-priColor`}>{card.cardData.cardText}</p>
                    </div>
                </div>
            </CardHoverFX>
        </div>
    )
}

function ProjectCardWithGallery({card}: {card:ICardWithGalleryArrays}) {
    let [showGallery, setShowGallery] = useState(false);

    return (
        <div className={`place-items-center`}>
            <ProjectDetailCard 
                card={card}
                showGallery={showGallery}
                setShowGallery={setShowGallery}
            />
            {
                showGallery && (
                    <div>
                        <ClickIntoGallery galleryMedia={card.galleryData} setShowGallery={setShowGallery}/>
                        <BackgroundBarrier setShowGallery={setShowGallery}/>
                    </div>
                )
            }
        </div>
    )
}

// CLIKC INTO GALLERY COMPONENTS

function ClickIntoGallery({galleryMedia, setShowGallery}:{galleryMedia:IGalleryMedia[], setShowGallery: (x: boolean) => void}) {        
    let [selectedIndex, setSelectedIndex] = useState(0)

    //LARGE MEDIA IN GALLERY
    function GalleryMainMedia({mediaLink, mediaAbout}:{mediaLink:string|StaticImageData, mediaAbout:string}) {
        return (
            <div className={`w-auto h-auto relative rounded-[24px] p-[24px] justify-items-center content-center`}>
                <div className={`w-auto h-auto`}>
                        <media.GetGalleryLrgMedia mediaLink={mediaLink} mediaText={mediaAbout} />
                </div>
            </div>
        )
    }

    function GalleryImageNavBar({galleryImages} : {galleryImages: IGalleryMedia[]}) {
        return (
            <div className={`grid-cols-${galleryMedia.length} relative w-fit h-fit grid ${gridGap} justify-self-center content-center`}>
                {
                    galleryImages.map((data, i) =>{
                        return (
                            <div className={`pb-[24px] group object-cover place-self-center content-center transition-all duration-200 hover:scale-110`} key={i}>
                                <CardHoverFX bufferZone={0} rotateAmount={2}>
                                    <div onClick={() => setSelectedIndex(i)}>
                                        <div className={`${galleryBarImageSize} aspect-square transition-all duration-200 ${selectedIndex == i ? "opacity-100" : "opacity-60"}`}>   
                                            <media.GetGallerySmlImage imgLink={data.assetStillLink} imgAlt={data.assetText}/>
                                        </div>
                                        <p className={`${fonts.dotoBlack.className} absolute left-0 bottom-0 translate-y-[100%] text-[8px] text-white text-left group-hover:opacity-100 transition-all duration-200 ${selectedIndex == i ? "opacity-100" : "opacity-0"}`}>{data.assetText}</p>
                                    </div>
                                </CardHoverFX>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className={`fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] ${gridGap} w-fit h-fit z-[150] justify-items-center py-[12px]`}>
            <div className={`relative ${gallerySize}`}>
                <div className={`absolute left-0 right-0 top-0 bottom-0 z-0 bg-slate-100 rounded-[24px]`}/>
                <GalleryMainMedia mediaLink={galleryMedia[selectedIndex].assetMediaLink} mediaAbout={galleryMedia[selectedIndex].assetText}/>
                <GalleryImageNavBar galleryImages={galleryMedia} />
                <button className={`absolute right-0 bottom-0 mx-[24px] my-[12px]`} onClick={() => setShowGallery(false)} >
                    <p className={`px-[8px] py-[3px] -translate-y-[1px] align-text-top rounded-full bg-[#00000003] ${fonts.dotoBlack.className} ${themes.hoverShadow}`}>Close</p>
                </button>
            </div>
        </div>
    )
}

function BackgroundBarrier({setShowGallery,}:{setShowGallery:any,}) {
    return (
        <div className={`fixed left-0 right-0 top-0 bottom-0 z-[100]`} onClick={() => setShowGallery(false)}>
            <div className={`w-[100vw] h-[100vh] bg-black opacity-[75%] `}/>
        </div>
    )
}

// MAIN CONTAINER FOR PROJECT DETAIL CARDS

export function ProjectCardsWithGalleryContainer({cardArray,}:{cardArray:ICardWithGalleryArrays[],}) {
    let columnAmount = cardArray.length;
    
    return (
        <div className={`grid grid-cols-${columnAmount} absolute justify-self-center place-items-center w-[75%] my-[16px] h-[70%] md:h-[80%]`}>
        {
            cardArray.map((data, i) => {
                return (
                    <ProjectCardWithGallery card={data} key={i} />
                )
            })
        }
        </div>
    )
}

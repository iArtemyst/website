'use client'

import "@/app/globals/globals.css";
import * as media from "@/app/globals/media";
import * as themes from "@/tailwind.config";
import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { CardHoverFX } from "./card-hover-fx";
import * as fonts from "./fonts";
import * as hovcards from "@/app/globals/hover-cards"

const galleryBarImageSize = "w-[90px]";
const galleryMainAssetSize = ""
const gridGap = "gap-[12px]";

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

// PROJECT DETAIL CARDS (THE ONES THAT APPEAR FIRST ON SCREEN, AND HOLD THE GALLERY WITHIN THEMSELVES)

export function VidDetailPlayCard({cardVid=""}:{cardVid:string}) {
    return(
        <div className="relative w-full h-full content-center cursor-pointer">
            <media.GetHoverVideo vidLink={cardVid} />              
        </div>
    )
}

export function ImgDetailCard({imgSrc, imgAlt=""}:{imgSrc:StaticImageData, imgAlt:string}) {
    return(
        <div className="cursor-pointer">
            <media.GetImage imgLink={imgSrc} imgAlt={imgAlt} />
        </div>
    )
}

export function ProjDetailMediaCard({mediaSrc, mediaText,}:{mediaSrc:string | StaticImageData, mediaText:string}) {
    return(
        <div className="cursor-pointer">
                    {
                        typeof mediaSrc === "string" ?
                        <media.GetHoverVideo vidLink={mediaSrc} /> : 
                        <media.GetImage imgLink={mediaSrc} imgAlt={mediaText} />
                    }
        </div>
    )
}

function ProjectDetailCard({card, showGallery, setShowGallery} : 
    {
        card:ICardWithGalleryArrays, 
        showGallery:boolean, 
        setShowGallery: (x: boolean) => void
    })
{              
    return (
        <div className={`group relative w-auto h-auto hover:animate-none ${card.cardData.cardContainerMargin} hover:z-10 content-center self-center animate-wiggle-bounce transition-all duration-300`} 
                onClick={(e) => { setShowGallery(!showGallery); }}>
            <CardHoverFX bufferZone={0} rotateAmount={7}>
                <div className={`${card.cardData.cardStyleWHM} relative h-auto shadow-[0px_0px_12px_rgba(0,0,0,0.4)] transition-all duration-400`}>
                    <div className="overflow-clip rounded-[8px]">
                    {
                        typeof card.cardData.cardMedia === "string" ?
                            <hovcards.VidDetailCard cardVid={card.cardData.cardMedia} /> : 
                            <hovcards.ImgDetailCard imgSrc={card.cardData.cardMedia} imgAlt={card.cardData.cardText}/>
                    }
                    </div>
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
        <div className="">
            <div className="">
                <ProjectDetailCard 
                    card={card}
                    showGallery={showGallery}
                    setShowGallery={setShowGallery}
                />
            </div>
            <div>
            {
                showGallery && (
                    <div>
                        <ClickIntoGallery galleryMedia={card.galleryData} setShowGallery={setShowGallery}/>
                        <BackgroundBarrier setShowGallery={setShowGallery}/>
                    </div>
                )
            }
            </div>
        </div>
    )
}

// CLIKC INTO GALLERY COMPONENTS

function BackgroundBarrier({setShowGallery,}:{setShowGallery:any,}) {
    return (
        <div className={`fixed left-0 right-0 top-0 bottom-0 z-[100]`} onClick={() => setShowGallery(false)}>
            <div className={`w-[100vw] h-[100vh] bg-black opacity-[75%] `}/>
        </div>
    )
}

function ClickIntoGallery({galleryMedia, setShowGallery}:{galleryMedia:IGalleryMedia[], setShowGallery: (x: boolean) => void}) {        
    let [selectedIndex, setSelectedIndex] = useState(0)
    
    function GalleryMainMedia({mediaLink, mediaAbout}:{mediaLink:string|StaticImageData, mediaAbout:string}) {
        return (
            <div className={`w-auto h-auto relative rounded-[24px] p-[24px] justify-items-center content-center`}>
                <div className={`w-auto h-auto`}>
                        <media.GetGalleryLrgMedia mediaLink={mediaLink} mediaText={mediaAbout} /> :
                </div>
            </div>
        )
    }

    function ButtonCloseGallery({setShowGallery}:{setShowGallery: (x: boolean) => void}) {
        return (
            <button className={`absolute right-0 bottom-0 mx-[24px] my-[12px]`} onClick={() => setShowGallery(false)} >
                <p className={`px-[8px] py-[3px] -translate-y-[1px] align-text-top rounded-full bg-[#00000003] ${fonts.dotoBlack.className} ${themes.hoverShadow}`}>Close</p>
            </button>
        )
    }

    function GalleryImageBar({galleryImages} : {galleryImages: IGalleryMedia[]}) {
        return (
            <div className={`grid-cols-${galleryMedia.length} relative w-fit h-fit grid ${gridGap} justify-self-center content-center`}>
                {
                    galleryImages.map((data, i) =>{
                        return (
                            <div className={`pb-[24px] group object-cover place-self-center content-center transition-all duration-200 hover:scale-110`}>
                                <CardHoverFX bufferZone={0} rotateAmount={2} key={i}>
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
        <div className={`${themes.absoluteCenter} ${gridGap} w-auto min-w-[720px] max-h-[90%] min-h-[360px] z-[150] justify-items-center py-[12px]`}>
            <div className={`z-30 relative w-full h-full`}>
                <div className={`absolute left-0 right-0 top-0 bottom-0 z-0 bg-slate-100 rounded-[24px]`}/>
                <GalleryMainMedia mediaLink={galleryMedia[selectedIndex].assetMediaLink} mediaAbout={galleryMedia[selectedIndex].assetText}/>
                <GalleryImageBar galleryImages={galleryMedia} />
                <ButtonCloseGallery setShowGallery={setShowGallery}/>
            </div>
        </div>
    )
}

// MAIN CONTAINER FOR PROJECT DETAIL CARDS

export function ProjectCardsWithGalleryContainer({cardArray,}:{cardArray:ICardWithGalleryArrays[],}) {
    return (
        <div>
            <div className={`relative justify-self-center content-center grid-cols-${cardArray.length} grid w-[75%] h-auto place-items-center`}>
            {
                cardArray.map((data, i) => {
                    return (
                        <ProjectCardWithGallery card={data} key={i} />
                    )
                })
            };
            </div>
        </div>
    )
}
'use client'

import "@/app/globals/globals.css";
import { useState } from "react";
import { CardHoverFX } from "./card-hover-fx";
import * as fonts from "./fonts";
import { LazyImage } from "./lazy-image";
import { LazyHoverVideo, LazyNonHoverVideo } from "./lazy-video";
import { FullScreenMediaViewer } from "./fullscreen-media";

const galleryBarImageSize = 'w-[24px] sm:w-[32px] md:w-[48px] lg:w-[64px]';
const gallerySize = 'min-w-[360px] sm:min-w-[480px] md:min-w-[540px] lg:min-w-[640px] xl:min-w-[720px] 2xl:min-w-[960px]';
const gridGap = "gap-[12px]";
const projectTextPadding = 'px-[2px] py-[2px] md:px-[4px] md:py-[4px] lg:px-[8px] lg:py-[8px]';
const hoverTextSize = "text-[8px] md:text-[14px] 2xl:text-[16px]";

//--------------------------------------
// INTERFACES FOR INDIVIDUAL PROJECT CARDS AND ASSOCIATED GALLERIES

export enum MediaType
{
    Image,
    Video
}

export interface IGalleryMedia
{
    assetText: string,
    assetMediaLink: string,
    assetMediaType: MediaType,
    assetStillLink: string,
}

export interface IProjectCardData
{
    cardMedia: string,
    cardMediaType: MediaType,
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

export function ProjectDetailRelativeText({TitleText="", MoreText="", ExtraProjInfo=""}: {TitleText: string, MoreText: string, ExtraProjInfo:string}) {
    return (
        <div className={`mb-[.25em] md:mb-[1.5em] ${projectTextPadding} relative z-0 w-[80%] flex-row h-fit justify-self-center self-end border-white border-[1px] px-[8px] py-[8px]  flex-grow-0 bg-bgColor`}>
            <p className={`${fonts.dotoBlack.className} ${projectTextPadding} text-[24px] lg:text-[48px] xl:text-[56px] 2xl:text-[72px] text-priColor w-full  text-left text-nowrap leading-none relative h-auto content-center`}>{TitleText}</p>
            <p className={`${fonts.dotoBlack.className} text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] ${projectTextPadding} text-priColor w-full  text-left text-nowrap leading-none relative h-auto content-center`}>{ExtraProjInfo}</p>
            <p className={`${fonts.dotoBlack.className} text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] ${projectTextPadding} text-pretty relative flex-row right-0 bottom-0 w-full text-secColor text-left`}>{MoreText}</p>
        </div>
    )
}

export function ProjectDetailRelativeTextNDA({TitleText="", MoreText="", ExtraProjInfo="", NDAText=""}: {TitleText: string, MoreText: string, ExtraProjInfo:string, NDAText:string}) {
    return (
        <div className={`mb-[.25em] md:mb-[1.5em] ${projectTextPadding} relative z-0 w-[80%] flex-row h-fit justify-self-center self-end border-white border-[1px] px-[8px] py-[8px]  flex-grow-0 bg-bgColor`}>
            <p className={`text-[12px] sm:text-[32px] lg:text-[48px] xl:text-[56px] 2xl:text-[72px] ${fonts.dotoBlack.className} ${projectTextPadding} text-priColor w-full  text-left text-nowrap leading-none relative h-auto content-center`}>{TitleText}</p>
            <p className={`text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] ${fonts.dotoBlack.className} ${projectTextPadding} text-priColor w-full  text-left text-nowrap leading-none relative h-auto content-center`}>{ExtraProjInfo}</p>
            <p className={`text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] ${fonts.dotoBlack.className} ${projectTextPadding} text-pretty relative flex-row right-0 bottom-0 w-full text-secColor text-left`}>{MoreText}</p>
            <p className={`text-[6px] md:text-[8px] lg:text-[10px] xl:text-[12px] ${fonts.dotoBlack.className} ${projectTextPadding} text-pretty relative flex-row right-0 bottom-0 w-full text-secColor text-center`}>{NDAText}</p>
        </div>
    )
}

// PROJECT DETAIL CARDS (THE ONES THAT APPEAR FIRST ON SCREEN, AND HOLD THE GALLERY WITHIN THEMSELVES)

function ProjDetailMediaCard({mediaSrc, mediaText, mediaType,}: {mediaSrc: string, mediaType: MediaType, mediaText: string,}) {
    return(
        <div className="cursor-pointer overflow-clip rounded-[8px] sm:w-[180px] md:w-[240px] lg:w-[320px] xl:w-[360px] 2xl:w-[480px] place-self-center">
                    {
                        mediaType === MediaType.Video ?
                            <LazyHoverVideo 
                                src={mediaSrc}
                                autoplay={false}
                                controls={false}
                                muted={true}
                                loop={true}
                                />
                        :
                            <LazyImage
                                imgLink={mediaSrc}
                                imgAlt={mediaText}
                                />
                    }
        </div>
    )
}

function ProjDetailMediaCard2({mediaSrc, mediaText, mediaType, cardSize}: {mediaSrc: string, mediaType: MediaType, mediaText: string, cardSize: string}) {
    return(
        <div className={`cursor-pointer overflow-clip rounded-[1em] ${cardSize} place-self-center transition-all duration-200`}>
            {
                mediaType === MediaType.Video ?
                    <LazyHoverVideo 
                        src={mediaSrc}
                        autoplay={false}
                        controls={false}
                        muted={true}
                        loop={true}
                        />
                :
                    <LazyImage
                        imgLink={mediaSrc}
                        imgAlt={mediaText}
                        />
            }
        </div>
    )
}

function ProjectDetailHoverText({card}: {card: ICardWithGalleryArrays}) {
    return (
        <div className={`group-hover:-translate-y-[1.5em] absolute left-0 top-0 w-full h-auto px-[16px] opacity-0 group-hover:opacity-100 -z-10 transition-all duration-300 `}>
            <p className={`${fonts.dotoBlack.className} ${hoverTextSize} text-priColor`}>
                {card.cardData.cardText}
            </p>
        </div>
    )
}

function ProjectDetailCard({card, showGallery, setShowGallery} : {card: ICardWithGalleryArrays, showGallery: boolean, setShowGallery: (x: boolean) => void}) 
{              
    return (
            <div className={`${card.cardData.cardContainerMargin} group relative w-auto h-full hover:animate-none hover:z-10 scale-[80%] hover:scale-100 self-center animate-wiggle-bounce transition-all duration-300 flex-grow`} 
                    onClick={() => { setShowGallery(!showGallery); }}>
                <CardHoverFX bufferZone={0} rotateAmount={7}>
                    <div className={`${card.cardData.cardStyleWHM} relative w-auto h-auto shadow-[0px_0px_12px_rgba(0,0,0,0.4)] transition-all duration-400`}>
                        <ProjDetailMediaCard mediaSrc={card.cardData.cardMedia} mediaText={card.cardData.cardText} mediaType={card.cardData.cardMediaType}/>
                        <ProjectDetailHoverText card={card}/> 
                    </div>
                </CardHoverFX>
            </div>
    )
}

function ProjectCardNoGallery({card} : {card: ICardWithGalleryArrays}) {
    const [effect, setEffect] = useState(false);

    return (
            <div className={`group place-items-center w-fit`}>
                <div className={`${card.cardData.cardContainerMargin} relative w-fit h-full hover:animate-none hover:z-10 self-center animate-wiggle-bounce transition-all duration-300 flex-grow`} >
                    <CardHoverFX bufferZone={0} rotateAmount={7}>
                        <div className={`${effect && "animate-error-wiggle"} ${card.cardData.cardStyleWHM} relative w-full rounded-[1em] h-auto shadow-[0px_0px_12px_rgba(0,0,0,0.4)] transition-all duration-400`} 
                            onClick={() => { setEffect(true)}} onAnimationEnd={() => { setEffect(false)}}>
                            <ProjDetailMediaCard2 mediaSrc={card.cardData.cardMedia} mediaText={card.cardData.cardText} mediaType={card.cardData.cardMediaType} cardSize={""}/> 
                            <ProjectDetailHoverText card={card}/>
                        </div>
                    </CardHoverFX>
                </div>
            </div>
    )
}

function ProjectCardWithGallery({card}: {card: ICardWithGalleryArrays}) {
    let [showGallery, setShowGallery] = useState(false);

    return (
        <div className={`place-items-center`}>
            <ProjectDetailCard 
                card={card}
                showGallery={showGallery}
                setShowGallery={setShowGallery}
            />
            {
                showGallery && ( <ClickIntoGallery galleryMedia={card.galleryData} setShowGallery={setShowGallery} galleryLength={card.galleryData.length}/> )
            }
        </div>
    )
}


function ClickIntoGallery({galleryMedia, galleryLength, setShowGallery}: {galleryMedia: IGalleryMedia[], galleryLength: number, setShowGallery: (x: boolean) => void}) {       
    let [selectedIndex, setSelectedIndex] = useState(0);
    let [fullscreenMedia, setFullscreenMedia] = useState(false);

    function GalleryMainMedia({mediaLink, mediaType, mediaAbout}: {mediaLink: string, mediaType: MediaType, mediaAbout: string}) {
        return (
            <div className={`w-auto h-auto relative m-[1.5em] justify-items-center content-center`} onClick={() => setFullscreenMedia(!fullscreenMedia)}>
                    <div className={`rounded-[1em] overflow-clip max-h-[calc(65dvh)] grid grid-cols-1 place-content-center` }>
                        {
                            mediaType === MediaType.Video ?
                                <LazyNonHoverVideo 
                                    src={mediaLink}
                                    autoplay={true}
                                    controls={false}
                                    muted={true}
                                    loop={true}
                                    />
                            :
                                <LazyImage
                                    imgLink={mediaLink}
                                    imgAlt={mediaAbout}
                                    />
                        }
                    </div>
            </div>
        )
    }

    function GalleryImageNavBar({galleryImages, galleryLength}: {galleryImages: IGalleryMedia[], galleryLength: number}) {
        return (
            <div className={`grid-cols-${galleryLength} ${gridGap} relative w-fit place-items-center mx-auto h-fit grid content-center py-[12px]`}>
                {
                    galleryImages.map((data, i) => {
                        return (
                            <div className={`${selectedIndex == i ? `border-teal-400  opacity-100` : `border-none opacity-60`} ${galleryBarImageSize} rounded-[.5em] md:rounded-[1em] border-[.175em] group  aspect-square overflow-clip place-self-center content-center transition-all duration-200 hover:scale-110`} key={i} onClick={() => setSelectedIndex(i)}> 
                                <LazyImage imgLink={data.assetStillLink} imgAlt={data.assetText} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <>
        <div className={`fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] h-full w-full z-[150] flex justify-items-center justify-center`}>
            <div className={`fixed w-full h-full bg-[#000000AA] -z-[10]`} onClick={() => setShowGallery(false)}/>

            <div className={`rounded-[1em] py-[.5em] ${gallerySize} fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] bg-cardBGColor w-fit max-h-[calc(90%)] h-fit flex-row z-[150] justify-items-center`}>
                <GalleryMainMedia mediaLink={galleryMedia[selectedIndex].assetMediaLink} mediaAbout={galleryMedia[selectedIndex].assetText} mediaType={galleryMedia[selectedIndex].assetMediaType}/>
                
                <div className={`w-[85%] h-fit relative justify-self-center content-start mx-auto`}>
                    <p className={`${fonts.poppins.className} text-textColor text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] text-pretty`}>
                        {galleryMedia[selectedIndex].assetText}
                    </p>
                </div>

                <GalleryImageNavBar galleryImages={galleryMedia} galleryLength={galleryLength}/>

                <button className={`absolute right-0 top-0 mx-[1em] my-[1em]`} onClick={() => setShowGallery(false)} >
                    <div className={`bg-cardBGColor w-fit h-fit rounded-[.5em] p-[.25em]`}>
                        <p className={`px-[.75em] py-[.5em] translate-x-[.125em] align-text-top rounded-full self-center text-textColor ${fonts.dotoBlack.className} hover:scale-110`}>X</p>
                    </div>
                </button>
            </div>

            {
                fullscreenMedia && ( <FullScreenMediaViewer mediaLink={galleryMedia[selectedIndex].assetMediaLink} mediaType={galleryMedia[selectedIndex].assetMediaType} setShowFullscreen={setFullscreenMedia}  mediaText={galleryMedia[selectedIndex].assetText}/> )          
            }
        </div>
        </>
    )
}


//----------------------------------------------
// MAIN CONTAINER FOR PROJECT DETAIL CARDS
export function ProjectCardsWithGalleryContainer({cardArray, columnAmount}: {cardArray: ICardWithGalleryArrays[], columnAmount: string}) {
    return (
        <div className={`absolute grid w-full h-[80%] mt-[24px] `}>
            <div className={`grid grid-cols-2 md:${columnAmount} relative justify-self-center place-items-center w-[75%] h-full`}>
                {
                    cardArray.map((data, i) => {
                        return (
                            <ProjectCardWithGallery card={data} key={i} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export function ProjectCardsNoGalleryContainer({cardArray, columnAmount}: {cardArray: ICardWithGalleryArrays[], columnAmount: string}) {
    return (
        <div className={`grid grid-cols-2 md:${columnAmount} absolute justify-self-center place-items-center w-[75%] my-[16px] h-[70%] md:h-[80%]`}>
        {
            cardArray.map((data, i) => {
                return (
                    <ProjectCardNoGallery card={data} key={i} />
                )
            })
        }
        </div>
    )
}

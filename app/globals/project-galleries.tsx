'use client'

import "@/app/globals/globals.css";
import { useState } from "react";
import { CardHoverFX } from "./card-hover-fx";
import * as fonts from "./fonts";
import { LazyFSImage, LazyImage } from "./lazy-image";
import { LazyHoverVideo, LazyNonHoverVideo } from "./lazy-video";
import { CheckIfMobileBrowser } from "@/app/globals/mobile-check";

const galleryBarImageSize = 'w-[24px] sm:w-[32px] md:w-[48px] lg:w-[64px]';
const gallerySize = 'min-w-[360px] sm:min-w-[480px] md:min-w-[540px] lg:min-w-[640px] xl:min-w-[720px] 2xl:min-w-[960px]';
const gridGap = "gap-[12px]";
const projectTextPadding = 'px-[2px] py-[2px] md:px-[4px] md:py-[4px] lg:px-[8px] lg:py-[8px]';
const hoverTextSize = "text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] 2xl:text-[18px]";
const hoverTextDist = "group-hover:-translate-y-[12px] sm:group-hover:-translate-y-[14px] md:group-hover:-translate-y-[18px] lg:group-hover:-translate-y-[20px] 2xlgroup-hover:-translate-y-[24px] px-[6px] sm:px-[8px] md:px-[10px] lg:px-[12px] 2xl:px-[16px]";

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

export function ProjectDetailRelativeText({TitleText="", MoreText=""}: {TitleText: string, MoreText: string}) {
    return (
        <div className={`${CheckIfMobileBrowser() ? "mb-[4px]" : "mb-[24px]"} ${projectTextPadding} relative z-0 w-[80%] flex-row h-fit justify-self-center self-end border-white border-[1px] px-[8px] py-[8px]  flex-grow-0 bg-bgColor`}>
            <p className={`${CheckIfMobileBrowser() ? "text-[12px]" : "text-[32px] lg:text-[48px] xl:text-[64px] 2xl:text-[92px]"} ${fonts.dotoBlack.className} ${projectTextPadding} text-priColor w-full  text-left text-nowrap leading-none relative h-auto content-center`}>{TitleText}</p>
            <p className={`${CheckIfMobileBrowser() ? "text-[6px]" : "text-[12px] lg:text-[14px] xl:text-[16px]"} ${fonts.dotoBlack.className} ${projectTextPadding} text-pretty relative flex-row right-0 bottom-0 w-full text-secColor text-left`}>{MoreText}</p>
        </div>
    )
}

// PROJECT DETAIL CARDS (THE ONES THAT APPEAR FIRST ON SCREEN, AND HOLD THE GALLERY WITHIN THEMSELVES)

function ProjDetailMediaCard({mediaSrc, mediaText, mediaType,}: {mediaSrc: string, mediaType: MediaType, mediaText: string,}) {
    return(
        <div className="cursor-pointer overflow-clip rounded-[8px]">
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
        <div className={` ${hoverTextDist} absolute left-0 top-0 w-full h-auto px-[16px] opacity-0 group-hover:opacity-100 -z-10 transition-all duration-300 `}>
            <p className={`${fonts.dotoBlack.className} ${hoverTextSize} text-priColor`}>
                {card.cardData.cardText}
            </p>
        </div>
    )
}

function ProjectDetailCard({card, showGallery, setShowGallery} : {card: ICardWithGalleryArrays, showGallery: boolean, setShowGallery: (x: boolean) => void}) 
{              
    return (
            <div className={`${card.cardData.cardContainerMargin} group relative w-fit h-full hover:animate-none hover:z-10 self-center animate-wiggle-bounce transition-all duration-300 flex-grow`} 
                    onClick={(e) => { setShowGallery(!showGallery); }}>
                <CardHoverFX bufferZone={0} rotateAmount={7}>
                    <div className={`${card.cardData.cardStyleWHM} relative h-auto shadow-[0px_0px_12px_rgba(0,0,0,0.4)] transition-all duration-400`}>
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
            <div className={`place-items-center group`}>
                <div className={`${card.cardData.cardContainerMargin} relative w-fit h-full hover:animate-none hover:z-10 self-center animate-wiggle-bounce transition-all duration-300 flex-grow`} >
                    <CardHoverFX bufferZone={0} rotateAmount={7}>
                        <div className={`${effect && "animate-error-wiggle"} ${card.cardData.cardStyleWHM} relative h-auto shadow-[0px_0px_12px_rgba(0,0,0,0.4)] transition-all duration-400`} 
                            onClick={() => { setEffect(true)}} onAnimationEnd={() => { setEffect(false)}}>
                            <ProjDetailMediaCard mediaSrc={card.cardData.cardMedia} mediaText={card.cardData.cardText} mediaType={card.cardData.cardMediaType}/> 
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
                showGallery && (
                    <div>
                        <ClickIntoGallery galleryMedia={card.galleryData} setShowGallery={setShowGallery} galleryLength={card.galleryData.length}/>
                        <BackgroundBarrier setShowGallery={setShowGallery}/>
                    </div>
                )
            }
        </div>
    )
}

// CLICK INTO GALLERY COMPONENTS

function ClickIntoGallery({galleryMedia, galleryLength, setShowGallery}: {galleryMedia: IGalleryMedia[], galleryLength: number, setShowGallery: (x: boolean) => void}) {        
    let [selectedIndex, setSelectedIndex] = useState(0);
    let [fullscreenMedia, setFullscreenMedia] = useState(false);

    function GalleryMainMedia({mediaLink, mediaType, mediaAbout}: {mediaLink: string, mediaType: MediaType, mediaAbout: string}) {
        return (
            <div className={`w-auto h-auto relative m-[24px] justify-items-center content-center`} onClick={() => setFullscreenMedia(!fullscreenMedia)}>
                    <div className={`${CheckIfMobileBrowser() ? "rounded-[8px]" : "rounded-[24px]"} overflow-clip max-h-[calc(65dvh)] grid grid-cols-1 place-content-center` }>
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
                    {/* <GetGalleryLrgMedia mediaLink={mediaLink} mediaText={mediaAbout} /> */}
            </div>
            
        )
    }

    function GalleryImageNavBar({galleryImages, galleryLength}: {galleryImages: IGalleryMedia[], galleryLength: number}) {
        return (
            <div className={`grid-cols-${galleryLength} ${gridGap} relative w-fit place-items-center mx-auto h-fit grid content-center py-[12px]`}>
                {
                    galleryImages.map((data, i) => {
                        return (
                            <CardHoverFX bufferZone={0} rotateAmount={2} key={i}>
                                <div className={`${selectedIndex == i ? `${CheckIfMobileBrowser() ? "border-[1px]" : "border-[2px]"} border-teal-400  opacity-100` : "border-none opacity-60"} ${galleryBarImageSize} 
                                                ${CheckIfMobileBrowser() ? "rounded-[4px]" : "rounded-[8px]"} group  aspect-square overflow-clip place-self-center content-center transition-all duration-200 hover:scale-110`} onClick={() => setSelectedIndex(i)}> 
                                    <LazyImage
                                        imgLink={data.assetStillLink}
                                        imgAlt={data.assetText}
                                        />
                                </div>
                            </CardHoverFX>
                        )
                    })
                }
            </div>
        )
    }

    function GalleryMediaText({galleryMediaText}: {galleryMediaText: string}) {
        return (
            <div className={`w-[85%] h-auto relative justify-self-center content-start mx-auto`}>
                <p className={`${fonts.poppins.className} text-textColor text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] text-pretty`}>
                    {galleryMediaText}
                </p>
            </div>
        )
    }

    function CloseButton() {
        return (
            <button className={`absolute right-0 top-0 mx-[16px] my-[16px]`} onClick={() => setShowGallery(false)} >
                <div className={`bg-cardBGColor w-fit h-fit rounded-[8px] p-[4px]`}>
                    <p className={` px-[12px] py-[4px] translate-x-[2px] align-text-top rounded-full self-center  text-textColor ${fonts.dotoBlack.className} hover:scale-110`}>X</p>
                </div>
            </button>
        )
    }

    function FullScreenMedia() {
        function FsBgBarrier() {
            return (
                <div className={`fixed left-0 right-0 top-0 bottom-0 z-0 bg-black opacity-[75%]`} onClick={() => setFullscreenMedia(false)} />
            )
        }

        function FsMediaAsset({mediaLink, mediaType}: {mediaLink: string, mediaType: MediaType}) {
            return (
                <div className={`fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] w-full h-full z-10 content-center`} onClick={() => setFullscreenMedia(false)}>
                    {
                        mediaType === MediaType.Video ?
                            <LazyNonHoverVideo 
                                    src={mediaLink}
                                    autoplay={true}
                                    controls={true}
                                    muted={true}
                                    loop={true}
                                    />
                        :
                            <LazyFSImage
                                imgLink={mediaLink}
                                imgAlt=""
                                />
                    }
                </div>
            )
        }

        return (
            <div className={`fixed z-[9999] left-0 right-0 top-0 bottom-0 content-center justify-items-center`}>
                <FsBgBarrier/>
                <FsMediaAsset mediaLink={galleryMedia[selectedIndex].assetMediaLink} mediaType={galleryMedia[selectedIndex].assetMediaType}/>
            </div>
        )
    }

    return (
        <>
            <div className={`${CheckIfMobileBrowser() ? "rounded-[8px] py-[4px]" : "rounded-[24px] py-[12px]"} ${gallerySize} fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] bg-cardBGColor w-fit max-h-[calc(90%)] h-fit flex-row z-[150] justify-items-center`}>
                <GalleryMainMedia mediaLink={galleryMedia[selectedIndex].assetMediaLink} mediaAbout={galleryMedia[selectedIndex].assetText} mediaType={galleryMedia[selectedIndex].assetMediaType}/>
                <GalleryMediaText galleryMediaText={galleryMedia[selectedIndex].assetText} />
                <GalleryImageNavBar galleryImages={galleryMedia} galleryLength={galleryLength}/>
                <CloseButton />
            </div>
            {
                fullscreenMedia && ( <FullScreenMedia /> )          
            }
        </>
    )
}

function BackgroundBarrier({setShowGallery}: {setShowGallery: any}) {    
    return (
        <div className={`fixed left-0 right-0 top-0 bottom-0 z-[100]`} onClick={() => setShowGallery(false)}>
            <div className={`w-[100vw] h-[100vh] bg-black opacity-[75%] `}/>
        </div>
    )
}

// MAIN CONTAINER FOR PROJECT DETAIL CARDS

export function ProjectCardsWithGalleryContainer({cardArray, columnAmount}: {cardArray: ICardWithGalleryArrays[], columnAmount: string}) {
    
    return (
        <div className={`grid ${CheckIfMobileBrowser() ? "grid-cols-2" : `${columnAmount}`} absolute justify-self-center place-items-center w-[75%] my-[16px] h-[70%] md:h-[80%]`}>
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


export function ProjectCardsNoGalleryContainer({cardArray, columnAmount}: {cardArray: ICardWithGalleryArrays[], columnAmount: string}) {
    

    return (
        <div className={`grid ${CheckIfMobileBrowser() ? "grid-cols-2" : `${columnAmount}`} absolute justify-self-center place-items-center w-[75%] my-[16px] h-[70%] md:h-[80%]`}>
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

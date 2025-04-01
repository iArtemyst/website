'use client'

import "@/app/globals/globals.css";
import { StaticImageData } from "next/image";
import { useState } from "react";
import { CardHoverFX } from "./card-hover-fx";
import * as media from "@/app/globals/media";
import * as themes from "@/tailwind.config";
import * as fonts from "./fonts";
import * as gallery from "@/app/globals/gallery-component"

const bentoRounding = "rounded-[12px] sm:rounded-[16px] md:rounded-[24px]";
const gallerySize = 'min-w-[320px] sm:min-w-[480px] md:min-w-[540px] lg:min-w-[720px] xl:min-w-[960px] 2xl:min-w-[1080px]';
const gridGap = "gap-[12px]";

export function ProjectDetailText({TitleText="", MoreText=""}:{TitleText:String, MoreText:String}) {
    return (
        <div className="absolute z-0 left-[50%] -translate-x-[50%] bottom-[36px] w-[80%] grid grid-rows-auto h-fit justify-self-center border-white border-[1px] gap-[8px] px-[16px] py-[8px] mb-[24px]">

            <div className={`${fonts.dotoBlack.className} text-priColor w-full text-[18px] sm:text-[24px] md:text-[32px] lg:text-[56px] 2xl:text-[72px] text-left text-nowrap leading-none relative h-auto content-center`}>
                <p>{TitleText}</p>
            </div>

            <div className={`${fonts.dotoBlack.className} text-[10px] sm:text-[12px] md:text-[16px] lg:text-[18px] 2xl:text-[24px] text-pretty relative flex-row right-0 bottom-0 w-full text-secColor text-left`}>
                <p>{MoreText}</p>
            </div>
        </div>
    )
}

export function ProjectDetailRelativeText({TitleText="", MoreText=""}:{TitleText:String, MoreText:String}) {
    return (
        <div className="relative z-0 w-[80%] grid grid-rows-auto h-fit justify-self-center self-end border-white border-[1px] gap-[8px] px-[16px] py-[8px] mb-[24px] bg-red-300">
            <p className={`${fonts.dotoBlack.className} text-priColor w-full text-[18px] sm:text-[24px] md:text-[32px] lg:text-[56px] 2xl:text-[72px] text-left text-nowrap leading-none relative h-auto content-center`}>{TitleText}</p>
            <p className={`${fonts.dotoBlack.className} text-[10px] sm:text-[12px] md:text-[16px] lg:text-[18px] 2xl:text-[24px] text-pretty relative flex-row right-0 bottom-0 w-full text-secColor text-left`}>{MoreText}</p>
        </div>
    )
}

export function ProjectDetailTextTop({TitleText="", MoreText=""}:{TitleText:String, MoreText:String}) {
    return (
        <div className="relative w-[80%] grid grid-rows-auto h-fit justify-self-center border-white border-[1px] gap-[8px] px-[8px] md:px-[16px] py-[4px] md:py-[8px]">

            <div className={`${fonts.dotoBlack.className} text-priColor w-full text-[18px] sm:text-[24px] md:text-[32px] lg:text-[56px] 2xl:text-[72px] text-left text-nowrap leading-none relative h-auto content-center`}>
                <p>{TitleText}</p>
            </div>

            <div className={`${fonts.dotoBlack.className} text-[10px] sm:text-[12px] md:text-[16px] lg:text-[18px] 2xl:text-[24px] relative flex-row right-0 bottom-0 w-full text-secColor text-left`}>
                <p>{MoreText}</p>
            </div>
        </div>
    )
}

// ----------------------------------------------
export function HeaderText({text="", textSize=""}:{text:string, textSize:string}) {
    return (
        <div className={`relative h-auto w-full flex justify-center align-middle`}>
            <p className={`${fonts.dotoBlack.className} text-[14px] sm:text-[18px] md:text-[24px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] text-balance text-center content-center`}>{text}</p>
        </div>
    )
}

export function ParagraphText({text="", textSize=""}:{text:string, textSize:string}) {
    return (
        <div className={`relative h-auto w-auto flex justify-center my-[8px]`}>
            <p className={`${fonts.dotoBold.className} text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[16px] text-balance text-center`}>{text}</p>
        </div>
    )
}
// ----------------------------------------------

export function CellText({children, cellSpan}: {children:any, cellSpan:string}) {
    return (
        <div className={`${cellSpan} ${themes.hoverShadow} ${bentoRounding} w-full h-full content-center p-[16px] transition-all duration-200`}>
            {children}
        </div> 
    )
}

export function CellVideo({cellVidLink, cellSpan=""}: {cellVidLink:string, cellSpan:string}) {
    return (
        <div className={` ${cellSpan} ${themes.hoverShadow} ${bentoRounding} relative w-full h-fit justify-self-center overflow-hidden self-center border-2 border-green-300 transition-all duration-200`} >
            <media.GetHoverVideo vidLink={cellVidLink}/>
        </div>
    )
}

export function CellImage({cellImgLink, cellImgAlt, cellSpan=""}: {cellImgLink:StaticImageData, cellImgAlt:string, cellSpan:string}) {
    return (
        <div className={` ${cellSpan} ${themes.hoverShadow} ${bentoRounding} group relative w-full h-full justify-self-center  overflow-hidden`}>
            <media.GetImage imgLink={cellImgLink} imgAlt={cellImgAlt}/>
            <p className={`absolute left-[16px] bottom-[8px] text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[16px] opacity-0 group-hover:opacity-100 group-hover:translate-y-[0px] -translate-y-[12px] transition-all duration-400 drop-shadow-[0px_0px_4px_#000000] ${fonts.dotoBlack.className}`}>{cellImgAlt}</p>
        </div>
    )
}

//POP UP GALLERY FOR CARDS

export interface IPopupMedia
{
    assetMediaLink: string|StaticImageData,
    assetText: string,
}

function PopUpMediaViewer({mediaLink, mediaText, setShowGallery}:{mediaLink:string|StaticImageData, mediaText:string, setShowGallery: (x: boolean) => void}) {
    function CloseButton() {
        return (
            <button className={`absolute right-0 top-0 m-[6px] md:m-[16px]`} onClick={() => setShowGallery(false)} >
                <div className={`bg-cardBGColor w-fit h-fit rounded-[8px] p-[2px] md:p-[4px]`}>
                    <p className={`px-[6px] py-[2px] md:px-[12px] md:py-[4px] translate-x-[1px] md:translate-x-[2px] align-text-top rounded-full self-center text-[10px] sm:text-[12px] md:text-[14px]  text-textColor ${fonts.dotoBlack.className} hover:scale-110`}>X</p>
                </div>
            </button>
        )
    }

    function PopupText() {
        return (
            <div className={`w-[85%] h-auto relative justify-self-center text-left align-middle pb-[.75rem]`}>
                <p className={`${fonts.poppins.className} text-textColor text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] text-pretty`}>
                    {mediaText}
                </p>
            </div>
        )
    }
    
    function PopupMedia() {
        return (
            <div className={`w-auto h-auto relative rounded-[8px] md:rounded-[24px] px-[12px] pt-[12px] pb-[6px] md:px-[24px] md:pt-[24px] md:pb-[12px] justify-items-center content-center`}>
                <media.GetBentoGalleryMedia mediaLink={mediaLink} mediaText={mediaText} />
            </div>
        )
    }

    return (
        <div className={`fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] w-auto h-auto z-[150] justify-items-center py-[12px] content-center`}>
        {/* <CardHoverFX bufferZone={0} rotateAmount={3000}> */}
                <div className={`relative w-fit ${gallerySize}`}>
                    <div className={`absolute left-0 right-0 top-0 bottom-0 z-0 bg-cardBGColor rounded-[16px] md:rounded-[24px]`}/>
                    <div className={`relative`}>
                        <PopupMedia />
                        <PopupText />
                        <CloseButton />
                    </div>
                </div>
        {/* </CardHoverFX> */}
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

export function CellwMedia({cellMedia, mediaText, cellSpan, showGallery, setShowGallery}: {cellMedia: string|StaticImageData, mediaText:string, cellSpan:string, showGallery:boolean, setShowGallery: (x: boolean) => void}) {
    return (
        <CardHoverFX bufferZone={0} rotateAmount={12}>
            <div className={` ${cellSpan} ${themes.hoverShadow} ${bentoRounding} group relative w-full h-fit justify-self-center overflow-hidden self-center transition-all duration-200`} 
                onClick={(e) => { setShowGallery(!showGallery); }}>
                <div>
                    {
                        typeof cellMedia === 'string' ?
                        <media.GetHoverVideo vidLink={cellMedia}/> :
                        <media.GetImage imgLink={cellMedia} imgAlt={mediaText}/>
                    }
                </div>
            </div>
        </CardHoverFX>
    )
}

export function CellMediaOnClick({mediaLink, mediaText, cellSpan,}: {mediaLink:string|StaticImageData, mediaText:string, cellSpan:string,}) {
    let [showGallery, setShowGallery] = useState(false);
    
    return (
        <div className={`static`}>
        <div className={`relative`}>
            <CellwMedia cellMedia={mediaLink} mediaText={mediaText} cellSpan={cellSpan} showGallery={showGallery} setShowGallery={setShowGallery}/>
        </div>

        {
        showGallery && (
            <div className={`fixed z-[500]`}>
                <PopUpMediaViewer mediaLink={mediaLink} mediaText={mediaText} setShowGallery={setShowGallery}/>
                <BackgroundBarrier setShowGallery={setShowGallery}/>
            </div>
        )
        }
        </div>
    )
}
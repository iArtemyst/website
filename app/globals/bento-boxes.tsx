'use client'

import "@/app/globals/globals.css";
import { useState } from "react";
import { CardHoverFX } from "./card-hover-fx";
import * as fonts from "./fonts";
import { LazyImage } from "./lazy-image";
import { MediaType } from "./project-galleries";
import { LazyHoverVideo, LazyNonHoverVideo } from "./lazy-video";
import { CheckIfMobileBrowser } from "@/app/globals/mobile-check";
import { NoSelect } from "./styles";
import { PopUpMediaViewer } from "./popup-viewer";

const textAssetHoverSize = "text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[18px]"
const textHoverDist = "mx-[8px] my-[4px] sm:mx-[16px] sm:my-[8px] md:mx-[16px] md:my-[8px] lg:mx-[16px] lg:my-[8px] 2xl:mx-[16px] 2xl:my-[8px]";

export function ProjectDetailTextTop({TitleText="", MoreText="", ExtraProjInfo=""}: {TitleText: string, MoreText: string, ExtraProjInfo: string}) {
    return (
        <div className={`${CheckIfMobileBrowser() ? "px-[8px] py-[4px]" : "px-[16px] py-[8px]"} relative w-[80%] grid grid-rows-auto h-fit justify-self-center border-white border-[1px] gap-[8px]`}>
            <div className={`${CheckIfMobileBrowser() ? "text-[14px]" : "text-[32px] lg:text-[56px] 2xl:text-[72px]"} ${fonts.dotoBlack.className} text-priColor w-full text-left text-nowrap leading-none relative h-auto content-center`}>
                <p>{TitleText}</p>
            </div>
            <div>
                <p className={`text-[6px] md:text-[12px] lg:text-[14px] xl:text-[16px]"} ${fonts.dotoBlack.className} text-priColor w-full  text-left text-nowrap leading-none relative h-auto content-center`}>{ExtraProjInfo}</p>
            </div>

            <div className={`${CheckIfMobileBrowser() ? "text-[6px]" : "text-[16px] lg:text-[18px] 2xl:text-[24px]"} ${fonts.dotoBlack.className} relative flex-row right-0 bottom-0 w-full text-secColor text-left`}>
                <p>{MoreText}</p>
            </div>
        </div>
    )
}

// ----------------------------------------------
export function HeaderText({text=""}: {text: string}) {
    return (
        <div className={`relative h-full w-full flex justify-center align-middle p-[8px]`}>
            <p className={`${fonts.dotoBlack.className} text-[14px] sm:text-[18px] md:text-[24px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] text-balance text-center`}>{text}</p>
        </div>
    )
}

export function HeaderSubtitleText({htext="", stext="",}: {htext: string, stext: string}) {
    return (
        <div className={`relative h-full w-full flex flex-col justify-center align-middle p-[8px]`}>
            <p className={`${fonts.dotoBlack.className} text-[14px] sm:text-[18px] md:text-[24px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] text-balance text-center`}>{htext}</p>
            <p className={`${fonts.dotoBlack.className} text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[16px] text-balance text-center opacity-60`}>{stext}</p>
        </div>
    )
}

export function ParagraphText({text=""}: {text: string}) {
    return (
        <div className={`relative h-full w-full content-center p-[16px]`}>
            <p className={`${fonts.dotoBlack.className} text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[16px] text-balance text-center`}>{text}</p>
        </div>
    )
}
// ----------------------------------------------

export function CellText({children, cellSpan}: {children: any, cellSpan: string}) {
    return (
        <div className={`${cellSpan} rounded-[1em] relative w-full h-full self-center flex-grow content-center transition-all duration-200 hover:cursor-text`}>
            {children}
        </div> 
    )
}

export function CellMedia({cellMedia, cellMediaType, mediaText, cellSpan, hoverTextColor, showGallery, setShowGallery}: {cellMedia: string, cellMediaType: MediaType, mediaText: string, cellSpan: string, hoverTextColor: string, showGallery: boolean, setShowGallery: (x: boolean) => void}) {
    function FillCellMedia() {
        return (
            <CardHoverFX bufferZone={0} rotateAmount={120}>
                <div className={` ${cellSpan} rounded-[1em] group relative w-full h-fit min-w-[240px] min-h-[120px] min justify-self-center overflow-hidden self-center transition-all duration-200 z-auto shadow-[0px_0px_6px_#FFFFFF20] hover:shadow-[0px_0px_0px_#FFFFFF10]`} 
                    onClick={(e) => { setShowGallery(!showGallery); }}>
                        {
                            cellMediaType === MediaType.Video ?
                                <LazyHoverVideo 
                                    src={cellMedia}
                                    autoplay={false}
                                    controls={false}
                                    muted={true}
                                    loop={true}
                                    /> 
                            :
                                <LazyImage imgLink={cellMedia} imgAlt={mediaText}/>
                        }
                    <div className={` ${textHoverDist} absolute left-0 bottom-0 w-auto h-auto translate-y-[40px] opacity-100 group-hover:opacity-100 group-hover:translate-y-[0px] transition-all duration-300 `}>
                        <p className={`${fonts.dotoBlack.className} ${textAssetHoverSize} ${hoverTextColor} drop-shadow-[0px_0px_2px_#00000030]`}>{mediaText}</p>
                    </div>
                </div>
            </CardHoverFX>
        )
    }

    function FillCellMediaMobile() {
        return (
            <div className={` ${cellSpan} shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] rounded-[1em] group relative w-full h-fit justify-self-center overflow-hidden self-center transition-all duration-200 z-auto`} 
                onClick={(e) => { setShowGallery(!showGallery); }}>
                <div>
                    {
                        cellMediaType === MediaType.Video ?
                            <LazyNonHoverVideo 
                                src={cellMedia}
                                autoplay={true}
                                controls={false}
                                muted={true}
                                loop={true}
                                /> 
                        :
                            <LazyImage imgLink={cellMedia} imgAlt={mediaText}/>
                    }
                </div>

                <div className={` ${textHoverDist} absolute left-0 bottom-0 w-auto h-auto translate-y-[32px] opacity-100 group-hover:opacity-100 group-hover:translate-y-[0px] transition-all duration-300 `}
                        style={NoSelect}>
                    <p className={`${fonts.dotoBlack.className} ${textAssetHoverSize} ${hoverTextColor} drop-shadow-[0px_0px_2px_#00000030]`}>{mediaText}</p>
                </div>
            </div>
        )
    }
    
    return (
        <div>
            {
                CheckIfMobileBrowser() === false ?
                <FillCellMedia />
                :
                <FillCellMediaMobile />
            }
        </div>
    )
}

export function CellMediaNoShadow({cellMedia, cellMediaType, mediaText, cellSpan, hoverTextColor, showGallery, setShowGallery}: {cellMedia: string, cellMediaType: MediaType, mediaText: string, cellSpan: string, hoverTextColor: string, showGallery: boolean, setShowGallery: (x: boolean) => void}) {
    function FillCellMedia() {
        return (
            <CardHoverFX bufferZone={0} rotateAmount={120}>
                <div className={` ${cellSpan} rounded-[1em] group relative w-full h-fit min-w-[240px] min-h-[120px] min justify-self-center overflow-hidden self-center transition-all duration-200 z-auto`} 
                    onClick={(e) => { setShowGallery(!showGallery); }}>
                        {
                            cellMediaType === MediaType.Video ?
                                <LazyHoverVideo 
                                    src={cellMedia}
                                    autoplay={false}
                                    controls={false}
                                    muted={true}
                                    loop={true}
                                    /> 
                            :
                                <LazyImage imgLink={cellMedia} imgAlt={mediaText}/>
                        }
                </div>
            </CardHoverFX>
        )
    }

    function FillCellMediaMobile() {
        return (
            <div className={` ${cellSpan} rounded-[1em] group relative w-full h-fit justify-self-center overflow-hidden self-center transition-all duration-200 z-auto`} 
                onClick={(e) => { setShowGallery(!showGallery); }}>
                <div>
                    {
                        cellMediaType === MediaType.Video ?
                            <LazyNonHoverVideo 
                                src={cellMedia}
                                autoplay={true}
                                controls={false}
                                muted={true}
                                loop={true}
                                /> 
                        :
                            <LazyImage imgLink={cellMedia} imgAlt={mediaText}/>
                    }
                </div>
            </div>
        )
    }
    
    return (
        <div>
            {
                CheckIfMobileBrowser() === false ?
                <FillCellMedia />
                :
                <FillCellMediaMobile />
            }
        </div>
    )
}

//---------------------------------


export function CellMediaOnClick({mediaLink, mediaType, mediaText, hoverTextColor, cellSpan,}: {mediaLink: string, mediaType: MediaType, mediaText: string, hoverTextColor: string, cellSpan: string,}) {
    let [showGallery, setShowGallery] = useState(false);
    
    return (
        <div className={`relative ${cellSpan} hover:cursor-pointer`}>
            <CellMedia cellMedia={mediaLink} cellMediaType={mediaType} mediaText={mediaText} cellSpan={cellSpan} showGallery={showGallery} setShowGallery={setShowGallery} hoverTextColor={hoverTextColor}/>
            {
                showGallery && (
                    <div className={`fixed z-[500]`}>
                        <PopUpMediaViewer mediaLink={mediaLink} mediaText={mediaText} mediaType={mediaType} setShowGallery={setShowGallery}/>
                    </div>
                )
            }
        </div>
    )
}

export function CellMediaOnClickNoShadow({mediaLink, mediaType, mediaText, hoverTextColor, cellSpan,}: {mediaLink: string, mediaType: MediaType, mediaText: string, hoverTextColor: string, cellSpan: string,}) {
    let [showGallery, setShowGallery] = useState(false);
    
    return (
        <div className={`relative ${cellSpan} hover:cursor-pointer flex justify-center content-center`}>
            <CellMediaNoShadow cellMedia={mediaLink} cellMediaType={mediaType} mediaText={mediaText} cellSpan={cellSpan} showGallery={showGallery} setShowGallery={setShowGallery} hoverTextColor={hoverTextColor}/>
            {
                showGallery && (
                    <div className={`fixed z-[500]`}>
                        <PopUpMediaViewer mediaLink={mediaLink} mediaText={mediaText} mediaType={mediaType} setShowGallery={setShowGallery}/>
                    </div>
                )
            }
        </div>
    )
}

export function CellMediaOnClickMobile({mediaLink, mediaType, mediaText, hoverTextColor, cellSpan,}: {mediaLink: string, mediaType: MediaType, mediaText: string, hoverTextColor: string, cellSpan: string,}) {
    let [showGallery, setShowGallery] = useState(false);
    
    return (
        <div className={`relative ${cellSpan} hover:cursor-pointer`}>
            <CellMedia cellMedia={mediaLink} cellMediaType={mediaType} mediaText={mediaText} cellSpan={cellSpan} showGallery={showGallery} setShowGallery={setShowGallery} hoverTextColor={hoverTextColor}/>
            {
                showGallery && (
                    <div className={`fixed z-[500]`}>
                        <PopUpMediaViewer mediaLink={mediaLink} mediaText={mediaText} mediaType={mediaType} setShowGallery={setShowGallery}/>
                    </div>
                )
            }
        </div>
    )
}
'use client'

import "@/app/globals/globals.css";
import { useState, lazy, Suspense } from "react";
import { CardHoverFX } from "./card-hover-fx";
import * as themes from "@/tailwind.config";
import * as fonts from "./fonts";
import { LazyFSImage, LazyImage } from "./lazy-image";
import { MediaType } from "./project-galleries";
import { LazyHoverVideo, LazyNonHoverVideo, LazyVideo } from "./lazy-video";
import { CheckIfMobileBrowser } from "@/app/globals/mobile-check";
import { NoSelect } from "./styles";

const bentoRounding = "rounded-[12px] sm:rounded-[16px] md:rounded-[24px]";
const gallerySize = 'min-h-[320px] sm:min-h-[360px] md:min-h-[400px] lg:min-h-[480px] xl:min-h-[540px] 2xl:min-h-[600px]';
const gridGap = "gap-[12px]";
const textAssetHoverSize = "text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[18px]"
const textHoverDist = "mx-[8px] my-[4px] sm:mx-[16px] sm:my-[8px] md:mx-[16px] md:my-[8px] lg:mx-[16px] lg:my-[8px] 2xl:mx-[16px] 2xl:my-[8px]";

export function ProjectDetailText({TitleText="", MoreText=""}: {TitleText: string, MoreText: string}) {
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

export function ProjectDetailRelativeText({TitleText="", MoreText=""}: {TitleText: string, MoreText: string}) {
    return (
        <div className="relative z-0 w-[80%] grid grid-rows-auto h-fit justify-self-center self-end border-white border-[1px] gap-[8px] px-[16px] py-[8px] mb-[24px]">
            <p className={`${fonts.dotoBlack.className} text-priColor w-full text-[18px] sm:text-[24px] md:text-[32px] lg:text-[56px] 2xl:text-[72px] text-left text-nowrap leading-none relative h-auto content-center`}>{TitleText}</p>
            <p className={`${fonts.dotoBlack.className} text-[10px] sm:text-[12px] md:text-[16px] lg:text-[18px] 2xl:text-[24px] text-pretty relative flex-row right-0 bottom-0 w-full text-secColor text-left`}>{MoreText}</p>
        </div>
    )
}

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
export function HeaderText({text="", textSize=""}: {text: string, textSize: string}) {
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
            <p className={`${fonts.dotoBlack.className} text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[16px] text-balance text-center`}>{stext}</p>
        </div>
    )
}

export function ParagraphText({text="", textSize=""}: {text: string, textSize: string}) {
    return (
        <div className={`relative h-full w-full content-center p-[16px]`}>
            <p className={`${fonts.dotoBlack.className} text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[16px] text-balance text-center`}>{text}</p>
        </div>
    )
}
// ----------------------------------------------

export function CellText({children, cellSpan}: {children: any, cellSpan: string}) {
    return (
        <div className={`${cellSpan} ${bentoRounding} relative w-full h-full self-center flex-grow content-center transition-all duration-200 hover:cursor-text`}>
            {children}
        </div> 
    )
}

export function CellMedia({cellMedia, cellMediaType, mediaText, cellSpan, hoverTextColor, showGallery, setShowGallery}: {cellMedia: string, cellMediaType: MediaType, mediaText: string, cellSpan: string, hoverTextColor: string, showGallery: boolean, setShowGallery: (x: boolean) => void}) {
    function FillCellMedia() {
        return (
            <CardHoverFX bufferZone={0} rotateAmount={120}>
                <div className={` ${cellSpan} ${bentoRounding} group relative w-full h-fit min-w-[240px] min-h-[120px] min justify-self-center overflow-hidden self-center transition-all duration-200 z-auto shadow-[0px_0px_6px_#FFFFFF20] hover:shadow-[0px_0px_0px_#FFFFFF10]`} 
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
            <div className={` ${cellSpan} shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] ${bentoRounding} group relative w-full h-fit justify-self-center overflow-hidden self-center transition-all duration-200 z-auto`} 
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
                <div className={` ${cellSpan} ${bentoRounding} group relative w-full h-fit min-w-[240px] min-h-[120px] min justify-self-center overflow-hidden self-center transition-all duration-200 z-auto`} 
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
                    {/* <div className={` ${textHoverDist} absolute left-0 bottom-0 w-auto h-auto translate-y-[40px] opacity-100 group-hover:opacity-100 group-hover:translate-y-[0px] transition-all duration-300 `}>
                        <p className={`${fonts.dotoBlack.className} ${textAssetHoverSize} ${hoverTextColor} drop-shadow-[0px_0px_2px_#00000030]`}>{mediaText}</p>
                    </div> */}
                </div>
            </CardHoverFX>
        )
    }

    function FillCellMediaMobile() {
        return (
            <div className={` ${cellSpan} ${bentoRounding} group relative w-full h-fit justify-self-center overflow-hidden self-center transition-all duration-200 z-auto`} 
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

                {/* <div className={`${textHoverDist} absolute left-0 bottom-0 w-auto h-auto translate-y-[32px] opacity-100 group-hover:opacity-100 group-hover:translate-y-[0px] transition-all duration-300`}
                        style={NoSelect}>
                    <p className={`${fonts.dotoBlack.className} ${textAssetHoverSize} ${hoverTextColor} drop-shadow-[0px_0px_2px_#00000030]`}>{mediaText}</p>
                </div> */}
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

//POP UP GALLERY FOR CARDS

export interface IPopupMedia
{
    assetMediaLink: string,
    assetText: string,
}

function PopUpMediaViewer({mediaLink, mediaText, mediaType, setShowGallery}: {mediaLink: string, mediaText: string, mediaType: MediaType, setShowGallery: (x: boolean) => void}) {
    let [fullscreenMedia, setFullscreenMedia] = useState(false);
    let isMobile = CheckIfMobileBrowser();
    let isMobilePortrait = window.innerHeight > window.innerWidth;
    
    function GetBentoGalleryMedia({mediaLink, mediaText, mediaType}:{mediaLink: string, mediaText: string, mediaType: MediaType}) {
        return (
            <div className={`rounded-[12px] overflow-clip shadow-[inset_0px_0px_24px_#00000090]`}>
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
                        <LazyImage
                            imgLink={mediaLink}
                            imgAlt={mediaText}
                            />
                }
            </div>
        )
    }

    function GetBentoGalleryMediaMobile({mediaLink, mediaText, mediaType}:{mediaLink: string, mediaText: string, mediaType: MediaType}) {
        return (
            <div className={`rounded-[8px] w-auto h-auto justify-self-center overflow-clip shadow-[inset_0px_0px_24px_#00000090]`}>
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
                            imgAlt={mediaText}
                            />
                }
            </div>
        )
    }

    function CloseButton() {
        return (
            <button className={`absolute right-0 top-0 m-[6px] md:m-[16px]`} onClick={() => setShowGallery(false)} >
                <div className={`bg-cardBGColor w-fit h-fit rounded-[8px] p-[2px] md:p-[4px]`}>
                    <p className={`px-[6px] py-[2px] md:px-[12px] md:py-[4px] translate-x-[1px] md:translate-x-[2px] align-text-top rounded-full self-center text-[12px] md:text-[14px]  text-textColor ${fonts.dotoBlack.className} hover:scale-110`}>X</p>
                </div>
            </button>
        )
    }

    function CloseButtonMobile() {
        return (
            <button className={`absolute right-0 top-0 m-[2px]`} onClick={() => setShowGallery(false)} >
                <div className={`bg-cardBGColor w-fit h-fit rounded-[8px] p-[2px]`}>
                    <p className={`px-[6px] py-[2px] translate-x-[1px] align-text-top rounded-full self-center text-[10px] text-textColor ${fonts.dotoBlack.className} hover:scale-110`}>X</p>
                </div>
            </button>
        )
    }

    function PopupText() {
        return (
            <div className={`${isMobile ? `pb-[4px]` : `pb-[.75rem]`} w-full h-auto relative justify-self-center align-middle`}>
                <p className={`${fonts.poppins.className} ${isMobile ? "text-[6px] px-[8px]" : "sm:text-[10px] md:text-[12px] lg:text-[14px] px-[24px]"} text-textColor text-left text-pretty `}>
                    {mediaText}
                </p>
            </div>
        )
    }
    
    function PopupMedia() {
        return (
            <div className={`w-auto h-auto relative rounded-[8px] md:rounded-[24px] px-[12px] pt-[12px] pb-[6px] md:px-[24px] md:pt-[24px] md:pb-[12px] justify-items-center content-center`} onClick={() => setFullscreenMedia(!fullscreenMedia)}>
                <GetBentoGalleryMedia mediaLink={mediaLink} mediaText={mediaText} mediaType={mediaType}/>
            </div>
        )
    }

    function PopupMediaMobile() {
        return (
            <div className={`${isMobilePortrait ? `w-full h-auto` : `w-auto h-auto` } relative grid rounded-[8px] p-[8px] justify-items-center content-center`}>
                <GetBentoGalleryMediaMobile mediaLink={mediaLink} mediaText={mediaText} mediaType={mediaType}/>
            </div>
        )
    }
        
    function FsBgBarrier() {
        return (
            <div className={`fixed left-0 right-0 top-0 bottom-0 z-0 bg-black opacity-[75%]`} onClick={() => setFullscreenMedia(false)} />
        )
    }

    function FsMediaAsset({mediaLink, mediaType}: {mediaLink: string, mediaType: MediaType}) {
        return (
            <div className={`fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] w-full h-full z-10`} onClick={() => setFullscreenMedia(false)}>
                {
                    mediaType === MediaType.Video ?
                        <div className={`w-full h-full relative content-center`}>
                            <LazyNonHoverVideo 
                                src={mediaLink}
                                autoplay={true}
                                controls={true}
                                muted={true}
                                loop={true}
                                />
                        </div> 
                    : 
                        <div className={`relative w-full h-full content-center`}>
                            <LazyFSImage
                                imgLink={mediaLink}
                                imgAlt=""
                                />
                        </div>
                }
            </div>
        )
    }

    function FullScreenMedia() {
        return (
            <div className={`fixed z-[9999] left-0 right-0 top-0 bottom-0 content-center justify-items-center`}>
                <FsBgBarrier/>
                <FsMediaAsset mediaLink={mediaLink} mediaType={mediaType}/>
            </div>
        )
    }

    return (
        <div className={`fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] h-auto z-[150] justify-items-center content-center w-full`}>
            {
                isMobile === false ?
                    <>
                        <div className={`content-center mx-[24px] my-auto justify-items-center`}>
                            <div className={`relative w-[80%] md:max-w-[960px] lg:max-w-[1080px] xl:max-w-[1260px] 2xl:max-w-[1440px] h-fit`}>
                                <div className={`absolute left-0 right-0 top-0 bottom-0 z-0 bg-cardBGColor md:rounded-[18px]`}/>
                                <div className={`relative`}>
                                    <PopupMedia />
                                    <PopupText />
                                    <CloseButton />
                                </div>
                            </div>
                        </div>
                        {
                            fullscreenMedia && ( <FullScreenMedia /> )   
                        }
                    </>
                    :
                    <>
                        <div className={`content-center grid my-auto justify-items-center`}>
                            <div className={`${isMobilePortrait ? 'w-fit h-fit' : 'w-[50%] h-auto'} relative`}>
                                <div className={`absolute left-0 right-0 top-0 bottom-0 z-0 bg-cardBGColor rounded-[8px]`}/>
                                    <div className={`relative`}>
                                        <PopupMediaMobile />
                                        <PopupText />
                                        <CloseButtonMobile />
                                    </div>
                                </div>
                        </div>
                        {
                            fullscreenMedia && ( <FullScreenMedia /> )   
                        }
                    </>
            }
        </div>
    )
}

function BackgroundBarrier({setShowGallery,}: {setShowGallery: any,}) {
    return (
        <div className={`fixed left-0 right-0 top-0 bottom-0 z-[100]`} onClick={() => setShowGallery(false)}>
            <div className={`w-[100vw] h-[100vh] bg-black opacity-[75%] `}/>
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
                        <BackgroundBarrier setShowGallery={setShowGallery}/>
                    </div>
                )
            }
        </div>
    )
}


export function CellMediaOnClickNoShadow({mediaLink, mediaType, mediaText, hoverTextColor, cellSpan,}: {mediaLink: string, mediaType: MediaType, mediaText: string, hoverTextColor: string, cellSpan: string,}) {
    let [showGallery, setShowGallery] = useState(false);
    
    return (
        <div className={`relative ${cellSpan} hover:cursor-pointer`}>
            <CellMediaNoShadow cellMedia={mediaLink} cellMediaType={mediaType} mediaText={mediaText} cellSpan={cellSpan} showGallery={showGallery} setShowGallery={setShowGallery} hoverTextColor={hoverTextColor}/>
            {
                showGallery && (
                    <div className={`fixed z-[500]`}>
                        <PopUpMediaViewer mediaLink={mediaLink} mediaText={mediaText} mediaType={mediaType} setShowGallery={setShowGallery}/>
                        <BackgroundBarrier setShowGallery={setShowGallery}/>
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
                        <BackgroundBarrier setShowGallery={setShowGallery}/>
                    </div>
                )
            }
        </div>
    )
}
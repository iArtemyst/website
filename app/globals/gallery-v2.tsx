'use client'

import * as fonts from "@/app/globals/fonts";
import "@/app/globals/globals.css";
import { LazyFSImage } from "@/app/globals/lazy-image";
import { LazyNonHoverVideo } from "@/app/globals/lazy-video";
import { IGalleryMedia, MediaType } from "@/app/globals/project-galleries";
import Link from "next/link";
import { useState } from "react";
import { CardHoverFX } from "./card-hover-fx";
import { LazyImage2 } from "./lazy-image";

const bentoRounding = "rounded-[12px] sm:rounded-[16px] md:rounded-[24px]";
const galleryButtonStyle = "w-[72px] h-[36px] md:w-[96px] md:h-[48px] flex justify-center place-content-center rounded-[8px] hover:cursor-pointer bg-cardBGColor";


//----------------------------------------------------------------------------------
//INFO DIV ABOVE GALLERY 

export function GalleryV2LinkButtonStack({outLink1="", buttonText1="", outLink2="", buttonText2="",}: {outLink1: string, buttonText1: string, outLink2: string, buttonText2: string,}) {
    function SingleLinkButton({outLink="", buttonText = ""}:{outLink: string, buttonText: string}) {
        return (
            <div className="flex flex-col w-fit">
                <p className={`${fonts.dotoBlack.className} text-[10px] md:text-[12px] text-white place-self-center`}>Link To</p>
                <div className={`hover:cursor-pointer relative text-center place-self-center w-fit md:min-w-[192px] h-auto rounded-full bg-[#FFFFFF80] hover:bg-[#FFFFFF] hover:scale-[110%] transition-all duration-[200ms]`}>
                    <Link href={outLink} rel="noopener noreferrer" target="_blank" className="relative w-fit h-fit">
                        <p className={`${fonts.dotoBlack.className} text-[14px] md:text-[16px] px-[1.5rem] py-[.5rem]`}>{buttonText}</p>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className={`flex flex-row md:flex-col w-fit h-auto self-center justify-self-center justify-between gap-[2rem] md:gap-[.25rem] order-2 md:order-1`}>
            <SingleLinkButton outLink={outLink1} buttonText={buttonText1}/>
            <SingleLinkButton outLink={outLink2} buttonText={buttonText2}/>
        </div>
    )
}

function GalleryV2TitleDiv({projTitle=""}:{projTitle: string}) {
    return (
        <h1 className={`${fonts.dotoBlack.className} text-textVariant text-nowrap text-center w-full md:text-right text-[24px] md:text-[32px]`}>
            {projTitle}
        </h1>
    )
}

function GalleryV2InfoDiv({projSummary="", projOtherDetails=""}:{projSummary: string, projOtherDetails: string}) {
    return (
        <div className={`text-[#FFFFFF60] text-center md:text-right px-[1rem] md:px-[0rem]`}>
            <p className={`${fonts.dotoBlack.className} text-[12px] md:text-[16px]`}>
                {projOtherDetails}
            </p>
            <p className={`${fonts.poppins.className} text-textVariant text-pretty text-[12px] md:text-[14px]`}>
                {projSummary}
            </p>
        </div>
    )
}

export function GalleryV2InfoWithLinks({projTitle="", projSummary="", outLink1="", buttonText1="", outLink2="", buttonText2="", projOtherDetails=""}:{projTitle: string, projSummary: string, outLink1: string, buttonText1: string, outLink2: string, buttonText2: string, projOtherDetails: string}) {
    return (
        <div className={`flex flex-col md:flex-row w-full h-fit max-w-[1080px] min-w-[240px] md:min-w-[540px] gap-[12px] md:gap-[36px] place-self-center place-items-center justify-between mb-[0px] md:mb-[24px]`}>
            <GalleryV2LinkButtonStack outLink1={outLink1} outLink2={outLink2} buttonText1={buttonText1} buttonText2={buttonText2} />
            <div className="flex flex-col md:flex-col w-full md:w-fit place-items-center md:place-items-end gap-[4px] md:gap-[0px] order-1 md:order-2">
                <GalleryV2TitleDiv projTitle={projTitle} />
                <GalleryV2InfoDiv projSummary={projSummary} projOtherDetails={projOtherDetails}/>
            </div>
        </div>
    )
}

//----------------------------------------------------------------------------------
//GALLERY MAIN DIV


export function GalleryV2({mediaGallery,}: {mediaGallery: IGalleryMedia[]}) {
    let [selectedIndex, setSelectedIndex] = useState(0);
    let [fullscreenMedia, setFullscreenMedia] = useState(false);

    function FullScreenMedia() {
        function FsBgBarrier() {
            return (
                <div className={`fixed left-0 right-0 top-0 bottom-0 z-0 bg-black opacity-[75%]`} onClick={() => setFullscreenMedia(false)} />
            )
        }

        function FsMediaAsset() {
            return (
                <div className={`fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] w-[95dvw] h-[95dvh] z-10 content-center`} onClick={() => setFullscreenMedia(false)}>
                    {
                        mediaGallery[selectedIndex].assetMediaType === MediaType.Video ?
                            <LazyNonHoverVideo 
                                    src={mediaGallery[selectedIndex].assetMediaLink}
                                    autoplay={true}
                                    controls={true}
                                    muted={true}
                                    loop={true}
                                    />
                        :
                            <LazyFSImage
                                imgLink={mediaGallery[selectedIndex].assetMediaLink}
                                imgAlt={mediaGallery[selectedIndex].assetText}
                                />
                    }
                </div>
            )
        }

        return (
            <div className={`fixed z-[9999] left-0 right-0 top-0 bottom-0 content-center justify-items-center`}>
                <FsBgBarrier/>
                <FsMediaAsset/>
            </div>
        )
    }

    function MainMediaCentered() {
        return (
            <div className={`place-content-center place-self-center w-fit h-fit md:h-full`}>
                <CardHoverFX bufferZone={100} rotateAmount={120}>
                    <div className={`${bentoRounding} group relative w-fit h-fit min-w-[240px] min-h-[120px] max-w-[1280px] max-h-[840px] min justify-self-center overflow-hidden 
                                        self-center transition-all duration-200 z-auto shadow-[0px_0px_12px_#FFFFFF10] hover:shadow-[0px_0px_3px_#FFFFFF10]`} 
                                        onClick={(e) => { setFullscreenMedia(!fullscreenMedia); }}>
                    {
                        mediaGallery[selectedIndex].assetMediaType === MediaType.Video ?
                            <LazyNonHoverVideo 
                                    src={mediaGallery[selectedIndex].assetMediaLink}
                                    autoplay={true}
                                    controls={true}
                                    muted={true}
                                    loop={true}
                                    />
                        :
                            <LazyImage2 imgLink={mediaGallery[selectedIndex].assetMediaLink} imgAlt={mediaGallery[selectedIndex].assetText}/>
                        }
                    </div>
                </CardHoverFX>
                {
                    fullscreenMedia && ( <FullScreenMedia /> )     
                }
            </div>
        )
    }


    function GalleryV2DetailDiv({selectedMediaText}:{selectedMediaText:string}){
        function GalleryButtonForward() {
            return (
                <div className={`${galleryButtonStyle} ${fonts.dotoBlack.className}`} onClick={() => selectedIndex < (mediaGallery.length - 1) ? setSelectedIndex(selectedIndex += 1) : setSelectedIndex(0)}>
                    <p className="align-middle self-center">
                        next
                    </p>
                </div>
            )
        }

        function GalleryButtonPrevious() {
            return (
                <div className={`${galleryButtonStyle} ${fonts.dotoBlack.className}`} onClick={() => selectedIndex > 0 ? setSelectedIndex(selectedIndex -= 1) : setSelectedIndex(mediaGallery.length - 1)}>
                    <p className="align-middle self-center">
                        prev
                    </p>
                </div>
            )
        }

        return (
            <div className={`flex flex-col self-end mt-[1rem] md:mt-0 gap-[12px] place-self-center w-full md:w-[30%] min-w-[240px] h-fit md:h-full max-h-[720px]`}>
                <div className={`w-full h-auto flex order-2 md:order-1`}>
                    <p className={`${fonts.poppins.className} w-full h-auto text-center md:text-right px-[.25rem] md:px-[2rem] text-[12px] md:text-[14px] text-textVariant text-pretty`}>{selectedMediaText}</p>
                </div>
                <div className="flex flex-row place-self-center justify-center h-[20%] place-items-center w-full gap-[1rem] order-1 md:order-2">
                    <GalleryButtonPrevious/>
                    <GalleryButtonForward/>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col md:flex-row px-[24px] justify-self-center relative w-[95%] max-w-[1440px] min-h-[360px] h-full justify-center gap-[0px] md:gap-[24px]">
            <MainMediaCentered />
            <GalleryV2DetailDiv selectedMediaText={mediaGallery[selectedIndex].assetText}/>
        </div>
    )
}
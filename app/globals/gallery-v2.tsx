'use client'

import "@/app/globals/globals.css";

import "@/app/globals/globals.css";
import { useState, lazy, Suspense } from "react";
import * as themes from "@/tailwind.config";
import * as fonts from "@/app/globals/fonts";
import { LazyFSImage } from "@/app/globals/lazy-image";
import { LazyNonHoverVideo, LazyVideo } from "@/app/globals/lazy-video";
import { NoSelect } from "@/app/globals/styles";

import "@/app/globals/globals.css";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

import * as SVGComponents from "@/app/svgs/index";
import StyledLink from "@/app/globals/styled-link";

import * as gallery from "@/app/globals/project-galleries";
import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";
import { IGalleryMedia, MediaType } from "@/app/globals/project-galleries";
import { CheckIfMobileBrowser } from "@/app/globals/mobile-check";
import { CardHoverFX } from "./card-hover-fx";
import { LazyHoverVideo } from "./lazy-video";
import { LazyImage2 } from "./lazy-image";


const bentoRounding = "rounded-[12px] sm:rounded-[16px] md:rounded-[24px]";
const gallerySize = 'min-h-[320px] sm:min-h-[360px] md:min-h-[400px] lg:min-h-[480px] xl:min-h-[540px] 2xl:min-h-[600px]';
const gridGap = "gap-[12px]";
const textAssetHoverSize = "text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[18px]"
const textHoverDist = "mx-[8px] my-[4px] sm:mx-[16px] sm:my-[8px] md:mx-[16px] md:my-[8px] lg:mx-[16px] lg:my-[8px] 2xl:mx-[16px] 2xl:my-[8px]";


export function GalleryV2LinkButtonStack({outLink1="", buttonText1="", outLink2="", buttonText2="",}: {outLink1: string, buttonText1: string, outLink2: string, buttonText2: string,}) {
    
    function SingleLinkButton({outLink="", buttonText = ""}:{outLink: string, buttonText: string}) {
        return (
            <div>
                <div>
                    <p className={`${fonts.dotoBlack.className} text-[5px] sm:text-[6px] md:text-[7px] lg:text-[8px] xl:text-[10px] text-white place-self-center`}>Link To</p>
                </div>
                <div className={`hover:cursor-pointer relative text-center place-self-center w-fit min-w-[192px] h-auto rounded-full bg-[#FFFFFF80] hover:bg-[#FFFFFF] hover:scale-[110%] transition-all duration-[200ms]`}>
                    <Link href={outLink} rel="noopener noreferrer" target="_blank" className="relative w-fit h-fit">
                        <p className={`${fonts.dotoBlack.className} text-[7px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] px-[.5rem] sm:px-[1rem] py-[.25rem]`}>{buttonText}</p>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className={`flex flex-col w-fit h-auto self-start justify-self-center justify-between gap-[12px]`}>
            <SingleLinkButton outLink={outLink1} buttonText={buttonText1}/>
            <SingleLinkButton outLink={outLink2} buttonText={buttonText2}/>
        </div>
    )
}

function GalleryV2InfoText({projTitle="", projSummary=""}:{projTitle: string, projSummary: string}) {
    return (
        <div className={`flex flex-col w-auto max-w-[540px] h-full place-self-center justify-start ml-[24px] gap-[2px] text-white`}>
            <h1 className={`place-self-start text-[24px]`}>
                {projTitle}
            </h1>
            <p className={`place-self-start text-[16px]`}>
                {projSummary}
            </p>
        </div>
    )
}

export function GalleryV2InfoWithLinks({projTitle="", projSummary="", outLink1="", buttonText1="", outLink2="", buttonText2="",}:{projTitle: string, projSummary: string, outLink1: string, buttonText1: string, outLink2: string, buttonText2: string,}) {
    return (
        <div className={`flex flex-row w-auto h-auto max-w-[1280px] min-w-[540px] place-self-center`}>
            <GalleryV2LinkButtonStack outLink1={outLink1} outLink2={outLink2} buttonText1={buttonText1} buttonText2={buttonText2} />
            <GalleryV2InfoText projTitle={projTitle} projSummary={projSummary} />
        </div>
    )

}

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
            <div>
                <CardHoverFX bufferZone={100} rotateAmount={120}>
                    <div className={`${bentoRounding} group relative w-fit h-fit min-w-[240px] min-h-[120px] max-w-[1280px] max-h-[840px] min justify-self-center overflow-hidden 
                                        self-center transition-all duration-200 z-auto`} 
                                        onClick={(e) => { setFullscreenMedia(!fullscreenMedia); }}>
                        <LazyImage2 imgLink={mediaGallery[selectedIndex].assetMediaLink} imgAlt={mediaGallery[selectedIndex].assetText}/>
                    </div>
                </CardHoverFX>
                {
                    fullscreenMedia && ( <FullScreenMedia /> )     
                }
            </div>
        )
    }

    return (
        <div className="flex flex-col px-[24px] justify-self-center relative w-fit min-h-[360px] h-fit justify-start">
            <MainMediaCentered />
            <div className={`flex flex-row justify-between gap-[64px] mt-[16px] py-[12px] w-full place-self-center`}>
                <div className="w-[96px] h-[48px] flex justify-center place-content-center rounded-[8px] hover:cursor-pointer bg-cardBGColor" onClick={() => selectedIndex > 0 ? setSelectedIndex(selectedIndex -= 1) : setSelectedIndex(mediaGallery.length - 1)}>
                    <p className="align-middle self-center">prev</p>
                </div>
                <div className={`w-full h-auto place-self-center justify-items-center flex-col`}>
                    <p className={`${fonts.dotoBlack.className} w-fit max-w-[720px] text-center text-white`}>{mediaGallery[selectedIndex].assetText}</p>
                </div>
                <div className="w-[96px] h-[48px] flex justify-center place-content-center rounded-[8px] hover:cursor-pointer bg-cardBGColor" onClick={() => selectedIndex < (mediaGallery.length - 1) ? setSelectedIndex(selectedIndex += 1) : setSelectedIndex(0)}>
                    <p className="align-middle self-center">next</p>
                </div>
            </div>
        </div>
    )
}
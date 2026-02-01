'use client'

import "@/app/globals/globals.css";
import { useState } from "react";
import * as fonts from "./fonts";
import { LazyImage } from "./lazy-image";
import { MediaType } from "./project-galleries";
import { LazyNonHoverVideo } from "./lazy-video";
import { FullScreenMediaViewer } from "./fullscreen-media";

export function PopUpMediaViewer({mediaLink, mediaText, mediaType, setShowGallery,}: {mediaLink: string, mediaText: string, mediaType: MediaType, setShowGallery: (x: boolean) => void,}) {
    let [fullscreenMedia, setFullscreenMedia] = useState(false);

    function PopupMedia() {
        return (
            <div className={`relative w-full h-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1080px] 2xl:max-w-[1280px] max-h-[540px] sm:max-h-[540px] md:max-h-[720px] lg:max-h-[840px] xl:max-h-[960px] object-center rounded-[1em] overflow-clip shadow-[inset_0px_0px_24px_#00000090] bg-[#33333350]`} onClick={() => setFullscreenMedia(true)}>
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

    return (
        <>
        <div className={`fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] h-full w-full z-[150] flex justify-items-center justify-center`}>
            <div className={`fixed w-full h-full bg-[#000000AA] -z-[10]`} onClick={() => setShowGallery(false)}/>

            <div className={`relative w-[80%] md:w-fit h-fit place-self-center bg-cardBGColor rounded-[1em] md:rounded-[2em] flex`} onClick={() => setFullscreenMedia(true)}>
                <div className={`relative flex flex-col w-full h-full gap-[.5em] px-[1em] pt-[1em] pb-[.5em] md:px-[2em] md:pt-[2em] md:pb-[1em] place-items-center`}>
                    <PopupMedia />

                    <p className={`${fonts.poppins.className} text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] px-[1em] text-textColor text-left text-pretty `}>
                        {mediaText}
                    </p>

                    <button className={`absolute right-0 top-0 m-[6px] md:m-[16px]`} onClick={() => setShowGallery(false)} >
                        <div className={`bg-cardBGColor w-fit h-fit rounded-[8px] p-[2px] md:p-[4px]`}>
                            <p className={`px-[6px] py-[2px] md:px-[12px] md:py-[4px] translate-x-[1px] md:translate-x-[2px] align-text-top rounded-full self-center text-[12px] md:text-[14px]  text-textColor ${fonts.dotoBlack.className} hover:scale-110`}>X</p>
                        </div>
                    </button>
                </div>
            </div>
            {
                fullscreenMedia && ( <FullScreenMediaViewer mediaLink={mediaLink} mediaText={mediaText} mediaType={mediaType} setShowFullscreen={setShowGallery} /> )
            }
        </div>
        </>
    )
}
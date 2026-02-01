'use client'

import "@/app/globals/globals.css";
import "@/app/globals/globals.css";
import { LazyFSImage } from "./lazy-image";
import { MediaType } from "./project-galleries";
import { LazyNonHoverVideo } from "./lazy-video";

export function FullScreenMediaViewer({mediaLink, mediaText, mediaType, setShowFullscreen}: {mediaLink: string, mediaText: string, mediaType: MediaType, setShowFullscreen: (x: boolean) => void}) {
    return (
        <div className={`fixed w-full h-full z-[9999] flex bg-[#000000AA] flex-col`}  onClick={() => setShowFullscreen(false)}>
            <div className="fixed w-full h-full z-[200]"/>
            {
                mediaType === MediaType.Video ?
                    <div className={`w-full h-full object-contain content-center`}>
                        <LazyNonHoverVideo 
                            src={mediaLink}
                            autoplay={true}
                            controls={true}
                            muted={true}
                            loop={true}
                            />
                    </div> 
                : 
                    <div className={`relative w-full h-full object-contain content-center`}>
                        <LazyFSImage
                            imgLink={mediaLink}
                            imgAlt={mediaText}
                            />
                    </div>
            }
            <p className="absolute bottom-0 left-[50%] -translate-x-[50%] w-full h-fit text-[#FFFFFFAA] text-center pb-[3em] drop-shadow-md">click anywhere to close</p>
        </div>
    )
}
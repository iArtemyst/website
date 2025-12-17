'use client'

import { useState, useEffect } from "react";
import LoadAsset from "./load-asset";
import Loading from "./loading-text";
import { CheckIfMobileBrowser } from "./mobile-check";
import { NoSelect } from "./styles";

export function LazyVideo({src, autoplay, controls, muted, loop, className} : { 
    src:string, 
    autoplay:boolean, 
    controls:boolean, 
    muted:boolean, 
    loop:boolean,
    className: string,})
{
    return <LazyVideoCore src={src} autoplay={autoplay} controls={controls} muted={muted} loop={loop} className={className} 
                            onEnter={() => {}} onLeave={() => {}} onDown={() => {}} onUp={() => {}} onClick={() => {}}/>
}

export function LazyHoverVideo({src, autoplay, controls, muted, loop, style=""}: {src: string, autoplay: boolean, controls: boolean, muted: boolean, loop: boolean, style?:string}) {
    const handleMouseEnterVideo = (e: React.MouseEvent<HTMLVideoElement>) => {
        if (e.target instanceof HTMLVideoElement) {
            e.target.play();
        }
    }
    
    const handleMouseLeaveVideo = (e: React.MouseEvent<HTMLVideoElement>) => {
        if (e.target instanceof HTMLVideoElement) {
            e.target.pause();
        }
    }

    let isMobile = CheckIfMobileBrowser();
    let handleMouseDown = (e: React.TouchEvent<HTMLVideoElement>) => { }
    let handleMouseUp = (e: React.TouchEvent<HTMLVideoElement>) => { }
    let handleClick = (e: React.MouseEvent<HTMLVideoElement>) => { }

    if (isMobile)
    {
        let isDown = false;
        let startedVideo = false;

        handleMouseDown = (e: React.TouchEvent<HTMLVideoElement>) => {
            isDown = true;

            // "debounce" the tap down
            setTimeout(() => {
                if (isDown)
                {
                    startedVideo = true;
                    if (e.target instanceof HTMLVideoElement) {
                        e.target.play();
                    }
                }
            }, 250);
        }

        handleMouseUp = (e: React.TouchEvent<HTMLVideoElement>) => {
            if (isDown)
            {
                if (e.target instanceof HTMLVideoElement) {
                    e.target.pause();
                }
            }
            
            isDown = false;
        }

        handleClick = (e: React.MouseEvent<HTMLVideoElement>) => {
            if (startedVideo)
            {
                e.stopPropagation();
                e.preventDefault();
            }

            startedVideo = false;
        }
    }
    
    return <LazyVideoCore src={src} autoplay={autoplay} controls={controls} muted={muted} loop={loop} className={style} 
                            onEnter={handleMouseEnterVideo} onLeave={handleMouseLeaveVideo} onDown={handleMouseDown} onUp={handleMouseUp} onClick={handleClick} />
}

export function LazyNonHoverVideo({src, autoplay, controls, muted, loop}:{src:string, autoplay:boolean, controls:boolean, muted:boolean, loop:boolean}) {
    return (
        <LazyVideoCore src={src} autoplay={autoplay} controls={controls} muted={muted} loop={loop} className={`w-full h-full object-contain`} 
                        onEnter={() => {}} onLeave={() => {}} onDown={() => {}} onUp={() => {}} onClick={() => {}}/>
    )
}

function LazyVideoCore({src, autoplay, controls, muted, loop, className, onEnter, onLeave, onDown, onUp, onClick} : { 
    src:string, 
    autoplay:boolean, 
    controls:boolean, 
    muted:boolean, 
    loop:boolean,
    className: string,
    onEnter: (e: React.MouseEvent<HTMLVideoElement>) => void | null,
    onLeave: (e: React.MouseEvent<HTMLVideoElement>) => void | null,
    onDown: (e: React.TouchEvent<HTMLVideoElement>) => void | null,
    onUp: (e: React.TouchEvent<HTMLVideoElement>) => void | null,
    onClick: (e: React.MouseEvent<HTMLVideoElement>) => void | null
})
{
    const [loadedSrc, setLoadedSrc] = useState('');

    useEffect(() => {
        async function loadVideo() {
            const source = await LoadAsset(src);
            setLoadedSrc(source);
        }

        loadVideo();
    }, [src]);

    let isMobile = CheckIfMobileBrowser();

    return loadedSrc === '' ?
        <Loading/> :
        (
            isMobile ? 
                <video onClick={onClick} onTouchStart={onDown} onTouchEnd={onUp} style={NoSelect}
                        preload="auto" width="100%" height="100%" src={loadedSrc+`#t=0.001`} 
                        autoPlay={autoplay} playsInline={true} controls={controls} muted={muted} loop={loop} className={className}/>
            :
                <video onMouseEnter={onEnter} onMouseLeave={onLeave}
                        preload="auto" width="100%" height="100%" src={loadedSrc+`#t=0.001`} 
                        autoPlay={autoplay} playsInline={true} controls={controls} muted={muted} loop={loop} className={className}/>
        );
}

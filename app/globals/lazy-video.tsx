import { useState, useEffect } from "react";
import LoadAsset from "./load-asset";
import Loading from "./loading-text";

export function LazyVideo({src, autoplay, controls, muted, loop, className} : { 
    src:string, 
    autoplay:boolean, 
    controls:boolean, 
    muted:boolean, 
    loop:boolean,
    className: string,})
{
    return <LazyVideoCore src={src} autoplay={autoplay} controls={controls} muted={muted} loop={loop} className={className} onEnter={() => {}} onLeave={() => {}}/>
}

export function LazyHoverVideo({src, autoplay, controls, muted, loop}: {src: string, autoplay: boolean, controls: boolean, muted: boolean, loop: boolean}) {
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
    
    return <LazyVideoCore src={src} autoplay={autoplay} controls={controls} muted={muted} loop={loop} className={""} onEnter={handleMouseEnterVideo} onLeave={handleMouseLeaveVideo} />
}


export function LazyNonHoverVideo({src, autoplay, controls, muted, loop}:{src:string, autoplay:boolean, controls:boolean, muted:boolean, loop:boolean}) {
    return (
        <LazyVideoCore src={src} autoplay={autoplay} controls={controls} muted={muted} loop={loop} className={`w-full h-full object-contain`} onEnter={() => {}} onLeave={() => {}}/>
    )
}


function LazyVideoCore({src, autoplay, controls, muted, loop, className, onEnter, onLeave} : { 
    src:string, 
    autoplay:boolean, 
    controls:boolean, 
    muted:boolean, 
    loop:boolean,
    className: string,
    onEnter: (e: React.MouseEvent<HTMLVideoElement>) => void | null,
    onLeave: (e: React.MouseEvent<HTMLVideoElement>) => void | null,
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

    return loadedSrc === '' ?
        <Loading/> :
        <video onMouseEnter={onEnter} onMouseLeave={onLeave} preload="auto" width="100%" height="100%" src={loadedSrc+`#t=0.001`} autoPlay={autoplay} playsInline={true} controls={controls} muted={muted} loop={loop} className={className}/>
}

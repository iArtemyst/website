'use client'

import "@/app/globals/globals.css";
import { useState, useEffect } from "react";
import LoadAsset from "./load-asset";
import Loading from "./loading-text";

export function LazyImage({imgLink, imgAlt="Default Image"}: {imgLink: string, imgAlt: string}) {
    return <LazyImageCore imgLink={imgLink} imgAlt={imgAlt} fullscreen={false} />
}


export function LazyFSImage({imgLink, imgAlt="Default Image"}: {imgLink: string, imgAlt: string}) {
    return <LazyImageCore imgLink={imgLink} imgAlt={imgAlt} fullscreen={true} />
}


function LazyImageCore({imgLink, imgAlt = "Default Image", fullscreen}: {imgLink: string, imgAlt: string, fullscreen: boolean}) {
    const [loadedSrc, setLoadedSrc] = useState('');
    
    useEffect(() => {
        async function loadImage() { 
            const source = await LoadAsset(imgLink);
            setLoadedSrc(source);
        }

        loadImage();
    }, [imgLink]);

    return (
        loadedSrc === '' ?
        <Loading/> :
        <img src={loadedSrc}
            alt={imgAlt}
            className={`w-full h-full ${fullscreen ? "object-contain" : "object-center"}`}
        />
    )
}


export function LazyImage2({imgLink, imgAlt="Default Image"}: {imgLink: string, imgAlt: string}) {
    return <LazyImageCore2 imgLink={imgLink} imgAlt={imgAlt} fullscreen={false} />
}


function LazyImageCore2({imgLink, imgAlt = "Default Image", fullscreen}: {imgLink: string, imgAlt: string, fullscreen: boolean}) {
    const [loadedSrc, setLoadedSrc] = useState('');
    
    useEffect(() => {
        async function loadImage() { 
            const source = await LoadAsset(imgLink);
            setLoadedSrc(source);
        }

        loadImage();
    }, [imgLink]);

    return (
        loadedSrc === '' ?
        <Loading/> :
        <img src={loadedSrc}
            alt={imgAlt}
            className={`w-fit max-h-[960px] place-self-center ${fullscreen ? "object-cover" : "object-scale-down"}`}
        />
    )
}


export function LazyImageSizer({imgLink, imgAlt="Default Image", imgSize="w-fit max-h-[960px]"}: {imgLink: string, imgAlt: string, imgSize:string}) {
    return <LazyImageCoreSizer imgLink={imgLink} imgAlt={imgAlt} fullscreen={false} imgSize={imgSize}/>
}


function LazyImageCoreSizer({imgLink, imgAlt = "Default Image", imgSize="w-fit max-h-[960px]", fullscreen}: {imgLink: string, imgAlt: string, imgSize:string, fullscreen: boolean}) {
    const [loadedSrc, setLoadedSrc] = useState('');
    
    useEffect(() => {
        async function loadImage() { 
            const source = await LoadAsset(imgLink);
            setLoadedSrc(source);
        }

        loadImage();
    }, [imgLink]);

    return (
        loadedSrc === '' ?
        <Loading/> :
        <img src={loadedSrc}
            alt={imgAlt}
            className={`${imgSize} place-self-center object-cover`}
        />
    )
}
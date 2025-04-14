'use client'

import "@/app/globals/globals.css";
import { useState, useEffect } from "react";
import LoadAsset from "./load-asset";
import Loading from "./loading-text";

export function LazyImage({imgLink, imgAlt="Default Image"}: {imgLink: string, imgAlt: string})
{
    return <LazyImageCore imgLink={imgLink} imgAlt={imgAlt} fullscreen={false} />
}

export function LazyFSImage({imgLink, imgAlt="Default Image"}: {imgLink: string, imgAlt: string})
{
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
            style={{objectFit: fullscreen ? "contain" : "cover"}}
            className={`w-full h-full ${fullscreen ? "object-contain" : ""}`}
        />
    )
}
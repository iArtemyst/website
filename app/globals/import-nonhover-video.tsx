'use client'

import "@/app/globals/globals.css";
import React from "react";

export default function ImportNonHoverVideo({src, autoplay, controls, muted, loop}:{src:string, autoplay:boolean, controls:boolean, muted:boolean, loop:boolean}) {
    return (
        <div className={`w-full h-full relative content-center`}>
                <video 
                    src={src} 
                    autoPlay={autoplay}
                    muted={muted}
                    controls={controls}
                    loop={loop}
                    className={`w-full h-full object-contain`}
                    />
        </div>
    )
}
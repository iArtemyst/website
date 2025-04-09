'use client'

import "@/app/globals/globals.css";
import React from "react";

export default function ImportHoverVideo({src, autoplay, controls, muted, loop}:{src:string, autoplay:boolean, controls:boolean, muted:boolean, loop:boolean}) {
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
    
    return (
        <video onMouseEnter={handleMouseEnterVideo} onMouseLeave={handleMouseLeaveVideo} src={src} width="100%" height="100%" autoPlay={autoplay} controls={controls} muted={muted} loop={loop}/>
    )
}
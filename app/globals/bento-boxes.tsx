'use client'

import React, { useState, MouseEvent, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import "@/app/globals/globals.css"

import * as fonts from "./fonts";

const handleMouseEnter = (e:any) => {
    const vid = e.target
    vid.muted = true
    vid.play()
}

const handleMouseLeave = (e:any) => {
    const vid = e.target
    vid.muted = false
    vid.pause()
}

export function ImportImage({imgLink, imgAlt = "Default Image",}: {imgLink:StaticImageData, imgAlt:string}) {
    return (
        <Image
            src={imgLink}
            alt={imgAlt}
            className="w-full h-full object-cover"
            />
    )
}

export function ImportVideo({vidLink}:{vidLink:string}) {
    return (
        <video src={vidLink} width="100%" height="100%" muted loop className=""/>
    )
}

export function HeaderText({text="", textSize=""}:{text:string, textSize:string}) {
    return (
        <div className={`relative h-auto w-full flex justify-center align-middle`}>
            <p className={`${fonts.dotoBlack.className} ${textSize} text-balance text-center content-center`}>{text}</p>
        </div>
    )
}

export function ParagraphText({text="", textSize=""}:{text:string, textSize:string}) {
    return (
        <div className={`relative h-auto w-auto flex justify-center my-[8px]`}>
            <p className={`${fonts.dotoBold.className} ${textSize} text-balance text-center`}>{text}</p>
        </div>
    )
}
// ----------------------------------------------

export function Cell1ColText({children}: {children:any}) {
    return (
        <div className="relative w-full h-full rounded-3xl col-span-1 row-span-auto content-center
        shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30] transition-all duration-200">
            {children}
        </div> 
    )
}

export function Cell2RowText({children}: {children:any}) {
    return (
        <div className="w-full h-full justify-self-center rounded-3xl row-span-2 col-span-1 content-center py-[24px]
        shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30]
        transition-all duration-200">
            {children}
        </div> 
    )
}

export function Cell2ColText({children}: {children:any}) {
    return (
        <div className="w-full h-full justify-self-center rounded-3xl col-span-2 row-span-1 content-center
        shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30]
        transition-all duration-200">
            {children}
        </div> 
    )
}

export function CellAutoText({children}: {children:any}) {
    return (
        <div className="w-full h-full rounded-3xl content-center p-[8px]
        shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30] transition-all duration-200">
            {children}
        </div> 
    )
}

export function Cell2SquareText({children}: {children:any}) {
    return (
        <div className="w-full h-full justify-self-center rounded-3xl col-span-2 row-span-2 bg-blue-200
        shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30]
        transition-all duration-200">
            {children}
        </div> 
    )
}

export function Cell2SquareImage({cellImgLink, cellImgAlt="",}: {cellImgLink:StaticImageData, cellImgAlt:string}) {
    return (
        <div className="w-full h-auto justify-self-center rounded-3xl col-span-2 row-span-2 overflow-hidden
        shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30]
        transition-all duration-200">
            <ImportImage imgLink={cellImgLink} imgAlt={cellImgAlt}/>
        </div> 
    )
}

export function Cell2SquareVideo({cellVidLink}: {cellVidLink:string}) {
    return (
        <div className="w-full h-auto justify-self-center rounded-3xl col-span-2 row-span-2 overflow-hidden
        shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30]
        transition-all duration-200"
        onMouseMove={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <ImportVideo vidLink={cellVidLink}/>
        </div> 
    )
}

export function Cell2SquareVideoChildren({children}: {children:any}) {
    return (
        <div className="w-full h-auto justify-self-center rounded-3xl row-span-2 col-span-2 overflow-hidden
        shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30]
        transition-all duration-200"        
        onMouseMove={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            {children}
        </div>
    )
}

export function Cell1ColImage({cellImgLink, cellImgAlt="",}: {cellImgLink:StaticImageData, cellImgAlt:string}) {
    return (
        <div className="group relative w-fit h-fit justify-self-center rounded-3xl row-span-1 col-span-1 overflow-hidden">
                <ImportImage imgLink={cellImgLink} imgAlt={cellImgAlt}/>
                <p className={`absolute left-[4%] bottom-[2%] text-textSml opacity-0 group-hover:opacity-100 group-hover:translate-y-[0px] -translate-y-[12px] transition-all duration-400 drop-shadow-[0px_0px_8px_#000000] ${fonts.dotoBlack.className}`}>{cellImgAlt}</p>
        </div>
    )
}

export function Cell1ColVideo({cellVidLink}: {cellVidLink:string}) {
    return (
        <div className="w-full h-fit justify-self-center rounded-3xl row-span-1 col-span-1 overflow-hidden self-center border-8 border-green-300
        shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30]
        transition-all duration-200"        
        onMouseMove={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <ImportVideo vidLink={cellVidLink}/>
        </div>
    )
}

export function Cell1ColChildrenVideo({children}: {children:any}) {
    return (
        <div className="w-full h-fit justify-self-center rounded-3xl row-span-auto col-span-1 overflow-hidden self-center
        shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30]
        transition-all duration-200"        
        onMouseMove={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            {children}
        </div>
    )
}

export function Cell2ColImage({cellImgLink, cellImgAlt="",}: {cellImgLink:StaticImageData, cellImgAlt:string}) {
    return (
        <div className="w-full h-full justify-self-center rounded-3xl row-span-auto col-span-2 overflow-hidden">
            <ImportImage imgLink={cellImgLink} imgAlt={cellImgAlt}/>
            <p className={`absolute left-[16px] bottom-[8px] text-textSml opacity-0 group-hover:opacity-100 group-hover:translate-y-[0px] -translate-y-[12px] transition-all duration-400 drop-shadow-[0px_0px_8px_#000000] ${fonts.dotoBlack.className}`}>{cellImgAlt}</p>
        </div>
    )
}

export function Cell2ColVideo({cellVidLink}: {cellVidLink:string}) {
    return (
        <div className="w-full h-auto justify-self-center rounded-3xl row-span-1 col-span-2 overflow-hidden
        shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30]
        transition-all duration-200"        
        onMouseMove={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <ImportVideo vidLink={cellVidLink}/>
        </div>
    )
}

export function Cell2ColChildrenVideo({children}: {children:any}) {
    return (
        <div className="w-full h-auto justify-self-center rounded-3xl row-span-1 col-span-2 overflow-hidden
        shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30]
        transition-all duration-200"        
        onMouseMove={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            {children}
        </div>
    )
}

export function Cell2RowImage({cellImgLink, cellImgAlt="",}: {cellImgLink:StaticImageData, cellImgAlt:string}) {
    return (
        <div className="w-full h-full justify-self-center rounded-3xl col-span-auto row-span-2 overflow-hidden">
            <ImportImage imgLink={cellImgLink} imgAlt={cellImgAlt}/>
            <p className={`absolute left-[16px] bottom-[8px] text-textSml opacity-0 group-hover:opacity-100 group-hover:translate-y-[0px] -translate-y-[12px] transition-all duration-400 drop-shadow-[0px_0px_8px_#000000] ${fonts.dotoBlack.className}`}>{cellImgAlt}</p>
        </div>
    )
}

export function Cell2RowVideo({cellVidLink}: {cellVidLink:string}) {
    return (
        <div className="w-full h-full justify-self-center rounded-3xl col-span-auto row-span-2 overflow-hidden
        shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30]
        transition-all duration-200"        
        onMouseMove={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <ImportVideo vidLink={cellVidLink}/>
        </div>
    )
}

// ----------------------------------------------

// export function BentoBoxStyleA({boxTextA = "", boxTextB = "", boxTextC = "", imgLinkA, imgAltA="", imgLinkB, imgAltB="", imgLinkC, imgAltC="",}: {boxTextA:String, boxTextB:String, boxTextC:String, imgLinkA:StaticImageData, imgAltA:string, imgLinkB:StaticImageData, imgAltB:string, imgLinkC:StaticImageData, imgAltC:string,}) {
//     return (
//         <div className="w-[80%] h-[70%] justify-self-center rounded-3xl my-12 grid grid-cols-3 gap-[12px] p-3 bg-bgColor
//                         hover:cursor-pointer shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20]">
//             <Cell1ColText>
//                 <HeaderText headerText={boxTextA} />
//             </Cell1ColText>

//             <Cell2RowMedia cellImgLink={imgLinkC} cellImgAlt={imgAltC}/>

//             <Cell1ColText>
//                 <KeypointText keypointText={boxTextC} />
//             </Cell1ColText>

//             <Cell2RowMedia cellImgLink={imgLinkB} cellImgAlt={imgAltB}/>

//             <Cell2RowText>
//                 <ParagraphText paraText={boxTextB} />
//             </Cell2RowText>

//             <Cell1ColMedia cellImgLink={imgLinkA} cellImgAlt={imgAltA}/>
//         </div>
//     )
// }

// export function BentoBoxStyleB({boxTextA = "", boxTextB = "", boxTextC = "", imgLinkA, imgAltA="", imgLinkB, imgAltB="", imgLinkC, imgAltC="",}: {boxTextA:String, boxTextB:String, boxTextC:String, imgLinkA:StaticImageData, imgAltA:string, imgLinkB:StaticImageData, imgAltB:string, imgLinkC:StaticImageData, imgAltC:string,}) {
//     return (
//         <div className="w-[80%] h-[70%] justify-self-center rounded-3xl my-12 grid grid-cols-3 gap-[12px] p-3 bg-bgColor
//                         hover:cursor-pointer shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20]">
//             <Cell1ColMedia cellImgLink={imgLinkC} cellImgAlt={imgAltC}/>

//             <Cell1ColText>
//                 <HeaderText headerText={boxTextA} />
//             </Cell1ColText>

//             <Cell2RowMedia cellImgLink={imgLinkB} cellImgAlt={imgAltB}/>

//             <Cell2RowText>
//                 <ParagraphText paraText={boxTextB} />
//             </Cell2RowText>

//             <Cell2RowMedia cellImgLink={imgLinkA} cellImgAlt={imgAltA}/>

//             <Cell1ColText>
//                 <KeypointText keypointText={boxTextC} />
//             </Cell1ColText>
            
//         </div>
//     )
// }

// export function BentoBoxStyleC({boxTextA = "", boxTextB = "", boxTextC = "", imgLinkA, imgAltA="", imgLinkB, imgAltB="", imgLinkC, imgAltC="",}: {boxTextA:String, boxTextB:String, boxTextC:String, imgLinkA:StaticImageData, imgAltA:string, imgLinkB:StaticImageData, imgAltB:string, imgLinkC:StaticImageData, imgAltC:string,}) {
//     return (
//         <div className="w-[80%] h-[70%] justify-self-center rounded-3xl my-12 grid grid-cols-3 gap-[12px] p-3 bg-bgColor
//                         hover:cursor-pointer shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20]">
//             <Cell1ColText>
//                 <HeaderText headerText={boxTextA} />
//             </Cell1ColText>

//             <Cell2SquareImage cellImgLink={imgLinkA} cellImgAlt={imgAltA}/>

//             <Cell2RowText>
//                 <ParagraphText paraText={boxTextB} />
//             </Cell2RowText>

//             <Cell1ColMedia cellImgLink={imgLinkB} cellImgAlt={imgAltB}/>

//             <Cell2RowMedia cellImgLink={imgLinkC} cellImgAlt={imgAltC}/>

//             <Cell2ColText>
//                 <KeypointText keypointText={boxTextC} />
//             </Cell2ColText>
//         </div>
//     )
// }

// export function BentoBoxStyleD({boxTextA = "", boxTextB = "", boxTextC = "", vidLinkA = ""}: {boxTextA:String, boxTextB:String, boxTextC:String, vidLinkA:string}) {
//     return (
//         <div className="w-[80%] h-[70%] justify-self-center rounded-3xl my-12 grid grid-cols-3 gap-[12px] p-3 bg-bgColor
//                         hover:cursor-pointer shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20]">
//             <Cell1ColText>
//                 <HeaderText headerText={boxTextA} />
//             </Cell1ColText>

//             <Cell1ColText>
//                 <KeypointText keypointText={boxTextC} />
//             </Cell1ColText>

//             <Cell2SquareVideo cellVidLink={vidLinkA} />
//         </div>
//     )
// }
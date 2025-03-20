'use client'

import React from "react";
import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import { CardHoverFX } from "@/app/globals/card-hover-fx";


// function BentoBoxA() {
//     return (
//         <div className="relative z-0 grid grid-rows-2 w-[90%] h-fit justify-self-center rounded-3xl gap-[12px] text-white hover:cursor-pointer">

//             <div className="relative h-fit grid grid-cols-2 gap-[8px]">
//                 <bentos.Cell1ColVideo cellVidLink={vidPubDart01} />
//                 <bentos.Cell1ColVideo cellVidLink={vidPubDart03} />
//                 <bentos.Cell1ColVideo cellVidLink={vidPubDart04} />
//                 <bentos.Cell1ColVideo cellVidLink={vidPubDart05} />
//             </div>

//                 <bentos.CellAutoText>
//                     <bentos.KeypointText keypointText="TEST TEXT"/>
//                 </bentos.CellAutoText>
//         </div>
//     )
// }

// function BentoBoxB() {
//     return (
//         <div className="relative z-0 grid grid-cols-3 w-[90%] h-fit justify-self-center rounded-3xl gap-[12px] text-white hover:cursor-pointer">
//                 <bentos.Cell1ColImage cellImgLink={imgPubDart04} cellImgAlt="" />

//                 <bentos.CellAutoText>
//                     <bentos.KeypointText keypointText="TEST TEXT"/>
//                 </bentos.CellAutoText>

//                 <bentos.Cell1ColImage cellImgLink={imgPubDart05} cellImgAlt="" />
//         </div>
//     )
// }


// function ImportVideo({vidLink}:{vidLink:string}) {
//     return (
//         <video src={vidLink} width="100%" height="auto" controls autoPlay muted loop className="self-center"/>
//     )
// }

// function MainVideoBox({videoLink}:{videoLink:string}) {
//     return (
//         <div className="group">
//             <CardHoverFX bufferZone={0} rotateAmount={24}>
//                 <div className="relative w-[90%] h-[auto] justify-self-center rounded-[24px] overflow-hidden shadow-[0px_0px_8px_#FFFFFF90] group-hover:shadow-[0px_0px_16px_#FFFFFF45] z-0 group-hover:z-10">
//                     <ImportVideo vidLink={videoLink} />
//                 </div>
//             </CardHoverFX>
//         </div>
//     )
// }


export default function ProjectCodePortfolio() {
    return (
        <div className="absolute left-0 right-0 top-0 bottom-0 overflow-scroll no-scrollbar bg-bgColor">
            <div className="grid grid-rows-3 gap-[24px] w-[90%] justify-self-center my-[48px] bg-blue-200">
                {/* <MainVideoBox videoLink={vidPubDart02}/>
                <BentoBoxA />
                <BentoBoxB /> */}
            </div>
        </div>
    )
}

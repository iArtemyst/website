'use client'

import React from "react";
import "@/app/globals/globals.css";
import Link from "next/link";

import * as bentos from "@/app/globals/bento-boxes";
import { CardHoverFX } from "@/app/globals/card-hover-fx";
import * as fonts from "@/app/globals/fonts";


import imgEES01 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_00.png";
import imgEES02 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_01.png";
import imgEES03 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_02.png";
import imgEES04 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_03.png";
import imgEES05 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_04.png";
import imgEES06 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_05.png";
import imgEES07 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_06.png";
import imgEES08 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_07.png";
import imgEES09 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_08.png";
import imgEES10 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_09.png";
import imgEES11 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_10.png";
import imgEES12 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_11.png";
import imgEES13 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_12.png";
import imgEES14 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_13.png";
import imgEES15 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_14.png";
import imgEES16 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_15.png";
import imgEES17 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_16.png";
import imgEES18 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_17.png";
import imgEES19 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_18.png";
import imgEES20 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_19.png";

import vidEESA01 from "@/app/assets/videos/_3d/_medAnim/EESAnim_ClipA_001.mp4";
import vidEESA02 from "@/app/assets/videos/_3d/_medAnim/EESAnim_ClipA_002.mp4";
import vidEESA03 from "@/app/assets/videos/_3d/_medAnim/EESAnim_ClipA_003.mp4";
import vidEESA04 from "@/app/assets/videos/_3d/_medAnim/EESAnim_ClipA_004.mp4";

import vidEESB01 from "@/app/assets/videos/_3d/_medAnim/EESAnim_ClipB_001.mp4";
import vidEESB02 from "@/app/assets/videos/_3d/_medAnim/EESAnim_ClipB_002.mp4";
import vidEESB03 from "@/app/assets/videos/_3d/_medAnim/EESAnim_ClipB_003.mp4";
import vidEESB04 from "@/app/assets/videos/_3d/_medAnim/EESAnim_ClipB_004.mp4";
import vidEESB05 from "@/app/assets/videos/_3d/_medAnim/EESAnim_ClipB_005.mp4";
import vidEESB06 from "@/app/assets/videos/_3d/_medAnim/EESAnim_ClipB_006.mp4";
import vidEESB07 from "@/app/assets/videos/_3d/_medAnim/EESAnim_ClipB_007.mp4";

import vidEESC01 from "@/app/assets/videos/_3d/_medAnim/EESAnim_ClipC_001.mp4";
import vidEESC02 from "@/app/assets/videos/_3d/_medAnim/EESAnim_ClipC_002.mp4";
import vidEESC03 from "@/app/assets/videos/_3d/_medAnim/EESAnim_ClipC_003.mp4";
import vidEESC04 from "@/app/assets/videos/_3d/_medAnim/EESAnim_ClipC_004.mp4";

import vidEESD01 from "@/app/assets/videos/_3d/_medAnim/EESAnim_ClipD_001.mp4";
import vidEESD02 from "@/app/assets/videos/_3d/_medAnim/EESAnim_ClipD_002.mp4";
import vidEESD03 from "@/app/assets/videos/_3d/_medAnim/EESAnim_ClipD_003.mp4";
import vidEESD04 from "@/app/assets/videos/_3d/_medAnim/EESAnim_ClipD_004.mp4";
import vidEESD05 from "@/app/assets/videos/_3d/_medAnim/EESAnim_ClipD_005.mp4";
import vidEESD06 from "@/app/assets/videos/_3d/_medAnim/EESAnim_ClipD_006.mp4";

import imgFlowserve01 from "@/app/assets/images/_3d/_prodAnim/Flowserve_Stills_00.png";
import imgFlowserve02 from "@/app/assets/images/_3d/_prodAnim/Flowserve_Stills_01.png";
import imgFlowserve03 from "@/app/assets/images/_3d/_prodAnim/Flowserve_Stills_02.png";
import imgFlowserve04 from "@/app/assets/images/_3d/_prodAnim/Flowserve_Stills_05.png";
import imgFlowserve05 from "@/app/assets/images/_3d/_prodAnim/Flowserve_Stills_04.png";
import imgFlowserve06 from "@/app/assets/images/_3d/_prodAnim/Flowserve_Stills_06.png";
import imgFlowserve07 from "@/app/assets/images/_3d/_prodAnim/Flowserve_Stills_07.png";
import imgFlowserve08 from "@/app/assets/images/_3d/_prodAnim/Flowserve_Stills_08.png";
import imgFlowserve09 from "@/app/assets/images/_3d/_prodAnim/Flowserve_Stills_09.png";

import imgMamm01 from "@/app/assets/images/_3d/_medAnim/Mammotome_Stills_0.png";
import imgMamm02 from "@/app/assets/images/_3d/_medAnim/Mammotome_Stills_1.png";
import imgMamm03 from "@/app/assets/images/_3d/_medAnim/Mammotome_Stills_2.png";
import imgMamm04 from "@/app/assets/images/_3d/_medAnim/Mammotome_Stills_3.png";
import imgMamm05 from "@/app/assets/images/_3d/_medAnim/Mammotome_Stills_4.png";
import imgMamm06 from "@/app/assets/images/_3d/_medAnim/Mammotome_Stills_5.png";
import imgMamm07 from "@/app/assets/images/_3d/_medAnim/Mammotome_Stills_6.png";

import vidMamm01 from "@/app/assets/videos/_3d/_medAnim/Mammotome_Clip_001.mp4";
import vidMamm02 from "@/app/assets/videos/_3d/_medAnim/Mammotome_Clip_002.mp4";
import vidMamm03 from "@/app/assets/videos/_3d/_medAnim/Mammotome_Clip_003.mp4";
import vidMamm04 from "@/app/assets/videos/_3d/_medAnim/Mammotome_Clip_004.mp4";



import imgJnJ01 from "@/app/assets/images/_3d/_prodAnim/JnJ_Stills_2.png";
import imgJnJ02 from "@/app/assets/images/_3d/_prodAnim/JnJ_Stills_4.png";
import imgJnJ03 from "@/app/assets/images/_3d/_prodAnim/JnJ_Stills_1.png";

import imgMakino01 from "@/app/assets/images/_3d/_prodAnim/Makino_Stills_1.png";
import imgMakino02 from "@/app/assets/images/_3d/_prodAnim/Makino_Stills_2.png";
import imgMakino03 from "@/app/assets/images/_3d/_prodAnim/Makino_Stills_3.png";
import imgMakino04 from "@/app/assets/images/_3d/_prodAnim/Makino_Stills_4.png";
import imgMakino05 from "@/app/assets/images/_3d/_prodAnim/Makino_Stills_5.png";

import vidFlowserve01 from "@/app/assets/videos/_3d/_prodAnim/Flowserve_ClipA_001.mp4";
import vidFlowserve02 from "@/app/assets/videos/_3d/_prodAnim/Flowserve_ClipA_002.mp4";
import vidFlowserve03 from "@/app/assets/videos/_3d/_prodAnim/Flowserve_ClipA_003.mp4";
import vidFlowserve04 from "@/app/assets/videos/_3d/_prodAnim/Flowserve_ClipA_004.mp4";
import vidFlowserve05 from "@/app/assets/videos/_3d/_prodAnim/Flowserve_ClipA_005.mp4";
import vidFlowserve06 from "@/app/assets/videos/_3d/_prodAnim/Flowserve_ClipA_006.mp4";
import vidFlowserve07 from "@/app/assets/videos/_3d/_prodAnim/Flowserve_ClipB_001.mp4";
import vidFlowserve08 from "@/app/assets/videos/_3d/_prodAnim/Flowserve_ClipB_002.mp4";
import vidFlowserve09 from "@/app/assets/videos/_3d/_prodAnim/Flowserve_ClipB_003.mp4";
import vidFlowserve10 from "@/app/assets/videos/_3d/_prodAnim/Flowserve_ClipB_004.mp4";
import vidFlowserve11 from "@/app/assets/videos/_3d/_prodAnim/Flowserve_ClipB_005.mp4";
import vidFlowserve12 from "@/app/assets/videos/_3d/_prodAnim/Flowserve_ClipB_006.mp4";

import vidJnJ01 from "@/app/assets/videos/_3d/_prodAnim/JnJ_ClipA_001.mp4";
import vidJnJ02 from "@/app/assets/videos/_3d/_prodAnim/JnJ_ClipA_002.mp4";
import vidJnJ03 from "@/app/assets/videos/_3d/_prodAnim/JnJ_ClipB_001.mp4";
import vidJnJ04 from "@/app/assets/videos/_3d/_prodAnim/JnJ_ClipB_002.mp4";

import vidMakino01 from "@/app/assets/videos/_3d/_prodAnim/Makino_ClipA_001.mp4";
import vidMakino02 from "@/app/assets/videos/_3d/_prodAnim/Makino_ClipA_002.mp4";
import vidMakino03 from "@/app/assets/videos/_3d/_prodAnim/Makino_ClipB_001.mp4";
import vidMakino04 from "@/app/assets/videos/_3d/_prodAnim/Makino_ClipC_001.mp4";

const bentoGap = "gap-[12px]";
const titleTextSize= "text-[24px]";
const paraTextSize = "text-[12px]";

function BentoBox() {
    return (
        <div className={`${bentoGap} relative z-0 grid grid-cols-2 w-[80%] h-auto justify-self-center rounded-3xl place-content-center text-white hover:cursor-pointer`}>
                <div className="w-full h-full rounded-3xl content-center p-[8px] col-span-full row-span-full shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30] transition-all duration-200">
                    <bentos.HeaderText text="MEDICAL ANIMATION" textSize={titleTextSize}/>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                    <bentos.Cell1ColImage cellImgLink={imgEES01} cellImgAlt="" />
                    <bentos.Cell1ColImage cellImgLink={imgEES02} cellImgAlt="" />
                    <bentos.Cell1ColImage cellImgLink={imgEES03} cellImgAlt="" />
                    <bentos.Cell1ColImage cellImgLink={imgEES04} cellImgAlt="" />
                </div>

                <bentos.Cell1ColVideo cellVidLink={vidEESA01} />

                <bentos.CellAutoText>
                    <bentos.ParagraphText text="Product Animation, Texturing, Rendering, Video Compositing, Motion Graphics" textSize={paraTextSize}/>
                </bentos.CellAutoText>

                <bentos.Cell1ColVideo cellVidLink={vidEESA04} />

                <div className={`${bentoGap} grid grid-cols-2 `}>
                    <bentos.Cell1ColImage cellImgLink={imgEES05} cellImgAlt="" />
                    <bentos.Cell1ColImage cellImgLink={imgEES06} cellImgAlt="" />
                    <bentos.Cell1ColImage cellImgLink={imgEES07} cellImgAlt="" />
                    <bentos.Cell1ColImage cellImgLink={imgEES08} cellImgAlt="" />
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <bentos.Cell1ColImage cellImgLink={imgEES10} cellImgAlt="" />
                    <bentos.Cell1ColImage cellImgLink={imgEES11} cellImgAlt="" />
                    <bentos.Cell1ColImage cellImgLink={imgEES12} cellImgAlt="" />
                    <bentos.Cell1ColImage cellImgLink={imgEES13} cellImgAlt="" />
                </div>

                <bentos.Cell1ColVideo cellVidLink={vidEESB01} />

                <bentos.CellAutoText>
                    <bentos.ParagraphText text="Product Animation, Texturing, Rendering, Video Compositing, Motion Graphics" textSize={paraTextSize}/>
                </bentos.CellAutoText>

                <bentos.Cell1ColVideo cellVidLink={vidEESB04} />

                <div className="grid grid-cols-2 gap-2">
                    <bentos.Cell1ColImage cellImgLink={imgEES14} cellImgAlt="" />
                    <bentos.Cell1ColImage cellImgLink={imgEES15} cellImgAlt="" />
                    <bentos.Cell1ColImage cellImgLink={imgEES16} cellImgAlt="" />
                    <bentos.Cell1ColImage cellImgLink={imgEES17} cellImgAlt="" />
                </div>

                <div className={`${bentoGap} grid grid-cols-2 grid-rows-2`}>
                    <bentos.Cell1ColImage cellImgLink={imgMamm01} cellImgAlt="" />
                    <bentos.Cell1ColVideo cellVidLink={vidMamm04} />
                    <bentos.Cell2ColText>
                        <bentos.HeaderText text="EVEN MORE MEDICAL" textSize={titleTextSize}/>
                    </bentos.Cell2ColText>                  
                </div>

                <bentos.Cell1ColVideo cellVidLink={vidMamm02} />

                <bentos.Cell1ColVideo cellVidLink={vidMamm01} />

                <div className={`${bentoGap} grid grid-cols-2`}>
                        <bentos.Cell1ColImage cellImgLink={imgMamm02} cellImgAlt="" />
                        <bentos.Cell1ColImage cellImgLink={imgMamm03} cellImgAlt="" />
                        <bentos.Cell1ColImage cellImgLink={imgMamm02} cellImgAlt="" />
                        <bentos.Cell1ColImage cellImgLink={imgMamm03} cellImgAlt="" />
                </div>
        </div>
    )
}

export default function ProjectMedAnims() {
    return (
        <div className="absolute left-0 right-0 top-0 bottom-0 py-[48px] overflow-scroll no-scrollbar bg-bgColor">
                <BentoBox />
        </div>
    )
}

'use client'

import React from "react";
import "@/app/globals/globals.css";
import Link from "next/link";

import * as bentos from "@/app/globals/bento-boxes";
import { CardHoverFX } from "@/app/globals/card-hover-fx";
import * as fonts from "@/app/globals/fonts";


import imgPubDart01 from "@/app/assets/images/_3d/pubDart_img_00.png";
import imgPubDart02 from "@/app/assets/images/_3d/pubDart_img_01.png";
import imgPubDart03 from "@/app/assets/images/_3d/pubDart_img_02.png";
import imgPubDart04 from "@/app/assets/images/_3d/pubDart_img_03.png";
import imgPubDart05 from "@/app/assets/images/_3d/pubDart_img_04.png";
import vidPubDart01 from "@/app/assets/videos/_projects/pubDart_vid_00.mp4";
import vidPubDart02 from "@/app/assets/videos/_projects/pubDart_vid_01.mp4";
import vidPubDart03 from "@/app/assets/videos/_projects/pubDart_vid_02.mp4";
import vidPubDart04 from "@/app/assets/videos/_projects/pubDart_vid_03.mp4";
import vidPubDart05 from "@/app/assets/videos/_projects/pubDart_vid_04.mp4";

import imgFlowserve01 from "@/app/assets/images/_3d/_prodAnim/Flowserve_Stills_00.png";
import imgFlowserve02 from "@/app/assets/images/_3d/_prodAnim/Flowserve_Stills_01.png";
import imgFlowserve03 from "@/app/assets/images/_3d/_prodAnim/Flowserve_Stills_02.png";
import imgFlowserve04 from "@/app/assets/images/_3d/_prodAnim/Flowserve_Stills_05.png";
import imgFlowserve05 from "@/app/assets/images/_3d/_prodAnim/Flowserve_Stills_04.png";
import imgFlowserve06 from "@/app/assets/images/_3d/_prodAnim/Flowserve_Stills_06.png";
import imgFlowserve07 from "@/app/assets/images/_3d/_prodAnim/Flowserve_Stills_07.png";
import imgFlowserve08 from "@/app/assets/images/_3d/_prodAnim/Flowserve_Stills_08.png";
import imgFlowserve09 from "@/app/assets/images/_3d/_prodAnim/Flowserve_Stills_09.png";


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




function BentoBoxA() {
    return (
        <div className="relative z-0 grid grid-cols-2 w-[80%] h-auto justify-self-center rounded-3xl place-content-center gap-[12px] my-[24px]  text-white border-white border-[1px] p-4
                        hover:cursor-pointer">
                <div className="grid grid-cols-2 gap-2">
                    <bentos.Cell1ColImage cellImgLink={imgFlowserve05} cellImgAlt="" />
                    <bentos.Cell1ColImage cellImgLink={imgFlowserve04} cellImgAlt="" />
                    <bentos.Cell1ColImage cellImgLink={imgFlowserve06} cellImgAlt="" />
                    <bentos.Cell1ColImage cellImgLink={imgFlowserve07} cellImgAlt="" />
                </div>

                <bentos.Cell1ColVideo cellVidLink={vidFlowserve06} />

                <div className="grid grid-cols-2">
                <bentos.CellAutoText>
                    <bentos.HeaderText headerText="INDUSTRIAL PUMPS"/>
                </bentos.CellAutoText>
                <bentos.Cell1ColVideo cellVidLink={vidFlowserve12} />
                </div>

                <bentos.CellAutoText>
                    <bentos.KeypointText keypointText="Product Animation, Texturing, Rendering, Video Compositing, Motion Graphics"/>
                </bentos.CellAutoText>

                <bentos.Cell1ColVideo cellVidLink={vidFlowserve08} />

                <div className="grid grid-cols-2 gap-2">
                    <bentos.Cell1ColImage cellImgLink={imgFlowserve01} cellImgAlt="" />
                    <bentos.Cell1ColImage cellImgLink={imgFlowserve08} cellImgAlt="" />
                    <bentos.Cell1ColImage cellImgLink={imgFlowserve09} cellImgAlt="" />
                    <bentos.Cell1ColImage cellImgLink={imgFlowserve02} cellImgAlt="" />
                    
                </div>
        </div>
    )
}



function BentoBoxB() {
    return (
        <div className="relative z-0 grid grid-cols-2 w-[80%] h-auto justify-self-center rounded-3xl place-content-center gap-[12px] my-[24px]  text-white border-white border-[1px] p-4
                        hover:cursor-pointer">
                <div className="grid grid-cols-2 grid-rows-2 gap-2">
                    <bentos.Cell1ColImage cellImgLink={imgJnJ02} cellImgAlt="" />
                    <bentos.Cell1ColVideo cellVidLink={vidJnJ03} />
                    <bentos.Cell2ColText>
                        <bentos.HeaderText headerText="Consumer Products"/>
                    </bentos.Cell2ColText>                  
                </div>

                <bentos.Cell1ColVideo cellVidLink={vidJnJ04} />

                <bentos.Cell1ColVideo cellVidLink={vidJnJ01} />

                <div className="grid grid-rows-2 gap-2">
                    <bentos.CellAutoText>
                        <bentos.KeypointText keypointText="Product Animation, Rendering, Video Compositing"/>
                    </bentos.CellAutoText>

                    <div className="grid grid-cols-2 gap-2">
                        <bentos.Cell1ColImage cellImgLink={imgJnJ02} cellImgAlt="" />
                        <bentos.Cell1ColImage cellImgLink={imgJnJ03} cellImgAlt="" />
                    </div>
                </div>
        </div>
    )
}

function BentoBoxC() {
    return (
        <div className="relative z-0 grid grid-cols-2 w-[80%] h-auto justify-self-center rounded-3xl place-content-center gap-[12px] my-[24px]  text-white border-white border-[1px] p-4
                        hover:cursor-pointer">
                <div className="grid grid-cols-2 grid-rows-2 gap-2">
                    <bentos.Cell1ColImage cellImgLink={imgMakino01} cellImgAlt="" />
                    <bentos.Cell1ColVideo cellVidLink={vidMakino04} />
                    <bentos.Cell2ColText>
                        <bentos.HeaderText headerText="INDUSTRIAL MACHINERY"/>
                    </bentos.Cell2ColText>                  
                </div>

                <bentos.Cell1ColVideo cellVidLink={vidMakino01} />

                <bentos.Cell1ColVideo cellVidLink={vidMakino03} />

                <div className="grid grid-rows-2 gap-2">
                    <bentos.CellAutoText>
                        <bentos.KeypointText keypointText="Product Animation, Rendering, Video Compositing"/>
                    </bentos.CellAutoText>

                    <div className="grid grid-cols-2 gap-2">
                        <bentos.Cell1ColImage cellImgLink={imgMakino05} cellImgAlt="" />
                        <bentos.Cell1ColImage cellImgLink={imgMakino03} cellImgAlt="" />
                    </div>
                </div>
        </div>
    )
}


export default function ProjectProdAnimPage() {
    return (
        <div className="absolute left-0 right-0 top-0 bottom-0 pt-[24px] overflow-scroll no-scrollbar bg-bgColor">
            <BentoBoxA />
            <BentoBoxB />
            <BentoBoxC />
        </div>
    )
}

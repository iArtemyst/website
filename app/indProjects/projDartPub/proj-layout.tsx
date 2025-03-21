'use client'

import React from "react";
import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import { CardHoverFX } from "@/app/globals/card-hover-fx";
import * as pages from "@/app/globals/pages-main";

import imgPubDart04 from "@/app/assets/images/_3d/_pubDart/pubDart_img_03.png";
import imgPubDart05 from "@/app/assets/images/_3d/_pubDart/pubDart_img_04.png";
import vidPubDart01 from "@/app/assets/videos/_3d/_pubDart/pubDart_vid_00.mp4";
import vidPubDart02 from "@/app/assets/videos/_3d/_pubDart/pubDart_vid_01.mp4";
import vidPubDart03 from "@/app/assets/videos/_3d/_pubDart/pubDart_vid_02.mp4";
import vidPubDart04 from "@/app/assets/videos/_3d/_pubDart/pubDart_vid_03.mp4";
import vidPubDart05 from "@/app/assets/videos/_3d/_pubDart/pubDart_vid_04.mp4";

const bentoGap = "gap-[12px]";
const titleTextSize= "text-[24px]";
const paraTextSize = "text-[12px]";

function BentoBoxA() {
    return (
        <div className={`${bentoGap} grid grid-cols-2 w-[80%] justify-self-center text-textVariant`}>
                <bentos.CellText cellSpan="col-span-2">
                    <bentos.HeaderText text="Game Ready Darts and Pub Assets" textSize={titleTextSize}/>
                    <bentos.ParagraphText text="This project is inspired by a local pub that I visited to play darts with friends.
                    I challenged myself to make these models completely game ready, from consistent low quality polys, to UV unwrapping and texture baking.
                    All modeling, UVing, shader development, and texture baking was done in Blender 3D." textSize={paraTextSize}/>
                </bentos.CellText>

                <bentos.CellVideo cellVidLink={vidPubDart01} cellSpan="col-span-1"/>
                <bentos.CellVideo cellVidLink={vidPubDart03} cellSpan="col-span-1"/>
                <bentos.CellVideo cellVidLink={vidPubDart04} cellSpan="col-span-1"/>
                <bentos.CellVideo cellVidLink={vidPubDart05} cellSpan="col-span-1"/>

                <bentos.CellImage cellImgLink={imgPubDart04} cellImgAlt="Pub Scene Render" cellSpan="col-span-1"/>
                <bentos.CellImage cellImgLink={imgPubDart05} cellImgAlt="Pub Scene Wireframe" cellSpan="col-span-1"/>
        </div>
    )
}

function MainVideoBox({videoLink}:{videoLink:string}) {
    return (
        <div className="group">
            <CardHoverFX bufferZone={0} rotateAmount={24}>
                <div className="relative w-[80%] h-[auto] justify-self-center rounded-[24px] overflow-hidden shadow-[0px_0px_8px_#FFFFFF90] group-hover:shadow-[0px_0px_16px_#FFFFFF45] z-0 group-hover:z-10">
                    <video src={videoLink} width="100%" height="auto" controls autoPlay muted loop className="self-center"/>
                </div>
            </CardHoverFX>
        </div>
    )
}

export default function ProjectDartPubPage() {
    return (
        <pages.GroupProjectPage>
            <div className="grid grid-cols-1 gap-[24px]">
                <MainVideoBox videoLink={vidPubDart02}/>
                <BentoBoxA />
            </div>
        </pages.GroupProjectPage>
    )
}

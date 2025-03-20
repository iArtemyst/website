'use client'
//---------------------
import React from "react";
import "@/app/globals/globals.css";
import { CardHoverFX } from "@/app/globals/card-hover-fx";
import * as bentos from "@/app/globals/bento-boxes"
//---------------------
import vidMonsoonVermut from "@/app/assets/videos/_3d/_monsoonVermut/monsoonVermut_Clip01.mp4";
//---------------------
import MVimg01 from "@/app/assets/images/_3d/_monsoonVermut/monsoonvermut_stills_00.png";
import MVimg02 from "@/app/assets/images/_3d/_monsoonVermut/monsoonvermut_stills_01.png";
import MVimg03 from "@/app/assets/images/_3d/_monsoonVermut/monsoonvermut_stills_02.png";
import MVimg04 from "@/app/assets/images/_3d/_monsoonVermut/monsoonvermut_stills_03.png";
//---------------------

const bentoGap = "gap-[12px]";
const titleTextSize= "text-[24px]";
const paraTextSize = "text-[12px]";

function MainVideoBox({videoLink}:{videoLink:string}) {
    return (
        <div className="group">
            <CardHoverFX bufferZone={0} rotateAmount={24}>
                <div className="relative w-[80%] h-[auto] justify-self-center rounded-[24px] overflow-hidden shadow-[0px_0px_8px_#FFFFFF90] group-hover:shadow-[0px_0px_16px_#FFFFFF45] z-0 group-hover:z-10">
                    <video src={vidMonsoonVermut} width="100%" height="auto" controls autoPlay muted loop className="self-center"/>
                </div>
            </CardHoverFX>
        </div>
    )
}

function BentoBoxA() {
    return (
        <div className={` ${bentoGap} relative z-0 grid grid-cols-2 w-[80%] h-auto justify-self-center rounded-3xl place-content-center gap-x-[12px] my-[24px]  text-white
                        hover:cursor-pointer`}>
            <div className="relative col-span-2 row-span-1">
                <bentos.Cell2RowText>
                    <bentos.HeaderText text="Monsoon Vermut" textSize={titleTextSize}/>
                    <bentos.ParagraphText text="For the release of a small batch Vermuth company based out of Arizona, I assisted in producing marketing collateral in the form of several social media images and a release video.
                    For this client I was given the freedom to develop a creative direction and art direct myself to produce the final assets.
                    I was responsible for modeling the assets, developing the textures and shaders, creating the environment and lighting." textSize={paraTextSize}/>
                </bentos.Cell2RowText>
            </div>

                <bentos.Cell1ColImage cellImgLink={MVimg01} cellImgAlt="Monsoon Vermut wine glass render" />

                <bentos.Cell1ColImage cellImgLink={MVimg02} cellImgAlt="Monsoon Vermut desert render" />

                <bentos.Cell1ColImage cellImgLink={MVimg03} cellImgAlt="Monsoon Vermut with cactus render" />

                <bentos.Cell1ColImage cellImgLink={MVimg04} cellImgAlt="Monsoon Vermut group sand render" />

        </div>
    )
}
//---------------------
export default function ProjectMonsoonVermutPage() {
    return (
        <div className="absolute left-0 right-0 top-0 bottom-0 overflow-auto no-scrollbar py-[48px] bg-bgVariant">
            <div className={`grid grid-cols-1 gap-[12px]`}>
                <MainVideoBox videoLink={vidMonsoonVermut}/>
                <BentoBoxA />
            </div>
        </div>
    )
}
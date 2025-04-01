'use client'

import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";

import imgFlowserve01 from "@/app/assets/images/_3d/_prodAnim/Flowserve_Stills_00.png";
import imgFlowserve02 from "@/app/assets/images/_3d/_prodAnim/Flowserve_Stills_01.png";
import imgFlowserve05 from "@/app/assets/images/_3d/_prodAnim/Flowserve_Stills_04.png";
import imgFlowserve04 from "@/app/assets/images/_3d/_prodAnim/Flowserve_Stills_05.png";
import imgFlowserve06 from "@/app/assets/images/_3d/_prodAnim/Flowserve_Stills_06.png";
import imgFlowserve07 from "@/app/assets/images/_3d/_prodAnim/Flowserve_Stills_07.png";
import imgFlowserve08 from "@/app/assets/images/_3d/_prodAnim/Flowserve_Stills_08.png";
import imgFlowserve09 from "@/app/assets/images/_3d/_prodAnim/Flowserve_Stills_09.png";

import imgJnJ01 from "@/app/assets/images/_3d/_prodAnim/JnJ_Stills_1.png";
import imgJnJ02 from "@/app/assets/images/_3d/_prodAnim/JnJ_Stills_2.png";
import imgJnJ03 from "@/app/assets/images/_3d/_prodAnim/JnJ_Stills_3.png";
import imgJnJ05 from "@/app/assets/images/_3d/_prodAnim/JnJ_Stills_5.png";

import imgProd01 from "@/app/assets/images/_3d/_prodAnim/ProdAnim_Stills_00.png";
import imgProd02 from "@/app/assets/images/_3d/_prodAnim/ProdAnim_Stills_01.png";
import imgProd03 from "@/app/assets/images/_3d/_prodAnim/ProdAnim_Stills_02.png";
import imgProd04 from "@/app/assets/images/_3d/_prodAnim/ProdAnim_Stills_03.png";

import imgMakino02 from "@/app/assets/images/_3d/_prodAnim/Makino_Stills__01.png";
import imgMakino03 from "@/app/assets/images/_3d/_prodAnim/Makino_Stills__02.png";
import imgMakino04 from "@/app/assets/images/_3d/_prodAnim/Makino_Stills__03.png";
import imgMakino05 from "@/app/assets/images/_3d/_prodAnim/Makino_Stills__04.png";

import vidFlowserve02 from "@/app/assets/videos/_3d/_prodAnim/Flowserve_Clip01.mp4";
import vidFlowserve06 from "@/app/assets/videos/_3d/_prodAnim/Flowserve_Clip02.mp4";
import vidFlowserve08 from "@/app/assets/videos/_3d/_prodAnim/Flowserve_Clip03.mp4";

import vidJnJ01 from "@/app/assets/videos/_3d/_prodAnim/JnJ_ClipA_001.mp4";
import vidJnJ04 from "@/app/assets/videos/_3d/_prodAnim/JnJ_ClipB_002.mp4";

import vidMakino01 from "@/app/assets/videos/_3d/_prodAnim/Makino_ClipA_001.mp4";
import vidMakino03 from "@/app/assets/videos/_3d/_prodAnim/Makino_ClipB_001.mp4";
import vidMakino04 from "@/app/assets/videos/_3d/_prodAnim/Makino_ClipC_001.mp4";

const bentoGap = "gap-[12px]";
const titleTextSize= "text-[24px]";
const paraTextSize = "text-[12px]";

function BentoBoxA() {
    return (
        <div className={` ${bentoGap} relative z-0 grid grid-cols-2 w-[80%] h-auto justify-self-center rounded-3xl place-content-center text-white border-white border-[1px] p-2 hover:cursor-pointer`}>
                <bentos.CellText cellSpan="col-span-full row-span-full">
                    <bentos.HeaderText text="FLOWSERVE INDUSTRIAL PUMPS" textSize={titleTextSize}/>
                    </bentos.CellText>

                <div className={`${bentoGap} grid grid-cols-2`}>
                <bentos.CellImage cellImgLink={imgFlowserve05} cellImgAlt="" cellSpan="col-span-1"/>
                <bentos.CellImage cellImgLink={imgFlowserve04} cellImgAlt="" cellSpan="col-span-1"/>
                <bentos.CellImage cellImgLink={imgFlowserve06} cellImgAlt="" cellSpan="col-span-1"/>
                <bentos.CellImage cellImgLink={imgFlowserve07} cellImgAlt="" cellSpan="col-span-1"/>
                </div>

                <bentos.CellVideo cellVidLink={vidFlowserve06} cellSpan="col-span-1"/>

                <bentos.CellVideo cellVidLink={vidFlowserve02} cellSpan="col-span-1"/>

                <bentos.CellText cellSpan="col-span-1">
                    <bentos.ParagraphText text="Taking a piece of engineering CAD, and bringing it to life through animation. I have animated many industrial products, performed modeling edits, and crafted storyboards to showcase new products.
                        These projects are a bit more unique due to the hard surface topology that comes from working with CAD models, and creates a fun challenge for animation." textSize={paraTextSize}/>
                </bentos.CellText>

                <div className={`${bentoGap} grid grid-cols-2 col-span-1`}>
                    <bentos.CellImage cellImgLink={imgFlowserve09} cellImgAlt="" cellSpan="col-span-1"/>
                    <bentos.CellImage cellImgLink={imgFlowserve02} cellImgAlt="" cellSpan="col-span-1"/>
                    <bentos.CellImage cellImgLink={imgFlowserve01} cellImgAlt="" cellSpan="col-span-1"/>
                    <bentos.CellImage cellImgLink={imgFlowserve08} cellImgAlt="" cellSpan="col-span-1"/>
                </div>

                <bentos.CellVideo cellVidLink={vidFlowserve08} cellSpan="col-span-1"/>
        </div>
    )
}

function BentoBoxB() {
    return (
        <div className={`${bentoGap} relative z-0 grid grid-cols-2 w-[80%] h-auto justify-self-center rounded-3xl place-content-center gap-[12px] my-[24px]  text-white border-white border-[1px] p-4 hover:cursor-pointer`}>
                <bentos.CellText cellSpan="col-span-full row-span-full">
                    <bentos.HeaderText text="CONSUMER PRODUCTS AND RESEARCH" textSize={titleTextSize}/>
                </bentos.CellText>

                <bentos.CellVideo cellVidLink={vidJnJ04} cellSpan="col-span-1"/>

                <div className={`${bentoGap} grid grid-cols-2 col-span-1`}>
                    <bentos.CellImage cellImgLink={imgProd03} cellImgAlt="" cellSpan="col-span-1"/>
                    <bentos.CellImage cellImgLink={imgProd01} cellImgAlt="" cellSpan="col-span-1"/>
                    <bentos.CellImage cellImgLink={imgJnJ01} cellImgAlt="" cellSpan="col-span-1"/>
                    <bentos.CellImage cellImgLink={imgJnJ05} cellImgAlt="" cellSpan="col-span-1"/>
                </div>


                <bentos.CellText cellSpan="col-span-1">
                    <bentos.ParagraphText text="I have produced videos from makeup, to sponges, batteries, and even absorbing pads in the consumer products industry. Whether it is creating a better narrative for a product release, creating visuals to a research demo for focus groups, or exploded views for engineering break downs, I can do it all." textSize={paraTextSize}/>
                </bentos.CellText> 

                <bentos.CellVideo cellVidLink={vidJnJ01} cellSpan="col-span-1"/>

                <div className={`${bentoGap} grid grid-cols-4 col-span-2`}>
                    <bentos.CellImage cellImgLink={imgJnJ02} cellImgAlt="" cellSpan="col-span-1"/>
                    <bentos.CellImage cellImgLink={imgProd02} cellImgAlt="" cellSpan="col-span-1"/>
                    <bentos.CellImage cellImgLink={imgJnJ03} cellImgAlt="" cellSpan="col-span-1"/>
                    <bentos.CellImage cellImgLink={imgProd04} cellImgAlt="" cellSpan="col-span-1"/>
                </div>
        </div>
    )
}

function BentoBoxC() {
    return (
        <div className={` ${bentoGap} relative z-0 grid grid-cols-2 w-[80%] h-auto justify-self-center rounded-3xl place-content-center text-white border-white border-[1px] p-4 hover:cursor-pointer`} >
            <bentos.CellText cellSpan="col-span-full row-span-full">
                <bentos.HeaderText text="INDUSTRIAL MACHINERY" textSize={titleTextSize}/>
            </bentos.CellText>

            <div className={`${bentoGap} grid grid-cols-2 col-span-1`}>
                <bentos.CellVideo cellVidLink={vidMakino04} cellSpan="col-span-2"/>
                <bentos.CellImage cellImgLink={imgMakino05} cellImgAlt="" cellSpan="col-span-1"/>
                <bentos.CellImage cellImgLink={imgMakino03} cellImgAlt="" cellSpan="col-span-1"/>
            </div>

            <div className={`${bentoGap} grid grid-cols-2 col-span-1`}>
                <bentos.CellImage cellImgLink={imgMakino02} cellImgAlt="" cellSpan="col-span-1"/>
                <bentos.CellImage cellImgLink={imgMakino04} cellImgAlt="" cellSpan="col-span-1"/>
                <bentos.CellVideo cellVidLink={vidMakino01} cellSpan="col-span-2"/>
            </div>

            <bentos.CellText cellSpan="col-span-1">
                    <bentos.ParagraphText text="In support of an industrial machinery app, I produced a suite of videos highlighting the unique features of the machines.
                        Each scene would showcase the main device, and then zoom into the selected detail. I also assisted in the production of low poly models for Augmented Reality versions of the machines." textSize={paraTextSize}/>
            </bentos.CellText>

            <bentos.CellVideo cellVidLink={vidMakino03} cellSpan="col-span-1"/>
        </div>
    )
}


export default function ProjectProdAnimPage() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
                <BentoBoxA />
                <BentoBoxB />
                <BentoBoxC />
        </pages.GroupProjectPage>
    )
}

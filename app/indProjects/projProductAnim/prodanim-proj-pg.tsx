'use client'

import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";

import imgFlowserve01 from "@/app/assets/_3d/_prodAnim/Flowserve_Stills_00.png";
import imgFlowserve02 from "@/app/assets/_3d/_prodAnim/Flowserve_Stills_01.png";
import imgFlowserve05 from "@/app/assets/_3d/_prodAnim/Flowserve_Stills_04.png";
import imgFlowserve04 from "@/app/assets/_3d/_prodAnim/Flowserve_Stills_05.png";
import imgFlowserve06 from "@/app/assets/_3d/_prodAnim/Flowserve_Stills_06.png";
import imgFlowserve07 from "@/app/assets/_3d/_prodAnim/Flowserve_Stills_07.png";
import imgFlowserve08 from "@/app/assets/_3d/_prodAnim/Flowserve_Stills_08.png";
import imgFlowserve09 from "@/app/assets/_3d/_prodAnim/Flowserve_Stills_09.png";

import imgJnJ03 from "@/app/assets/_3d/_prodAnim/JnJ_Stills_3.png";
import imgJnJ05 from "@/app/assets/_3d/_prodAnim/JnJ_Stills_5.png";

import imgProd01 from "@/app/assets/_3d/_prodAnim/ProdAnim_Stills_00.png";
import imgProd03 from "@/app/assets/_3d/_prodAnim/ProdAnim_Stills_02.png";

import imgMakino02 from "@/app/assets/_3d/_prodAnim/Makino_Stills__01.png";
import imgMakino03 from "@/app/assets/_3d/_prodAnim/Makino_Stills__02.png";
import imgMakino04 from "@/app/assets/_3d/_prodAnim/Makino_Stills__03.png";
import imgMakino05 from "@/app/assets/_3d/_prodAnim/Makino_Stills__04.png";

import vidFlowserve02 from "@/app/assets/_3d/_prodAnim/Flowserve_Clip01.mp4";
import vidFlowserve06 from "@/app/assets/_3d/_prodAnim/Flowserve_Clip02.mp4";
import vidFlowserve08 from "@/app/assets/_3d/_prodAnim/Flowserve_Clip03.mp4";

import vidJnJ01 from "@/app/assets/_3d/_prodAnim/JnJ_ClipA_001.mp4";
import vidJnJ04 from "@/app/assets/_3d/_prodAnim/JnJ_ClipB_002.mp4";

import vidMakino01 from "@/app/assets/_3d/_prodAnim/Makino_ClipA_001.mp4";
import vidMakino03 from "@/app/assets/_3d/_prodAnim/Makino_ClipB_001.mp4";
import vidMakino04 from "@/app/assets/_3d/_prodAnim/Makino_ClipC_001.mp4";

const bentoGap = "gap-[12px]";
const titleTextSize= "text-[24px]";
const paraTextSize = "text-[12px]";

function BentoBoxA() {
    return (
        <div className={` ${bentoGap} relative z-auto grid grid-cols-2 w-[80%] h-auto justify-self-center rounded-3xl place-content-center text-white border-white border-[1px] p-2 hover:cursor-pointer`}>
                <bentos.CellText cellSpan="col-span-full row-span-full">
                    <bentos.HeaderText text="FLOWSERVE INDUSTRIAL PUMPS" textSize={titleTextSize}/>
                    </bentos.CellText>

                <div className={`${bentoGap} grid grid-cols-2 hover:z-20`}>
                <bentos.CellMediaOnClick mediaLink={imgFlowserve05} mediaText="Flowserve pump still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                <bentos.CellMediaOnClick mediaLink={imgFlowserve04} mediaText="Flowserve pump still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                <bentos.CellMediaOnClick mediaLink={imgFlowserve06} mediaText="Flowserve pump still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                <bentos.CellMediaOnClick mediaLink={imgFlowserve07} mediaText="Flowserve pump still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                </div>

                <bentos.CellMediaOnClick mediaLink={vidFlowserve06} mediaText="Flowserve Z-Series Pump clip A" cellSpan="col-span-1" hoverTextColor="text-textColor"/>

                <bentos.CellMediaOnClick mediaLink={vidFlowserve02} mediaText="Flowserve Z-Series Pump clip B" cellSpan="col-span-1" hoverTextColor="text-textColor"/>

                <bentos.CellText cellSpan="col-span-1">
                    <bentos.ParagraphText text="Taking a piece of engineering CAD, and bringing it to life through animation. I have animated many industrial products, performed modeling edits, and crafted storyboards to showcase new products.
                        These projects are a bit more unique due to the hard surface topology that comes from working with CAD models, and creates a fun challenge for animation." textSize={paraTextSize}/>
                </bentos.CellText>

                <div className={`${bentoGap} grid grid-cols-2 col-span-1 hover:z-20`}>
                    <bentos.CellMediaOnClick mediaLink={imgFlowserve09} mediaText="Flowserve pump still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                    <bentos.CellMediaOnClick mediaLink={imgFlowserve02} mediaText="Flowserve pump still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                    <bentos.CellMediaOnClick mediaLink={imgFlowserve01} mediaText="Flowserve pump still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                    <bentos.CellMediaOnClick mediaLink={imgFlowserve08} mediaText="Flowserve pump still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                </div>

                <bentos.CellMediaOnClick mediaLink={vidFlowserve08} mediaText="Flowserve Z-Series Pump clip C" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
        </div>
    )
}

function BentoBoxB() {
    return (
        <div className={` ${bentoGap} relative z-auto grid grid-cols-2 w-[80%] h-auto justify-self-center rounded-3xl place-content-center text-white border-white border-[1px] p-4 hover:cursor-pointer`} >
            <bentos.CellText cellSpan="col-span-full row-span-full">
                <bentos.HeaderText text="INDUSTRIAL MACHINERY" textSize={titleTextSize}/>
            </bentos.CellText>

            <div className={`${bentoGap} grid grid-cols-2 col-span-1 hover:z-20`}>
                <bentos.CellMediaOnClick mediaLink={vidMakino04} mediaText="Machinery feature highlight clip" cellSpan="col-span-2" hoverTextColor="text-textColor"/>
                <bentos.CellMediaOnClick mediaLink={imgMakino05} mediaText="Machinery animation still" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaLink={imgMakino03} mediaText="Machinery animation still" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            </div>

            <div className={`${bentoGap} grid grid-cols-2 col-span-1 hover:z-20`}>
                <bentos.CellMediaOnClick mediaLink={imgMakino02} mediaText="Machinery animation still" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaLink={imgMakino04} mediaText="Machinery animation still" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaLink={vidMakino01} mediaText="Machinery feature highlight clip" cellSpan="col-span-2" hoverTextColor="text-textVariant"/>
            </div>

            <bentos.CellText cellSpan="col-span-1">
                    <bentos.ParagraphText text="In support of an industrial machinery app, I produced a suite of videos highlighting the unique features of the machines.
                        Each scene would showcase the main device, and then zoom into the selected detail. I also assisted in the production of low poly models for Augmented Reality versions of the machines." textSize={paraTextSize}/>
            </bentos.CellText>

            <bentos.CellMediaOnClick mediaLink={vidMakino03} mediaText="Machinery feature highlight clip" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
        </div>
    )
}

function BentoBoxC() {
    return (
        <div className={`${bentoGap} relative z-auto grid grid-cols-2 w-[80%] h-auto justify-self-center rounded-3xl place-content-center gap-[12px] my-[24px]  text-white border-white border-[1px] p-4 hover:cursor-pointer`}>
                <bentos.CellText cellSpan="col-span-full row-span-full">
                    <bentos.HeaderText text="CONSUMER PRODUCTS AND RESEARCH" textSize={titleTextSize}/>
                </bentos.CellText>

                <bentos.CellMediaOnClick mediaLink={vidJnJ04} mediaText="Consumer product animation clip" cellSpan="col-span-1" hoverTextColor="text-textColor"/>

                <div className={`${bentoGap} grid grid-cols-2 col-span-1 hover:z-20`}>
                    <bentos.CellMediaOnClick mediaLink={imgProd03} mediaText="Makeup and beauty render" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                    <bentos.CellMediaOnClick mediaLink={imgJnJ05} mediaText="Consumer products render" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                    <bentos.CellMediaOnClick mediaLink={imgJnJ03} mediaText="Consumer products still" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                    <bentos.CellMediaOnClick mediaLink={imgProd01} mediaText="Sponge material render" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                </div>


                <bentos.CellText cellSpan="col-span-1">
                    <bentos.ParagraphText text="I have produced videos from makeup, to sponges, batteries, and even absorbing pads in the consumer products industry. Whether it is creating a better narrative for a product release, creating visuals to a research demo for focus groups, or exploded views for engineering break downs, I can do it all." textSize={paraTextSize}/>
                </bentos.CellText> 

                <bentos.CellMediaOnClick mediaLink={vidJnJ01} mediaText="Consumer product informational clip" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
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

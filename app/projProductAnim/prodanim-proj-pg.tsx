'use client'

import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";
import { MediaType } from "@/app/globals/project-galleries";
import { CheckIfMobileBrowser } from "../globals/mobile-check";
import { LockedProjectPage } from "../globals/locked-project";

const imgFlowserve01 = "_3d/_prodAnim/Flowserve_Stills_00.png";
const imgFlowserve02 = "_3d/_prodAnim/Flowserve_Stills_01.png";
const imgFlowserve05 = "_3d/_prodAnim/Flowserve_Stills_04.png";
const imgFlowserve04 = "_3d/_prodAnim/Flowserve_Stills_05.png";
const imgFlowserve06 = "_3d/_prodAnim/Flowserve_Stills_06.png";
const imgFlowserve07 = "_3d/_prodAnim/Flowserve_Stills_07.png";
const imgFlowserve08 = "_3d/_prodAnim/Flowserve_Stills_08.png";
const imgFlowserve09 = "_3d/_prodAnim/Flowserve_Stills_09.png";

const imgJnJ03 = "_3d/_prodAnim/JnJ_Stills_3.png";
const imgJnJ05 = "_3d/_prodAnim/JnJ_Stills_5.png";

const imgProd01 = "_3d/_prodAnim/ProdAnim_Stills_00.png";
const imgProd03 = "_3d/_prodAnim/ProdAnim_Stills_02.png";

const imgMakino02 = "_3d/_prodAnim/Makino_Stills__01.png";
const imgMakino03 = "_3d/_prodAnim/Makino_Stills__02.png";
const imgMakino04 = "_3d/_prodAnim/Makino_Stills__03.png";
const imgMakino05 = "_3d/_prodAnim/Makino_Stills__04.png";

const vidFlowserve02 = "_3d/_prodAnim/Flowserve_Clip01.mp4";
const vidFlowserve06 = "_3d/_prodAnim/Flowserve_Clip02.mp4";
const vidFlowserve08 = "_3d/_prodAnim/Flowserve_Clip03.mp4";

const vidJnJ01 = "_3d/_prodAnim/JnJ_ClipA_001.mp4";
const vidJnJ04 = "_3d/_prodAnim/JnJ_ClipB_002.mp4";

const vidMakino01 = "_3d/_prodAnim/Makino_ClipA_001.mp4";
const vidMakino03 = "_3d/_prodAnim/Makino_ClipB_001.mp4";
const vidMakino04 = "_3d/_prodAnim/Makino_ClipC_001.mp4";

const bentoGap = "gap-[12px]";
const titleTextSize= "text-[24px]";
const paraTextSize = "text-[12px]";

function BentoBoxA() {
    let isMobile = CheckIfMobileBrowser()
    return (
        <div className={`${isMobile ? "grid-cols-1" : "grid-cols-2"} ${bentoGap} relative z-auto grid  w-[80%] h-auto justify-self-center rounded-3xl place-content-center text-white border-white border-[1px] p-2 hover:cursor-pointer`}>
            <bentos.CellText cellSpan="col-span-full row-span-full">
                <bentos.HeaderText text="FLOWSERVE INDUSTRIAL PUMPS" textSize={titleTextSize}/>
            </bentos.CellText>

            <div className={`${bentoGap} grid grid-cols-2 hover:z-20`}>
                <bentos.CellMediaOnClick mediaLink={imgFlowserve05} mediaType={MediaType.Image} mediaText="Flowserve pump still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                <bentos.CellMediaOnClick mediaLink={imgFlowserve04} mediaType={MediaType.Image} mediaText="Flowserve pump still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                <bentos.CellMediaOnClick mediaLink={imgFlowserve06} mediaType={MediaType.Image} mediaText="Flowserve pump still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                <bentos.CellMediaOnClick mediaLink={imgFlowserve07} mediaType={MediaType.Image} mediaText="Flowserve pump still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
            </div>

            <bentos.CellMediaOnClick mediaLink={vidFlowserve06} mediaType={MediaType.Video} mediaText="Flowserve Z-Series Pump clip A" cellSpan="col-span-1" hoverTextColor="text-textColor"/>

            <bentos.CellMediaOnClick mediaLink={vidFlowserve02} mediaType={MediaType.Video} mediaText="Flowserve Z-Series Pump clip B" cellSpan="col-span-1" hoverTextColor="text-textColor"/>

            <bentos.CellText cellSpan="col-span-1">
                <bentos.ParagraphText textSize={paraTextSize} text="Taking a piece of engineering CAD, and bringing it to life through animation. I have animated many industrial products, performed modeling edits, and crafted storyboards to showcase new products.
                    These projects are a bit more unique due to the hard surface topology that comes from working with CAD models, and creates a fun challenge for animation." />
            </bentos.CellText>

            <div className={`${bentoGap} grid grid-cols-2 col-span-1 hover:z-20`}>
                <bentos.CellMediaOnClick mediaLink={imgFlowserve09} mediaType={MediaType.Image} mediaText="Flowserve pump still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                <bentos.CellMediaOnClick mediaLink={imgFlowserve02} mediaType={MediaType.Image} mediaText="Flowserve pump still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                <bentos.CellMediaOnClick mediaLink={imgFlowserve01} mediaType={MediaType.Image} mediaText="Flowserve pump still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                <bentos.CellMediaOnClick mediaLink={imgFlowserve08} mediaType={MediaType.Image} mediaText="Flowserve pump still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
            </div>

            <bentos.CellMediaOnClick mediaLink={vidFlowserve08} mediaType={MediaType.Video} mediaText="Flowserve Z-Series Pump clip C" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
        </div>
    )
}

function BentoBoxB() {
    let isMobile = CheckIfMobileBrowser()
    return (
        <div className={`${isMobile ? "grid-cols-1" : "grid-cols-2"} ${bentoGap} relative z-auto grid w-[80%] h-auto justify-self-center rounded-3xl place-content-center text-white border-white border-[1px] p-4 hover:cursor-pointer`} >
            <bentos.CellText cellSpan="col-span-full row-span-full">
                <bentos.HeaderText text="INDUSTRIAL MACHINERY" textSize={titleTextSize}/>
            </bentos.CellText>

            <div className={`${bentoGap} grid grid-cols-2 col-span-1 hover:z-20`}>
                <bentos.CellMediaOnClick mediaLink={vidMakino04} mediaType={MediaType.Video} mediaText="Machinery feature highlight clip" cellSpan="col-span-2" hoverTextColor="text-textColor"/>
                <bentos.CellMediaOnClick mediaLink={imgMakino05} mediaType={MediaType.Image} mediaText="Machinery animation still" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaLink={imgMakino03} mediaType={MediaType.Image} mediaText="Machinery animation still" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            </div>

            <div className={`${bentoGap} grid grid-cols-2 col-span-1 hover:z-20`}>
                <bentos.CellMediaOnClick mediaLink={imgMakino02} mediaType={MediaType.Image} mediaText="Machinery animation still" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaLink={imgMakino04} mediaType={MediaType.Image} mediaText="Machinery animation still" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaLink={vidMakino01} mediaType={MediaType.Video} mediaText="Machinery feature highlight clip" cellSpan="col-span-2" hoverTextColor="text-textVariant"/>
            </div>

            <bentos.CellText cellSpan="col-span-1">
                <bentos.ParagraphText textSize={paraTextSize} text="In support of an industrial machinery app, I produced a suite of videos highlighting the unique features of the machines.
                    Each scene would showcase the main device, and then zoom into the selected detail. I also assisted in the production of low poly models for Augmented Reality versions of the machines." />
            </bentos.CellText>

            <bentos.CellMediaOnClick mediaLink={vidMakino03} mediaType={MediaType.Video} mediaText="Machinery feature highlight clip" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
        </div>
    )
}

function BentoBoxC() {
    let isMobile = CheckIfMobileBrowser()
    return (
        <div className={`${isMobile ? "grid-cols-1" : "grid-cols-2"} ${bentoGap} relative z-auto grid w-[80%] h-auto justify-self-center rounded-3xl place-content-center gap-[12px] my-[24px]  text-white border-white border-[1px] p-4 hover:cursor-pointer`}>
            <bentos.CellText cellSpan="col-span-full row-span-full">
                <bentos.HeaderText text="CONSUMER PRODUCTS AND RESEARCH" textSize={titleTextSize}/>
            </bentos.CellText>

            <bentos.CellMediaOnClick mediaLink={vidJnJ04} mediaType={MediaType.Video} mediaText="Consumer product animation clip" cellSpan="col-span-1" hoverTextColor="text-textColor"/>

            <div className={`${bentoGap} grid grid-cols-2 col-span-1 hover:z-20`}>
                <bentos.CellMediaOnClick mediaLink={imgProd03} mediaType={MediaType.Image} mediaText="Makeup and beauty render" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                <bentos.CellMediaOnClick mediaLink={imgJnJ05} mediaType={MediaType.Image} mediaText="Consumer products render" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaLink={imgJnJ03} mediaType={MediaType.Image} mediaText="Consumer products still" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaLink={imgProd01} mediaType={MediaType.Image} mediaText="Sponge material render" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
            </div>

            <bentos.CellText cellSpan="col-span-1">
                <bentos.ParagraphText textSize={paraTextSize} text="I have produced videos from makeup, to sponges, batteries, and even absorbing pads in the consumer products industry. Whether it is creating a better narrative for a product release, creating visuals to a research demo for focus groups, or exploded views for engineering break downs, I can do it all." />
            </bentos.CellText> 

            <bentos.CellMediaOnClick mediaLink={vidJnJ01} mediaType={MediaType.Video} mediaText="Consumer product informational clip" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
        </div>
    )
}


export default function ProjectProdAnimPage() {
    return (
        <>
        <LockedProjectPage />
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <BentoBoxA />
            <BentoBoxB />
            <BentoBoxC />
        </pages.GroupProjectPage>
        </>
    )
}

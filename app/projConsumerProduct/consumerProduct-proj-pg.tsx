'use client'

import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";
import { MediaType } from "@/app/globals/project-galleries";
import { LockedProjectPage } from "../globals/locked-project";

const imgJnJ03 = "_3d/_prodAnim/JnJ_Stills_3.png";
const imgJnJ05 = "_3d/_prodAnim/JnJ_Stills_5.png";
const imgProd01 = "_3d/_prodAnim/ProdAnim_Stills_00.png";
const imgProd03 = "_3d/_prodAnim/ProdAnim_Stills_02.png";
const imgKAO1 = "_3d/_prodAnim/KAO_dropper_stills_01.png";
const imgKAO2 = "_3d/_prodAnim/KAO_dropper_stills_02.png";
const imgKAO3 = "_3d/_prodAnim/KAO_dropper_stills_03.png";
const imgKAO4 = "_3d/_prodAnim/KAO_dropper_stills_04.png";

const vidJnJ01 = "_3d/_prodAnim/JnJ_ClipA_001.mp4";
const vidJnJ04 = "_3d/_prodAnim/JnJ_ClipB_002.mp4";

const bentoGap = "gap-[12px]";
const titleTextSize= "text-[24px]";
const paraTextSize = "text-[12px]";

function BentoBox() {
    return (
        <div className={`${bentoGap} grid-cols-2 relative z-auto grid w-[80%] h-auto justify-self-center rounded-3xl place-content-center gap-[12px] my-[24px] text-white hover:cursor-pointer`}>
            <bentos.CellText cellSpan="col-span-full row-span-full">
                <bentos.HeaderSubtitleText htext="CONSUMER AND BEAUTY PRODUCTS" stext="MODELING, MATERIAL AND LIGHTING, MOTION GRAPHICS, RENDERING, ANIMATION"/>
            </bentos.CellText>

            <bentos.CellMediaOnClick mediaLink={vidJnJ04} mediaType={MediaType.Video} mediaText="Consumer Products Eco-Friendly Initiative Animation Clip" cellSpan="col-span-2" hoverTextColor="text-textVariant"/>

            <bentos.CellText cellSpan="col-span-2">
                <bentos.ParagraphText text="Working with a variety of clients has given me the a strong skillset for rendering realistic products and scenes from any area, including consumer and beauty products." />
            </bentos.CellText> 

            <bentos.CellMediaOnClick mediaLink={imgProd03} mediaType={MediaType.Image} mediaText="3D Render of Lipstick on Bathroom Counter" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
            <bentos.CellMediaOnClick mediaLink={imgJnJ05} mediaType={MediaType.Image} mediaText="Still Image from Consumer Product Animation" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>

            <bentos.CellMediaOnClick mediaLink={imgKAO3} mediaType={MediaType.Image} mediaText="3D Beauty Product with Graphic Mockup" cellSpan="col-span-2 sm:col-span-1" hoverTextColor="text-textColor"/>

            <bentos.CellText cellSpan="col-span-2 sm:col-span-1">
                <bentos.ParagraphText text="I have produced videos from makeup, to sponges, batteries, and even absorbing pads in the consumer products industry. Whether it is creating a better narrative for a product release, creating visuals to a research demo for focus groups, or exploded views for engineering break downs, I can do it all." />
            </bentos.CellText>

            <bentos.CellMediaOnClick mediaLink={imgProd01} mediaType={MediaType.Image} mediaText="3D Realistic Kitchen Sponge Render" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
            <bentos.CellMediaOnClick mediaLink={imgKAO4} mediaType={MediaType.Image} mediaText="3D Product Exploded View" cellSpan="col-span-1" hoverTextColor="text-textColor"/>

            <bentos.CellMediaOnClick mediaLink={vidJnJ01} mediaType={MediaType.Video} mediaText="3D Femcare Product Clip" cellSpan="col-span-2" hoverTextColor="text-textColor"/>
        </div>
    )
}


export default function ProjectPageConsumerProducts() {
    return (
        <>
        <LockedProjectPage />
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <BentoBox />
        </pages.GroupProjectPage>
        </>
    )
}

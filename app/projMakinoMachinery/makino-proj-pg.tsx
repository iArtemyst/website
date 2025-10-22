'use client'

import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";
import { MediaType } from "@/app/globals/project-galleries";

const imgMakino02 = "_3d/_prodAnim/Makino_Stills__01.png";
const imgMakino03 = "_3d/_prodAnim/Makino_Stills__02.png";
const imgMakino04 = "_3d/_prodAnim/Makino_Stills__03.png";
const imgMakino05 = "_3d/_prodAnim/Makino_Stills__04.png";
const imgMakinoNew01 = "_3d/_prodAnim/kv_makino_collateral_00.png";
const imgMakinoNew02 = "_3d/_prodAnim/kv_makino_collateral_02.png";
const imgMakinoNew03 = "_3d/_prodAnim/kv_makino_collateral_03.png";
const imgMakinoNew04 = "_3d/_prodAnim/kv_makino_collateral_04.png";
const imgMakinoNew05 = "_3d/_prodAnim/kv_makino_collateral_05.png";
const imgMakinoNew06 = "_3d/_prodAnim/kv_makino_collateral_07.png";
const imgMakinoNew07 = "_3d/_prodAnim/kv_makino_collateral_14.png";
const imgMakinoNew08 = "_3d/_prodAnim/kv_makino_collateral_15.png";

const vidMakino01 = "_3d/_prodAnim/Makino_ClipA_001.mp4";
const vidMakino03 = "_3d/_prodAnim/Makino_ClipB_001.mp4";
const vidMakino04 = "_3d/_prodAnim/Makino_ClipC_001.mp4";

const bentoGap = "gap-[12px]";
const titleTextSize= "text-[24px]";
const paraTextSize = "text-[12px]";


function BentoBox() {
    return (
        <div className={`${bentoGap} grid-cols-2 relative z-auto grid w-[80%] h-auto justify-self-center rounded-3xl place-content-center text-white hover:cursor-pointer`} >
            <bentos.CellText cellSpan="col-span-full row-span-full">
                <bentos.HeaderSubtitleText htext="MAKINO MACHINERY" stext="CAD COVERSION, MATERIAL DESIGN, LIGHTING, ANIMATION, RENDERING, COMPOSITING"/>
            </bentos.CellText>

            <bentos.CellMediaOnClick mediaLink={vidMakino03} mediaType={MediaType.Video} mediaText="Makino iQ500 Feature Animation Clip" cellSpan="col-span-2" hoverTextColor="text-textColor"/>
            <bentos.CellMediaOnClick mediaLink={imgMakinoNew02} mediaType={MediaType.Image} mediaText="Hyper Realistic Reflective Machine Interior" cellSpan="col-span-2 sm:col-span-1" hoverTextColor="text-textVariant"/>

            <bentos.CellText cellSpan="col-span-2 sm:col-span-1">
                <bentos.ParagraphText textSize={paraTextSize} text="Working with this client was always a fun experience of hyper realistic material development and environment lighting. I was usually tasked with creating a suite of feature videos for a machine they were highlighting at an upcoming trade show. This usually involved zooming close into parts of the machine to highlight incredibly accurate device tooling and results." />
            </bentos.CellText>

            <bentos.CellMediaOnClick mediaLink={imgMakinoNew06} mediaType={MediaType.Image} mediaText="Makino Machine Performance Improvement Graphic" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            <bentos.CellMediaOnClick mediaLink={imgMakinoNew01} mediaType={MediaType.Image} mediaText="Makino Machinery Axis Graphic" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>

            <bentos.CellMediaOnClick mediaLink={vidMakino01} mediaType={MediaType.Video} mediaText="Makino iQ500 Macro Zoom Render" cellSpan="col-span-2" hoverTextColor="text-textVariant"/>

            <bentos.CellMediaOnClick mediaLink={imgMakinoNew03} mediaType={MediaType.Image} mediaText="Makino a800Z 3D Model Render" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            <bentos.CellMediaOnClick mediaLink={imgMakinoNew07} mediaType={MediaType.Image} mediaText="Hyper Realistic Reflective Machining 3D Render" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            <bentos.CellText cellSpan="sm:col-span-1 col-span-2">
                <bentos.ParagraphText textSize={paraTextSize} text="In addition to creating videos for the trade show applications, the company I was working with also developed and supported a standalone sales application that included Augmented Reality Digital Twins of the Machines, and allowed users of the app to click into the feature device at specific areas to pull up the related feature videos I was creating. I also helped my team in remodeling the high-poly CAD models provided by the client into low-poly AR ready models, and worked on a pipeline for automatically converting and generating the engine ready models." />
            </bentos.CellText>
            <bentos.CellMediaOnClick mediaLink={imgMakinoNew04} mediaType={MediaType.Image} mediaText="Machinery Temperature Motion Graphic" cellSpan="col-span-2 sm:col-span-1" hoverTextColor="text-textVariant"/>
            <bentos.CellMediaOnClick mediaLink={imgMakino03} mediaType={MediaType.Image} mediaText="3D Makino Machine Render" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            <bentos.CellMediaOnClick mediaLink={imgMakino04} mediaType={MediaType.Image} mediaText="Makino Precision Cutter Graphic" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>

        </div>
    )
}


export default function MakinoProjectPage() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <BentoBox />
        </pages.GroupProjectPage>
    )
}

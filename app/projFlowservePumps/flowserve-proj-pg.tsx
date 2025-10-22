'use client'

import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";
import { MediaType } from "@/app/globals/project-galleries";

const imgFlowserve01 = "_3d/_prodAnim/Flowserve_Stills_00.png";
const imgFlowserve02 = "_3d/_prodAnim/Flowserve_Stills_01.png";
const imgFlowserve05 = "_3d/_prodAnim/Flowserve_Stills_04.png";
const imgFlowserve04 = "_3d/_prodAnim/Flowserve_Stills_05.png";
const imgFlowserve06 = "_3d/_prodAnim/Flowserve_Stills_06.png";
const imgFlowserve07 = "_3d/_prodAnim/Flowserve_Stills_07.png";
const imgFlowserve08 = "_3d/_prodAnim/Flowserve_Stills_08.png";
const imgFlowserve09 = "_3d/_prodAnim/Flowserve_Stills_09.png";

const vidFlowserve02 = "_3d/_prodAnim/Flowserve_Clip01.mp4";
const vidFlowserve06 = "_3d/_prodAnim/Flowserve_Clip02.mp4";
const vidFlowserve08 = "_3d/_prodAnim/Flowserve_Clip03.mp4";

const bentoGap = "gap-[12px]";
const titleTextSize= "text-[24px]";
const paraTextSize = "text-[12px]";

function BentoBox() {
    return (
        <div className={`grid-cols-2 ${bentoGap} relative z-auto grid w-[80%] h-auto justify-self-center rounded-3xl place-content-center text-white hover:cursor-pointer`}>
            <bentos.CellText cellSpan="col-span-full row-span-full">
                <bentos.HeaderText text="FLOWSERVE INDUSTRIAL PUMPS" textSize={titleTextSize}/>
            </bentos.CellText>

            <bentos.CellMediaOnClick mediaLink={vidFlowserve02} mediaType={MediaType.Video} mediaText="Flowserve Z-Series Pump" cellSpan="col-span-2" hoverTextColor="text-textColor"/>

            <bentos.CellMediaOnClick mediaLink={imgFlowserve05} mediaType={MediaType.Image} mediaText="Flowserve pump still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
            <bentos.CellMediaOnClick mediaLink={imgFlowserve04} mediaType={MediaType.Image} mediaText="Flowserve pump still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
            <bentos.CellMediaOnClick mediaLink={imgFlowserve06} mediaType={MediaType.Image} mediaText="Flowserve pump still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>

            <bentos.CellText cellSpan="col-span-1">
                <bentos.ParagraphText textSize={paraTextSize} text="Taking a piece of engineering CAD, and bringing it to life through animation. I have animated many industrial products, performed modeling edits, and crafted storyboards to showcase new products.
                    These projects are a bit more unique due to the hard surface topology that comes from working with CAD models, and creates a fun challenge for animation." />
            </bentos.CellText>

            <bentos.CellMediaOnClick mediaLink={vidFlowserve06} mediaType={MediaType.Video} mediaText="Flowserve Z-Series Pump" cellSpan="col-span-2" hoverTextColor="text-textColor"/>

            <bentos.CellMediaOnClick mediaLink={imgFlowserve07} mediaType={MediaType.Image} mediaText="Flowserve pump still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
            <bentos.CellMediaOnClick mediaLink={imgFlowserve09} mediaType={MediaType.Image} mediaText="Flowserve pump still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>

            <bentos.CellText cellSpan="col-span-1">
                <bentos.ParagraphText textSize={paraTextSize} text="Taking a piece of engineering CAD, and bringing it to life through animation. I have animated many industrial products, performed modeling edits, and crafted storyboards to showcase new products.
                    These projects are a bit more unique due to the hard surface topology that comes from working with CAD models, and creates a fun challenge for animation." />
            </bentos.CellText>

            <bentos.CellMediaOnClick mediaLink={imgFlowserve02} mediaType={MediaType.Image} mediaText="Flowserve pump still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
            <bentos.CellMediaOnClick mediaLink={imgFlowserve01} mediaType={MediaType.Image} mediaText="Flowserve pump still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
            <bentos.CellMediaOnClick mediaLink={imgFlowserve08} mediaType={MediaType.Image} mediaText="Flowserve pump still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>

            <bentos.CellMediaOnClick mediaLink={vidFlowserve08} mediaType={MediaType.Video} mediaText="Flowserve Z-Series Pump clip C" cellSpan="col-span-2" hoverTextColor="text-textColor"/>
        </div>
    )
}


export default function ProjectPageFlowserve() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <BentoBox />
        </pages.GroupProjectPage>
    )
}

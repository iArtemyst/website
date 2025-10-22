'use client'

import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";
import { MediaType } from "@/app/globals/project-galleries";

const imgMakino02 = "_3d/_prodAnim/Makino_Stills__01.png";
const imgMakino03 = "_3d/_prodAnim/Makino_Stills__02.png";
const imgMakino04 = "_3d/_prodAnim/Makino_Stills__03.png";
const imgMakino05 = "_3d/_prodAnim/Makino_Stills__04.png";

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
                <bentos.HeaderText text="MAKINO MACHINERY" textSize={titleTextSize}/>
            </bentos.CellText>

            <bentos.CellMediaOnClick mediaLink={vidMakino03} mediaType={MediaType.Video} mediaText="Machinery feature highlight clip" cellSpan="col-span-2" hoverTextColor="text-textColor"/>
            <bentos.CellMediaOnClick mediaLink={imgMakino03} mediaType={MediaType.Image} mediaText="Machinery animation still" cellSpan="col-span-2 sm:col-span-1" hoverTextColor="text-textVariant"/>

            <bentos.CellText cellSpan="col-span-2 sm:col-span-1">
                <bentos.ParagraphText textSize={paraTextSize} text="In support of an industrial machinery app, I produced a suite of videos highlighting the unique features of the machines.
                    Each scene would showcase the main device, and then zoom into the selected detail. I also assisted in the production of low poly models for Augmented Reality versions of the machines." />
            </bentos.CellText>

            <bentos.CellMediaOnClick mediaLink={vidMakino01} mediaType={MediaType.Video} mediaText="Machinery feature highlight clip" cellSpan="col-span-2" hoverTextColor="text-textVariant"/>
            <bentos.CellMediaOnClick mediaLink={imgMakino04} mediaType={MediaType.Image} mediaText="Machinery animation still" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            <bentos.CellMediaOnClick mediaLink={imgMakino05} mediaType={MediaType.Image} mediaText="Machinery animation still" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>

            <bentos.CellText cellSpan="sm:col-span-1 col-span-2">
                <bentos.ParagraphText textSize={paraTextSize} text="In support of an industrial machinery app, I produced a suite of videos highlighting the unique features of the machines.
                    Each scene would showcase the main device, and then zoom into the selected detail. I also assisted in the production of low poly models for Augmented Reality versions of the machines." />
            </bentos.CellText>

            <bentos.CellMediaOnClick mediaLink={imgMakino02} mediaType={MediaType.Image} mediaText="Machinery animation still" cellSpan="col-span-2 sm:col-span-1" hoverTextColor="text-textVariant"/>
            <bentos.CellMediaOnClick mediaLink={vidMakino04} mediaType={MediaType.Video} mediaText="Machinery feature highlight clip" cellSpan="col-span-2" hoverTextColor="text-textColor"/>
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

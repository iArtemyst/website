'use client'

import "@/app/globals/globals.css";
import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";
import { MediaType } from "@/app/globals/project-galleries";

const imgEES02 = "_3d/_medAnim/EESAnim_Stills_01.png";
const imgEES03 = "_3d/_medAnim/EESAnim_Stills_02.png";
const imgEES04 = "_3d/_medAnim/EESAnim_Stills_03.png";
const imgEES05 = "_3d/_medAnim/EESAnim_Stills_04.png";
const imgEES06 = "_3d/_medAnim/EESAnim_Stills_05.png";
const imgEES07 = "_3d/_medAnim/EESAnim_Stills_06.png";
const imgEES14 = "_3d/_medAnim/EESAnim_Stills_13.png";
const imgEES15 = "_3d/_medAnim/EESAnim_Stills_14.png";
const imgEES16 = "_3d/_medAnim/EESAnim_Stills_15.png";
const imgEES18 = "_3d/_medAnim/EESAnim_Stills_17.png";
const imgEES19 = "_3d/_medAnim/EESAnim_Stills_18.png";
const imgEES20 = "_3d/_medAnim/EESAnim_Stills_19.png";
const imgEES21 = "_3d/_medAnim/EESAnim_Stills_20.png";

const vidEESA04 = "_3d/_medAnim/EESAnim_ClipA_004.mp4";
const vidEESB03 = "_3d/_medAnim/EESAnim_ClipB_003.mp4";
const vidEESB04 = "_3d/_medAnim/EESAnim_ClipB_004.mp4";
const vidEESB06 = "_3d/_medAnim/EESAnim_ClipB_006.mp4";
const vidEESC03 = "_3d/_medAnim/EESAnim_ClipC_003.mp4";

const bentoGap = "gap-[12px]";
const titleTextSize= "text-[24px]";
const paraTextSize = "text-[12px]";

function BentoBox() {
    return (
        <div className={`${bentoGap} relative z-0 grid grid-cols-2 w-[80%] h-auto justify-self-center rounded-3xl place-content-center text-white hover:cursor-pointer`}>
            <bentos.CellText cellSpan={`col-span-2`}>
                <bentos.HeaderSubtitleText htext="ETHICON MEDICAL DEVICES" stext="3D MODELING, MATERIAL DESIGN, RIGGING AND ANIMATION, RENDERING, VIDEO EDITING"/>
            </bentos.CellText>
            
            <bentos.CellMediaOnClick mediaLink={vidEESB03} mediaType={MediaType.Video} mediaText="Device Firing Staples into Tissue Motion Graphic" cellSpan={`col-span-2`}  hoverTextColor="text-textColor"/>

            <bentos.CellMediaOnClick mediaLink={imgEES04} mediaType={MediaType.Image} mediaText="Medical Device Stylized Motion Graphic" cellSpan="col-span-1"  hoverTextColor="text-textColor" />
            <bentos.CellMediaOnClick mediaLink={imgEES19} mediaType={MediaType.Image} mediaText="Device with Trocar Graphic" cellSpan="col-span-1" hoverTextColor="text-textColor"/>


            <bentos.CellText cellSpan={`col-span-2`}>
                    <bentos.ParagraphText textSize={paraTextSize} text="With years of experience in Medical Animation, I have produced hundreds of short videos and graphics for released and developing medical devices. Supporting collateral like IFU documents, medical applications, surgical instruction videos, proper device usage videos, and more." />
            </bentos.CellText>

            <bentos.CellMediaOnClick mediaLink={vidEESB04} mediaType={MediaType.Video} mediaText="Medical Staples Forming during Device Firing" cellSpan={`col-span-2`} hoverTextColor="text-textColor"/>

            <bentos.CellMediaOnClick mediaLink={imgEES03} mediaType={MediaType.Image} mediaText="Medical Device Animation Graphic" cellSpan="col-span-1"  hoverTextColor="text-textColor"/>
            <bentos.CellMediaOnClick mediaLink={imgEES02} mediaType={MediaType.Image} mediaText="Medical Material Exploration" cellSpan="col-span-1"  hoverTextColor="text-textColor"/>
            <bentos.CellMediaOnClick mediaLink={imgEES07} mediaType={MediaType.Image} mediaText="Medical Staple After Firing Comparison" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
            <bentos.CellMediaOnClick mediaLink={imgEES06} mediaType={MediaType.Image} mediaText="Medical Device Stylized Slice for Motion Graphic" cellSpan="col-span-1"  hoverTextColor="text-textColor"/>

            <bentos.CellMediaOnClick mediaLink={vidEESC03} mediaType={MediaType.Video} mediaText="Removing Tissue from Device" cellSpan="col-span-2" hoverTextColor="text-textVariant"/>

            <bentos.CellText cellSpan={`col-span-2`}>
                <bentos.ParagraphText textSize={paraTextSize} text="The technical precision required on these projects has helped me hone my craft and develop a strong eye for details. 
                    And the scope of the projects has given me oppurtunities to expand my toolbox with skills such as sculpting, soft body manipulation, character animation, simulations, and more." />
            </bentos.CellText>

            <bentos.CellMediaOnClick mediaLink={imgEES14} mediaType={MediaType.Image} mediaText="Proper Device Removal from Packaging Animation" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
            <bentos.CellMediaOnClick mediaLink={imgEES16} mediaType={MediaType.Image} mediaText="Harmonic Device Usage Technique Graphic" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
            <bentos.CellMediaOnClick mediaLink={imgEES20} mediaType={MediaType.Image} mediaText="Harmonic Device Gripping Tissue" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
            <bentos.CellMediaOnClick mediaLink={imgEES18} mediaType={MediaType.Image} mediaText="Device Usage Still Image" cellSpan="col-span-1" hoverTextColor="text-textColor"/>

            <bentos.CellMediaOnClick mediaLink={vidEESA04} mediaType={MediaType.Video} mediaText="Medical Staple Support Device Video" cellSpan="col-span-2" hoverTextColor="text-textColor"/>

            <bentos.CellText cellSpan="col-span-1">
                <bentos.ParagraphText textSize={paraTextSize} text="You can find some of my released work on the client Youtube, or their websites directly.
                    Due to the nature of time and research for releasing medical products, I have a lot of unreleased work for the industry yet to come." />
            </bentos.CellText>
            <bentos.CellMediaOnClick mediaLink={imgEES21} mediaType={MediaType.Image} mediaText="Medical Device Cleaning Technique Image" cellSpan="col-span-1" hoverTextColor="text-textColor"/>

            <bentos.CellMediaOnClick mediaLink={vidEESB06} mediaType={MediaType.Video} mediaText="Device Feature Motion Graphic Animation" cellSpan="col-span-2" hoverTextColor="text-textColor"/>
        </div>
    )
}

export default function EESDevicesProjectPage() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <BentoBox />
        </pages.GroupProjectPage>
    )
}

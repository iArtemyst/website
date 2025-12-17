'use client'

import "@/app/globals/globals.css";
import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";
import { MediaType } from "@/app/globals/project-galleries";
import { CheckIfMobileBrowser } from "@/app/globals/mobile-check";
import { LockedProjectPage } from "../globals/locked-project";

const imgMedViz00 = "_3d/_med-viz/MedVisualization_Stills_00.png";
const imgMedViz01 = "_3d/_med-viz/MedVisualization_Stills_01.png";
const imgMedViz02 = "_3d/_med-viz/MedVisualization_Stills_02.png";
const imgMedViz03 = "_3d/_med-viz/MedVisualization_Stills_03.png";
const imgMedViz04 = "_3d/_med-viz/MedVisualization_Stills_04.png";
const imgMedViz05 = "_3d/_med-viz/MedVisualization_Stills_05.png";
const imgMedViz06 = "_3d/_med-viz/MedVisualization_Stills_06.png";
const imgMedViz07 = "_3d/_med-viz/MedVisualization_Stills_07.png";
const imgMedViz08 = "_3d/_med-viz/MedVisualization_Stills_08.png";
const imgMedViz09 = "_3d/_med-viz/MedVisualization_Stills_09.png";
const imgMedViz10 = "_3d/_med-viz/MedVisualization_Stills_10.png";

const bentoGap = "gap-[12px]";
const titleTextSize= "text-[24px]";
const paraTextSize = "text-[12px]";

function BentoBox() {
    return (
        <div className={`grid-cols-2 ${bentoGap} relative z-0 grid grid-cols-2 w-[80%] h-auto justify-self-center rounded-3xl place-content-center text-white hover:cursor-pointer`}>
            <bentos.CellText cellSpan={`col-span-2`}>
                <bentos.HeaderSubtitleText htext="MEDICAL VISUALIZATION" stext="SCULPTING, TEXTURING, MODELING, RENDERING, COMPOSTING"/>
            </bentos.CellText>
            
            <bentos.CellMediaOnClick mediaLink={imgMedViz05} mediaType={MediaType.Image} mediaText="Medical Device Warning with Sculpted Organ" cellSpan="col-span-2" hoverTextColor="text-textVariant"/>

            <bentos.CellMediaOnClick mediaLink={imgMedViz02} mediaType={MediaType.Image} mediaText="Realistic Medical Eye Surgery Still" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            <bentos.CellMediaOnClick mediaLink={imgMedViz01} mediaType={MediaType.Image} mediaText="Hyper Realistic Macro Human Eye" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>

            <bentos.CellText cellSpan={`col-span-2`}>
                    <bentos.ParagraphText textSize={paraTextSize} text="I started supporting my visualization team as an intern in college, and quickly developed the skills for modeling and rendering highly realistic medical scenes and organic body parts. Due to the variety of projects and clients, I have had the opportunity to design high quality assets and renders in several of the industry leading softwares for 3D Modeling, Lighting and Material Design, and Render Compositing." />
            </bentos.CellText>

            <bentos.CellMediaOnClick mediaLink={imgMedViz10} mediaType={MediaType.Image} mediaText="Realistic 3D Organ Rendering" cellSpan="col-span-1"  hoverTextColor="text-textColor" />
            <bentos.CellMediaOnClick mediaLink={imgMedViz09} mediaType={MediaType.Image} mediaText="Realistic 3D Human Lung" cellSpan="col-span-1"  hoverTextColor="text-textVariant"/>
            <bentos.CellMediaOnClick mediaLink={imgMedViz04} mediaType={MediaType.Image} mediaText="Realistic 3D Human Heart" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            <bentos.CellMediaOnClick mediaLink={imgMedViz03} mediaType={MediaType.Image} mediaText="Spliced Heart Visual with Graphics" cellSpan="col-span-1" hoverTextColor="text-textColor"/>

            <bentos.CellText cellSpan={`col-span-2`}>
                <bentos.ParagraphText textSize={paraTextSize} text="I have been called on time and time again to recreate highly-releastic recreations of surgical techniques, medical device applications, and medical presentation support for clients. My technical support extends beyond 3D rendering and sculpting, I have also sketched and painted digital medical scenes to support informational documentation." />
            </bentos.CellText>

            <div className={`grid-cols-3 grid col-span-2 ${bentoGap} hover:z-20`}>
                <bentos.CellMediaOnClick mediaLink={imgMedViz08} mediaType={MediaType.Image} mediaText="Digital Painting of Energy Cutting" cellSpan="col-span-1"  hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaLink={imgMedViz07} mediaType={MediaType.Image} mediaText="Digital Painting of Energy Device" cellSpan="col-span-1"  hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaLink={imgMedViz06} mediaType={MediaType.Image} mediaText="Digital Painting of Surgical Technique" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            </div>

        </div>
    )
}

export default function ProjectMedVisualization() {
    return (
        <>
        <LockedProjectPage />
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <BentoBox />
        </pages.GroupProjectPage>
        </>
    )
}

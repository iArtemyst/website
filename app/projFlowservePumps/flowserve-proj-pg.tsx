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
                <bentos.HeaderSubtitleText htext="FLOWSERVE INDUSTRIAL PUMPS" stext="MODEL CONVERSION, MATERIALS, LIGHTING, ANIMATION, RENDERING"/>
            </bentos.CellText>

            <bentos.CellMediaOnClick mediaLink={vidFlowserve02} mediaType={MediaType.Video} mediaText="Flowserve Z-Series Pump Animation Clip" cellSpan="col-span-2" hoverTextColor="text-textVariant"/>

            <bentos.CellMediaOnClick mediaLink={imgFlowserve05} mediaType={MediaType.Image} mediaText="Flowserve Pump Company Website Graphic" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
            <bentos.CellMediaOnClick mediaLink={imgFlowserve04} mediaType={MediaType.Image} mediaText="Flowserve Pump inside Concrete Structure" cellSpan="col-span-1" hoverTextColor="text-textColor"/>

            <div className={`grid-cols-2 col-span-2 grid ${bentoGap} h-fit`}>
                <bentos.CellMediaOnClick mediaLink={imgFlowserve06} mediaType={MediaType.Image} mediaText="Flowserve Pump Ghosting Effect Graphic" cellSpan="col-span-2 md:col-span-1" hoverTextColor="text-textColor"/>
                <bentos.CellText cellSpan="col-span-2 md:col-span-1">
                    <bentos.ParagraphText textSize={paraTextSize} text="For several years I had the opportunity to work with a client through my company to create supportive informational and sales videos for Flowserve Industrial Pumps. Regular tasks included splicing and converting the CAD data into the appropriate 3D rendering program. From there I designed realistic materials to match the production models of the pumps, and created animation groups that would allow me to highlight features of the pumps." />
                </bentos.CellText>
            </div>

            <bentos.CellMediaOnClick mediaLink={vidFlowserve06} mediaType={MediaType.Video} mediaText="Flowserve Z-Series Pump Animation Clip" cellSpan="col-span-2" hoverTextColor="text-textColor"/>

            <bentos.CellMediaOnClick mediaLink={imgFlowserve07} mediaType={MediaType.Image} mediaText="Flowserve Pump Exploded View Graphic" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
            <bentos.CellMediaOnClick mediaLink={imgFlowserve09} mediaType={MediaType.Image} mediaText="Flowserve Pump Animation Graphic" cellSpan="col-span-1" hoverTextColor="text-textColor"/>


            <div className={`grid-cols-2 col-span-2 grid ${bentoGap} h-fit`}>
                <bentos.CellText cellSpan="col-span-2 md:col-span-1">
                    <bentos.ParagraphText textSize={paraTextSize} text="Beyond creating still image renders that were used in device support documentation and website graphics, I also worked on several short-feature videos for some of their featured products, including the Z-Series pumps. When working on these projects I developed storyboards, and led the animation and 3D design production, eventually rendering and compositing a final video with the assistance of an Art Director." />
                </bentos.CellText>
                <bentos.CellMediaOnClick mediaLink={imgFlowserve02} mediaType={MediaType.Image} mediaText="Z-Series Feature Construction Animation Still" cellSpan="col-span-2 md:col-span-1" hoverTextColor="text-textVariant"/>
            </div>

            <bentos.CellMediaOnClick mediaLink={imgFlowserve01} mediaType={MediaType.Image} mediaText="Z-Series Modular Design Motion Graphic" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
            <bentos.CellMediaOnClick mediaLink={imgFlowserve08} mediaType={MediaType.Image} mediaText="Flowserve Large Pump Concrete Construction" cellSpan="col-span-1" hoverTextColor="text-textColor"/>

            <bentos.CellMediaOnClick mediaLink={vidFlowserve08} mediaType={MediaType.Video} mediaText="Flowserve Large Pump Highlight Render" cellSpan="col-span-2" hoverTextColor="text-textColor"/>
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

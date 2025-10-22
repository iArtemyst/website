'use client'

import "@/app/globals/globals.css";
import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";
import { MediaType } from "@/app/globals/project-galleries";

const imgMamm01 = "_3d/_medAnim/Mammotome_Stills_0.png";
const imgMamm02 = "_3d/_medAnim/Mammotome_Stills_1.png";
const imgMamm03 = "_3d/_medAnim/Mammotome_Stills_2.png";
const imgMamm04 = "_3d/_medAnim/Mammotome_Stills_3.png";
const imgMamm05 = "_3d/_medAnim/Mammotome_Stills_4.png";
const imgMamm06 = "_3d/_medAnim/Mammotome_Stills_5.png";
const imgMamm07 = "_3d/_medAnim/Mammotome_Stills_6.png";

const vidMamm01 = "_3d/_medAnim/Mammotome_Clip_001.mp4";
const vidMamm02 = "_3d/_medAnim/Mammotome_Clip_002.mp4";
const vidMamm03 = "_3d/_medAnim/Mammotome_Clip_003.mp4";
const vidMamm04 = "_3d/_medAnim/Mammotome_Clip_004.mp4";
const vidMamm05 = "_3d/_medAnim/Mammotome_Clip_005.mp4";

const bentoGap = "gap-[12px]";
const titleTextSize= "text-[24px]";
const paraTextSize = "text-[12px]";

function BentoBox() {
    return (
        <div className={`grid-cols-2 ${bentoGap} relative z-0 grid grid-cols-2 w-[80%] h-auto justify-self-center rounded-3xl place-content-center text-white hover:cursor-pointer`}>
            <bentos.CellText cellSpan={`col-span-2`}>
                <bentos.HeaderSubtitleText htext="MAMMOTOME AUTOCORE ANIMATION" stext="MODELING, MATERIAL DESIGN, RIGGING, ANIMATION, RENDERING, VIDEO EDITING"/>
            </bentos.CellText>

            <bentos.CellMediaOnClick mediaLink={vidMamm01} mediaType={MediaType.Video} mediaText="Mammotome Device Intro Clip" cellSpan={`col-span-2`} hoverTextColor="text-textColor"/>

            <bentos.CellText cellSpan={`col-span-2`}>
                    <bentos.ParagraphText textSize={paraTextSize} text="I worked with this client over the course of two years as they continually refined and researched their upcoming medical product, the Mammotome Autcore. Through multiple rounds of storyboards, animatics, material and render quality tests, we arrived on a final direction and animation that would showcase the major new features of the device with a demonstration style video, also allowing the client to utilize the video as a teaching element for new adopters of the device." />
            </bentos.CellText>

            <bentos.CellMediaOnClick mediaLink={imgMamm06} mediaType={MediaType.Image} mediaText="Mammotome Device Still from Animation" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
            <bentos.CellMediaOnClick mediaLink={imgMamm03} mediaType={MediaType.Image} mediaText="Mammtome Device Still from Animation" cellSpan="col-span-1" hoverTextColor="text-textColor"/>

            <bentos.CellMediaOnClick mediaLink={vidMamm03} mediaType={MediaType.Video} mediaText="Mammtome Device Collecting Tissue Sample" cellSpan="col-span-2" hoverTextColor="text-textColor"/>

            <bentos.CellText cellSpan="col-span-1">
                <bentos.ParagraphText textSize={paraTextSize} text="It was important to capture the fine details of the device and the surgical operations, and much consideration was given to the materials and presentation of the device and the other video elements to be as accurate as possible with their depiction." />
            </bentos.CellText>


            <bentos.CellMediaOnClick mediaLink={imgMamm01} mediaType={MediaType.Image} mediaText="Mammotome Device Graphic" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
            <bentos.CellMediaOnClick mediaLink={imgMamm04} mediaType={MediaType.Image} mediaText="Mammotome Surgical Technique Clip" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
            <bentos.CellMediaOnClick mediaLink={imgMamm07} mediaType={MediaType.Image} mediaText="Mammotome Device Collecting Samples" cellSpan="col-span-1" hoverTextColor="text-textColor"/>

            <bentos.CellMediaOnClick mediaLink={vidMamm04} mediaType={MediaType.Video} mediaText="Mammotome Device Collecting Samples Animation" cellSpan="col-span-2" hoverTextColor="text-textColor"/>

        </div>
    )
}

export default function ProjectMammotome() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <BentoBox />
        </pages.GroupProjectPage>
    )
}

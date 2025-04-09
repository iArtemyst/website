'use client'

import "@/app/globals/globals.css";
import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";

import imgEES02 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_01.png";
import imgEES03 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_02.png";
import imgEES04 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_03.png";
import imgEES05 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_04.png";
import imgEES06 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_05.png";
import imgEES07 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_06.png";
import imgEES14 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_13.png";
import imgEES15 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_14.png";
import imgEES16 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_15.png";
import imgEES18 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_17.png";
import imgEES19 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_18.png";
import imgEES20 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_19.png";
import imgEES21 from "@/app/assets/images/_3d/_medAnim/EESAnim_Stills_20.png";

import imgMamm01 from "@/app/assets/images/_3d/_medAnim/Mammotome_Stills_0.png";
import imgMamm03 from "@/app/assets/images/_3d/_medAnim/Mammotome_Stills_2.png";
import imgMamm04 from "@/app/assets/images/_3d/_medAnim/Mammotome_Stills_3.png";

import vidEESA04 from "@/app/assets/videos/_3d/_medAnim/EESAnim_ClipA_004.mp4";
import vidEESB03 from "@/app/assets/videos/_3d/_medAnim/EESAnim_ClipB_003.mp4";
import vidEESB04 from "@/app/assets/videos/_3d/_medAnim/EESAnim_ClipB_004.mp4";
import vidEESB06 from "@/app/assets/videos/_3d/_medAnim/EESAnim_ClipB_006.mp4";
import vidEESC03 from "@/app/assets/videos/_3d/_medAnim/EESAnim_ClipC_003.mp4";

import vidMamm01 from "@/app/assets/videos/_3d/_medAnim/Mammotome_Clip_001.mp4";
import vidMamm02 from "@/app/assets/videos/_3d/_medAnim/Mammotome_Clip_002.mp4";

const bentoGap = "gap-[12px]";
const titleTextSize= "text-[24px]";
const paraTextSize = "text-[12px]";
const hoverTextColor = "text-slate-900";

function BentoBox() {
    return (
        <div className={`${bentoGap} relative z-0 grid grid-cols-2 w-[80%] h-auto justify-self-center rounded-3xl place-content-center text-white hover:cursor-pointer`}>
                <bentos.CellText cellSpan="col-span-full">
                    <bentos.HeaderText text="MEDICAL VISUALIZATION" textSize={titleTextSize}/>
                </bentos.CellText>
                
                <div className="grid grid-cols-2 gap-2 hover:z-20">
                    <bentos.CellMediaOnClick mediaLink={imgEES04} mediaText="Medical animation still" cellSpan="col-span-1"  hoverTextColor="text-textColor" />
                    <bentos.CellMediaOnClick mediaLink={imgEES06} mediaText="Medical animation still" cellSpan="col-span-1"  hoverTextColor="text-textColor"/>
                    <bentos.CellMediaOnClick mediaLink={imgEES03} mediaText="Medical animation still" cellSpan="col-span-1"  hoverTextColor="text-textColor"/>
                    <bentos.CellMediaOnClick mediaLink={imgEES02} mediaText="Medical animation still" cellSpan="col-span-1"  hoverTextColor="text-textColor"/>
                </div>

                <bentos.CellMediaOnClick mediaLink={vidEESA04} mediaText="Medical animation clip" cellSpan="col-span-1"  hoverTextColor="text-textColor"/>

                <bentos.CellMediaOnClick mediaLink={vidEESB03} mediaText="Medical animation clip" cellSpan="col-span-1" hoverTextColor="text-textColor"/>

                <div className={`${bentoGap} grid grid-rows-2 grid-cols-1 hover:z-20`}>
                    <bentos.CellText cellSpan="col-span-1">
                        <bentos.ParagraphText text="With over 6 years of experience in medical animation, I have produced over 50+ videos from short warning videos on medical tower screens, to device release marketing, to IFU demonstrations, and more." textSize={paraTextSize}/>
                    </bentos.CellText>
                    <div className={`${bentoGap} grid grid-cols-2 hover:z-40`}>
                        <bentos.CellMediaOnClick mediaLink={imgEES07} mediaText="Medical animation still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                        <bentos.CellMediaOnClick mediaLink={imgEES19} mediaText="Medical animation still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                    </div>
                </div>

                <div className={`${bentoGap} grid grid-cols-1 col-span-1 hover:z-20`}>
                    <bentos.CellMediaOnClick mediaLink={vidMamm01} mediaText="Medical animation clip" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                </div>

                <div className={`${bentoGap} grid grid-cols-2 col-span-1 hover:z-20`}>
                    <bentos.CellMediaOnClick mediaLink={imgEES14} mediaText="Medical animation still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                    <bentos.CellMediaOnClick mediaLink={imgEES16} mediaText="Medical animation still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                    <bentos.CellMediaOnClick mediaLink={imgEES18} mediaText="Medical animation still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                    <bentos.CellMediaOnClick mediaLink={imgEES20} mediaText="Medical animation still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                </div>

                <bentos.CellText cellSpan="col-span-1">
                    <bentos.ParagraphText text="The technical precision required on these projects has helped me hone my craft and develop a strong eye for details. 
                        And the scope of the projects has given me oppurtunities to expand my toolbox with skills such as sculpting, soft body manipulation, character animation, simulations, and more." textSize={paraTextSize}/>
                </bentos.CellText>

                <bentos.CellMediaOnClick mediaLink={vidEESB04} mediaText="Medical animation clip" cellSpan="col-span-1" hoverTextColor="text-textColor"/>

                <div className={`${bentoGap} grid grid-cols-4 hover:z-20`}>
                    <div className={`${bentoGap} col-span-4 grid grid-cols-2 hover:z-40`}>
                        <bentos.CellMediaOnClick mediaLink={imgEES02} mediaText="Medical animation still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                        <bentos.CellMediaOnClick mediaLink={imgEES15} mediaText="Medical animation still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                    </div>                  

                    <div className={`${bentoGap} col-span-4 hover:z-40`}>
                        <bentos.CellMediaOnClick mediaLink={vidMamm02} mediaText="Medical animation clip" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                    </div>
                </div>

                <div className={`${bentoGap} grid grid-cols-4 hover:z-20`}>
                    <div className={`${bentoGap} col-span-4 hover:z-40`}>
                        <bentos.CellMediaOnClick mediaLink={vidEESC03} mediaText="Medical animation clip" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                    </div>

                    <div className={`${bentoGap} col-span-4 grid grid-cols-2 hover:z-40`}>
                        <bentos.CellMediaOnClick mediaLink={imgEES21} mediaText="Medical animation still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                        <bentos.CellMediaOnClick mediaLink={imgEES14} mediaText="Medical animation still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                    </div>                  
                </div>

                <div className={`${bentoGap} col-span-2 grid grid-cols-4 hover:z-20`}>
                    <bentos.CellMediaOnClick mediaLink={imgMamm03} mediaText="Medical animation still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                    <bentos.CellMediaOnClick mediaLink={imgEES05} mediaText="Medical animation still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                    <bentos.CellMediaOnClick mediaLink={imgMamm01} mediaText="Medical animation still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                    <bentos.CellMediaOnClick mediaLink={imgMamm04} mediaText="Medical animation still" cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                </div>
                
                <bentos.CellMediaOnClick mediaLink={vidEESB06} mediaText="Medical animation clip" cellSpan="col-span-1" hoverTextColor="text-textColor"/>

                <bentos.CellText cellSpan="col-span-1">
                    <bentos.ParagraphText text="You can find some of my released work on the client Youtube, or their websites directly.
                        Due to the nature of time and research for releasing medical products, I have a lot of unreleased work for the industry yet to come." textSize={paraTextSize}/>
                </bentos.CellText>
        </div>
    )
}

export default function ProjectMedAnims() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
                <BentoBox />
        </pages.GroupProjectPage>
    )
}

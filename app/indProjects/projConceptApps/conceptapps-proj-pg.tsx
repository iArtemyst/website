'use client'

import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";

import imgConceptAppA01 from "@/app/assets/_motionui/_concept-apps/conceptApp_Bank_00.jpg";
import imgConceptAppA02 from "@/app/assets/_motionui/_concept-apps/conceptApp_Bank_01.jpg";
import imgConceptAppA03 from "@/app/assets/_motionui/_concept-apps/conceptApp_Bank_02.jpg";
import imgConceptAppA04 from "@/app/assets/_motionui/_concept-apps/conceptApp_Bank_03.jpg";
import imgConceptAppA05 from "@/app/assets/_motionui/_concept-apps/conceptApp_Bank_04.jpg";
import imgConceptAppB01 from "@/app/assets/_motionui/_concept-apps/conceptApp_Podcast_00.jpg";
import imgConceptAppB02 from "@/app/assets/_motionui/_concept-apps/conceptApp_Podcast_01.jpg";
import imgConceptAppB03 from "@/app/assets/_motionui/_concept-apps/conceptApp_Podcast_02.jpg";
import imgConceptAppB04 from "@/app/assets/_motionui/_concept-apps/conceptApp_Podcast_03.jpg";
import imgConceptAppB05 from "@/app/assets/_motionui/_concept-apps/conceptApp_Podcast_04.jpg";
import imgConceptAppC01 from "@/app/assets/_motionui/_concept-apps/conceptApp_Steam_05.jpg";
import imgConceptAppC02 from "@/app/assets/_motionui/_concept-apps/conceptApp_Steam_01.jpg";
import imgConceptAppC03 from "@/app/assets/_motionui/_concept-apps/conceptApp_Steam_02.jpg";
import imgConceptAppC04 from "@/app/assets/_motionui/_concept-apps/conceptApp_Steam_03.jpg";
import imgConceptAppC05 from "@/app/assets/_motionui/_concept-apps/conceptApp_Steam_04.jpg";

function BentoBoxA() {
    return (
        <div className="relative z-auto grid grid-cols-1 w-[80%] h-fit justify-self-center rounded-3xl place-content-center gap-[12px] text-white
                        hover:cursor-pointer">
                    <bentos.CellText cellSpan="col-span-full">
                        <bentos.HeaderText text="CONCEPTUAL APPLICATION DESIGN: APPLE BANK | USER EXPERIENCE" textSize="text-[16px]"/>
                    </bentos.CellText>
                    <div className="grid grid-cols-3 grid-rows-2 gap-[12px] hover:z-20">
                        <bentos.CellMediaOnClick mediaText="Apple Bank App Design" mediaLink={imgConceptAppA02} cellSpan="col-span-2 row-span-2" hoverTextColor="text-textColor"/>

                        <bentos.CellMediaOnClick mediaText="Concepting layouts" mediaLink={imgConceptAppA01} cellSpan="col-span-1" hoverTextColor="text-textColor"/>

                        <bentos.CellText cellSpan="col-span-1">
                            <bentos.ParagraphText text="Just a quick exploration of a bank app following Apple branding. Designed in Adobe Illustrator and Figma" textSize="text-[12px]"/>
                        </bentos.CellText>
                    </div>
                
                <div className="grid grid-cols-3 gap-[12px] hover:z-20">
                    <bentos.CellMediaOnClick mediaText="Apple Cash Concept Page" mediaLink={imgConceptAppA03} cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                    <bentos.CellMediaOnClick mediaText="Apple Credit Concept Page" mediaLink={imgConceptAppA04} cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                    <bentos.CellMediaOnClick mediaText="Apple Rewards Concept Page" mediaLink={imgConceptAppA05} cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                </div>
        </div>
    )
}

function BentoBoxB() {
    return (
        <div className="relative z-auto grid grid-cols-1 w-[80%] h-fit justify-self-center rounded-3xl place-content-center gap-[12px] text-white
                        hover:cursor-pointer">
                    <bentos.CellText cellSpan="col-span-full">
                        <bentos.HeaderText text="CONCEPTUAL APPLICATION DESIGN: CANDLE PODCAST | USER EXPERIENCE" textSize="text-[16px]"/>
                    </bentos.CellText>
                    <div className="grid grid-cols-3 grid-rows-2 gap-[12px] hover:z-20">
                        <bentos.CellMediaOnClick mediaText="Podcast collected screens designs" mediaLink={imgConceptAppB01} cellSpan="col-span-1" hoverTextColor="text-textColor"/>

                        <bentos.CellMediaOnClick mediaText='Podcast design page "Play Now"' mediaLink={imgConceptAppB02} cellSpan="col-span-2 row-span-2" hoverTextColor="text-textColor"/>

                        <bentos.CellText cellSpan="col-span-1">
                            <bentos.ParagraphText text="Exploring a concept idea for a podcast app that offered improved discovery and search features." textSize="text-[12px]"/>
                        </bentos.CellText>
                    </div>
                
                <div className="grid grid-cols-3 gap-[12px] hover:z-20">
                    <bentos.CellMediaOnClick mediaText='Podcast design page "Variable Queue"' mediaLink={imgConceptAppB03} cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                    <bentos.CellMediaOnClick mediaText='Podcast design page "New Library"' mediaLink={imgConceptAppB04} cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                    <bentos.CellMediaOnClick mediaText='Podcast design page "New Discover"' mediaLink={imgConceptAppB05} cellSpan="col-span-1" hoverTextColor="text-textColor"/>
                </div>
        </div>
    )
}

function BentoBoxC() {
    return (
        <div className="relative z-auto grid grid-cols-1 w-[80%] h-fit justify-self-center rounded-3xl place-content-center gap-[12px] text-white
                        hover:cursor-pointer">
                    <bentos.CellText cellSpan="col-span-full">
                        <bentos.HeaderText text="CONCEPTUAL REDESIGN OF STEAM APP | USER EXPERIENCE" textSize="text-[16px]"/>
                    </bentos.CellText>
                    <div className="grid grid-cols-3 grid-rows-2 gap-[12px] hover:z-20">
                        <bentos.CellMediaOnClick mediaText="Evaluating the current app design" mediaLink={imgConceptAppC02} cellSpan="col-span-2 row-span-2"  hoverTextColor="text-textVariant"/>

                        <bentos.CellMediaOnClick mediaText="Comparing new concept to old design" mediaLink={imgConceptAppC01} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>

                        <bentos.CellText cellSpan="col-span-1">
                            <bentos.ParagraphText text="Designing a better experience for users of the Steam phone application" textSize="text-[12px]"/>
                        </bentos.CellText>
                    </div>
                
                <div className="grid grid-cols-3 gap-[12px] hover:z-20">
                    <bentos.CellMediaOnClick mediaText="Gathering research data from local gamers" mediaLink={imgConceptAppC03} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                    <bentos.CellMediaOnClick mediaText="Final app design mockup" mediaLink={imgConceptAppC04} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                    <bentos.CellMediaOnClick mediaText="Final app improvements in comparison" mediaLink={imgConceptAppC05} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                </div>
        </div>
    )
}

export default function ProjectConceptApps() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <BentoBoxA />
            <BentoBoxB />
            <BentoBoxC />
        </pages.GroupProjectPage>
    )
}

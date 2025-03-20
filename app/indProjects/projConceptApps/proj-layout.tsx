'use client'

import React from "react";
import "@/app/globals/globals.css";
import { CardHoverFX } from "@/app/globals/card-hover-fx";
import Link from "next/link";

import * as fonts from "@/app/globals/fonts";
import * as bentos from "@/app/globals/bento-boxes";

import imgConceptAppA01 from "@/app/assets/images/_motionui/_concept-apps/conceptApp_Bank_00.jpg";
import imgConceptAppA02 from "@/app/assets/images/_motionui/_concept-apps/conceptApp_Bank_01.jpg";
import imgConceptAppA03 from "@/app/assets/images/_motionui/_concept-apps/conceptApp_Bank_02.jpg";
import imgConceptAppA04 from "@/app/assets/images/_motionui/_concept-apps/conceptApp_Bank_03.jpg";
import imgConceptAppA05 from "@/app/assets/images/_motionui/_concept-apps/conceptApp_Bank_04.jpg";
import imgConceptAppB01 from "@/app/assets/images/_motionui/_concept-apps/conceptApp_Podcast_00.jpg";
import imgConceptAppB02 from "@/app/assets/images/_motionui/_concept-apps/conceptApp_Podcast_01.jpg";
import imgConceptAppB03 from "@/app/assets/images/_motionui/_concept-apps/conceptApp_Podcast_02.jpg";
import imgConceptAppB04 from "@/app/assets/images/_motionui/_concept-apps/conceptApp_Podcast_03.jpg";
import imgConceptAppB05 from "@/app/assets/images/_motionui/_concept-apps/conceptApp_Podcast_04.jpg";
import imgConceptAppB06 from "@/app/assets/images/_motionui/_concept-apps/conceptApp_Podcast_05.jpg";
import imgConceptAppC01 from "@/app/assets/images/_motionui/_concept-apps/conceptApp_Steam_00.jpg";
import imgConceptAppC02 from "@/app/assets/images/_motionui/_concept-apps/conceptApp_Steam_01.jpg";
import imgConceptAppC03 from "@/app/assets/images/_motionui/_concept-apps/conceptApp_Steam_02.jpg";
import imgConceptAppC04 from "@/app/assets/images/_motionui/_concept-apps/conceptApp_Steam_03.jpg";
import imgConceptAppC05 from "@/app/assets/images/_motionui/_concept-apps/conceptApp_Steam_04.jpg";
import imgConceptAppC06 from "@/app/assets/images/_motionui/_concept-apps/conceptApp_Steam_05.jpg";

function BentoBoxA() {
    return (
        <div className="relative z-0 grid grid-cols-1 w-[80%] h-fit justify-self-center rounded-3xl place-content-center gap-[12px] text-white
                        hover:cursor-pointer">
                    <div className="grid grid-cols-3 gap-[12px]">
                        <div className="w-full h-full rounded-3xl content-center p-[8px] col-span-full row-span-full shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30] transition-all duration-200">
                            <bentos.HeaderText text="CONCEPTUAL APPLICATION DESIGN: APPLE BANK | USER EXPERIENCE" textSize="text-[16px]"/>
                        </div>

                        <bentos.Cell2SquareImage cellImgAlt="" cellImgLink={imgConceptAppA02} />

                        <bentos.Cell1ColImage cellImgAlt="" cellImgLink={imgConceptAppA01} />

                        <div className="w-full h-full rounded-3xl content-center p-[32px] row-span-1 shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30] transition-all duration-200">
                            <bentos.ParagraphText text="Just a quick exploration of a bank app following Apple branding. Designed in Adobe Illustrator and Figma" textSize="text-[12px]"/>
                        </div>
                    </div>
                
                <div className="grid grid-cols-3 gap-[12px]">
                    <bentos.Cell1ColImage cellImgAlt="" cellImgLink={imgConceptAppA03} />
                    <bentos.Cell1ColImage cellImgAlt="" cellImgLink={imgConceptAppA04} />
                    <bentos.Cell1ColImage cellImgAlt="" cellImgLink={imgConceptAppA05} />
                </div>
        </div>
    )
}

function BentoBoxB() {
    return (
        <div className="relative z-0 grid grid-cols-1 w-[80%] h-fit justify-self-center rounded-3xl place-content-center gap-[12px] text-white
                        hover:cursor-pointer">
                    <div className="grid grid-cols-3 gap-[12px]">
                        <div className="w-full h-full rounded-3xl content-center p-[8px] col-span-full row-span-full shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30] transition-all duration-200">
                            <bentos.HeaderText text="CONCEPTUAL APPLICATION DESIGN: CANDLE PODCAST | USER EXPERIENCE" textSize="text-[16px]"/>
                        </div>

                        <bentos.Cell1ColImage cellImgAlt="" cellImgLink={imgConceptAppB01} />

                        <bentos.Cell2SquareImage cellImgAlt="" cellImgLink={imgConceptAppB02} />

                        <div className="w-full h-full rounded-3xl content-center p-[32px] row-span-1 shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30] transition-all duration-200">
                            <bentos.ParagraphText text="Exploring a concept idea for a podcast app that offered improved discovery and search features." textSize="text-[12px]"/>
                        </div>
                    </div>
                
                <div className="grid grid-cols-3 gap-[12px]">
                    <bentos.Cell1ColImage cellImgAlt="" cellImgLink={imgConceptAppB03} />
                    <bentos.Cell1ColImage cellImgAlt="" cellImgLink={imgConceptAppB04} />
                    <bentos.Cell1ColImage cellImgAlt="" cellImgLink={imgConceptAppB05} />
                </div>
        </div>
    )
}

function BentoBoxC() {
    return (
        <div className="relative z-0 grid grid-cols-1 w-[80%] h-fit justify-self-center rounded-3xl place-content-center gap-[12px] text-white
                        hover:cursor-pointer">
                    <div className="grid grid-cols-3 gap-[12px]">
                        <div className="w-full h-full rounded-3xl content-center p-[8px] col-span-full row-span-full shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30] transition-all duration-200">
                            <bentos.HeaderText text="CONCEPTUAL REDESIGN OF STEAM APP | USER EXPERIENCE" textSize="text-[16px]"/>
                        </div>

                        <bentos.Cell2SquareImage cellImgAlt="" cellImgLink={imgConceptAppC02} />

                        <bentos.Cell1ColImage cellImgAlt="" cellImgLink={imgConceptAppC01} />

                        <div className="w-full h-full rounded-3xl content-center p-[32px] row-span-1 shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30] transition-all duration-200">
                            <bentos.ParagraphText text="Designing a better experience for users of the Steam phone application" textSize="text-[12px]"/>
                        </div>
                    </div>
                
                <div className="grid grid-cols-3 gap-[12px]">
                    <bentos.Cell1ColImage cellImgAlt="" cellImgLink={imgConceptAppC03} />
                    <bentos.Cell1ColImage cellImgAlt="" cellImgLink={imgConceptAppC04} />
                    <bentos.Cell1ColImage cellImgAlt="" cellImgLink={imgConceptAppC05} />
                </div>
        </div>
    )
}

export default function ProjectConceptApps() {
    return (
        <div className="absolute left-0 right-0 top-0 bottom-0 py-[48px] overflow-scroll no-scrollbar bg-bgColor">
            <div className="grid grid-cols-1 gap-[24px]">
                <BentoBoxA />
                <BentoBoxB />
                <BentoBoxC />
            </div>
        </div>
    )
}

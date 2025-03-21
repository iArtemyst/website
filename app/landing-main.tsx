'use client'

import React from "react";
import "./globals/globals.css";

import vidFrontA from "/app/assets/videos/grp_card_3d_front.mp4";
import vidFrontB from "/app/assets/videos/grp_card_code_front.mp4";
import vidFrontC from "/app/assets/videos/grp_card_game_front.mp4";
import vidFrontD from "/app/assets/videos/grp_card_motion_front.mp4";
import vidBackA from "/app/assets/videos/grp_card_3d_back.mp4";
import vidBackB from "/app/assets/videos/grp_card_code_back.mp4";
import vidBackC from "/app/assets/videos/grp_card_game_back.mp4";
import vidBackD from "/app/assets/videos/grp_card_motion_back.mp4";

const group3D = './grpProjects3D';
const groupCode = './grpProjectsCode';
const groupGame = './grpProjectsGame';
const groupGraphics = './grpProjectsMotion';

import * as cards from "@/app/globals/hover-cards";
import * as fonts from "@/app/globals/fonts";
import * as pages from "@/app/globals/pages-main";



function LandingTitleText() {
    return (
        <div className="absolute bottom-0 left-0 justify-center p-8">
            <div className="relative flex-col w-fit h-auto content-center">
                <div className={`w-fit h-fit flex justify-self-start gap-[18px] px-2`}>
                    <p className={`${fonts.dotoBold.className} text-[28px] text-secColor leading-none tracking-tighter`}>Hello, I'm </p>
                    <p className={`${fonts.dotoBlack.className} text-[28px] text-priColor leading-none tracking-tighter`}>Eevee</p>
                    <p className={`${fonts.dotoBold.className} text-[28px] text-secColor leading-none tracking-tighter`}>And I Am A</p>
                </div>
                <div className="h-fit mb-1 mt-2">
                    <p className={`${fonts.dotoBlack.className} text-priColor w-[600px] text-[92px] text-left text-balance leading-none -my-[12px]`}>CREATIVE</p>
                    <p className={`${fonts.dotoBlack.className} text-priColor w-[600px] text-[92px] text-left text-balance leading-none -my-[12px]`}>DESIGNER</p>
                </div>
            </div>
        </div>
    )
}

function LandingAboutText() {
    return (
    <div className="absolute flex-row right-0 bottom-0 w-[50%] text-secColor text-right p-8">
        <p className={`${fonts.dotoBlack.className} text-textMed`}>I make things, all sorts of things.</p>
        <p className={`${fonts.dotoBlack.className} text-balance text-text`}>I like to model stuff, animate things, generate procedural systems, create better experiences, and make things beautiful. Welcome to my portfolio.</p>
    </div>
    )
}

function CardsContainer() {
    return(
        <div className="absolute left-[50%] -translate-x-[50%] top-[38%] -translate-y-[50%] overflow-visible grid grid-cols-1 content-center">
            <div className="relative flex w-full h-auto justify-center">
                    <cards.SkillCard 
                        cardLink={group3D} 
                        cardTitle="3D Page" 
                        cardDesc="Description" 
                        cardVid={vidFrontA} 
                        cardBack={vidBackA}
                        startAngle="rotate-[15deg]"
                        />

                    <cards.SkillCard 
                        cardLink={groupGame} 
                        cardTitle="Game Page" 
                        cardDesc="Description" 
                        cardVid={vidFrontC} 
                        cardBack={vidBackC}
                        startAngle="rotate-[-15deg]"
                        />

                    <cards.SkillCard 
                    cardLink={groupGraphics}
                    cardTitle="Interactive Projects" 
                    cardDesc="Description" 
                    cardVid={vidFrontD}  
                    cardBack={vidBackD}
                    startAngle="rotate-[15deg]"
                    />

                    <cards.SkillCard 
                        cardLink={groupCode} 
                        cardTitle="Code Playground" 
                        cardDesc="Description" 
                        cardVid={vidFrontB}  
                        cardBack={vidBackB}
                        startAngle="rotate-[-15deg]"
                        />
            </div>
        </div>
    )
}

export default function LandingMain() {
    return (
        <pages.GroupProjectPage>
            <LandingTitleText />
            <CardsContainer />
            <LandingAboutText  />
        </pages.GroupProjectPage>

    )
}

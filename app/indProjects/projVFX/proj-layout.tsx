'use client'

import React, { useState, MouseEvent, useCallback } from "react";
import "@/app/globals/globals.css";
import Card01 from "/app/assets/videos/_game/_vfx/vfx_fireball_clip.mp4";
import Card02 from "/app/assets/videos/_game/_vfx/vfx_laserbeam_clip.mp4";
import Card03 from "/app/assets/videos/_game/_vfx/vfx_magicshield_clip.mp4";
import Card04 from "/app/assets/videos/_game/_vfx/vfx_power-sphere_clip.mp4";
import Card05 from "/app/assets/videos/_game/_vfx/vfx_powerup_clip.mp4";
import * as cards from "@/app/globals/hover-cards";
import * as fonts from "@/app/globals/fonts";
import { CardHoverFX } from "@/app/globals/card-hover-fx";

const linkGrpGame = '../grpProjectsGame';

const cardWidth = "w-[300px]";
const hoverSize = "group-hover:w-[480px]";
const hoverMarg = "group-hover:m-[-90px]";
const cardContMargin = "mx-[64px]";


function ProjectDetailText({TitleText="", MoreText=""}:{TitleText:String, MoreText:String}) {
    return (
        <div className="absolute left-[50%] -translate-x-[50%] bottom-[48px] w-full z-0">
            <div className="w-[70%] justify-self-center border-white border-[1px] px-[16px] py-[8px] opacity-30 hover:opacity-100 transition-all duration-200">
                <div className={`${fonts.dotoBlack.className} text-priColor w-full text-[48px] text-left text-nowrap leading-none relative flex-col h-auto content-center`}>
                    <p>{TitleText}</p>
                </div>
                <div className={`${fonts.dotoBlack.className} text-textSml text-pretty relative flex-row right-0 bottom-0 w-full text-secColor text-left`}>
                    <p>{MoreText}</p>
                </div>
            </div>
        </div>

    )
}

function CardsContainer() {
    return(
        <div className="absolute left-[50%] -translate-x-[50%] top-[40%] -translate-y-[50%] overflow-visible w-[75%]">
            <div className="relative grid grid-cols-5 w-full h-auto justify-center place-items-center">
                <cards.DetailCard
                    width={cardWidth}
                    hoverWidth={hoverSize}
                    hoverMargin={hoverMarg}
                    containerMargin={cardContMargin}
                    cardText="Casting a fireball">
                        <cards.VidDetailCard cardVid={Card01}/>
                </cards.DetailCard>

                <cards.DetailCard
                    width={cardWidth}
                    hoverWidth={hoverSize}
                    hoverMargin={hoverMarg}
                    containerMargin={cardContMargin}
                    cardText="Activating a laser beam">
                        <cards.VidDetailCard cardVid={Card02}/>
                </cards.DetailCard>

                <cards.DetailCard
                    width={cardWidth}
                    hoverWidth={hoverSize}
                    hoverMargin={hoverMarg}
                    containerMargin={cardContMargin}
                    cardText="Summoning a protective shield">
                        <cards.VidDetailCard cardVid={Card03}/>
                </cards.DetailCard>

                <cards.DetailCard
                    width={cardWidth}
                    hoverWidth={hoverSize}
                    hoverMargin={hoverMarg}
                    containerMargin={cardContMargin}
                    cardText="Hurling a sphere of energy">
                        <cards.VidDetailCard cardVid={Card04}/>
                </cards.DetailCard>

                <cards.DetailCard
                    width={cardWidth}
                    hoverWidth={hoverSize}
                    hoverMargin={hoverMarg}
                    containerMargin={cardContMargin}
                    cardText="Powering up to the next level">
                        <cards.VidDetailCard cardVid={Card05}/>
                </cards.DetailCard>
            </div>
        </div>
    )
}

export default function ProjectVFXPage() {
    return (
        <div className="absolute left-0 top-0 bottom-0 right-0 overflow-y-scroll no-scrollbar py-[48px] bg-bgColor">
            <ProjectDetailText 
                TitleText="STYLIZED VFX"
                MoreText="In an effort to practice my 2D shader development, I quickly rigged and animated a simple character model and set about recreating some stylized shaders applied to simple geometry.
                The VFX assets are made of several layers of meshes, shaders, and timed animations. And with the fireball animation, I developed a procedural system to spawn and cast a fireball along a spline in scene." /> 
            <CardsContainer />
        </div>
    )
}
'use client'

import React, { useState, MouseEvent, useCallback } from "react";
import "@/app/globals/globals.css";
import Card01 from "/app/assets/videos/_3d/_horrorHouses/HH_FNAF_Card.mp4";
import Card02 from "/app/assets/videos/_3d/_horrorHouses/HH_Halloween_Card.mp4";
import Card03 from "/app/assets/videos/_3d/_horrorHouses/HH_Midsommar_Card.mp4";
import * as cards from "@/app/globals/hover-cards";
import * as fonts from "@/app/globals/fonts";
import * as pages from "@/app/globals/pages-main";
import { CardHoverFX } from "@/app/globals/card-hover-fx";

const cardWidth = "w-[240px]";
const cardHoverWidth = "group-hover:w-[360px]";
const cardContMargin = "m-[24px]";
const cardHoverMargin = "group-hover:mx-[-60px]";

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
        <div className="absolute left-[50%] -translate-x-[50%] top-[40%] -translate-y-[50%] overflow-visible grid grid-cols-1 content-center">
            <div className="relative flex w-full h-auto justify-center">
                    <cards.DetailCard
                        width={cardWidth}
                        hoverWidth={cardHoverWidth}
                        containerMargin={cardContMargin}
                        hoverMargin={cardHoverMargin}  
                        cardText="Five Nights at Freddy's">
                            <cards.VidDetailPlayCard cardVid={Card01}/>
                    </cards.DetailCard>

                    <cards.DetailCard
                        width={cardWidth}
                        hoverWidth={cardHoverWidth}
                        containerMargin={cardContMargin}
                        hoverMargin={cardHoverMargin}  
                        cardText="Halloween House">
                            <cards.VidDetailPlayCard cardVid={Card02}/>
                    </cards.DetailCard>

                    <cards.DetailCard
                        width={cardWidth}
                        hoverWidth={cardHoverWidth}
                        containerMargin={cardContMargin}
                        hoverMargin={cardHoverMargin} 
                        cardText="Midsommar Tent">
                            <cards.VidDetailPlayCard cardVid={Card03}/>
                    </cards.DetailCard>
            </div>
        </div>
    )
}

export default function HorrorHousesPage() {
    return (
        <pages.GroupProjectPage>
                <CardsContainer />
                <ProjectDetailText TitleText="HORROR HOUSES" MoreText="A good friend of mine, @KaitlinMooresArt, posted drawings she did of a few famous structures from horror films. 
                    I loved the style of the 2D drawings and reached out to her about making 3D models based off her drawings. 
                    She approved, and I spent a weekend modeling, adding lights and textures, and then rendering short animations to showcase the new dimension." />  
        </pages.GroupProjectPage>
    )
}
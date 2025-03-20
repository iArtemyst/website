'use client'

import React, { useState, MouseEvent, useCallback } from "react";
import "@/app/globals/globals.css";
import Card01 from "/app/assets/images/_game/_utopaea/utopaea_card_01_00.png";
import Card02 from "/app/assets/images/_game/_utopaea/utopaea_card_02_00.png";
import Card03 from "/app/assets/images/_game/_utopaea/utopaea_card_03_00.png";
import Card04 from "/app/assets/images/_game/_utopaea/utopaea_card_04_00.png";
import * as cards from "@/app/globals/hover-cards";
import * as fonts from "@/app/globals/fonts";
import { CardHoverFX } from "@/app/globals/card-hover-fx";

const cardWidth = "w-[240px]";
const cardHoverWidth = "group-hover:w-[360px]";
const cardContMargin = "m-[12px]";
const cardHoverMargin = "group-hover:mx-[-60px]";


function ProjectDetailText({TitleText="", MoreText=""}:{TitleText:String, MoreText:String}) {
    return (
        <div className="absolute left-[50%] -translate-x-[50%] bottom-[48px] w-full z-0">
            <div className="w-[90%] justify-self-center border-white border-[1px] px-[16px] py-[8px] opacity-30 hover:opacity-100 transition-all duration-200">
                <div className={`${fonts.dotoBlack.className} text-priColor w-full text-[48px] text-left text-nowrap leading-none relative h-auto content-center my-[8px]`}>
                    <p>{TitleText}</p>
                </div>
                <div className={`${fonts.dotoBlack.className} text-[10px] relative flex-row right-0 bottom-0 w-full text-secColor text-left`}>
                    <p>{MoreText}</p>
                </div>
            </div>
        </div>
    )
}

function CardsContainer() {
    return(
        <div className="absolute left-[50%] -translate-x-[50%] top-[40%] -translate-y-[50%] overflow-visible grid grid-cols-1 content-center z-10">
            <div className="relative flex w-full h-auto justify-center">
                    <cards.DetailCard
                        width={cardWidth}
                        hoverWidth={cardHoverWidth}
                        containerMargin={cardContMargin}
                        hoverMargin={cardHoverMargin} 
                        cardText="Asset sketching and modeling">
                            <cards.ImgDetailCard imgSrc={Card03} imgAlt="Asset sketching and modeling"/>
                    </cards.DetailCard>

                    <cards.DetailCard
                        width={cardWidth}
                        hoverWidth={cardHoverWidth}
                        containerMargin={cardContMargin}
                        hoverMargin={cardHoverMargin} 
                        cardText="Level design and map exploration">
                            <cards.ImgDetailCard imgSrc={Card02} imgAlt="Level design and map exploration"/>
                    </cards.DetailCard>

                    <cards.DetailCard
                        width={cardWidth}
                        hoverWidth={cardHoverWidth}
                        containerMargin={cardContMargin}
                        hoverMargin={cardHoverMargin}
                        cardText="Detailed render shots">
                            <cards.ImgDetailCard imgSrc={Card04} imgAlt="Detailed render shots"/>
                    </cards.DetailCard>

                    <cards.DetailCard
                        width={cardWidth}
                        hoverWidth={cardHoverWidth}
                        containerMargin={cardContMargin}
                        hoverMargin={cardHoverMargin}
                        cardText="Utopaea Game Level">
                            <cards.ImgDetailCard imgSrc={Card01} imgAlt="Utopaea Game Level"/>
                    </cards.DetailCard>
            </div>
        </div>
    )
}

export default function ProjectUtopaeaPage() {
    return (
        <div className="absolute left-0 top-0 bottom-0 right-0 overflow-hidden bg-bgColor">
            <div className="absolute left-0 top-0 bottom-0 right-0 bg-gradient-to-t from-gradientColor1 to-gradientColor2">
                <CardsContainer />
                <ProjectDetailText 
                    TitleText="UTOPAEA LEVEL & GAME DESIGN" 
                    MoreText="What began as a capstone project in college, turned into a years long passion project. I have always had a great desire to make assets and levels for games, and this project was my first foray into a full scale design for an active FPS game.
                        Tapping into the games I was playing at the time, and my skills in researching and breaking down games and their mechanics, I deconstructed Overwatch maps, and rebuilt something new.
                        Beyond creating a map/level that catered to the fast action and unique design of Overwatch, I also set to design a new game mode to accompany the design of my level. 
                        Funny enough, several months after showcasing my senior project, Overwatch announced a new game mode that was quite similar to that which I had been designing.
                        After some time, I have returned to this project, remodeled many of the assets, and reconsidered the map layout now that the official game mode had been released.
                        While I have imported the level in Unreal Engine, I have much to do with texturing, shading, and more asset design before I truly call this project complete." />  
            </div>
        </div>
    )
}
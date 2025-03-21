'use client'

import React, { useState, MouseEvent, useCallback } from "react";
import "@/app/globals/globals.css";
import Card01 from "/app/assets/images/_game/_islandCity/islandcity_still-a_00.png";
import Card02 from "/app/assets/images/_game/_islandCity/islandcity_still-b_00.png";
import Card03 from "/app/assets/videos/_game/_islandCity/islandCity_clip001.mp4";
import * as cards from "@/app/globals/hover-cards";
import * as fonts from "@/app/globals/fonts";
import * as pages from "@/app/globals/pages-main";
import { CardHoverFX } from "@/app/globals/card-hover-fx";

const cardWidth = "w-[240px]";
const cardHoverWidth = "group-hover:w-[360px]";
const cardWidth2 = "w-[360px]";
const cardHoverWidth2 = "group-hover:w-[480px]";
const cardContMargin = "m-[12px]";
const cardHoverMargin = "group-hover:mx-[-60px]";

function ProjectDetailText({TitleText="", MoreText=""}:{TitleText:String, MoreText:String}) {
    return (
        <div className="absolute left-[50%] -translate-x-[50%] bottom-[48px] w-full z-0">
            <div className="w-[70%] justify-self-center border-white border-[1px] px-[16px] py-[8px] opacity-30 hover:opacity-100 transition-all duration-200">
                <div className={`${fonts.dotoBlack.className} text-priColor w-full text-[48px] text-left text-nowrap leading-none relative h-auto content-center my-[8px]`}>
                    <p>{TitleText}</p>
                </div>
                <div className={`${fonts.dotoBlack.className} text-[14px] relative flex-row right-0 bottom-0 w-full text-secColor text-left`}>
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
                        cardText="System Nodes and Final Group">
                            <cards.ImgDetailCard imgSrc={Card01} imgAlt=""/>
                    </cards.DetailCard>

                    <cards.DetailCard
                        width={cardWidth2}
                        hoverWidth={cardHoverWidth2}
                        containerMargin={cardContMargin}
                        hoverMargin={cardHoverMargin} 
                        cardText="Four Seasons Showcase">
                            <cards.VidDetailPlayCard cardVid={Card03}/>
                    </cards.DetailCard>

                    <cards.DetailCard
                        width={cardWidth}
                        hoverWidth={cardHoverWidth}
                        containerMargin={cardContMargin}
                        hoverMargin={cardHoverMargin} 
                        cardText="Rendered Passes with Asset Masks">
                            <cards.ImgDetailCard imgSrc={Card02} imgAlt=""/>
                    </cards.DetailCard>
            </div>
        </div>
    )
}

export default function IslandCityPage() {
    return (
        <pages.GroupProjectPage>
                <div className="absolute left-0 top-0 bottom-0 right-0 bg-gradient-to-t from-gradientColor1 to-gradientColor2">
                    <CardsContainer />
                    <ProjectDetailText TitleText="ISLAND CITY GENERATOR" MoreText="This procedural generating system took many of my learned node and shader skills to develop. 
                        My final node asset has organized parameters that control many aspects of this Island City Generator, including the island shape, number of buildings, how the buildings are, scarcity of the assets, how many lights are on in the buildings, and far more." />  
                </div>
        </pages.GroupProjectPage>
    )
}
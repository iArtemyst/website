'use client'

import React, { useState, MouseEvent, useCallback } from "react";
import "@/app/globals/globals.css";
import Card01 from "/app/assets/images/_game/_stubbleGen/shave-gen_still-a.png";
import Card02 from "/app/assets/images/_game/_stubbleGen/shave-gen_still-b.png";
import Card03 from "/app/assets/images/_game/_stubbleGen/shave-gen_still-c.png";
import Card04 from "/app/assets/images/_game/_stubbleGen/shave-gen_still-d.png";

import * as cards from "@/app/globals/hover-cards";
import * as fonts from "@/app/globals/fonts";
import * as pages from "@/app/globals/pages-main";
import { CardHoverFX } from "@/app/globals/card-hover-fx";

const cardWidth = "w-[240px]";
const cardHoverWidth = "group-hover:w-[360px]";
const cardContMargin = "mx-[8px]";
const cardHoverMargin = "group-hover:mx-[-60px]";

function ProjectDetailText({TitleText="", MoreText=""}:{TitleText:String, MoreText:String}) {
    return (
        <div className="absolute left-[50%] -translate-x-[50%] bottom-[48px] w-full z-0">
            <div className="w-[70%] justify-self-center border-white border-[1px] px-[16px] py-[8px] opacity-30 hover:opacity-100 transition-all duration-200">
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
        <div className="absolute left-[50%] -translate-x-[50%] top-[40%] -translate-y-[50%] overflow-visible grid grid-cols-1">
            <div className="relative flex w-full h-auto justify-center place-items-center">
                    <cards.DetailCard  
                        width={cardWidth}
                        hoverWidth={cardHoverWidth}
                        containerMargin={cardContMargin}
                        hoverMargin={cardHoverMargin}  
                        cardText="Hair Generator output">
                            <cards.ImgDetailCard imgSrc={Card01} imgAlt=""/>
                    </cards.DetailCard>

                    <cards.DetailCard 
                        width={cardWidth}
                        hoverWidth={cardHoverWidth}
                        containerMargin={cardContMargin}
                        hoverMargin={cardHoverMargin} 
                        cardText="Substance Designer setup">
                            <cards.ImgDetailCard imgSrc={Card02} imgAlt=""/>
                    </cards.DetailCard>

                    <cards.DetailCard
                        width={cardWidth}
                        hoverWidth={cardHoverWidth}
                        containerMargin={cardContMargin}
                        hoverMargin={cardHoverMargin}  
                        cardText="Math behind the system">
                            <cards.ImgDetailCard imgSrc={Card03} imgAlt=""/>
                    </cards.DetailCard>

                    <cards.DetailCard 
                        width={cardWidth}
                        hoverWidth={cardHoverWidth}
                        containerMargin={cardContMargin}
                        hoverMargin={cardHoverMargin} 
                        cardText="Starts from a single line">
                            <cards.ImgDetailCard imgSrc={Card04} imgAlt=""/>
                    </cards.DetailCard>
            </div>
        </div>
    )
}

export default function StubbleGenPage() {
    return (
        <pages.GroupProjectPage>
                <div className="absolute left-0 top-0 bottom-0 right-0 bg-gradient-to-t from-gradientColor1 to-gradientColor2">
                    <CardsContainer />
                    <ProjectDetailText TitleText="PROCEDURAL HAIR GENERATOR" MoreText="Using Substance Designer and a little math, I designed and developed a procedural generator for the growth of facial hair over the course of a week.
                    The goal of this project was to accurately create thousands of images that are similar to existing medical research images of the same subject, in an effort to have a database to train artificial intelligence on.
                    Starting with a single hair strand, this generator system builds up many layers of operations to produce thousands of unique strands per image, and millions of possible generator results.
                    After getting the generator system designed and working, I carefully collapsed the system into a user friendly node with parameters and timeline rendering." />
                    
                </div>
        </pages.GroupProjectPage>
    )
}
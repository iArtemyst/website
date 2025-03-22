'use client'

import * as bentos from "@/app/globals/bento-boxes";
import "@/app/globals/globals.css";
import * as pages from "@/app/globals/pages-main";
import Card03 from "/app/assets/images/_game/_islandCity/islandcity_still-a_00.png";
import Card02 from "/app/assets/videos/_game/_islandCity/islandCity_clip001.mp4";
import Card01 from "/app/assets/videos/_game/_islandCity/islandCity_clip002.mp4";

const width = "w-[240px]";
const hWidth = "group-hover:w-[360px]";
const hMargin = "group-hover:m-[-60px]";
const conMargin = "mx-[12px]";
const columnAmount = "grid-cols-3";

import { CardsContainer, IProjectCardData } from "@/app/globals/card-generator";

const cardMedia: IProjectCardData[] = [
    {
        cardWidth: width,
        hoverWidth: hWidth,
        hoverMargin: hMargin,
        containerMargin: conMargin,
        cardText: "Generator nodes and parameters",
        cardMediaLink: Card03,
    },
    {
        cardWidth: width,
        hoverWidth: hWidth,
        hoverMargin: hMargin,
        containerMargin: conMargin,
        cardText: "Four seasons turn-around",
        cardMediaLink: Card02,
    },
    {
        cardWidth: width,
        hoverWidth: hWidth,
        hoverMargin: hMargin,
        containerMargin: conMargin,
        cardText: "Separate element controls",
        cardMediaLink: Card01,
    },
];

export default function IslandCityPage() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
                    <CardsContainer dataArray={cardMedia} gridCols={columnAmount} />
                    <bentos.ProjectDetailText TitleText="ISLAND CITY GENERATOR" MoreText="This procedural generating system took many of my learned node and shader skills to develop. 
                        My final node asset has organized parameters that control many aspects of this Island City Generator, including the island shape, number of buildings, how the buildings are, scarcity of the assets, how many lights are on in the buildings, and far more." />  
        </pages.GroupProjectPage>
    )
}
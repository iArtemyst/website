'use client'

import * as bentos from "@/app/globals/bento-boxes";
import "@/app/globals/globals.css";
import * as pages from "@/app/globals/pages-main";
import Card01 from "/app/assets/images/_game/_utopaea/utopaea_card_01_00.png";
import Card02 from "/app/assets/images/_game/_utopaea/utopaea_card_02_00.png";
import Card03 from "/app/assets/images/_game/_utopaea/utopaea_card_03_00.png";
import Card04 from "/app/assets/images/_game/_utopaea/utopaea_card_04_00.png";

const width = "w-[240px]";
const hWidth = "group-hover:w-[360px]";
const hMargin = "group-hover:mx-[-60px]";
const conMargin = "m-[12px]";
const columnAmount = "grid-cols-4";

import { CardsContainer, IProjectCardData } from "@/app/globals/card-generator";

const cardMedia: IProjectCardData = [
    {
        cardWidth: width,
        hoverWidth: hWidth,
        hoverMargin: hMargin,
        containerMargin: conMargin,
        cardText: "Sketching and asset modeling",
        cardMediaLink: Card03,
    },
    {
        cardWidth: width,
        hoverWidth: hWidth,
        hoverMargin: hMargin,
        containerMargin: conMargin,
        cardText: "Level design concepts",
        cardMediaLink: Card02,
    },
    {
        cardWidth: width,
        hoverWidth: hWidth,
        hoverMargin: hMargin,
        containerMargin: conMargin,
        cardText: "In progress renders of design",
        cardMediaLink: Card01,
    },
    {
        cardWidth: width,
        hoverWidth: hWidth,
        hoverMargin: hMargin,
        containerMargin: conMargin,
        cardText: "Detail renders of actions areas",
        cardMediaLink: Card04,
    },
];

export default function ProjectUtopaeaPage() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
                <CardsContainer dataArray={cardMedia} gridCols={columnAmount}/>
                <bentos.ProjectDetailText 
                    TitleText="UTOPAEA LEVEL & GAME DESIGN" 
                    MoreText="What began as a capstone project in college, turned into a years long passion project. I have always had a great desire to make assets and levels for games, and this project was my first foray into a full scale design for an active FPS game.
                        Tapping into the games I was playing at the time, and my skills in researching and breaking down games and their mechanics, I deconstructed Overwatch maps, and rebuilt something new.
                        Beyond creating a map/level that catered to the fast action and unique design of Overwatch, I also set to design a new game mode to accompany the design of my level. 
                        Funny enough, several months after showcasing my senior project, Overwatch announced a new game mode that was quite similar to that which I had been designing.
                        After some time, I have returned to this project, remodeled many of the assets, and reconsidered the map layout now that the official game mode had been released.
                        While I have imported the level in Unreal Engine, I have much to do with texturing, shading, and more asset design before I truly call this project complete." />  
        </pages.GroupProjectPage>
    )
}
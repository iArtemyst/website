'use client'

import "@/app/globals/globals.css";

import * as pages from "@/app/globals/pages-main";
import * as gallery from "@/app/globals/project-galleries";
import * as utopaeamedia from "./utopaea-media-links";

export function ProjectUtopaeaPage() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <gallery.ProjectCardsWithGalleryContainer cardArray={utopaeamedia.UtopaeaProjectCardArrays} columnAmount="grid-cols-4"/>
            <gallery.ProjectDetailRelativeText 
                TitleText="UTOPAEA LEVEL & GAME DESIGN"
                ExtraProjInfo="CAPSTONE | LEVEL DESIGNER & 3D MODELER"
                MoreText="What began as a capstone project in college, turned into a years long passion project. I have always had a great desire to make assets and levels for games, and this project was my first foray into a full scale design for an active FPS game.
                    Tapping into the games I was playing at the time, and my skills in researching and breaking down games and their mechanics, I deconstructed Overwatch maps, and rebuilt something new.
                    Beyond creating a map/level that catered to the fast action and unique design of Overwatch, I also designed an accompanying game mode to compliment the design of my level.
                    After some time, I have returned to this project, remodeled many of the assets, and reconsidered the map layout now that the official game mode had been released.
                    While I have imported the level in Unreal Engine, I still have much to do before I truly call this project complete." />  
        </pages.GroupProjectPage>
    )
}
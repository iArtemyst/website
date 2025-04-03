'use client'

import * as bentos from "@/app/globals/bento-boxes";
import "@/app/globals/globals.css";
import * as pages from "@/app/globals/pages-main";
import * as gallery from "@/app/globals/project-galleries";

import Card01 from "/app/assets/videos/_3d/_horrorHouses/HH_FNAF_Card.mp4";
import Card02 from "/app/assets/videos/_3d/_horrorHouses/HH_Halloween_Card.mp4";
import Card03 from "/app/assets/videos/_3d/_horrorHouses/HH_Midsommar_Card.mp4";

import * as hhmedia from "./hh-media-links";

const width = "w-[240px]";
const hWidth = "group-hover:w-[360px]";
const hMargin = "group-hover:m-[-60px]";
const conMargin = "mx-[24px]";
const columnAmount = "grid-cols-3";

export default function HorrorHousesPage() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
                <gallery.ProjectCardsWithGalleryContainer cardArray={hhmedia.HHProjectCardArrays} columnAmount="grid-cols-3"/>
                <gallery.ProjectDetailRelativeText TitleText="HORROR HOUSES" MoreText="A good friend of mine, @KaitlinMooresArt, posted drawings she did of a few famous structures from horror films. 
                    I loved the style of the 2D drawings and reached out to her about making 3D models based off her drawings. 
                    She approved, and I spent a weekend modeling, adding lights and textures, and then rendering short animations to showcase the new dimension." />  
        </pages.GroupProjectPage>
    )
}
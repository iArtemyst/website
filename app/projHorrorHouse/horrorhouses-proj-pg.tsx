'use client'

import "@/app/globals/globals.css";
import * as pages from "@/app/globals/pages-main";
import * as gallery from "@/app/globals/project-galleries";
import * as hhmedia from "./hh-media-links";

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
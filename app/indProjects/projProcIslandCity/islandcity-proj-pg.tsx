'use client'

import * as gallery from "@/app/globals/gallery-component";
import "@/app/globals/globals.css";
import * as pages from "@/app/globals/pages-main";

import * as islandCityMedia from "./islandcity-media-links";


export function IslandCityPage() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
                    <gallery.ProjectCardsWithGalleryContainer cardArray={islandCityMedia.IslandCityProjectCardArrays} columnAmount="grid-cols-3"/>
                    <gallery.ProjectDetailRelativeText TitleText="ISLAND CITY GENERATOR" MoreText="This procedural generating system took many of my learned node and shader skills to develop. 
                        My final node asset has organized parameters that control many aspects of this Island City Generator, including the island shape, number of buildings, how the buildings are, scarcity of the assets, how many lights are on in the buildings, and far more." />  
        </pages.GroupProjectPage>
    )
}
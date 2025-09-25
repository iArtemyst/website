'use client'

import "@/app/globals/globals.css";

import * as gallery from "@/app/globals/project-galleries";
import * as pages from "@/app/globals/pages-main";
import { GalleryV2, GalleryV2TopInfoDiv } from "@/app/globals/gallery-v2";

const mediaHackverse01 = "_2d/hackverse_1920crop_forPortfolio.mp4";
const mediaHackverse02 = "_2d/hackverse_hacking-popup-forPortfolio.mp4";
const mediaHackverse03 = "_2d/hackverse_tv-screen-array_still.png";


const HackverseMedia: gallery.IGalleryMedia[] = [
    {
        assetText: "This video is a cropped and simplified version of the original video output for this project.",
        assetMediaLink: mediaHackverse01,
        assetMediaType: gallery.MediaType.Video,
        assetStillLink: "",
    },
    {
        assetText: "The final screen arrangement had to be organized and synced across 16 different TV Screens, with a final resolution nearing 32K HD",
        assetMediaLink: mediaHackverse03,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: "",
    },
    {
        assetText: "In order to create the chaos for the full composition, I designed multiple variations of screens that mimicked hacking interfaces seen in popular movies.",
        assetMediaLink: mediaHackverse02,
        assetMediaType: gallery.MediaType.Video,
        assetStillLink: "",
    },
]

export function ProjectHackverse() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <div className={`place-self-center self-start place-items-center w-full flex flex-col h-fit md:h-auto gap-0 md:gap-[12px]`}>
                <GalleryV2TopInfoDiv 
                    projTitle="HacKVerse Marketing Video" 
                    projSummary={`The client for this project was launching a new annual event known as "HacKVerse", and I was approached to design the motion graphics elements and edit together the video that would be used in promoting the new event. The largest request from this project was a video that would be played across 16 synced screens, creating a large 32k canvas across a stairwell that needed to be engaging at all points during the event. Playing on the companies love of Geese and Technology, I built additional "Hacking Elements" that would appear in a loop across the screen, making it seem like the video and function was alive with their goals.`} 
                    projOtherDetails="CLIENT | DESIGNER & PRODUCER & EDITOR"/>
                <GalleryV2 mediaGallery={HackverseMedia}/>
            </div>
        </pages.GroupProjectPage>
    )
}
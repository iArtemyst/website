'use client'

import "@/app/globals/globals.css";

import * as gallery from "@/app/globals/project-galleries";
import * as pages from "@/app/globals/pages-main";
import { GalleryV2, GalleryV2TopInfoDiv } from "@/app/globals/gallery-v2";

const imgConceptAppA01 = "_2d/app-podcast-concept/podcast-app_output_1.jpg";
const imgConceptAppA02 = "_2d/app-podcast-concept/podcast-app_output_2.jpg";
const imgConceptAppA03 = "_2d/app-podcast-concept/podcast-app_output_3.jpg";
const imgConceptAppA04 = "_2d/app-podcast-concept/podcast-app_output_4.jpg";
const imgConceptAppA05 = "_2d/app-podcast-concept/podcast-app_output_5.jpg";
const imgConceptAppA06 = "_2d/app-podcast-concept/podcast-app_output_6.jpg";

const ConceptAppMedia: gallery.IGalleryMedia[] = [
    {
        assetText: "Concept Podcast App mockup image",
        assetMediaLink: imgConceptAppA06,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgConceptAppA06,
    },
    {
        assetText: "Several of the final screens for the app",
        assetMediaLink: imgConceptAppA01,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgConceptAppA01,
    },
    {
        assetText: "Individual screens with research and reasoning behind choices",
        assetMediaLink: imgConceptAppA02,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgConceptAppA02,
    },
    {
        assetText: "Individual screens with research and reasoning behind choices",
        assetMediaLink: imgConceptAppA03,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgConceptAppA03,
    },
    {
        assetText: "Individual screens with research and reasoning behind choices",
        assetMediaLink: imgConceptAppA04,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgConceptAppA04,
    },
    {
        assetText: "Individual screens with research and reasoning behind choices",
        assetMediaLink: imgConceptAppA05,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgConceptAppA05,
    },
]

export function ProjectConceptPodcastApp() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <div className={`place-self-center self-start place-items-center w-full flex flex-col h-fit md:h-auto gap-0 md:gap-[12px]`}>
                <GalleryV2TopInfoDiv 
                    projTitle="Podcast App Concept" 
                    projSummary="As one of my final UX/UI projects in college, I started concepting a discovery driven podcast app with user feedback and research from my peers. Keeping the app simple for easy user access at all moments, and introducing improved ways of searching for new content were key to the direction of this design." 
                    projOtherDetails="SCHOOL | UI/UX DESIGNER"/>
                <GalleryV2 mediaGallery={ConceptAppMedia}/>
            </div>
        </pages.GroupProjectPage>
    )
}
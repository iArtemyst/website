'use client'

import "@/app/globals/globals.css";

import * as gallery from "@/app/globals/project-galleries";
import * as pages from "@/app/globals/pages-main";
import { GalleryV2, GalleryV2TopInfoDiv } from "@/app/globals/gallery-v2";

const imgConceptAppA01 = "_2d/app-steam-concept/steam-app-redesign_output_1.jpg";
const imgConceptAppA02 = "_2d/app-steam-concept/steam-app-redesign_output_2.jpg";
const imgConceptAppA03 = "_2d/app-steam-concept/steam-app-redesign_output_3.jpg";
const imgConceptAppA04 = "_2d/app-steam-concept/steam-app-redesign_output_4.jpg";
const imgConceptAppA05 = "_2d/app-steam-concept/steam-app-redesign_output_5.jpg";
const imgConceptAppA06 = "_2d/app-steam-concept/steam-app-redesign_output_6.jpg";
const imgConceptAppA07 = "_2d/app-steam-concept/steam-app-redesign_output_7.jpg";
const imgConceptAppA08 = "_2d/app-steam-concept/steam-app-redesign_output_8.jpg";

const ConceptAppMedia: gallery.IGalleryMedia[] = [
    {
        assetText: "Mockup of updated screens in the redesign concept",
        assetMediaLink: imgConceptAppA04,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgConceptAppA04,
    },
    {
        assetText: "Evaulation of the existing app and user flow",
        assetMediaLink: imgConceptAppA02,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgConceptAppA02,
    },
    {
        assetText: "Collecting data for user research driven goals",
        assetMediaLink: imgConceptAppA03,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgConceptAppA03,
    },
    {
        assetText: "Improved workflow based upon user needs",
        assetMediaLink: imgConceptAppA06,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgConceptAppA06,
    },
    {
        assetText: "Updated screens in the concept redesign",
        assetMediaLink: imgConceptAppA05,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgConceptAppA05,
    },
    // {
    //     assetText: "4",
    //     assetMediaLink: imgConceptAppA01,
    //     assetMediaType: gallery.MediaType.Image,
    //     assetStillLink: imgConceptAppA01,
    // },
    // {
    //     assetText: "7",
    //     assetMediaLink: imgConceptAppA07,
    //     assetMediaType: gallery.MediaType.Image,
    //     assetStillLink: imgConceptAppA07,
    // },
    // {
    //     assetText: "8",
    //     assetMediaLink: imgConceptAppA08,
    //     assetMediaType: gallery.MediaType.Image,
    //     assetStillLink: imgConceptAppA08,
    // },
]

export function ProjectConceptSteamRedesign() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <div className={`place-self-center self-start place-items-center w-full flex flex-col h-fit md:h-auto gap-0 md:gap-[12px]`}>
                <GalleryV2TopInfoDiv 
                    projTitle="Concept Steam App Redesign" 
                    projSummary="As one of my final college UI/UX design projects, I performed user research, collected datasets of information, and implemented the feedback into a refined workflow and user experience for the phone app experience of Steam." 
                    projOtherDetails="SCHOOL | UI/UX DESIGNER"/>
                <GalleryV2 mediaGallery={ConceptAppMedia}/>
            </div>
        </pages.GroupProjectPage>
    )
}
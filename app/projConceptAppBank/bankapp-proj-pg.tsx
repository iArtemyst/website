'use client'

import "@/app/globals/globals.css";

import * as gallery from "@/app/globals/project-galleries";
import * as pages from "@/app/globals/pages-main";
import { GalleryV2, GalleryV2TopInfoDiv } from "@/app/globals/gallery-v2";

const imgConceptAppA01 = "_2d/app-bank-concept/apple-bank-app_output_1.jpg";
const imgConceptAppA02 = "_2d/app-bank-concept/apple-bank-app_output_2.jpg";
const imgConceptAppA03 = "_2d/app-bank-concept/apple-bank-app_output_3.jpg";
const imgConceptAppA04 = "_2d/app-bank-concept/apple-bank-app_output_4.jpg";
const imgConceptAppA05 = "_2d/app-bank-concept/apple-bank-app_output_5.jpg";
const imgConceptAppA06 = "_2d/app-bank-concept/apple-bank-app_output_6.jpg";
const imgConceptAppA07 = "_2d/app-bank-concept/apple-bank-app_output_7.jpg";

const ConceptAppMedia: gallery.IGalleryMedia[] = [
    {
        assetText: "Final Concept App screens mockup",
        assetMediaLink: imgConceptAppA02,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgConceptAppA02,
    },
    {
        assetText: "Sketching out screen interactions and user flow",
        assetMediaLink: imgConceptAppA01,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgConceptAppA01,
    },
    // {
    //     assetText: "3",
    //     assetMediaLink: imgConceptAppA06,
    //     assetMediaType: gallery.MediaType.Image,
    //     assetStillLink: imgConceptAppA03,
    // },
    {
        assetText: "Concept marketing mockup image",
        assetMediaLink: imgConceptAppA07,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgConceptAppA04,
    },
    // {
    //     assetText: "5",
    //     assetMediaLink: imgConceptAppA05,
    //     assetMediaType: gallery.MediaType.Image,
    //     assetStillLink: imgConceptAppA05,
    // },
]

export function ProjectConceptBankApp() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <div className={`place-self-center self-start place-items-center w-full flex flex-col h-fit md:h-auto gap-0 md:gap-[12px]`}>
                <GalleryV2TopInfoDiv 
                    projTitle="Apple Bank Concept" 
                    projSummary="Just after graduating college I started testing new design tools for User Interface and Experience design and animation, testing out software like AdobeXD, UXPin, Webflow, and Figma. This is one of the concept apps I designed during that period of exploration." 
                    projOtherDetails="PERSONAL | UI/UX DESIGNER"/>
                <GalleryV2 mediaGallery={ConceptAppMedia}/>
            </div>
        </pages.GroupProjectPage>
    )
}
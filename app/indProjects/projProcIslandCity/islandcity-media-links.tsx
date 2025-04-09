
'use client'

import * as gallery from "@/app/globals/project-galleries";
import "@/app/globals/globals.css";

import { lazy } from "react";



import CardA from "@/app/assets/videos/_game/_islandCity/islandCity_clip002.mp4";
import CardAMedia01a from "@/app/assets/videos/_game/_islandCity/islandCity_card01_00.mp4";
import CardAMedia01b from "@/app/assets/images/_game/_islandCity/islandCity_card01_00.png";
import CardAMedia02a from "@/app/assets/videos/_game/_islandCity/islandCity_card01_01.mp4";
import CardAMedia02b from "@/app/assets/images/_game/_islandCity/islandCity_card01_01.png";
import CardAMedia03a from "@/app/assets/videos/_game/_islandCity/islandCity_card01_02.mp4";
import CardAMedia03b from "@/app/assets/images/_game/_islandCity/islandCity_card01_02.png";
import CardAMedia04a from "@/app/assets/videos/_game/_islandCity/islandCity_card01_03.mp4";
import CardAMedia04b from "@/app/assets/images/_game/_islandCity/islandCity_card01_03.png";

import CardB from "@/app/assets/videos/_game/_islandCity/islandCity_clip001.mp4";
import CardBMedia01a from "@/app/assets/videos/_game/_islandCity/islandcity_loop.mp4";
import CardBMedia01b from "@/app/assets/images/_game/_islandCity/islandCity_card02_00.png";

import CardC from "@/app/assets/videos/_game/_islandCity/islandCity_clip003.mp4";
import CardCMedia01 from "@/app/assets/images/_game/_islandCity/islandCity_card03_00.png";
import CardCMedia02 from "@/app/assets/images/_game/_islandCity/islandCity_card03_01.png";

// const IslandCardAMainMedia = lazy(() => import('@/app/assets/videos/_game/_islandCity/islandCity_clip002.mp4'));


const cardStyleWHM = "w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] group-hover:w-[160px] sm:group-hover:w-[200px] md:group-hover:w-[240px] lg:group-hover:w-[360px] group-hover:m-[-30px] md:group-hover:m-[-60px]";
const cardContainerMargin = "mx-64px";

const ProjectCardAData: gallery.IProjectCardData = 
{
    cardMedia: CardA,
    cardText: "Variable Output Elements",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}

const CardAGallery: gallery.IGalleryMedia[] = [
    {
        assetText: 'Island City "Summer" generation.',
        assetMediaLink: CardAMedia01a,
        assetStillLink: CardAMedia01b,
    },
    {
        assetText: 'Island City "Evening" generation.',
        assetMediaLink: CardAMedia02a,
        assetStillLink: CardAMedia02b,
    },
    {
        assetText: 'Island City "Autumn" generation.',
        assetMediaLink: CardAMedia03a,
        assetStillLink: CardAMedia03b,
    },
    {
        assetText: 'Island City "Winter" generation.',
        assetMediaLink: CardAMedia04a,
        assetStillLink: CardAMedia04b,
    },
]

const ProjectCardBData: gallery.IProjectCardData = 
{
    cardMedia: CardB,
    cardText: "Island City Transitions",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const CardBGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Island City Transitions",
        assetMediaLink: CardBMedia01a,
        assetStillLink: CardBMedia01b,
    },
]

const ProjectCardCData: gallery.IProjectCardData =
{
    cardMedia: CardC,
    cardText: "Island City Generator Nodes",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const CardCGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Generator nodes and collected output controller.",
        assetMediaLink: CardCMedia01,
        assetStillLink: CardCMedia01,
    },
    {
        assetText: "Organized node layout.",
        assetMediaLink: CardCMedia02,
        assetStillLink: CardCMedia02,
    },
]


export const IslandCityProjectCardArrays: gallery.ICardWithGalleryArrays[] = 
[
    {
        cardData: ProjectCardAData,
        galleryData: CardAGallery,
    },
    {
        cardData: ProjectCardBData,
        galleryData: CardBGallery,
    },
    {
        cardData: ProjectCardCData,
        galleryData: CardCGallery,
    },
]
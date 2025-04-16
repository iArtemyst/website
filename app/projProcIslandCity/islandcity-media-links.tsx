
'use client'

import * as gallery from "@/app/globals/project-galleries";
import "@/app/globals/globals.css";
import { MediaType } from "@/app/globals/project-galleries";

const CardA         = "_game/_islandCity/islandCity_clip002.mp4";
const CardAMedia01a = "_game/_islandCity/islandCity_card01_00.mp4";
const CardAMedia01b = "_game/_islandCity/islandCity_card01_00.png";
const CardAMedia02a = "_game/_islandCity/islandCity_card01_01.mp4";
const CardAMedia02b = "_game/_islandCity/islandCity_card01_01.png";
const CardAMedia03a = "_game/_islandCity/islandCity_card01_02.mp4";
const CardAMedia03b = "_game/_islandCity/islandCity_card01_02.png";
const CardAMedia04a = "_game/_islandCity/islandCity_card01_03.mp4";
const CardAMedia04b = "_game/_islandCity/islandCity_card01_03.png";

const CardB         = "_game/_islandCity/islandCity_clip001.mp4";
const CardBMedia01a = "_game/_islandCity/islandcity_loop.mp4";
const CardBMedia01b = "_game/_islandCity/islandCity_card02_00.png";

const CardC        = "_game/_islandCity/islandCity_clip003.mp4";
const CardCMedia01 = "_game/_islandCity/islandCity_card03_00.png";
const CardCMedia02 = "_game/_islandCity/islandCity_card03_01.png";

// const IslandCardAMainMedia = lazy(() => import('@/app/assets/videos/_game/_islandCity/islandCity_clip002.mp4'));


const cardStyleWHM = "w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] group-hover:w-[160px] sm:group-hover:w-[200px] md:group-hover:w-[240px] lg:group-hover:w-[360px] group-hover:m-[-30px] md:group-hover:m-[-60px]";
const cardContainerMargin = "mx-64px";

const ProjectCardAData: gallery.IProjectCardData = 
{
    cardMedia: CardA,
    cardMediaType: MediaType.Video,
    cardText: "Variable Output Elements",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}

const CardAGallery: gallery.IGalleryMedia[] = [
    {
        assetText: 'Island City "Summer" generation.',
        assetMediaLink: CardAMedia01a,
        assetMediaType: MediaType.Video,
        assetStillLink: CardAMedia01b,
    },
    {
        assetText: 'Island City "Evening" generation.',
        assetMediaLink: CardAMedia02a,
        assetMediaType: MediaType.Video,
        assetStillLink: CardAMedia02b,
    },
    {
        assetText: 'Island City "Autumn" generation.',
        assetMediaLink: CardAMedia03a,
        assetMediaType: MediaType.Video,
        assetStillLink: CardAMedia03b,
    },
    {
        assetText: 'Island City "Winter" generation.',
        assetMediaLink: CardAMedia04a,
        assetMediaType: MediaType.Video,
        assetStillLink: CardAMedia04b,
    },
]

const ProjectCardBData: gallery.IProjectCardData = 
{
    cardMedia: CardB,
    cardMediaType: MediaType.Video,
    cardText: "Island City Transitions",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const CardBGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Island City Transitions",
        assetMediaLink: CardBMedia01a,
        assetMediaType: MediaType.Video,
        assetStillLink: CardBMedia01b,
    },
]

const ProjectCardCData: gallery.IProjectCardData =
{
    cardMedia: CardC,
    cardMediaType: MediaType.Video,
    cardText: "Island City Generator Nodes",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const CardCGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Generator nodes and collected output controller.",
        assetMediaLink: CardCMedia01,
        assetMediaType: MediaType.Image,
        assetStillLink: CardCMedia01,
    },
    {
        assetText: "Organized node layout.",
        assetMediaLink: CardCMedia02,
        assetMediaType: MediaType.Image,
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
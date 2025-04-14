'use client'

import * as gallery from "@/app/globals/project-galleries";
import "@/app/globals/globals.css";
import { MediaType } from "@/app/globals/project-galleries";

const CardAMedia01b = "_3d/_horrorHouses/hh-gallery-stills__00.png";
const CardAMedia02b = "_3d/_horrorHouses/hh-gallery-stills__01.png";
const CardAMedia03  = "_3d/_horrorHouses/km_hh-sketches__01.png";
const CardAMedia01a = "_3d/_horrorHouses/hh_diffuse_00.mp4";
const CardAMedia02a = "_3d/_horrorHouses/hh_wireframe_00.mp4";
const CardA         = "_3d/_horrorHouses/HH_FNAF_Card.mp4";

const CardBMedia01b = "_3d/_horrorHouses/hh-gallery-stills__02.png";
const CardBMedia02b = "_3d/_horrorHouses/hh-gallery-stills__03.png";
const CardBMedia03  = "_3d/_horrorHouses/km_hh-sketches__02.png";
const CardBMedia01a = "_3d/_horrorHouses/hh_diffuse_01.mp4";
const CardBMedia02a = "_3d/_horrorHouses/hh_wireframe_01.mp4";
const CardB         = "_3d/_horrorHouses/HH_Halloween_Card.mp4";

const CardCMedia01b = "_3d/_horrorHouses/hh-gallery-stills__04.png";
const CardCMedia02b = "_3d/_horrorHouses/hh-gallery-stills__05.png";
const CardCMedia03  = "_3d/_horrorHouses/km_hh-sketches__00.png";
const CardCMedia01a = "_3d/_horrorHouses/hh_diffuse_02.mp4";
const CardCMedia02a = "_3d/_horrorHouses/hh_wireframe_02.mp4";
const CardC         = "_3d/_horrorHouses/HH_Midsommar_Card.mp4";

const cardStyleWHM = "w-[120px] sm:w-[120px] md:w-[160px] lg:w-[240px] group-hover:w-[120px] sm:group-hover:w-[160px] md:group-hover:w-[240px] lg:group-hover:w-[360px] group-hover:m-[-30px] md:group-hover:m-[-60px]";
const cardContainerMargin = "mx-64px";

const ProjectCardAData: gallery.IProjectCardData = 
{
    cardMedia: CardA,
    cardMediaType: MediaType.Video,
    cardText: "Five Nights at Freddy's",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}

const CardAGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Five Nights at Freddy's render",
        assetMediaType: MediaType.Video,
        assetMediaLink: CardAMedia01a,
        assetStillLink: CardAMedia01b,
    },
    {
        assetText: "Five Nights at Freddy's wireframe",
        assetMediaType: MediaType.Video,
        assetMediaLink: CardAMedia02a,
        assetStillLink: CardAMedia02b,
    },
    {
        assetText: "Five Nights at Freddy's original sketch by @KaitlinMooresArt",
        assetMediaType: MediaType.Image,
        assetMediaLink: CardAMedia03,
        assetStillLink: CardAMedia03,
    },
]

const ProjectCardBData: gallery.IProjectCardData = 
{
    cardMedia: CardB,
    cardMediaType: MediaType.Video,
    cardText: "Halloween House",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const CardBGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Halloween House render",
        assetMediaLink: CardBMedia01a,
        assetMediaType: MediaType.Video,
        assetStillLink: CardBMedia01b,
    },
    {
        assetText: "Halloween House wireframe",
        assetMediaLink: CardBMedia02a,
        assetMediaType: MediaType.Video,
        assetStillLink: CardBMedia02b,
    },
    {
        assetText: "Halloween House original sketch by @KaitlinMooresArt",
        assetMediaLink: CardBMedia03,
        assetMediaType: MediaType.Image,
        assetStillLink: CardBMedia03,
    },
]

const ProjectCardCData: gallery.IProjectCardData =
{
    cardMedia: CardC,
    cardMediaType: MediaType.Video,
    cardText: "Midsommar Tent",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}

const CardCGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Midsommar Tent render",
        assetMediaLink: CardCMedia01a,
        assetMediaType: MediaType.Video,
        assetStillLink: CardCMedia01b,
    },
    {
        assetText: "Midsommar Tent wireframe",
        assetMediaLink: CardCMedia02a,
        assetMediaType: MediaType.Video,
        assetStillLink: CardCMedia02b,
    },
    {
        assetText: "Midsommar Tent original sketch by @KaitlinMooresArt",
        assetMediaLink: CardCMedia03,
        assetMediaType: MediaType.Image,
        assetStillLink: CardCMedia03,
    },
]


export const HHProjectCardArrays: gallery.ICardWithGalleryArrays[] = 
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
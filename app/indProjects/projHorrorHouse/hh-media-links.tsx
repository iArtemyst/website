'use client'

import * as gallery from "@/app/globals/project-galleries";
import "@/app/globals/globals.css";

import CardAMedia01b from "@/app/assets/images/_3d/_horrorHouses/hh-gallery-stills__00.png";
import CardAMedia02b from "@/app/assets/images/_3d/_horrorHouses/hh-gallery-stills__01.png";
import CardAMedia03 from "@/app/assets/images/_3d/_horrorHouses/km_hh-sketches__01.png";
import CardAMedia01a from "@/app/assets/videos/_3d/_horrorHouses/hh_diffuse_00.mp4";
import CardAMedia02a from "@/app/assets/videos/_3d/_horrorHouses/hh_wireframe_00.mp4";
import CardA from "/app/assets/videos/_3d/_horrorHouses/HH_FNAF_Card.mp4";

import CardBMedia01b from "@/app/assets/images/_3d/_horrorHouses/hh-gallery-stills__02.png";
import CardBMedia02b from "@/app/assets/images/_3d/_horrorHouses/hh-gallery-stills__03.png";
import CardBMedia03 from "@/app/assets/images/_3d/_horrorHouses/km_hh-sketches__02.png";
import CardBMedia01a from "@/app/assets/videos/_3d/_horrorHouses/hh_diffuse_01.mp4";
import CardBMedia02a from "@/app/assets/videos/_3d/_horrorHouses/hh_wireframe_01.mp4";
import CardB from "/app/assets/videos/_3d/_horrorHouses/HH_Halloween_Card.mp4";

import CardCMedia01b from "@/app/assets/images/_3d/_horrorHouses/hh-gallery-stills__04.png";
import CardCMedia02b from "@/app/assets/images/_3d/_horrorHouses/hh-gallery-stills__05.png";
import CardCMedia03 from "@/app/assets/images/_3d/_horrorHouses/km_hh-sketches__00.png";
import CardCMedia01a from "@/app/assets/videos/_3d/_horrorHouses/hh_diffuse_02.mp4";
import CardCMedia02a from "@/app/assets/videos/_3d/_horrorHouses/hh_wireframe_02.mp4";
import CardC from "/app/assets/videos/_3d/_horrorHouses/HH_Midsommar_Card.mp4";

const cardStyleWHM = "w-[120px] sm:w-[120px] md:w-[160px] lg:w-[240px] group-hover:w-[120px] sm:group-hover:w-[160px] md:group-hover:w-[240px] lg:group-hover:w-[360px] group-hover:m-[-30px] md:group-hover:m-[-60px]";
const cardContainerMargin = "mx-64px";

const ProjectCardAData: gallery.IProjectCardData = 
{
    cardMedia: CardA,
    cardText: "Five Nights at Freddy's",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}

const CardAGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Five Nights at Freddy's render",
        assetMediaLink: CardAMedia01a,
        assetStillLink: CardAMedia01b,
    },
    {
        assetText: "Five Nights at Freddy's wireframe",
        assetMediaLink: CardAMedia02a,
        assetStillLink: CardAMedia02b,
    },
    {
        assetText: "Five Nights at Freddy's original sketch by @KaitlinMooresArt",
        assetMediaLink: CardAMedia03,
        assetStillLink: CardAMedia03,
    },
]

const ProjectCardBData: gallery.IProjectCardData = 
{
    cardMedia: CardB,
    cardText: "Halloween House",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const CardBGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Halloween House render",
        assetMediaLink: CardBMedia01a,
        assetStillLink: CardBMedia01b,
    },
    {
        assetText: "Halloween House wireframe",
        assetMediaLink: CardBMedia02a,
        assetStillLink: CardBMedia02b,
    },
    {
        assetText: "Halloween House original sketch by @KaitlinMooresArt",
        assetMediaLink: CardBMedia03,
        assetStillLink: CardBMedia03,
    },
]

const ProjectCardCData: gallery.IProjectCardData =
{
    cardMedia: CardC,
    cardText: "Midsommar Tent",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const CardCGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Midsommar Tent render",
        assetMediaLink: CardCMedia01a,
        assetStillLink: CardCMedia01b,
    },
    {
        assetText: "Midsommar Tent wireframe",
        assetMediaLink: CardCMedia02a,
        assetStillLink: CardCMedia02b,
    },
    {
        assetText: "Midsommar Tent original sketch by @KaitlinMooresArt",
        assetMediaLink: CardCMedia03,
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
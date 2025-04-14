
'use client'

import "@/app/globals/globals.css";

import CardA from "/app/assets/_game/_stubbleGen/shave-gen_still-a.png";
import CardB from "/app/assets/_game/_stubbleGen/shave-gen_still-b.png";
import CardC from "/app/assets/_game/_stubbleGen/shave-gen_still-c.png";
import CardD from "/app/assets/_game/_stubbleGen/shave-gen_still-d.png";

import * as gallery from "@/app/globals/project-galleries";

const cardStyleWHM = "w-[120px] sm:w-[120px] md:w-[160px] lg:w-[240px] group-hover:w-[120px] sm:group-hover:w-[160px] md:group-hover:w-[240px] lg:group-hover:w-[360px] group-hover:m-[-30px] md:group-hover:m-[-60px]";
const cardContainerMargin = "mx-64px";

const ProjectCardAData: gallery.IProjectCardData = 
{
    cardMedia: CardA,
    cardText: "Final hair generator and output",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}

const CardAGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Final hair generator and output",
        assetMediaLink: CardA,
        assetStillLink: CardA,
    },
]

const ProjectCardBData: gallery.IProjectCardData = 
{
    cardMedia: CardB,
    cardText: "Substance Designer nodes",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const CardBGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Substance Designer nodes",
        assetMediaLink: CardB,
        assetStillLink: CardB,
    },
]

const ProjectCardCData: gallery.IProjectCardData =
{
    cardMedia: CardC,
    cardText: "Substance Designer math",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const CardCGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Substance Designer math",
        assetMediaLink: CardC,
        assetStillLink: CardC,
    },
]

const ProjectCardDData: gallery.IProjectCardData = 
{
    cardMedia: CardD,
    cardText: "Generating and controlling hairs",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const CardDGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Generating and controlling hairs",
        assetMediaLink: CardD,
        assetStillLink: CardD,
    },
]

export const HairGenProjectCardArrays: gallery.ICardWithGalleryArrays[] = 
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
    {
        cardData: ProjectCardDData,
        galleryData: CardDGallery,
    },
]
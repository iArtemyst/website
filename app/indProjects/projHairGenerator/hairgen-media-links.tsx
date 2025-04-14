'use client'

import "@/app/globals/globals.css";

const CardA = "_game/_stubbleGen/shave-gen_still-a.png";
const CardB = "_game/_stubbleGen/shave-gen_still-b.png";
const CardC = "_game/_stubbleGen/shave-gen_still-c.png";
const CardD = "_game/_stubbleGen/shave-gen_still-d.png";

import * as gallery from "@/app/globals/project-galleries";
import { MediaType } from "@/app/globals/project-galleries";

const cardStyleWHM = "w-[120px] sm:w-[120px] md:w-[160px] lg:w-[240px] group-hover:w-[120px] sm:group-hover:w-[160px] md:group-hover:w-[240px] lg:group-hover:w-[360px] group-hover:m-[-30px] md:group-hover:m-[-60px]";
const cardContainerMargin = "mx-64px";

const ProjectCardAData: gallery.IProjectCardData = 
{
    cardMedia: CardA,
    cardMediaType: MediaType.Image,
    cardText: "Final hair generator and output",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}

const CardAGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Final hair generator and output",
        assetMediaLink: CardA,
        assetMediaType: MediaType.Image,
        assetStillLink: CardA,
    },
]

const ProjectCardBData: gallery.IProjectCardData = 
{
    cardMedia: CardB,
    cardMediaType: MediaType.Image,
    cardText: "Substance Designer nodes",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const CardBGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Substance Designer nodes",
        assetMediaLink: CardB,
        assetMediaType: MediaType.Image,
        assetStillLink: CardB,
    },
]

const ProjectCardCData: gallery.IProjectCardData =
{
    cardMedia: CardC,
    cardMediaType: MediaType.Image,
    cardText: "Substance Designer math",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const CardCGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Substance Designer math",
        assetMediaLink: CardC,
        assetMediaType: MediaType.Image,
        assetStillLink: CardC,
    },
]

const ProjectCardDData: gallery.IProjectCardData = 
{
    cardMedia: CardD,
    cardMediaType: MediaType.Image,
    cardText: "Generating and controlling hairs",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const CardDGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Generating and controlling hairs",
        assetMediaLink: CardD,
        assetMediaType: MediaType.Image,
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
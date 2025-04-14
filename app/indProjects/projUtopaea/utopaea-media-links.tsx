
'use client'

import "@/app/globals/globals.css";

import CardAMedia05 from "@/app/assets/_game/_utopaea/utopaea_card01_00.png";
import CardAMedia02 from "@/app/assets/_game/_utopaea/utopaea_card01_01.jpeg";
import CardAMedia03 from "@/app/assets/_game/_utopaea/utopaea_card01_02.jpeg";
import CardAMedia04 from "@/app/assets/_game/_utopaea/utopaea_card01_03.jpeg";
import CardAMedia01 from "@/app/assets/_game/_utopaea/utopaea_card01_04.png";
import CardA from "@/app/assets/_game/_utopaea/utopaea_card_01_00.png";

import CardBMedia02 from "@/app/assets/_game/_utopaea/utopaea_card02_00.png";
import CardBMedia01 from "@/app/assets/_game/_utopaea/utopaea_card02_01.png";
import CardB from "@/app/assets/_game/_utopaea/utopaea_card_02_00.png";

import CardCMedia04 from "@/app/assets/_game/_utopaea/utopaea_card03_00.png";
import CardCMedia02 from "@/app/assets/_game/_utopaea/utopaea_card03_01.png";
import CardCMedia03 from "@/app/assets/_game/_utopaea/utopaea_card03_02.png";
import CardCMedia01 from "@/app/assets/_game/_utopaea/utopaea_card03_03.png";
import CardC from "@/app/assets/_game/_utopaea/utopaea_card_03_00.png";

import CardD from "@/app/assets/_game/_utopaea/utopaea_card_04_00.png";
import CardDMedia01 from "@/app/assets/_game/_utopaea/utopaea_card04_00.png";
import CardDMedia03 from "@/app/assets/_game/_utopaea/utopaea_card04_02.png";
import CardDMedia04 from "@/app/assets/_game/_utopaea/utopaea_card04_03.png";
import CardDMedia06 from "@/app/assets/_game/_utopaea/utopaea_card04_05.png";
import CardDMedia07 from "@/app/assets/_game/_utopaea/utopaea_card04_06.png";

import * as gallery from "@/app/globals/project-galleries";

const cardStyleWHM = "w-[120px] sm:w-[120px] md:w-[160px] lg:w-[240px] group-hover:w-[120px] sm:group-hover:w-[160px] md:group-hover:w-[240px] lg:group-hover:w-[360px] group-hover:m-[-30px] md:group-hover:m-[-60px]";
const cardContainerMargin = "mx-64px";

const ProjectCardAData: gallery.IProjectCardData = 
{
    cardMedia: CardA,
    cardText: "Concept Sketches and Asset Modeling",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}

const CardAGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Collected concept sketch page",
        assetMediaLink: CardAMedia01,
        assetStillLink: CardAMedia01,
    },
    {
        assetText: "3d models of in scene assets",
        assetMediaLink: CardAMedia02,
        assetStillLink: CardAMedia02,
    },
    {
        assetText: "3d models of in scene assets",
        assetMediaLink: CardAMedia03,
        assetStillLink: CardAMedia03,
    },
    {
        assetText: "3d models of in scene assets",
        assetMediaLink: CardAMedia04,
        assetStillLink: CardAMedia04,
    },
    {
        assetText: "3d models of in scene assets remodel",
        assetMediaLink: CardAMedia05,
        assetStillLink: CardAMedia05,
    },
]

const ProjectCardBData: gallery.IProjectCardData = 
{
    cardMedia: CardB,
    cardText: "Level and Map Design",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const CardBGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Sketching various map layouts",
        assetMediaLink: CardBMedia01,
        assetStillLink: CardBMedia01,
    },
    {
        assetText: "Model testing map layouts",
        assetMediaLink: CardBMedia02,
        assetStillLink: CardBMedia02,
    },
]

const ProjectCardCData: gallery.IProjectCardData =
{
    cardMedia: CardC,
    cardText: "Initial Environment Modeling",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const CardCGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Initial final map design",
        assetMediaLink: CardCMedia01,
        assetStillLink: CardCMedia01,
    },
    {
        assetText: "Goal point area design.",
        assetMediaLink: CardCMedia02,
        assetStillLink: CardCMedia02,
    },
    {
        assetText: "Entrance to team building design.",
        assetMediaLink: CardCMedia03,
        assetStillLink: CardCMedia03,
    },
    {
        assetText: "Center market point area.",
        assetMediaLink: CardCMedia04,
        assetStillLink: CardCMedia04,
    },
]

const ProjectCardDData: gallery.IProjectCardData =
{
    cardMedia: CardD,
    cardText: "Final Map Design Renders",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const CardDGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Final map layout.",
        assetMediaLink: CardDMedia01,
        assetStillLink: CardDMedia01,
    },
    {
        assetText: "Interior team building layout.",
        assetMediaLink: CardDMedia03,
        assetStillLink: CardDMedia03,
    },
    {
        assetText: "Center market point design.",
        assetMediaLink: CardDMedia04,
        assetStillLink: CardDMedia04,
    },
    {
        assetText: "Market assets and design.",
        assetMediaLink: CardDMedia07,
        assetStillLink: CardDMedia07,
    },
    {
        assetText: "View from player spawn point.",
        assetMediaLink: CardDMedia06,
        assetStillLink: CardDMedia06,
    },
]


export const UtopaeaProjectCardArrays: gallery.ICardWithGalleryArrays[] = 
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


'use client'

import "@/app/globals/globals.css";

import * as gallery from "@/app/globals/project-galleries";
import { MediaType } from "@/app/globals/project-galleries";

const CardAMedia05 = "_game/_utopaea/utopaea_card01_00.png";
const CardAMedia02 = "_game/_utopaea/utopaea_card01_01.jpeg";
const CardAMedia03 = "_game/_utopaea/utopaea_card01_02.jpeg";
const CardAMedia04 = "_game/_utopaea/utopaea_card01_03.jpeg";
const CardAMedia01 = "_game/_utopaea/utopaea_card01_04.png";
const CardA        = "_game/_utopaea/utopaea_card_01_00.png";

const CardBMedia02 = "_game/_utopaea/utopaea_card02_00.png";
const CardBMedia01 = "_game/_utopaea/utopaea_card02_01.png";
const CardB        = "_game/_utopaea/utopaea_card_02_00.png";

const CardCMedia04 = "_game/_utopaea/utopaea_card03_00.png";
const CardCMedia02 = "_game/_utopaea/utopaea_card03_01.png";
const CardCMedia03 = "_game/_utopaea/utopaea_card03_02.png";
const CardCMedia01 = "_game/_utopaea/utopaea_card03_03.png";
const CardC        = "_game/_utopaea/utopaea_card_03_00.png";

const CardDMedia01 = "_game/_utopaea/utopaea_card04_00.png";
const CardDMedia03 = "_game/_utopaea/utopaea_card04_02.png";
const CardDMedia04 = "_game/_utopaea/utopaea_card04_03.png";
const CardDMedia06 = "_game/_utopaea/utopaea_card04_05.png";
const CardDMedia07 = "_game/_utopaea/utopaea_card04_06.png";
const CardD        = "_game/_utopaea/utopaea_card_04_00.png";

const cardStyleWHM = "w-[120px] sm:w-[120px] md:w-[240px] lg:w-[320px] xl:w-[360px] 2xl:w-[480px]";
const cardContainerMargin = "mx-64px";

const ProjectCardAData: gallery.IProjectCardData = 
{
    cardMedia: CardA,
    cardMediaType: MediaType.Image,
    cardText: "Concept Sketches and Asset Modeling",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}

const CardAGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Collected concept sketch page",
        assetMediaLink: CardAMedia01,
        assetMediaType: MediaType.Image,
        assetStillLink: CardAMedia01,
    },
    {
        assetText: "3d models of in scene assets",
        assetMediaLink: CardAMedia02,
        assetMediaType: MediaType.Image,
        assetStillLink: CardAMedia02,
    },
    {
        assetText: "3d models of in scene assets",
        assetMediaLink: CardAMedia03,
        assetMediaType: MediaType.Image,
        assetStillLink: CardAMedia03,
    },
    {
        assetText: "3d models of in scene assets",
        assetMediaLink: CardAMedia04,
        assetMediaType: MediaType.Image,
        assetStillLink: CardAMedia04,
    },
    {
        assetText: "3d models of in scene assets remodel",
        assetMediaLink: CardAMedia05,
        assetMediaType: MediaType.Image,
        assetStillLink: CardAMedia05,
    },
]

const ProjectCardBData: gallery.IProjectCardData = 
{
    cardMedia: CardB,
    cardMediaType: MediaType.Image,
    cardText: "Level and Map Design",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const CardBGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Sketching various map layouts",
        assetMediaLink: CardBMedia01,
        assetMediaType: MediaType.Image,
        assetStillLink: CardBMedia01,
    },
    {
        assetText: "Model testing map layouts",
        assetMediaLink: CardBMedia02,
        assetMediaType: MediaType.Image,
        assetStillLink: CardBMedia02,
    },
]

const ProjectCardCData: gallery.IProjectCardData =
{
    cardMedia: CardC,
    cardMediaType: MediaType.Image,
    cardText: "Initial Environment Modeling",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const CardCGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Initial final map design",
        assetMediaLink: CardCMedia01,
        assetMediaType: MediaType.Image,
        assetStillLink: CardCMedia01,
    },
    {
        assetText: "Goal point area design.",
        assetMediaLink: CardCMedia02,
        assetMediaType: MediaType.Image,
        assetStillLink: CardCMedia02,
    },
    {
        assetText: "Entrance to team building design.",
        assetMediaLink: CardCMedia03,
        assetMediaType: MediaType.Image,
        assetStillLink: CardCMedia03,
    },
    {
        assetText: "Center market point area.",
        assetMediaLink: CardCMedia04,
        assetMediaType: MediaType.Image,
        assetStillLink: CardCMedia04,
    },
]

const ProjectCardDData: gallery.IProjectCardData =
{
    cardMedia: CardD,
    cardMediaType: MediaType.Image,
    cardText: "Final Map Design Renders",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const CardDGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Final map layout.",
        assetMediaLink: CardDMedia01,
        assetMediaType: MediaType.Image,
        assetStillLink: CardDMedia01,
    },
    {
        assetText: "Interior team building layout.",
        assetMediaLink: CardDMedia03,
        assetMediaType: MediaType.Image,
        assetStillLink: CardDMedia03,
    },
    {
        assetText: "Center market point design.",
        assetMediaLink: CardDMedia04,
        assetMediaType: MediaType.Image,
        assetStillLink: CardDMedia04,
    },
    {
        assetText: "Market assets and design.",
        assetMediaLink: CardDMedia07,
        assetMediaType: MediaType.Image,
        assetStillLink: CardDMedia07,
    },
    {
        assetText: "View from player spawn point.",
        assetMediaLink: CardDMedia06,
        assetMediaType: MediaType.Image,
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

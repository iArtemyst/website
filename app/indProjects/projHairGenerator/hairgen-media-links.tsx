
'use client'

import "@/app/globals/globals.css";

import vfxStillA from "@/app/assets/images/_game/_vfx/vfx_stills_01.png";
import vfxGalleryVidA from "@/app/assets/videos/_game/_vfx/vfx_galleryVids_00.mp4";
import vfxNodeA01 from "@/app/assets/images/_game/_vfx/vfx_nodes_001.png";
import vfxNodeA02 from "@/app/assets/images/_game/_vfx/vfx_nodes_002.png";
import vfxNodeA03 from "@/app/assets/images/_game/_vfx/vfx_nodes_013.png";
import vfxNodeA04 from "@/app/assets/images/_game/_vfx/vfx_nodes_014.png";
import vfxNodeA05 from "@/app/assets/images/_game/_vfx/vfx_nodes_015.png";
import vfxNodeA06 from "@/app/assets/images/_game/_vfx/vfx_nodes_016.png";

import vfxStillB from "@/app/assets/images/_game/_vfx/vfx_stills_00.png";
import vfxGalleryVidB from "@/app/assets/videos/_game/_vfx/vfx_galleryVids_02.mp4";
import vfxNodeB01 from "@/app/assets/images/_game/_vfx/vfx_nodes_004.png";
import vfxNodeB02 from "@/app/assets/images/_game/_vfx/vfx_nodes_005.png";

import vfxStillC from "@/app/assets/images/_game/_vfx/vfx_stills_02.png";
import vfxGalleryVidC from "@/app/assets/videos/_game/_vfx/vfx_galleryVids_01.mp4";
import vfxNodeC01 from "@/app/assets/images/_game/_vfx/vfx_nodes_006.png";
import vfxNodeC02 from "@/app/assets/images/_game/_vfx/vfx_nodes_007.png";
import vfxNodeC03 from "@/app/assets/images/_game/_vfx/vfx_nodes_008.png";

import vfxStillD from "@/app/assets/images/_game/_vfx/vfx_stills_03.png";
import vfxGalleryVidD from "@/app/assets/videos/_game/_vfx/vfx_galleryVids_03.mp4";
import vfxNodeD01 from "@/app/assets/images/_game/_vfx/vfx_nodes_011.png";
import vfxNodeD02 from "@/app/assets/images/_game/_vfx/vfx_nodes_012.png";



import CardA from "/app/assets/images/_game/_stubbleGen/shave-gen_still-a.png";


import CardB from "/app/assets/images/_game/_stubbleGen/shave-gen_still-b.png";


import CardC from "/app/assets/images/_game/_stubbleGen/shave-gen_still-c.png";


import CardD from "/app/assets/images/_game/_stubbleGen/shave-gen_still-d.png";



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
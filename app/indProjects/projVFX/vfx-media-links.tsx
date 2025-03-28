
'use client'

import "@/app/globals/globals.css";

import CardA from "@/app/assets/videos/_game/_vfx/vfx_fireball_clip.mp4";
import vfxStillA from "@/app/assets/images/_game/_vfx/vfx_stills_01.png";
import vfxGalleryVidA from "@/app/assets/videos/_game/_vfx/vfx_galleryVids_00.mp4";
import vfxNodeA01 from "@/app/assets/images/_game/_vfx/vfx_nodes_001.png";
import vfxNodeA02 from "@/app/assets/images/_game/_vfx/vfx_nodes_002.png";
import vfxNodeA03 from "@/app/assets/images/_game/_vfx/vfx_nodes_013.png";
import vfxNodeA04 from "@/app/assets/images/_game/_vfx/vfx_nodes_014.png";
import vfxNodeA05 from "@/app/assets/images/_game/_vfx/vfx_nodes_015.png";
import vfxNodeA06 from "@/app/assets/images/_game/_vfx/vfx_nodes_016.png";

import CardB from "@/app/assets/videos/_game/_vfx/vfx_magicshield_clip.mp4";
import vfxStillB from "@/app/assets/images/_game/_vfx/vfx_stills_00.png";
import vfxGalleryVidB from "@/app/assets/videos/_game/_vfx/vfx_galleryVids_02.mp4";
import vfxNodeB01 from "@/app/assets/images/_game/_vfx/vfx_nodes_004.png";
import vfxNodeB02 from "@/app/assets/images/_game/_vfx/vfx_nodes_005.png";



import CardC from "@/app/assets/videos/_game/_vfx/vfx_laserbeam_clip.mp4";
import vfxStillC from "@/app/assets/images/_game/_vfx/vfx_stills_02.png";
import vfxGalleryVidC from "@/app/assets/videos/_game/_vfx/vfx_galleryVids_01.mp4";
import vfxNodeC01 from "@/app/assets/images/_game/_vfx/vfx_nodes_006.png";
import vfxNodeC02 from "@/app/assets/images/_game/_vfx/vfx_nodes_007.png";
import vfxNodeC03 from "@/app/assets/images/_game/_vfx/vfx_nodes_008.png";

import CardD from "@/app/assets/videos/_game/_vfx/vfx_power-sphere_clip.mp4";
import vfxStillD from "@/app/assets/images/_game/_vfx/vfx_stills_03.png";
import vfxGalleryVidD from "@/app/assets/videos/_game/_vfx/vfx_galleryVids_03.mp4";
import vfxNodeD01 from "@/app/assets/images/_game/_vfx/vfx_nodes_011.png";
import vfxNodeD02 from "@/app/assets/images/_game/_vfx/vfx_nodes_012.png";

import CardE from "@/app/assets/videos/_game/_vfx/vfx_powerup_clip.mp4";
import vfxStillE from "@/app/assets/images/_game/_vfx/vfx_stills_04.png";
import vfxGalleryVidE from "@/app/assets/videos/_game/_vfx/vfx_galleryVids_04.mp4";
import vfxNodeE01 from "@/app/assets/images/_game/_vfx/vfx_nodes_009.png";
import vfxNodeE02 from "@/app/assets/images/_game/_vfx/vfx_nodes_010.png";




import * as gallery from "@/app/globals/gallery-component";
import * as mediaData from "@/app/globals/media";

const cardStyleWHM = "w-[240px] group-hover:w-[360px] group-hover:m-[-60px]";
const cardContainerMargin = "mx-64px";

const VFXProjectCardAData: gallery.IProjectCardData = 
{
    cardMedia: CardA,
    cardText: "sample text",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}

const VFXCardAGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Asset Text Test 1",
        assetMediaLink: vfxGalleryVidA,
        assetStillLink: vfxStillA,
    },
    {
        assetText: "Asset Text Test 2",
        assetMediaLink: vfxNodeA02,
        assetStillLink: vfxNodeA02,
    },
    {
        assetText: "Asset Text Test 3",
        assetMediaLink: vfxNodeA03,
        assetStillLink: vfxNodeA03,
    },
    {
        assetText: "Asset Text Test 4",
        assetMediaLink: vfxNodeA04,
        assetStillLink: vfxNodeA04,
    },
]

const VFXProjectCardBData: gallery.IProjectCardData = 
{
    cardMedia: CardB,
    cardText: "sample text",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const VFXCardBGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Asset Text Test 1",
        assetMediaLink: vfxGalleryVidB,
        assetStillLink: vfxStillB,
    },
    {
        assetText: "Asset Text Test 2",
        assetMediaLink: vfxNodeB01,
        assetStillLink: vfxNodeB01,
    },
    {
        assetText: "Asset Text Test 3",
        assetMediaLink: vfxNodeB02,
        assetStillLink: vfxNodeB02,
    },
]

const VFXProjectCardCData: gallery.IProjectCardData =
{
    cardMedia: CardC,
    cardText: "sample text",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const VFXCardCGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Asset Text Test 1",
        assetMediaLink: vfxGalleryVidC,
        assetStillLink: vfxStillC,
    },
    {
        assetText: "Asset Text Test 2",
        assetMediaLink: vfxNodeC01,
        assetStillLink: vfxNodeC01,
    },
    {
        assetText: "Asset Text Test 3",
        assetMediaLink: vfxNodeC02,
        assetStillLink: vfxNodeC02,
    },
]

const VFXProjectCardDData: gallery.IProjectCardData = 
{
    cardMedia: CardD,
    cardText: "sample text",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const VFXCardDGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Asset Text Test 1",
        assetMediaLink: vfxGalleryVidD,
        assetStillLink: vfxStillD,
    },
    {
        assetText: "Asset Text Test 2",
        assetMediaLink: vfxNodeD01,
        assetStillLink: vfxNodeD01,
    },
    {
        assetText: "Asset Text Test 2",
        assetMediaLink: vfxNodeD02,
        assetStillLink: vfxNodeD02,
    },
]

const VFXProjectCardEData: gallery.IProjectCardData = 
{
    cardMedia: CardE,
    cardText: "sample text",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const VFXCardEGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Asset Text Test 1",
        assetMediaLink: vfxGalleryVidE,
        assetStillLink: vfxStillE,
    },
    {
        assetText: "Asset Text Test 2",
        assetMediaLink: vfxNodeE01,
        assetStillLink: vfxNodeE01,
    },
    {
        assetText: "Asset Text Test 3",
        assetMediaLink: vfxNodeE02,
        assetStillLink: vfxNodeE02,
    },
]

export const VFXProjectCardArrays: gallery.ICardWithGalleryArrays[] = 
[
    {
        cardData: VFXProjectCardAData,
        galleryData: VFXCardAGallery,
    },
    {
        cardData: VFXProjectCardBData,
        galleryData: VFXCardBGallery,
    },
    {
        cardData: VFXProjectCardCData,
        galleryData: VFXCardCGallery,
    },
    {
        cardData: VFXProjectCardDData,
        galleryData: VFXCardDGallery,
    },
    {
        cardData: VFXProjectCardEData,
        galleryData: VFXCardEGallery,
    },
]
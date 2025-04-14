
'use client'

import "@/app/globals/globals.css";

import vfxNodeA01 from "@/app/assets/_game/_vfx/vfx_nodes_001.png";
import vfxNodeA02 from "@/app/assets/_game/_vfx/vfx_nodes_002.png";
import vfxNodeA06 from "@/app/assets/_game/_vfx/vfx_nodes_016.png";
import vfxStillA from "@/app/assets/_game/_vfx/vfx_stills_01.png";
import CardA from "@/app/assets/_game/_vfx/vfx_fireball_clip.mp4";
import vfxGalleryVidA from "@/app/assets/_game/_vfx/vfx_galleryVids_00.mp4";

import vfxNodeB01 from "@/app/assets/_game/_vfx/vfx_nodes_004.png";
import vfxNodeB02 from "@/app/assets/_game/_vfx/vfx_nodes_005.png";
import vfxStillB from "@/app/assets/_game/_vfx/vfx_stills_00.png";
import vfxGalleryVidB from "@/app/assets/_game/_vfx/vfx_galleryVids_02.mp4";
import CardB from "@/app/assets/_game/_vfx/vfx_magicshield_clip.mp4";

import vfxNodeC01 from "@/app/assets/_game/_vfx/vfx_nodes_006.png";
import vfxNodeC02 from "@/app/assets/_game/_vfx/vfx_nodes_007.png";
import vfxStillC from "@/app/assets/_game/_vfx/vfx_stills_02.png";
import vfxGalleryVidC from "@/app/assets/_game/_vfx/vfx_galleryVids_01.mp4";
import CardC from "@/app/assets/_game/_vfx/vfx_laserbeam_clip.mp4";

import vfxNodeD01 from "@/app/assets/_game/_vfx/vfx_nodes_011.png";
import vfxNodeD02 from "@/app/assets/_game/_vfx/vfx_nodes_012.png";
import vfxStillD from "@/app/assets/_game/_vfx/vfx_stills_03.png";
import vfxGalleryVidD from "@/app/assets/_game/_vfx/vfx_galleryVids_03.mp4";
import CardD from "@/app/assets/_game/_vfx/vfx_power-sphere_clip.mp4";

import vfxNodeE01 from "@/app/assets/_game/_vfx/vfx_nodes_009.png";
import vfxNodeE02 from "@/app/assets/_game/_vfx/vfx_nodes_010.png";
import vfxStillE from "@/app/assets/_game/_vfx/vfx_stills_04.png";
import vfxGalleryVidE from "@/app/assets/_game/_vfx/vfx_galleryVids_04.mp4";
import CardE from "@/app/assets/_game/_vfx/vfx_powerup_clip.mp4";




import * as gallery from "@/app/globals/project-galleries";

const cardStyleWHM = "w-[120px] md:w-[240px] lg:w-[360px] group-hover:w-[180px] md:group-hover:w-[360px] lg:group-hover:w-[480px] group-hover:m-[-30px] md:group-hover:m-[-60px]";
const cardContainerMargin = "mx-64px";

const VFXProjectCardAData: gallery.IProjectCardData = 
{
    cardMedia: CardA,
    cardText: "Fireball VFX",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}

const VFXCardAGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Casting a fireball loop. Rigged, animated, and rendered in Blender3D",
        assetMediaLink: vfxGalleryVidA,
        assetStillLink: vfxStillA,
    },
    {
        assetText: "Shader nodes for the fireball",
        assetMediaLink: vfxNodeA01,
        assetStillLink: vfxNodeA01,
    },
    {
        assetText: "Shader nodes for the fireball  trail",
        assetMediaLink: vfxNodeA02,
        assetStillLink: vfxNodeA02,
    },
    {
        assetText: "Simulation and generation nodes for fireball creation",
        assetMediaLink: vfxNodeA06,
        assetStillLink: vfxNodeA06,
    },
]

const VFXProjectCardBData: gallery.IProjectCardData = 
{
    cardMedia: CardB,
    cardText: "Energy Shield VFX",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const VFXCardBGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Casting an energy shield. Rigged, animated, and rendered in Blender3D",
        assetMediaLink: vfxGalleryVidB,
        assetStillLink: vfxStillB,
    },
    {
        assetText: "Shader nodes for energy shield pt. 1",
        assetMediaLink: vfxNodeB01,
        assetStillLink: vfxNodeB01,
    },
    {
        assetText: "Shader nodes for energy shield pt. 2",
        assetMediaLink: vfxNodeB02,
        assetStillLink: vfxNodeB02,
    },
]

const VFXProjectCardCData: gallery.IProjectCardData =
{
    cardMedia: CardC,
    cardText: "Laser Beam VFX",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const VFXCardCGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Lab testing a laser beam. Rigged, animated, and rendered in Blender3D",
        assetMediaLink: vfxGalleryVidC,
        assetStillLink: vfxStillC,
    },
    {
        assetText: "Shader nodes for laser beam",
        assetMediaLink: vfxNodeC01,
        assetStillLink: vfxNodeC01,
    },
    {
        assetText: "Shader nodes for laser collision",
        assetMediaLink: vfxNodeC02,
        assetStillLink: vfxNodeC02,
    },
]

const VFXProjectCardDData: gallery.IProjectCardData = 
{
    cardMedia: CardD,
    cardText: "Power Sphere VFX",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const VFXCardDGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Tossing a power sphere. Rigged, animated, and rendered in Blender3D",
        assetMediaLink: vfxGalleryVidD,
        assetStillLink: vfxStillD,
    },
    {
        assetText: "Shader nodes for power sphere pt. 1.",
        assetMediaLink: vfxNodeD01,
        assetStillLink: vfxNodeD01,
    },
    {
        assetText: "Shader nodes for power sphere pt. 2.",
        assetMediaLink: vfxNodeD02,
        assetStillLink: vfxNodeD02,
    },
]

const VFXProjectCardEData: gallery.IProjectCardData = 
{
    cardMedia: CardE,
    cardText: "Powering Up VFX",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const VFXCardEGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Powering up to another level. Rigged, animated, and rendered in Blender3D",
        assetMediaLink: vfxGalleryVidE,
        assetStillLink: vfxStillE,
    },
    {
        assetText: "Shader nodes for power up core.",
        assetMediaLink: vfxNodeE01,
        assetStillLink: vfxNodeE01,
    },
    {
        assetText: "Shader nodes for power up rings.",
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
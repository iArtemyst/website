
'use client'

import "@/app/globals/globals.css";

import * as gallery from "@/app/globals/project-galleries";
import { MediaType } from "@/app/globals/project-galleries";

const vfxNodeA01     = "_game/_vfx/vfx_nodes_001.png";
const vfxNodeA02     = "_game/_vfx/vfx_nodes_002.png";
const vfxNodeA06     = "_game/_vfx/vfx_nodes_016.png";
const vfxStillA      = "_game/_vfx/vfx_stills_01.png";
const vfxGalleryVidA = "_game/_vfx/vfx_galleryVids_00.mp4";
const CardA          = "_game/_vfx/vfx_fireball_clip.mp4";

const vfxNodeB01     = "_game/_vfx/vfx_nodes_004.png";
const vfxNodeB02     = "_game/_vfx/vfx_nodes_005.png";
const vfxStillB      = "_game/_vfx/vfx_stills_00.png";
const vfxGalleryVidB = "_game/_vfx/vfx_galleryVids_02.mp4";
const CardB          = "_game/_vfx/vfx_magicshield_clip.mp4";

const vfxNodeC01     = "_game/_vfx/vfx_nodes_006.png";
const vfxNodeC02     = "_game/_vfx/vfx_nodes_007.png";
const vfxStillC      = "_game/_vfx/vfx_stills_02.png";
const vfxGalleryVidC = "_game/_vfx/vfx_galleryVids_01.mp4";
const CardC          = "_game/_vfx/vfx_laserbeam_clip.mp4";

const vfxNodeD01     = "_game/_vfx/vfx_nodes_011.png";
const vfxNodeD02     = "_game/_vfx/vfx_nodes_012.png";
const vfxStillD      = "_game/_vfx/vfx_stills_03.png";
const vfxGalleryVidD = "_game/_vfx/vfx_galleryVids_03.mp4";
const CardD          = "_game/_vfx/vfx_power-sphere_clip.mp4";

const vfxNodeE01     = "_game/_vfx/vfx_nodes_009.png";
const vfxNodeE02     = "_game/_vfx/vfx_nodes_010.png";
const vfxStillE      = "_game/_vfx/vfx_stills_04.png";
const vfxGalleryVidE = "_game/_vfx/vfx_galleryVids_04.mp4";
const CardE          = "_game/_vfx/vfx_powerup_clip.mp4";

const cardStyleWHM = "w-[120px] sm:w-[180px] md:w-[240px] lg:w-[320px] xl:w-[360px] 2xl:w-[480px]";
const cardContainerMargin = "mx-64px";

const VFXProjectCardAData: gallery.IProjectCardData = 
{
    cardMedia: CardA,
    cardMediaType: MediaType.Video,
    cardText: "Fireball VFX",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}

const VFXCardAGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Casting a fireball loop. Rigged, animated, and rendered in Blender3D",
        assetMediaLink: vfxGalleryVidA,
        assetMediaType: MediaType.Video,
        assetStillLink: vfxStillA,
    },
    {
        assetText: "Shader nodes for the fireball",
        assetMediaLink: vfxNodeA01,
        assetMediaType: MediaType.Image,
        assetStillLink: vfxNodeA01,
    },
    {
        assetText: "Shader nodes for the fireball  trail",
        assetMediaLink: vfxNodeA02,
        assetMediaType: MediaType.Image,
        assetStillLink: vfxNodeA02,
    },
    {
        assetText: "Simulation and generation nodes for fireball creation",
        assetMediaLink: vfxNodeA06,
        assetMediaType: MediaType.Image,
        assetStillLink: vfxNodeA06,
    },
]

const VFXProjectCardBData: gallery.IProjectCardData = 
{
    cardMedia: CardB,
    cardMediaType: MediaType.Video,
    cardText: "Energy Shield VFX",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const VFXCardBGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Casting an energy shield. Rigged, animated, and rendered in Blender3D",
        assetMediaLink: vfxGalleryVidB,
        assetMediaType: MediaType.Video,
        assetStillLink: vfxStillB,
    },
    {
        assetText: "Shader nodes for energy shield pt. 1",
        assetMediaLink: vfxNodeB01,
        assetMediaType: MediaType.Image,
        assetStillLink: vfxNodeB01,
    },
    {
        assetText: "Shader nodes for energy shield pt. 2",
        assetMediaLink: vfxNodeB02,
        assetMediaType: MediaType.Image,
        assetStillLink: vfxNodeB02,
    },
]

const VFXProjectCardCData: gallery.IProjectCardData =
{
    cardMedia: CardC,
    cardMediaType: MediaType.Video,
    cardText: "Laser Beam VFX",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const VFXCardCGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Lab testing a laser beam. Rigged, animated, and rendered in Blender3D",
        assetMediaLink: vfxGalleryVidC,
        assetMediaType: MediaType.Video,
        assetStillLink: vfxStillC,
    },
    {
        assetText: "Shader nodes for laser beam",
        assetMediaLink: vfxNodeC01,
        assetMediaType: MediaType.Image,
        assetStillLink: vfxNodeC01,
    },
    {
        assetText: "Shader nodes for laser collision",
        assetMediaLink: vfxNodeC02,
        assetMediaType: MediaType.Image,
        assetStillLink: vfxNodeC02,
    },
]

const VFXProjectCardDData: gallery.IProjectCardData = 
{
    cardMedia: CardD,
    cardMediaType: MediaType.Video,
    cardText: "Power Sphere VFX",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const VFXCardDGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Tossing a power sphere. Rigged, animated, and rendered in Blender3D",
        assetMediaLink: vfxGalleryVidD,
        assetMediaType: MediaType.Video,
        assetStillLink: vfxStillD,
    },
    {
        assetText: "Shader nodes for power sphere pt. 1.",
        assetMediaLink: vfxNodeD01,
        assetMediaType: MediaType.Image,
        assetStillLink: vfxNodeD01,
    },
    {
        assetText: "Shader nodes for power sphere pt. 2.",
        assetMediaLink: vfxNodeD02,
        assetMediaType: MediaType.Image,
        assetStillLink: vfxNodeD02,
    },
]

const VFXProjectCardEData: gallery.IProjectCardData = 
{
    cardMedia: CardE,
    cardMediaType: MediaType.Video,
    cardText: "Powering Up VFX",
    cardStyleWHM: cardStyleWHM,
    cardContainerMargin: cardContainerMargin,
}


const VFXCardEGallery: gallery.IGalleryMedia[] = [
    {
        assetText: "Powering up to another level. Rigged, animated, and rendered in Blender3D",
        assetMediaLink: vfxGalleryVidE,
        assetMediaType: MediaType.Video,
        assetStillLink: vfxStillE,
    },
    {
        assetText: "Shader nodes for power up core.",
        assetMediaLink: vfxNodeE01,
        assetMediaType: MediaType.Image,
        assetStillLink: vfxNodeE01,
    },
    {
        assetText: "Shader nodes for power up rings.",
        assetMediaLink: vfxNodeE02,
        assetMediaType: MediaType.Image,
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
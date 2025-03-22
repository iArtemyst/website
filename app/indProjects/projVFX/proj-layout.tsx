'use client'

import * as bentos from "@/app/globals/bento-boxes";
import "@/app/globals/globals.css";
import * as pages from "@/app/globals/pages-main";
import Card01 from "/app/assets/videos/_game/_vfx/vfx_fireball_clip.mp4";
import Card02 from "/app/assets/videos/_game/_vfx/vfx_laserbeam_clip.mp4";
import Card03 from "/app/assets/videos/_game/_vfx/vfx_magicshield_clip.mp4";
import Card04 from "/app/assets/videos/_game/_vfx/vfx_power-sphere_clip.mp4";
import Card05 from "/app/assets/videos/_game/_vfx/vfx_powerup_clip.mp4";

const width = "w-[300px]";
const hWidth = "group-hover:w-[480px]";
const hMargin = "group-hover:m-[-90px]";
const conMargin = "mx-[64px]";
const columnAmount = "grid-cols-5";

import { CardsContainer, IProjectCardData } from "@/app/globals/card-generator";

const cardMedia: IProjectCardData[] = [
    {
        cardWidth: width,
        hoverWidth: hWidth,
        hoverMargin: hMargin,
        containerMargin: conMargin,
        cardText: "Casting a fireball",
        cardMediaLink: Card01,
    },
    {
        cardWidth: width,
        hoverWidth: hWidth,
        hoverMargin: hMargin,
        containerMargin: conMargin,
        cardText: "Activating a laser beam",
        cardMediaLink: Card02,
    },
    {
        cardWidth: width,
        hoverWidth: hWidth,
        hoverMargin: hMargin,
        containerMargin: conMargin,
        cardText: "Summoning a protective shield",
        cardMediaLink: Card03,
    },
    {
        cardWidth: width,
        hoverWidth: hWidth,
        hoverMargin: hMargin,
        containerMargin: conMargin,
        cardText: "Hurling a sphere of energy",
        cardMediaLink: Card04,
    },
    {
        cardWidth: width,
        hoverWidth: hWidth,
        hoverMargin: hMargin,
        containerMargin: conMargin,
        cardText: "Powering up to the next level",
        cardMediaLink: Card05,
    },
];

export default function ProjectVFXPage() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <bentos.ProjectDetailText
                TitleText="STYLIZED VFX"
                MoreText="In an effort to practice my 2D shader development, I quickly rigged and animated a simple character model and set about recreating some stylized shaders applied to simple geometry.
                The VFX assets are made of several layers of meshes, shaders, and timed animations. And with the fireball animation, I developed a procedural system to spawn and cast a fireball along a spline in scene." /> 
            <CardsContainer dataArray={cardMedia} gridCols={columnAmount} />
        </pages.GroupProjectPage>
    )
}
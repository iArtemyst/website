'use client'

import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";
import { MediaType } from "@/app/globals/project-galleries";
import { CheckIfMobileBrowser } from "../globals/mobile-check";
import StyledLink from "../globals/styled-link";
import { NoSelect } from "../globals/styles";
import { hoverShadow } from "@/tailwind.config";
import { GalleryV2b, GalleryV2TopInfoDiv } from "../globals/gallery-v2";
import * as gallery from "@/app/globals/project-galleries";
import { ViewAnotherProjectCard, ViewAnotherProjectDiv } from "../globals/view-another-project";

const mediaFxskVid01 = "_3d/_fxsk-comboVid/cv_character-turnarounds.mp4";
const mediaFxskVid02 = "_3d/_fxsk-comboVid/cv_foxsuke_fullIntro_still.png";
const mediaFxskVid03 = "_3d/_fxsk-comboVid/cv_shipIntro_clip001.mp4";
const mediaFxskVid04 = "_3d/_fxsk-comboVid/cv_shipIntro_clip002.mp4";
const mediaFxskVid05 = "_3d/_fxsk-comboVid/cv_shipIntro_clip003.mp4";
const mediaFxskVid06 = "_3d/_fxsk-comboVid/cv_shipIntro_clip004.mp4";
const mediaFxskVid07 = "_3d/_fxsk-comboVid/cv_shipIntro_clip005.mp4";
const mediaFxskVid08 = "_3d/_fxsk-comboVid/cv_wip_arenaBuild_still.png";
const mediaFxskVid09 = "_3d/_fxsk-comboVid/cv_arena-build-collat_001.mp4";
const mediaFxskVid11 = "_3d/_fxsk-comboVid/cv_wip_charColor_still.png";
const mediaFxskVid12 = "_3d/_fxsk-comboVid/cv_wip-face-rigs.mp4";
const mediaFxskVid13 = "_3d/_fxsk-comboVid/cv_sakura-eye_collat.mp4";
const mediaFxskVid14 = "_3d/_fxsk-comboVid/cv_wip_lighting_still.png";
const mediaFxskVid15 = "_3d/_fxsk-comboVid/cv_wip_keyframes_still.png";
const mediaFxskVid16 = "_3d/_fxsk-comboVid/cv_wip_audioEditing_still.png";
const mediaFxskVid17 = "_3d/_fxsk-comboVid/cv_comboVid_stills.png";


const ytEmbedLinkDirectorsCut = "https://www.youtube.com/embed/9VLD13rxklg?si=jPAAkzJmku6cvdIo-IXMZTYM&amp;start=1";
const ytEmbedLinkComboVidCut = "https://www.youtube.com/embed/jUBAnyPrEME?si=YI8Ps4vV5b3r7xfr-IXMZTYM&amp;start=1";

const otherProjectLinkMedia = "_3d/_fxsk-model/fxsk_model-in-game.png";
const linkFoxsukeComboVideo = "../projSasukeModel";

const titleTextSize= "text-[24px]";
const paraTextSize = "text-[12px]";

const FoxsukeComboVidMedia: gallery.IGalleryMedia[] = [
    {
        assetText: "Sakura catches up to Sai in the arena",
        assetMediaLink: mediaFxskVid07,
        assetMediaType: gallery.MediaType.Video,
        assetStillLink: "",
    },
    {
        assetText: "Naruto enters the arena",
        assetMediaLink: mediaFxskVid06,
        assetMediaType: gallery.MediaType.Video,
        assetStillLink: "",
    },
    {
        assetText: "Sasuke's reveal",
        assetMediaLink: mediaFxskVid03,
        assetMediaType: gallery.MediaType.Video,
        assetStillLink: "",
    },
    {
        assetText: "Naruto questions Sasuke's reasoning",
        assetMediaLink: mediaFxskVid04,
        assetMediaType: gallery.MediaType.Video,
        assetStillLink: "",
    },
    {
        assetText: "Sasuke descends upon Naruto",
        assetMediaLink: mediaFxskVid05,
        assetMediaType: gallery.MediaType.Video,
        assetStillLink: "",
    },
]


function BentoBoxA() {
    return (
        <div className="flex flex-col gap-[1em]">
            <div className="relative z-0 w-full h-auto justify-self-center flex flex-col gap-[12px] rounded-3xl place-content-center text-white hover:cursor-pointer">
                <div className="col-span-1 w-full">
                    <div className="w-full justify-center flex">
                        <iframe className="w-[90%] max-w-[1280px] h-[320px] sm:h-[480px] md:h-[540px] lg:h-[720px] rounded-xl" 
                            src={ytEmbedLinkDirectorsCut} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <GalleryV2TopInfoDiv 
                    projTitle="Shippuden Opening SSBM Version" 
                    projSummary={`This project started as a request to build an intro for a Super Smash Bros. Melee Combo video, featuring the new "Foxsuke" 3D Model in place of Fox. It developed into a full 3D recreation of the Naruto Shippuden Opening. While the opening would have to be cut down for the clients video edit, I was asked to continue developing the full scene animation in 3D as a second version. Over the course of a couple months, I worked on this animation project solo, delivering updates and implementing feedback from my Client.`} 
                    projOtherDetails={`CLIENT | LEAD ANIMATOR & CHARACTER DESIGNER & VIDEO EDITOR`}/>
        </div>
    )
}

function BentoBoxC() {
    return (
        <div className="relative z-0 w-full h-fit justify-self-center grid place-items-center gap-[12px] text-white hover:cursor-pointer">
            <iframe className="w-[90%] sm:w-[80%] h-[240px] sm:h-[360px] md:h-[480px] lg:h-[540px] xl:h-[640px] 2xl:h-[720px] rounded-xl place-self-center" 
                src={ytEmbedLinkComboVidCut} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}


function BentoBoxB() {
    return (
        <div className="relative z-10 grid grid-cols-1 w-[80%] h-fit justify-self-center text-white hover:cursor-pointer gap-[12px]">

            <bentos.CellMediaOnClickNoShadow mediaText="Featuring SSBM Characters as the Naruto Cast" mediaLink={mediaFxskVid01} mediaType={MediaType.Video} cellSpan="col-span-1" hoverTextColor="text-textVariant" />

            <div className="col-span-1 h-fit">
                <bentos.CellText cellSpan="col-span-1">
                    <bentos.HeaderText text="| some clips from the video |"/>
                </bentos.CellText>
                <GalleryV2b mediaGallery={FoxsukeComboVidMedia} />
            </div>

            <bentos.CellMediaOnClickNoShadow mediaText="Still frames from the animation" mediaLink={mediaFxskVid02} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>

            <bentos.CellText cellSpan={`col-span-1`}>
                <bentos.ParagraphText 
                    text="Every character needed at least one change, but the main characters needed a lot more. The game engine rigs were sturdy, but lacking some of the finesse I needed to capture with my animation. So in addition to creating new colors and updated textures for the chracters, I also built additional character rig support for facial and hair features." />
            </bentos.CellText>

            <bentos.CellMediaOnClickNoShadow mediaText="Character model texture updates" mediaLink={mediaFxskVid11} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            <bentos.CellMediaOnClickNoShadow mediaText="Custom face and eye rigs for Falco and Sasuke" mediaLink={mediaFxskVid12} mediaType={MediaType.Video} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            <bentos.CellMediaOnClickNoShadow mediaText="Custom animated eye maps for Sheik" mediaLink={mediaFxskVid13} mediaType={MediaType.Video} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            <bentos.CellMediaOnClickNoShadow mediaText="WIP Detail: Creating the environment" mediaLink={mediaFxskVid08} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>

            <div className="col-span-1 grid grid-cols-1 sm:grid-cols-3">
                <bentos.CellText cellSpan={`col-span-1 order-1 sm:order-2`}>
                    <bentos.ParagraphText 
                        text="After making the necessary character adjustments, I set to work modeling and texturing the environment for the animation. To improve my efficiency and realism, I used techniques like physics simulations, procedural texture mapping, and digital sculpting to craft the environment." />
                </bentos.CellText>
                <bentos.CellMediaOnClickNoShadow mediaText="Some of the final environment assets" mediaLink={mediaFxskVid09} mediaType={MediaType.Video} cellSpan="col-span-2 order-2 sm:order-1" hoverTextColor="text-textVariant"/>
            </div>

            <bentos.CellMediaOnClickNoShadow mediaText="Designing and testing the scene lighting" mediaLink={mediaFxskVid14} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            <bentos.CellMediaOnClickNoShadow mediaText="Animating all the characters and scene elements" mediaLink={mediaFxskVid15} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            <bentos.CellText cellSpan={`col-span-1`}>
                <bentos.ParagraphText 
                    text="Final rendering, compositing, and editing were up to me as well. I utilized Adobe After Effects to cut and edit together my rendered frames, and spliced the original audio from the Anime together with an edited version of the backing music to match the new timings of my scene." />
            </bentos.CellText>
            <bentos.CellMediaOnClickNoShadow mediaText="Video and Audio editing for music, sfx, and final animation" mediaLink={mediaFxskVid16} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            <bentos.CellMediaOnClickNoShadow mediaText="Additional editing and visual fx for SSBM Combo Video" mediaLink={mediaFxskVid17} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
        </div>
    )
}




export function FoxsukeVideoPage() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <div className="relative grid grid-cols-1 gap-[24px]">
                <BentoBoxA />
                <BentoBoxC />
                <BentoBoxB />

                <ViewAnotherProjectDiv text="Check out this related project!">
                    <ViewAnotherProjectCard 
                        projTitle="Custom 3D Sasuke Model" 
                        projDesc={`Original Character Model mod for Fox in the game Super Smash Bros. Melee. Created and rigged with Blender 3D, and modded to a custom version of SSBM.`}
                        projMedia={otherProjectLinkMedia}
                        projMediaAltText="alt text" 
                        projLink={linkFoxsukeComboVideo}
                        projLinkMediaType={MediaType.Image}
                        cardColor={`bg-[#19377B] border-[#255EE3] text-textVariant`}/>
                </ViewAnotherProjectDiv>
            </div>
        </pages.GroupProjectPage>
    )
}

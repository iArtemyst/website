'use client'

import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";
import { MediaType } from "@/app/globals/project-galleries";
import { CheckIfMobileBrowser } from "../globals/mobile-check";
import StyledLink from "../globals/styled-link";
import { NoSelect } from "../globals/styles";
import { hoverShadow } from "@/tailwind.config";

const imgDDRMelee01 = "_motionui/_ddrmelee/ddr-melee_stills_10.png";
const imgDDRMelee02 = "_motionui/_ddrmelee/ddr-melee_stills_11.png";
const imgDDRMelee03 = "_motionui/_ddrmelee/ddr-melee_stills_12.png";
const imgDDRMelee04 = "_motionui/_ddrmelee/ddr-melee_stills_13.png";

const vidDDRMelee01 = "_motionui/_ddrmelee/ddr-melee-intro_1440px.mp4";
const vidDDRMelee02 = "_motionui/_ddrmelee/ddr_melee_liveAE_v1.mp4";

const youtubeLinkDirectorsCut = "https://youtu.be/9VLD13rxklg?si=zpLJPsunRDPg0nF0";
const youtubeLinkComboVidCut = "https://youtu.be/jUBAnyPrEME?si=1xVMObw4t9Uu1sea";

const ytEmbedLinkDirectorsCut = "https://www.youtube.com/embed/9VLD13rxklg?si=jPAAkzJmku6cvdIo-IXMZTYM&amp;start=1";
const ytEmbedLinkComboVidCut = "https://www.youtube.com/embed/jUBAnyPrEME?si=YI8Ps4vV5b3r7xfr-IXMZTYM&amp;start=1";

const titleTextSize= "text-[24px]";
const paraTextSize = "text-[12px]";

function BentoBoxA() {
    let isMobile = CheckIfMobileBrowser();
    return (
        <div className="relative z-10 grid grid-cols-1 w-[80%] h-fit justify-self-center text-white hover:cursor-pointer gap-[12px]">
            
            <bentos.CellText cellSpan="col-span-1 w-full">
                <bentos.HeaderText text="Foxsuke Shippuden Opening (SSBM Version) (WIP)" textSize={titleTextSize}/>
            </bentos.CellText>

            {/* <div className={`${isMobile ? "grid-cols-1" : "grid-cols-3"} h-fit gap-[12px] grid`}>
                <bentos.CellMediaOnClick mediaLink={vidDDRMelee01} mediaType={MediaType.Video} mediaText="DDR Melee Intro Video" cellSpan={`${isMobile ? "col-span-1" : "col-span-2"}`} hoverTextColor="text-textVariant" />
                <bentos.CellText cellSpan={`col-span-1`}>
                    <bentos.ParagraphText textSize={paraTextSize} text="When my partner came to me with the idea for a Super Smash Bros Melee combo video, I was immediately on board. The idea they had developed was a program that identified the moves that were being performed by the player, and would display graphics for each button hit, similar to Dance Dance Revolution." />
                </bentos.CellText>
            </div>

            <div className={`${isMobile ? "grid-cols-2" : "grid-cols-4"} grid h-fit gap-[12px] hover:z-20`}>
                <bentos.CellMediaOnClick mediaText="AE Select Game Screen" mediaLink={imgDDRMelee01} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaText="AE Select Song Screen" mediaLink={imgDDRMelee02} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaText="AE Stage Clear Screen" mediaLink={imgDDRMelee03} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaText="AE Stage Clear Screen" mediaLink={imgDDRMelee04} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            </div>

            <div className={`${isMobile ? "grid-cols-1" : "grid-cols-3"} w-full justify-self-center grid  gap-[12px] hover:z-20`}>
                <bentos.CellMediaOnClick mediaLink={vidDDRMelee02} mediaType={MediaType.Video} mediaText="DDR Melee Outro Video" cellSpan="col-span-2"  hoverTextColor="text-textVariant"/>

                <bentos.CellText cellSpan="col-span-1">
                    <bentos.ParagraphText textSize={paraTextSize} text="While he took the helm on programming the functionality of coordinating button presses from controller to on screen assets in time, I started tackling all asset design and video editing. I referenced old videos and photos of the DDR games, including those that I played growing up, and tried to accurately recreate the feel and experience of playing DDR, but with SSBM. Each asset (except for the landing screen 3d text) was hand made in After Effects with vectors and shapes, and all scenes were animated and edited in Adobe After Effects" />
                </bentos.CellText>
            </div> */}
        </div>
    )
}

function BentoBoxB() {
    let isMobile = CheckIfMobileBrowser();
    return (
        <div className="relative z-0 flex w-[70%] h-auto justify-self-center grid-cols-1 gap-[12px] rounded-3xl place-content-center text-white hover:cursor-pointer">
            <div className="">
                {
                    isMobile ?
                        <div className={`${hoverShadow} w-fit h-fit rounded-xl`} style={NoSelect}>
                            <StyledLink href={youtubeLinkComboVidCut}>
                                <bentos.CellText cellSpan="col-span-1">
                                    <bentos.ParagraphText text="View the full video on Youtube!" textSize="text-[10px]" />
                                </bentos.CellText>
                            </StyledLink>
                        </div>
                        :
                        <div className={`justify-self-center rounded-xl overflow-clip w-full h-auto place-items-center`}>
                            <bentos.ParagraphText text="View the full videos on Youtube!" textSize="text-[10px]" />
                            <div className="w-full justify-center flex flex-row gap-[12px]">
                                <iframe width="400" height="300" src={ytEmbedLinkDirectorsCut} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                <iframe width="400" height="300" src={ytEmbedLinkComboVidCut} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export function FoxsukeVideoPage() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <div className="relative grid grid-cols-1 gap-[24px]">
                <BentoBoxA />
                <BentoBoxB />
            </div>
        </pages.GroupProjectPage>
    )
}

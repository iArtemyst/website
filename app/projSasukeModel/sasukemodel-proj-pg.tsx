'use client'

import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";
import { MediaType } from "@/app/globals/project-galleries";
import { CheckIfMobileBrowser } from "../globals/mobile-check";
import StyledLink from "../globals/styled-link";
import { NoSelect } from "../globals/styles";
import { hoverShadow } from "@/tailwind.config";
import { LazyImageSizer } from "../globals/lazy-image";
import * as fonts from "@/app/globals/fonts";
import { ViewAnotherProjectCard, ViewAnotherProjectDiv } from "@/app/globals/view-another-project";

const mediaFoxsukeModel01 = "_3d/_fxsk-model/fxsk_media_hero.mp4";
const mediaFoxsukeModel02 = "_3d/_fxsk-model/fxsk_sasuke-ref-img-001.png";
const mediaFoxsukeModel03 = "_3d/_fxsk-model/fxsk_sasuke-ref-img-002.png";
const mediaFoxsukeModel04 = "_3d/_fxsk-model/fxsk_model-development.mp4";
const mediaFoxsukeModel05 = "_3d/_fxsk-model/fxsk_final-model-turnaround.mp4";
const mediaFoxsukeModel06 = "_3d/_fxsk-model/fxsk_final-model-details.mp4";
const mediaFoxsukeModel07 = "_3d/_fxsk-model/fxsk_lp-model-compare.mp4";
const mediaFoxsukeModel08 = "_3d/_fxsk-model/fxsk_model-in-game.png";
const mediaFoxsukeModel09 = "_3d/_fxsk-model/fxsk_model-icon.png";
const mediaFoxsukeModel10 = "_3d/_fxsk-model/fxsk_wip_001.png";
const mediaFoxsukeModel11 = "_3d/_fxsk-model/fxsk_wip_002.png";
const mediaFoxsukeModel12 = "_3d/_fxsk-model/fxsk_wip_003.png";

const otherProjectLinkMedia = "_3d/_fxsk-comboVid/cv_comboVid_stills.png";
const linkFoxsukeComboVideo = "../projFoxsukeVideo";

const titleTextSize= "text-[18px] md:text-[24px] lg:text-[32px]";
const paraTextSize = "text-[12px] md:text-[14px] lg:text-[14px]";
const sasukeRefImgSizeL = `w-auto h-[360px] absolute left-0 self-center`;
const sasukeRefImgSizeR = `w-auto h-[360px] absolute right-0 self-center`;
const sasukeRefImgSizeMobileL = `w-auto h-[180px] absolute left-0 self-center`;
const sasukeRefImgSizeMobileR = `w-auto h-[180px] absolute right-0 self-center`;

const projectDescriptionText = `When first approached by this client, they had a very clear goal, make a custom 3D model to replace the current character model they play Super Smash Bros. Melee with, Fox. This character model needed to be responsive, and not delay or disturb the player as they performed actions, and it needed to achieve a visual style that merged well within the existing game environment, and blended the Anime style from the show. I worked directly with the client over several weeks to perform quality tests, and check for performance issues, as well as develop the look and style of the model before reaching a version that accomplished everything the client asked for.`;

function BentoBoxA() {
    let isMobile = CheckIfMobileBrowser();
    return (
        <div className="relative z-10 grid grid-cols-1 w-[80%] h-fit justify-self-center text-white hover:cursor-pointer gap-[12px]">
            
            <bentos.CellText cellSpan="col-span-1 w-full">
                <bentos.HeaderText text={`"Foxsuke" SSBM Model`}/>
            </bentos.CellText>

            {/* <bentos.CellMediaOnClick mediaText="Custom Sasuke 3D Model" mediaLink={mediaFoxsukeModel01} mediaType={MediaType.Video} cellSpan="col-span-1" hoverTextColor="text-textVariant" /> */}

            {
                isMobile === false ?
                    <div className={`relative w-[90%] max-w-[1080px] h-[360px] grid grid-cols-1 justify-between justify-self-center place-items-center hover:cursor-default`}>
                        <LazyImageSizer imgAlt="ref" imgLink={mediaFoxsukeModel02} imgSize={sasukeRefImgSizeL} />
                        <div className="w-[70%] h-fit items-center col-span-1 self-center flex flex-col text-pretty z-10 drop-shadow-lg text-center">
                            <p className={`${fonts.dotoBlack.className} text-[32px]`}>MAKING SASUKE UCHIHA</p>
                            <p className={`${fonts.dotoBlack.className} text-[14px]`}>{projectDescriptionText}</p>
                        </div>
                        <LazyImageSizer imgAlt="ref2" imgLink={mediaFoxsukeModel03} imgSize={sasukeRefImgSizeR} />
                    </div>

                    :

                    <div className={`w-[90%] h-[190px] grid grid-cols-1 justify-between justify-self-center place-items-center hover:cursor-default`}>
                        <LazyImageSizer imgAlt="ref" imgLink={mediaFoxsukeModel02} imgSize={sasukeRefImgSizeMobileL} />
                        <div className="w-[75%] h-fit items-center self-start flex flex-col text-pretty z-10 drop-shadow-lg text-center mt-[1em]">
                            <p className={`${fonts.dotoBlack.className} text-[10px]`}>MAKING SASUKE UCHIHA</p>
                            <p className={`${fonts.poppins.className} text-[6px]`}>{projectDescriptionText}</p>
                        </div>
                        <LazyImageSizer imgAlt="ref2" imgLink={mediaFoxsukeModel03} imgSize={sasukeRefImgSizeMobileR} />
                    </div>
            }

            <bentos.CellMediaOnClickNoShadow mediaText="Foxsuke Model Progression" mediaLink={mediaFoxsukeModel04} mediaType={MediaType.Video} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            <bentos.CellMediaOnClickNoShadow mediaText="Final Foxsuke 3D Model" mediaLink={mediaFoxsukeModel05} mediaType={MediaType.Video} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            <bentos.CellMediaOnClickNoShadow mediaText="Final Foxsuke Model Details" mediaLink={mediaFoxsukeModel06} mediaType={MediaType.Video} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>

            <div className="col-span-1 grid grid-cols-1 sm:grid-cols-3">
                <bentos.CellMediaOnClickNoShadow mediaText="Fox and Sasuke Low Poly Comparison" mediaLink={mediaFoxsukeModel07} mediaType={MediaType.Video} cellSpan="col-span-2" hoverTextColor="text-textVariant"/>
                <bentos.CellText cellSpan={`col-span-1`}>
                    <bentos.ParagraphText 
                        text={`This game ready 3D model took many variations and tests to nail down. After finalizing the character rigging, I discovered a Low Poly model is required for calculating certain in game information like shadows, and used in the off screen visual bubble. And after fixing that, I had to figure out the backface culling for a toon style outline.`} />
                </bentos.CellText>
            </div>


            <bentos.CellMediaOnClickNoShadow mediaText="Sasuke Model in Game" mediaLink={mediaFoxsukeModel08} mediaType={MediaType.Image} cellSpan="col-span-1"  hoverTextColor="text-textVariant"/>

            <div className="col-span-1 grid grid-cols-1 sm:grid-cols-3">
                <bentos.CellText cellSpan={`col-span-1 order-2 sm:order-1`}>
                    <bentos.ParagraphText
                        text={`In addition to the modded 3D model, I also designed a matching Stock Icon that displays above the character information during game. The game engine requires that this image be only 24x24px, so the challenge was to create a recognizable small pixel version of the Sasuke 3D model I had been creating.`} />
                </bentos.CellText>
                <bentos.CellMediaOnClickNoShadow mediaText="Custom Sasuke Stock Icon" mediaLink={mediaFoxsukeModel09} mediaType={MediaType.Image} cellSpan="col-span-2 order-1 sm:order-2"  hoverTextColor="text-textVariant"/>
            </div>
            
            <bentos.CellMediaOnClickNoShadow mediaText="WIP Details: Modeling Sasuke" mediaLink={mediaFoxsukeModel10} mediaType={MediaType.Image} cellSpan="col-span-1"  hoverTextColor="text-textVariant"/>
            <bentos.CellMediaOnClickNoShadow mediaText="WIP Details: Modifying UVs" mediaLink={mediaFoxsukeModel11} mediaType={MediaType.Image} cellSpan="col-span-1"  hoverTextColor="text-textVariant"/>
            <bentos.CellMediaOnClickNoShadow mediaText="WIP Details: Weight Painting and Rigging" mediaLink={mediaFoxsukeModel12} mediaType={MediaType.Image} cellSpan="col-span-1"  hoverTextColor="text-textVariant"/>
        </div>
    )
}

export function SasukeModelPage() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
                <BentoBoxA />
                <ViewAnotherProjectDiv text="Check out this related project!">
                    <ViewAnotherProjectCard
                        projTitle="Foxsuke Combo Video" 
                        projDesc={`3D Animation of the Naruto Shippuden Opening, recreated with characters from Super Smash Bros Melee, including a custom Fox "Sasuke" 3D model. With additional motion graphics, video, and audio editing for a full SSBM Combo Video.`}
                        projMedia={otherProjectLinkMedia}
                        projMediaAltText="alt text" 
                        projLink={linkFoxsukeComboVideo}
                        projLinkMediaType={MediaType.Image}
                        cardColor={`bg-[#A24A06] border-[#F6720D] text-textVariant`}/>
                </ViewAnotherProjectDiv>
        </pages.GroupProjectPage>
    )
}

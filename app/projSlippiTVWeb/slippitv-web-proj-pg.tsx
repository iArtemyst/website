'use client'

import "@/app/globals/globals.css";

import * as gallery from "@/app/globals/project-galleries";
import * as pages from "@/app/globals/pages-main";
import { GalleryV2, GalleryV2InfoWithLinks } from "@/app/globals/gallery-v2";
import * as bentos from "@/app/globals/bento-boxes";
import { MediaType } from "@/app/globals/project-galleries";
import { ViewAnotherProjectCard, ViewAnotherProjectDiv } from "../globals/view-another-project";

const imgSlippiTVWeb01 = "_code/slippiTV-web/slippiTV_website-collat_01.png";
const imgSlippiTVWatch01 = "_code/slippiTV-web/slippiTV-watch_collat_01.png";
const imgSlippiTVWatch02 = "_code/slippiTV-web/slippiTV-watch_collat_02.png";
const imgSlippiTVWatch03 = "_code/slippiTV-web/slippiTV-watch_collat_03.png";

const linkSlippiTVSite = 'https://slippi.tv/';
const linkSlippiTVGithub = 'https://github.com/asundheim/SlippiTV';

const otherProjectLinkMedia = "_code/slippiTV-app/slippitv_app_features_showcase_00.png";
const linkOtherProject = "../projSlippiTVApp";


function BentoBoxB() {
    return (
        <div className="relative z-10 grid grid-cols-1 w-[80%] h-fit justify-self-center text-white hover:cursor-pointer gap-[12px]">
            <bentos.CellMediaOnClickNoShadow mediaText="SlippiTV/Watch is the streaming platform for watching your friends play Super Smash Bros Melee games in real time." mediaLink={imgSlippiTVWatch01} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>

            <bentos.CellText cellSpan={`col-span-1`}>
                <bentos.ParagraphText textSize={"text-24px"} 
                    text="The SlippiTV/Watch platform was built with a focus on performance and usability, allowing users to watch their friends play Super Smash Bros Melee games in real time using the Slippi Lab API. My work on this project involved implementing the UI and backend logic for the streaming platform." />
            </bentos.CellText>

            <div className="col-span-1 grid grid-cols-2 items-center gap-[12px]">
                <bentos.CellMediaOnClickNoShadow mediaText="Using my knowledge of CSS and JavaScript, I implemented an responsive design that gives the streaming viewer the maximum effect, while offering the user better control of their viewing experience." mediaLink={imgSlippiTVWatch02} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClickNoShadow mediaText="Beyond building the support for streaming, I implemented all of the additional friends and game information features found in the SlippiTV Windows Application" mediaLink={imgSlippiTVWatch03} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            </div>

            <div className="col-span-1 grid grid-cols-2 items-center gap-[12px]">
                <bentos.CellText cellSpan={`col-span-1`}>
                    <bentos.ParagraphText textSize={"text-24px"} 
                        text="The SlippiTV landing site still reflects it's original design intent, promoting the Windows Application, but now features another link to the SlippiTV/Watch streaming platform. Originally this was a simpler static site designed entirely in HTML, CSS, and basic JavaScript, but was later migrated to a more modern framework to support the new streaming platform." />
                </bentos.CellText>
                <bentos.CellMediaOnClickNoShadow mediaText="The SlippiTV landing site still reflects it's original design intent, promoting the Windows Application, but now features another link to the SlippiTV/Watch streaming platform." mediaLink={imgSlippiTVWeb01} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant" />
            </div>
        </div>
    )
}



export function ProjectCodeSlippiTVWeb() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <div className={`place-self-center self-start place-items-center w-full flex flex-col h-fit md:h-auto gap-0 md:gap-[12px]`}>
                <GalleryV2InfoWithLinks 
                    projTitle="SlippiTV Web + Streaming" 
                    projSummary={`A custom website that supports watching your friends play Super Smash Bros Melee games in real time, built on Solid.Js and the Slippi Lab API. Originally designed as a companion site to promote the SlippiTV Windows application, the web platform now allows users to watch their friends play games from any device with a web browser. Utilizing the Slippi Lab API, the site connects to live game data and streams gameplay directly to viewers using a unique 2D representation of the game that keeps latency low while providing a clear and engaging viewing experience.`} 
                    outLink1={linkSlippiTVSite} 
                    buttonText1="Slippi.TV" 
                    outLink2={linkSlippiTVGithub} 
                    buttonText2="Github Repo" 
                    projOtherDetails="FREELANCE | LEAD DEVELOPER & DESIGNER"/>
                <BentoBoxB/>
            </div>
            <ViewAnotherProjectDiv text="Check out this related project!">
                <ViewAnotherProjectCard
                    projTitle="SlippiTV Windows App" 
                    projDesc={`A Windows application that allows users to connect to their friends playing Super Smash Bros Melee games on Dolphin Emulator, view live game data, and watch games in real time with low latency.`}
                    projMedia={otherProjectLinkMedia}
                    projMediaAltText="alt text" 
                    projLink={linkOtherProject}
                    projLinkMediaType={MediaType.Image}
                    cardColor={`bg-[#0f0538] border-[#3703a6] text-textVariant`}/>
            </ViewAnotherProjectDiv>
        </pages.GroupProjectPage>
    )
}
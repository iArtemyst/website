'use client'

import "@/app/globals/globals.css";

import * as gallery from "@/app/globals/project-galleries";
import * as pages from "@/app/globals/pages-main";
import { GalleryV2, GalleryV2InfoWithLinks } from "@/app/globals/gallery-v2";
import * as bentos from "@/app/globals/bento-boxes";
import { MediaType } from "@/app/globals/project-galleries";
import { ViewAnotherProjectCard, ViewAnotherProjectDiv } from "../globals/view-another-project";


const imgSlippiTV02 = "_code/slippiTV-app/slippiTV_website-collat_01_00.png";
const imgSlippiTV01 = "_code/slippiTV-app/slippitv_app_features_showcase_00.png";
const imgSlippiTV03 = "_code/slippiTV-app/slippitv_app_mainscreen-compare_00.png";
const imgSlippiTV04 = "_code/slippiTV-app/slippitv_app_settingsscreen-compare_00.png";
const imgSlippiTV05 = "_code/slippiTV-app/slippitv_app_theme_showcase_00.png";
const imgSlippiTV06 = "_code/slippiTV-app/slippitv_app_user-feedback-and-updates_00.png";
const imgSlippiTV07 = "_code/slippiTV-app/slippitv-icon-dev_1280px_00.png";

const otherProjectLinkMedia = "_code/slippiTV-web/slippiTV-watch_mainImage-noText.png";
const linkOtherProject = "../projSlippiTVWeb";

const linkSlippiTVSite = 'https://slippi.tv/';
const linkSlippiTVGithub = 'https://github.com/asundheim/SlippiTV';

const SlippiTVMedia: gallery.IGalleryMedia[] = [
    {
        assetText: "SlippiTV Windows Application, built with C# and .NET Maui",
        assetMediaLink: imgSlippiTV01,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgSlippiTV01,
    },
    {
        assetText: "SlippiTV needed a custom website to promote the new product and offer and easy place to find the latest downloads. Designed entirely in HTML and CSS, with a flexible layout that shifts when viewed on a mobile browser.",
        assetMediaLink: imgSlippiTV02,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgSlippiTV02,
    },
    {
        assetText: "UI/UX changes for the main interface screen included adding live information about the games being streamed, updated grid layout with the ability to re-order, and adding more user requested features.",
        assetMediaLink: imgSlippiTV03,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgSlippiTV03,
    },
    {
        assetText: "UI/UX changes for the settings page introduced a consistant theme and style between screens, adding automatic connection support for users (reducing pain points), and adding theme options for the application.",
        assetMediaLink: imgSlippiTV04,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgSlippiTV04,
    },
    {
        assetText: "Initial Release of SlippiTV featured a Dark Theme, a Light Theme, and a Retro Purple theme that references the GameCube console the community plays on.",
        assetMediaLink: imgSlippiTV05,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgSlippiTV05,
    },
    {
        assetText: "In order to produce a product that worked well and addressed the right issues, we opened up the project to beta testing and collected feedback from users to work on.",
        assetMediaLink: imgSlippiTV06,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgSlippiTV06,
    },
    {
        assetText: "Developing the logo through several iterations with the client",
        assetMediaLink: imgSlippiTV07,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgSlippiTV07,
    },
]



function BentoBoxB() {
    return (
        <div className="relative z-10 grid grid-cols-1 w-[80%] h-fit justify-self-center text-white hover:cursor-pointer gap-[12px]">

            <bentos.CellMediaOnClickNoShadow mediaText="SlippiTV Windows Application, built with C# and .NET Maui" mediaLink={imgSlippiTV01} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant" />

            
            <div className="col-span-1 grid grid-cols-3">
                <bentos.CellText cellSpan={`col-span-1`}>
                    <bentos.ParagraphText
                        text="In order to produce a product that worked well and addressed the right issues, we opened up the project to beta testing and collected feedback from users to work on." />
                </bentos.CellText>
                <bentos.CellMediaOnClickNoShadow mediaText="WIP Detail: Creating the environment" mediaLink={imgSlippiTV06} mediaType={MediaType.Image} cellSpan="col-span-2" hoverTextColor="text-textVariant"/>
            </div>

            <div className="col-span-1 grid grid-cols-1 sm:grid-cols-2 items-center gap-[12px]">
                <bentos.CellMediaOnClickNoShadow mediaText="UI/UX changes for the main interface screen included adding live information about the games being streamed, updated grid layout with the ability to re-order, and adding more user requested features." mediaLink={imgSlippiTV03} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClickNoShadow mediaText="UI/UX changes for the settings page introduced a consistant theme and style between screens, adding automatic connection support for users (reducing pain points), and adding theme options for the application." mediaLink={imgSlippiTV04} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            </div>

            <div className="col-span-1 grid grid-cols-1 sm:grid-cols-2">
                <bentos.CellMediaOnClickNoShadow mediaText="Initial Release of SlippiTV featured 3 themes, Dark, Light, and GameCube Purple" mediaLink={imgSlippiTV05} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellText cellSpan={`col-span-1`}>
                    <bentos.ParagraphText
                        text="UI/UX changes for the settings page introduced a consistant theme and style between screens, adding automatic connection support for users (reducing pain points), and adding theme options for the application. Initial Release of SlippiTV featured a Dark Theme, a Light Theme, and a Retro Purple theme that references the GameCube console the community plays on." />
                </bentos.CellText>
            </div>
            
            <div className="col-span-1 grid grid-cols-1 md:grid-cols-3">
                <bentos.CellText cellSpan={`col-span-1 order-2 md:order-1`}>
                    <bentos.ParagraphText 
                        text="When I started the design for the SlippiTV icon I knew that I wanted to incorporate the old CRT TV monitors that were common in the early 2000s when this game was released. There is also a modern community of SSBM players that seek out the CRT TVs because of their low latency and authentic experience. In researching more about the era, I discovered the community often recommended the Sony Trinitron series of TVs, and I took inspiration from their unique design to build my logo concepts. I created several variations of the logo, exploring different shapes and styles, and reworked the logo to work better at smaller sizes. Color choice was also important, I wanted to capture the retro nature of the AVI cables, and also give a nod towards the GameCube console, and Slippi themselves. All of this came together in the final version of the logo, a simple and recognizable design that captures the era and essence of this product. Additionally, the second variation of the logo was able to be utilized in launch screens and promotional material where larger designs were preferred." />
                </bentos.CellText>
                <bentos.CellMediaOnClickNoShadow mediaText="Developing the logo through several iterations with the client" mediaLink={imgSlippiTV07} mediaType={MediaType.Image} cellSpan="col-span-2 order-1 md:order-2" hoverTextColor="text-textVariant"/>
            </div>

        </div>
    )
}



export function ProjectCodeSlippiTVApp() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <div className={`place-self-center self-start place-items-center w-full flex flex-col h-fit md:h-auto gap-0 md:gap-[12px]`}>
                <GalleryV2InfoWithLinks 
                    projTitle="SlippiTV Windows App" 
                    projSummary={`SlippiTV is an Open Source Windows Application coded with C# and .NET Maui that builds upon and adds features to a video game emulation software for Super Smash Bros. Melee known as Slippi. It offers an easy and intuitive design for building a friends list and watching live streams of your friend's games. I was brought onto the project early in development to lead the User Interface Design and respond to user feedback to build an intuitive and simple User Experience to improve and add to the products main features.`} 
                    outLink1={linkSlippiTVSite} 
                    buttonText1="Slippi.TV" 
                    outLink2={linkSlippiTVGithub} 
                    buttonText2="Github Repo" 
                    projOtherDetails="FREELANCE | LEAD UI/UX DESIGNER & CO-DEVEOPER"/>
                <BentoBoxB/>
            </div>
            <ViewAnotherProjectDiv text="Check out this related project!">
                <ViewAnotherProjectCard
                    projTitle="SlippiTV Website" 
                    projDesc={`A custom website that supports watching your friends play Super Smash Bros Melee games in real time, built on Solid.Js and the Slippi Lab API.`}
                    projMedia={otherProjectLinkMedia}
                    projMediaAltText="alt text" 
                    projLink={linkOtherProject}
                    projLinkMediaType={MediaType.Image}
                    cardColor={`bg-[#0f0538] border-[#3703a6] text-textVariant`}/>
            </ViewAnotherProjectDiv>
        </pages.GroupProjectPage>
    )
}
'use client'

import "@/app/globals/globals.css";

import * as gallery from "@/app/globals/project-galleries";
import * as pages from "@/app/globals/pages-main";
import { GalleryV2, GalleryV2InfoWithLinks } from "@/app/globals/gallery-v2";
import * as bentos from "@/app/globals/bento-boxes";
import { MediaType } from "@/app/globals/project-galleries";


const imgSlippiTV01 = "_code/slippiTV_stills_2.png";
const imgSlippiTV02 = "_code/slippiTV_stills_1.png";
const imgSlippiTV03 = "_code/slippiTV_stills_3.png";
const imgSlippiTV04 = "_code/slippiTV_stills_4.png";
const imgSlippiTV05 = "_code/slippiTV_stills_5.png";
const imgSlippiTV06 = "_code/slippiTV_stills_6.png";
const imgSlippiTV07 = "_code/slippiTV_stills_7.png";

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
                    <bentos.ParagraphText textSize={"text-24px"} 
                        text="In order to produce a product that worked well and addressed the right issues, we opened up the project to beta testing and collected feedback from users to work on." />
                </bentos.CellText>
                <bentos.CellMediaOnClickNoShadow mediaText="WIP Detail: Creating the environment" mediaLink={imgSlippiTV06} mediaType={MediaType.Image} cellSpan="col-span-2" hoverTextColor="text-textVariant"/>
            </div>

            <div className="col-span-1 grid grid-cols-1 sm:grid-cols-2 items-center gap-[12px]">
                <bentos.CellMediaOnClickNoShadow mediaText="UI/UX changes for the main interface screen included adding live information about the games being streamed, updated grid layout with the ability to re-order, and adding more user requested features." mediaLink={imgSlippiTV03} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClickNoShadow mediaText="UI/UX changes for the settings page introduced a consistant theme and style between screens, adding automatic connection support for users (reducing pain points), and adding theme options for the application." mediaLink={imgSlippiTV04} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            </div>

            <div className="col-span-1 grid grid-cols-1 sm:grid-cols-3">
                <bentos.CellMediaOnClickNoShadow mediaText="Initial Release of SlippiTV featured 3 themes, Dark, Light, and GameCube Purple" mediaLink={imgSlippiTV05} mediaType={MediaType.Image} cellSpan="col-span-2 order-1 sm:order-2" hoverTextColor="text-textVariant"/>
                <bentos.CellText cellSpan={`col-span-1`}>
                    <bentos.ParagraphText textSize={"text-24px order-2 sm:order-1"} 
                        text="UI/UX changes for the settings page introduced a consistant theme and style between screens, adding automatic connection support for users (reducing pain points), and adding theme options for the application. Initial Release of SlippiTV featured a Dark Theme, a Light Theme, and a Retro Purple theme that references the GameCube console the community plays on." />
                </bentos.CellText>
            </div>

            <bentos.CellMediaOnClickNoShadow mediaText="Designed entirely in HTML and CSS, with a flexible layout that shifts when viewed on a mobile browser." mediaLink={imgSlippiTV02} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            
            <div className="col-span-1 grid grid-cols-1 sm:grid-cols-3">
                <bentos.CellText cellSpan={`col-span-1`}>
                    <bentos.ParagraphText textSize={"text-24px"} 
                        text="In developing the SlippiTV icon with the client, I was given complete freedom to develop and design. I knew that I wanted to work with the idea of a TV, since this project was about streaming games to your friends, so I started with an old CRT TV, the same ones played on when the game first released. Through testing in development the client and myself discovered that the simpler the icon, the better, as some locations this icon was used were limited to less than 32px. So while we loved the second variation, I simplified the concept down to the final version which captures the TV and the AVI cables coloration from the era. As a bonus, we were able to utilize the more complex second design during the launch process for the application." />
                </bentos.CellText>
                <bentos.CellMediaOnClickNoShadow mediaText="Developing the logo through several iterations with the client" mediaLink={imgSlippiTV07} mediaType={MediaType.Image} cellSpan="col-span-2" hoverTextColor="text-textVariant"/>
            </div>

        </div>
    )
}



export function ProjectCodeSlippiTV() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <div className={`place-self-center self-start place-items-center w-full flex flex-col h-fit md:h-auto gap-0 md:gap-[12px]`}>
                <GalleryV2InfoWithLinks 
                    projTitle="SlippiTV" 
                    projSummary={`SlippiTV is a Windows Application coded with C# and .NET Maui that builds upon and adds features to a video game emulation software known as Slippi. It offers an easy and intuitive design for building a friends list and watch live streams of your friend's games. I was brought onto the project early in development to lead the User Interface Design and respond to user feedback to build an intuitive and simple User Experience that didn't interfere with the products main features. In addition to production assistance with the Windows Application, I was tasked with designing and building a Website for SlippiTV.`} 
                    outLink1={linkSlippiTVSite} 
                    buttonText1="Slippi.TV" 
                    outLink2={linkSlippiTVGithub} 
                    buttonText2="Github Repo" 
                    projOtherDetails="FREELANCE | LEAD UI/UX DESIGNER & CO-DEVEOPER"/>
                <BentoBoxB/>
            </div>
        </pages.GroupProjectPage>
    )
}
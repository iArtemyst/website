'use client'

import "@/app/globals/globals.css";

import * as gallery from "@/app/globals/project-galleries";
import * as pages from "@/app/globals/pages-main";
import { GalleryV2, GalleryV2InfoWithLinks } from "@/app/globals/gallery-v2";

const imgSlippiTV01 = "_code/slippiTV_stills_2.png";
const imgSlippiTV02 = "_code/slippiTV_stills_1.png";
const imgSlippiTV03 = "_code/slippiTV_stills_3.png";
const imgSlippiTV04 = "_code/slippiTV_stills_4.png";
const imgSlippiTV05 = "_code/slippiTV_stills_5.png";
const imgSlippiTV06 = "_code/slippiTV_stills_6.png";

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
        assetText: "Initial Release of SlippiTV featured a Dark Theme, and a Retro Purple theme that references the GameCube console the community plays on.",
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
]

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
                <GalleryV2 mediaGallery={SlippiTVMedia}/>
            </div>
        </pages.GroupProjectPage>
    )
}
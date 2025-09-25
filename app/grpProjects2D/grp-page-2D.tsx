'use client'

import "@/app/globals/globals.css";

import * as pages from "@/app/globals/pages-main";
import { IProjectLinkCard, ProjectLinkCardsContainer } from "@/app/globals/project-link-cards";
import { useState, useEffect } from "react";
import Loading from "../globals/loading-text";
import { FeaturedProjectsDiv, IFeaturedProjectCard } from "../globals/featured-projects";
import { LazyHoverVideo, LazyNonHoverVideo, LazyVideo } from "../globals/lazy-video";
import * as fonts from "@/app/globals/fonts";

const vidBankApp = "_2d/app-bank-concept/prjLink_bankApp_400px.mp4";
const vidPodcastApp = "_2d/app-podcast-concept/prjLink_podcastApp_400px.mp4";
const vidSteamApp = "_2d/app-steam-concept/prjLink_steamApp_400px.mp4";
const vidDDRMelee = "_project-links/prjLink_ddr-melee_400px.mp4";
const vidInstaLoops = "_project-links/prjLink_insta-loops_400px.mp4";
const vidMedUI = "_project-links/prjLink_med-ui_400px.mp4";
const vidConsumerMotion = "_project-links/prjLink_mogr-ui_400px.mp4";
const vidWebsite = "_project-links/prjLink_codePortfolio_400px.mp4";
const imgSlippiTV = "_project-links/prjLink_slippiTV_400px.mp4";
const vidHairGenerator = "_project-links/prjLink_hairgen_400px.mp4";
const vidHackverse = "_project-links/projLink_hackverse_400px.mp4";

const linkMedUI = "../projMedUI";
const linkDDRMelee = "../projDDRMelee";
const linkInstaLoops = "../projLoopAnim";
const linkConsumerMotion = "../projConsumerMotion";
const linkConceptBankApp = "../projConceptAppBank";
const linkConceptPodcastApp = "../projConceptPodcastApp";
const linkConceptSteamApp = "../projConceptSteamApp";
const linkHairGenerator = "../projHairGen2D";
const linkWebsite = `../projPortfolioSite2D`;
const linkSlippiTV = '../projSlippiTV2D'
const linkHackverse = '../projHackverse'

const reel2D = "_project-links/portfolioReel_2D_EY_compressed.mp4"

const featuredProjectsData: IFeaturedProjectCard[] = [
    {
        projectTitle: "DDR Melee Video",
        projectDates: "2025",
        mediaLink: vidDDRMelee,
        cardLink: linkDDRMelee,
        softwareUsed: "Adobe After Effects + Illustrator",
        cardColor: 'bg-[#0E7A78] border-[#33D1AA]',
        projectDesc: "Custom Motion Graphics for a Super Smash Bros. Melee combo video in the style of Dance Dance Revolution",
    },
    {
        projectTitle: "SlippiTV App & Website",
        projectDates: "2025",
        mediaLink: imgSlippiTV,
        cardLink: linkSlippiTV,
        softwareUsed: ".NET Maui + HTML",
        cardColor: 'bg-[#361B74] border-[#6845BD]',
        projectDesc: "Lead UI/UX Designer for the SlippiTV Windows app, and designing a custom Slippi.TV website",
    },
]


const groupCardData: IProjectLinkCard[] = [
    {
        projectTitle: "Looping Animations",
        projectDates: "2020-2024",
        mediaLink: vidInstaLoops,
        cardLink: linkInstaLoops,
        errorText: "Blender 3D + 3DS Max",
    },
    {
        projectTitle: "Consumer Motion Graphics",
        projectDates: "2018-2025",
        mediaLink: vidConsumerMotion,
        cardLink: linkConsumerMotion,
        errorText: "3DS Max + After Effects + Figma",
    },
    {
        projectTitle: "Medical Motion and UI",
        projectDates: "2018-2025",
        mediaLink: vidMedUI,
        cardLink: linkMedUI,
        errorText: "After Effects + Figma + Illustrator",
    },
    {
        projectTitle: "Concept Apple Bank App",
        projectDates: "2019",
        mediaLink: vidBankApp,
        cardLink: linkConceptBankApp,
        errorText: "Figma + Illustrator",
    },
    {
        projectTitle: "Concept Podcast App",
        projectDates: "2019",
        mediaLink: vidPodcastApp,
        cardLink: linkConceptPodcastApp,
        errorText: "Figma + Illustrator",
    },
    {
        projectTitle: "Concept Steam Redesign",
        projectDates: "2019",
        mediaLink: vidSteamApp,
        cardLink: linkConceptSteamApp,
        errorText: "Figma + Illustrator",
    },
    {
        projectTitle: "Stubble Hair Generator",
        projectDates: "2024",
        mediaLink: vidHairGenerator,
        cardLink: linkHairGenerator,
        errorText: "Substance Designer",
    },
    {
        projectTitle: "HacKVerse Marketing",
        projectDates: "2023",
        mediaLink: vidHackverse,
        cardLink: linkHackverse,
        errorText: "After Effects + Blender 3D",
    },
    // {
    //     projectTitle: "DDR Melee Motion Graphics",
    //     projectDates: "2025",
    //     mediaLink: vidDDRMelee,
    //     cardLink: linkDDRMelee,
    //     errorText: "Adobe After Effects + Illustrator",
    // },
    // {
    //     projectTitle: "SlippiTV App & Website",
    //     projectDates: "2025",
    //     mediaLink: imgSlippiTV,
    //     cardLink: linkSlippiTV,
    //     errorText: ".NET Maui + HTML",
    // },
]


export default function GroupProjectsMotion() {
    const [shuffledCards, setArray] = useState<IProjectLinkCard[]>([])

    useEffect(() => {
        setArray(shuffle_about_cards(groupCardData))
    }, []);
    
    function shuffle_about_cards(new_cards: IProjectLinkCard[]) 
    {
        let shuffled_array = structuredClone(new_cards);

        for (let i = new_cards.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i - 1));
            [shuffled_array[i], shuffled_array[j]] = [shuffled_array[j], shuffled_array[i]];
        }

        return shuffled_array;
    }
    return shuffledCards.length != 0 ?
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <div className="w-[85%] md:w-[75%] place-self-center h-fit justify-items-center flex rounded-xl overflow-clip shadow-[2px_2px_6px_#00000030,-2px_-2px_6px_#ffffff30] hover:shadow-[2px_2px_3px_#00000010,-2px_-2px_3px_#ffffff10] hover:scale-[99%] active:scale-[98%]">
                <LazyNonHoverVideo 
                        src={reel2D}
                        autoplay={true}
                        controls={true}
                        muted={true}
                        loop={true}
                        />
            </div>
            <FeaturedProjectsDiv dataArray={featuredProjectsData}/>
            <ProjectLinkCardsContainer dataArray={shuffledCards} />
        </pages.GroupProjectPage>
        :
        <Loading />
}

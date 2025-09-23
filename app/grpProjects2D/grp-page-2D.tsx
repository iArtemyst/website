'use client'

import "@/app/globals/globals.css";

import * as pages from "@/app/globals/pages-main";
import { IProjectLinkCard, ProjectLinkCardsContainer } from "@/app/globals/project-link-cards";
import { useState, useEffect } from "react";
import Loading from "../globals/loading-text";

const vidBankApp = "_project-links/prjLink_bankapp_400px.mp4";
const vidDDRMelee = "_project-links/prjLink_ddr-melee_400px.mp4";
const vidInstaLoops = "_project-links/prjLink_insta-loops_400px.mp4";
const vidMedUI = "_project-links/prjLink_med-ui_400px.mp4";
const vidConsumerMotion = "_project-links/prjLink_mogr-ui_400px.mp4";
const vidWebsite = "_project-links/prjLink_codePortfolio_400px.mp4";
const imgSlippiTV = "_project-links/prjLink_slippiTV_400px.mp4";
const vidHairGenerator = "_project-links/prjLink_hairgen_400px.mp4";

const linkMedUI = "../projMedUI";
const linkDDRMelee = "../projDDRMelee";
const linkInstaLoops = "../projLoopAnim";
const linkConsumerMotion = "../projConsumerMotion";
const linkConceptApps = "../projConceptApps";
const linkHairGenerator = "../projHairGen2D";
const linkWebsite = `../projPortfolioSite2D`;
const linkSlippiTV = '../projSlippiTV2D'


const groupCardData: IProjectLinkCard[] = [
    {
        projectTitle: "DDR Melee Motion Graphics",
        projectDates: "2025",
        mediaLink: vidDDRMelee,
        cardLink: linkDDRMelee,
        errorText: "Adobe After Effects + Illustrator",
    },
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
        projectTitle: "Concept App Designs",
        projectDates: "2018-2020",
        mediaLink: vidBankApp,
        cardLink: linkConceptApps,
        errorText: "Figma + Illustrator",
    },
        {
        projectTitle: "My Portfolio Website",
        projectDates: "2025",
        mediaLink: vidWebsite,
        cardLink: linkWebsite,
        errorText: "React + NextJS",
    },
    {
        projectTitle: "SlippiTV App & Website",
        projectDates: "2025",
        mediaLink: imgSlippiTV,
        cardLink: linkSlippiTV,
        errorText: ".NET Maui + HTML",
    },
    {
        projectTitle: "Stubble Hair Generator",
        projectDates: "2024",
        mediaLink: vidHairGenerator,
        cardLink: linkHairGenerator,
        errorText: "Substance Designer",
    },
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
            <ProjectLinkCardsContainer dataArray={shuffledCards} />
        </pages.GroupProjectPage>
        :
        <Loading />
}

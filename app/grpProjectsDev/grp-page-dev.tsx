'use client'

import "@/app/globals/globals.css";

import * as pages from "@/app/globals/pages-main";
import {IProjectLinkCard, IProjectLinkCardRestricted, ProjectLinkCardsContainer , ProjectLinkCardsRestrictedContainer} from "@/app/globals/project-link-cards";
import { useState, useEffect } from "react";
import Loading from "../globals/loading-text";
import { ShuffleCardArray } from "@/app/globals/shuffle-project-cards";

const imgBingo = "_project-links/prjLink_bingo_400px.mp4";
const vidWebsite = "_project-links/linkVid_Portfolio_400px.mp4";
const imgSlippiTVApp = "_project-links/projLinkVideo_Sq_SlippiTV_400px.mp4";
const imgSlippiTVWeb = "_project-links/projLinkVideo_Sq_SlippiTV-watch_400px.mp4";
const vidMovieRatingSite = "_project-links/projLinkVideo_Sq_DailyMovieRating_400px.mp4";

const linkWebsite = "../projPortfolioSite";
const linkBingo = '../projBingoBoard';
const linkSlippiTVApp = '../projSlippiTVApp';
const linkSlippiTVWeb = '../projSlippiTVWeb';
const linkMovieRatingSite = '../projMovieRatingSite';
const linkResume2 = 'https://github.com/iArtemyst/resume';
const linkBingo2 = 'https://github.com/iArtemyst/_bingo-board';


const groupCardData: IProjectLinkCardRestricted[] = [
    {
        projectTitle: "Bingo Board Website",
        projectDates: "2025",
        mediaLink: imgBingo,
        cardLink: linkBingo,
        softwareUsed: "HTML + CSS + JavaScript",
        locked: false,
    },
    {
        projectTitle: "My Portfolio Website",
        projectDates: "2025",
        mediaLink: vidWebsite,
        cardLink: linkWebsite,
        softwareUsed: "React + NextJS",
        locked: false,
    },
    {
        projectTitle: "SlippiTV App",
        projectDates: "2025",
        mediaLink: imgSlippiTVApp,
        cardLink: linkSlippiTVApp,
        softwareUsed: "C# + .NET Maui",
        locked: false,
    },
    {
        projectTitle: "SlippiTV Website",
        projectDates: "2025-2026",
        mediaLink: imgSlippiTVWeb,
        cardLink: linkSlippiTVWeb,
        softwareUsed: "SolidJs + HTML + CSS",
        locked: false,
    },
    {
        projectTitle: "WhatIsItRated.com",
        projectDates: "2025",
        mediaLink: vidMovieRatingSite,
        cardLink: linkMovieRatingSite,
        softwareUsed: "ReactJS + C# + .NET",
        locked: false,
    },
]


export default function GroupProjectsCode() {
    const [shuffledCards, setArray] = useState<IProjectLinkCardRestricted[]>([])

    useEffect(() => {
        setArray(ShuffleCardArray(groupCardData))
    }, []);
    
    return shuffledCards.length != 0 ?
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <ProjectLinkCardsRestrictedContainer dataArray={shuffledCards} />
        </pages.GroupProjectPage>
        :
        <Loading />
}

'use client'

import "@/app/globals/globals.css";

import * as pages from "@/app/globals/pages-main";
import {IProjectLinkCard, IProjectLinkCardRestricted, ProjectLinkCardsContainer , ProjectLinkCardsRestrictedContainer} from "@/app/globals/project-link-cards";
import { useState, useEffect } from "react";
import Loading from "../globals/loading-text";
import { ShuffleCardArray } from "@/app/globals/shuffle-project-cards";

const imgBingo = "_project-links/prjLink_bingo_400px.mp4";
const vidWebsite = "_project-links/prjLink_codePortfolio_400px.mp4";
const imgSlippiTV = "_project-links/prjLink_slippiTV_400px.mp4";
const vidMovieRatingSite = "_project-links/prjLink_WhatIsItRated_400px.mp4";

const linkWebsite = "../projCodeWebsite/";
const linkBingo = '../projBingoBoard';
const linkSlippiTV = '../projSlippiTV';
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
        projectTitle: "SlippiTV App & Website",
        projectDates: "2025",
        mediaLink: imgSlippiTV,
        cardLink: linkSlippiTV,
        softwareUsed: ".NET Maui + HTML",
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

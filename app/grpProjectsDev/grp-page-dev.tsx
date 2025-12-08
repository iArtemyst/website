'use client'

import "@/app/globals/globals.css";

import * as pages from "@/app/globals/pages-main";
import {IProjectLinkCard, ProjectLinkCardsContainer} from "@/app/globals/project-link-cards";
import { useState, useEffect } from "react";
import Loading from "../globals/loading-text";

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


const groupCardData: IProjectLinkCard[] = [
    {
        projectTitle: "Bingo Board Website",
        projectDates: "2025",
        mediaLink: imgBingo,
        cardLink: linkBingo,
        errorText: "HTML + CSS + JavaScript",
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
        projectTitle: "WhatIsItRated.com",
        projectDates: "2025",
        mediaLink: vidMovieRatingSite,
        cardLink: linkMovieRatingSite,
        errorText: "ReactJS + C# + .NET",
    },
]


export default function GroupProjectsCode() {
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

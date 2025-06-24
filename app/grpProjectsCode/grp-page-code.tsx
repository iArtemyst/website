'use client'

import "@/app/globals/globals.css";

import * as pages from "@/app/globals/pages-main";
import {IProjectLinkCard, ProjectLinkCardsContainer} from "@/app/globals/project-link-cards";
import { useState, useEffect } from "react";
import Loading from "../globals/loading-text";

const vidBingo = "_project-links/prjLink_codeBingo_400px.mp4";
const vidResume = "_project-links/prjLink_codeResume_400px.mp4";
const vidWebsite = "_project-links/prjLink_codePortfolio_400px.mp4";

const linkWebsite = "../projCodeWebsite/";
const linkResume = 'https://github.com/iArtemyst/resume';
const linkBingo = 'https://github.com/iArtemyst/_bingo-board';

const groupCardData: IProjectLinkCard[] = [
    {
        projectTitle: "JS + HTML Bingo",
        projectDates: "2025",
        mediaLink: vidBingo,
        cardLink: linkBingo,
        errorText: "link to my github!",
    },
    {
        projectTitle: "ReactJS Resume",
        projectDates: "2025",
        mediaLink: vidResume,
        cardLink: linkResume,
        errorText: "link to my github!",
    },
    {
        projectTitle: "ReactJS Portfolio Site",
        projectDates: "2025",
        mediaLink: vidWebsite,
        cardLink: linkWebsite,
        errorText: undefined,
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

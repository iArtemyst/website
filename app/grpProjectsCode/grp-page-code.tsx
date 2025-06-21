'use client'

import "@/app/globals/globals.css";

import * as pages from "@/app/globals/pages-main";
import * as cards from "@/app/globals/project-link-cards";
import { shuffle_project_list } from "@/app/globals/shuffle-functions";

const vidBingo = "_project-links/prjLink_codeBingo_400px.mp4";
const vidResume = "_project-links/prjLink_codeResume_400px.mp4";
const vidWebsite = "_project-links/prjLink_codePortfolio_400px.mp4";

const linkWebsite = "../projCodeWebsite/";
const linkResume = 'https://github.com/iArtemyst/resume';
const linkBingo = 'https://github.com/iArtemyst/_bingo-board';

const groupCardData: cards.IProjectLinkCard[] = [
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
    let shuffled_list = shuffle_project_list(groupCardData)

    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <cards.ProjectLinkCardsContainer dataArray={shuffled_list}/>
        </pages.GroupProjectPage>
    )
}

'use client'

import "@/app/globals/globals.css";

import * as pages from "@/app/globals/pages-main";
import * as cards from "@/app/globals/project-link-cards";

const vidBingo = "_project-links/sqr-loop_codeBingo.mp4";
const vidResume = "_project-links/sqr-loop_codeResume.mp4";
const vidWebsite = "_project-links/portfolio-proj-link.mp4";

const linkWebsite = "../indProjects/projCodeWebsite/";
const linkResume = 'https://github.com/iArtemyst/resume';
const linkBingo = 'https://github.com/iArtemyst/_bingo-board';
const columnAmount = "grid-cols-3"

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
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <cards.ProjectLinkCardsContainer dataArray={groupCardData}/>
        </pages.GroupProjectPage>
    )
}

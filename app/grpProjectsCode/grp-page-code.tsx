'use client'

import "@/app/globals/globals.css";

import * as pages from "@/app/globals/pages-main";
import * as cards from "../globals/project-link-cards";

import vidBingo from "/app/assets/videos/_code/sqr-loop_codeBingo.mp4";
import vidResume from "/app/assets/videos/_code/sqr-loop_codeResume.mp4";
import vidWebsite from "/app/assets/videos/_motionui/trimmed-loops_mogr-ui_001.mp4";

const linkWebsite = "../indProjects/projCodeWebsite/";
const columnAmount = "grid-cols-3"

const groupCardData: cards.IProjectLinkCard[] = [
    {
        projectTitle: "Javascript + HTML Bingo",
        projectDates: "2025",
        mediaLink: vidBingo,
        cardLink: undefined,
    },
    {
        projectTitle: "ReactJS Resume Page",
        projectDates: "2025",
        mediaLink: vidResume,
        cardLink: undefined,
    },
    {
        projectTitle: "Portfolio Website",
        projectDates: "2025",
        mediaLink: vidWebsite,
        cardLink: linkWebsite,
    },
]

export default function GroupProjectsCode() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <cards.ProjectLinkCardsContainer  dataArray={groupCardData}/>
        </pages.GroupProjectPage>
    )
}

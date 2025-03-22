'use client'

import "@/app/globals/globals.css";

import * as pages from "@/app/globals/pages-main";
import * as cards from "../globals/card-generator";

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
        cardLink: linkWebsite,
    },
    {
        projectTitle: "ReactJS Resume Page",
        projectDates: "2025",
        mediaLink: vidResume,
        cardLink: linkWebsite,
    },
    {
        projectTitle: "Portfolio Website",
        projectDates: "2025",
        mediaLink: vidWebsite,
        cardLink: linkWebsite,
    },
]

function CodeCardsLinkContainer() {
    return (
        <div className={`${columnAmount} w-[90%] justify-self-center grid gap-[24px] h-auto content-center`}>
            <cards.ProjectCardNoLink projectTitle="Javascript + HTML Bingo" projectDate="2025" projectVideo={vidBingo}/>
            <cards.ProjectCardNoLink projectTitle="ReactJS Resume Page" projectDate="2025" projectVideo={vidResume}/>
            <cards.ProjectCardWithLink projectTitle="Portfolio Website" projectDate="2025" projectVideo={vidWebsite} cardLink={linkWebsite}/>
        </div>
    )
}

export default function GroupProjectsCode() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            {/* <cards.ProjectLinkCardsContainer dataArray={groupCardData} gridCols={columnAmount} /> */}
            <CodeCardsLinkContainer />
        </pages.GroupProjectPage>
    )
}

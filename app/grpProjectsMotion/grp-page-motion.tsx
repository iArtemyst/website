'use client'

import "@/app/globals/globals.css";

import * as pages from "@/app/globals/pages-main";
import { IProjectLinkCard, ProjectLinkCardsContainer } from "../globals/card-generator";

import vidBankApp from "/app/assets/videos/_motionui/trimmed-loop_bankapp.mp4";
import vidDDRMelee from "/app/assets/videos/_motionui/trimmed-loop_ddr-melee.mp4";
import vidInstaLoops from "/app/assets/videos/_motionui/trimmed-loop_insta-loops.mp4";
import vidMedUI from "/app/assets/videos/_motionui/trimmed-loops_med-ui_001.mp4";
import vidConsumerMotion from "/app/assets/videos/_motionui/trimmed-loops_mogr-ui_001.mp4";

const linkMedUI = "../indProjects/projMedUI";
const linkDDRMelee = "../indProjects/projDDRMelee";
const linkInstaLoops = "../indProjects/projLoopAnim";
const linkConsumerMotion = "../indProjects/projConsumerMotion";
const linkConceptApps = "../indProjects/projConceptApps";

const columnAmount = "grid-cols-3"

const groupCardData: IProjectLinkCard[] = [
    {
        projectTitle: "DDR Melee Motion Graphics",
        projectDates: "2025",
        mediaLink: vidDDRMelee,
        cardLink: linkDDRMelee,
    },
    {
        projectTitle: "Looping Animations",
        projectDates: "2020-2024",
        mediaLink: vidInstaLoops,
        cardLink: linkInstaLoops,
    },
    {
        projectTitle: "Consumer Motion Graphics",
        projectDates: "2018-2025",
        mediaLink: vidConsumerMotion,
        cardLink: linkConsumerMotion,
    },
    {
        projectTitle: "Medical Motion and UI",
        projectDates: "2018-2025",
        mediaLink: vidMedUI,
        cardLink: linkMedUI,
    },
    {
        projectTitle: "Concept App Designs",
        projectDates: "2018-2020",
        mediaLink: vidBankApp,
        cardLink: linkConceptApps,
    },
]

export default function GroupProjectsMotion() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <ProjectLinkCardsContainer dataArray={groupCardData} gridCols={columnAmount} />
        </pages.GroupProjectPage>
    )
}

'use client'

import "@/app/globals/globals.css";

import * as pages from "@/app/globals/pages-main";
import { IProjectLinkCard, ProjectLinkCardsContainer } from "@/app/globals/project-link-cards";

import vidBankApp from "@/app/assets/_project-links/trimmed-loop_bankapp.mp4";
import vidDDRMelee from "@/app/assets/_project-links/trimmed-loop_ddr-melee.mp4";
import vidInstaLoops from "@/app/assets/_project-links/trimmed-loop_insta-loops.mp4";
import vidMedUI from "@/app/assets/_project-links/trimmed-loops_med-ui_001.mp4";
import vidConsumerMotion from "@/app/assets/_project-links/trimmed-loops_mogr-ui_001.mp4";

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
        errorText: undefined,
    },
    {
        projectTitle: "Looping Animations",
        projectDates: "2020-2024",
        mediaLink: vidInstaLoops,
        cardLink: linkInstaLoops,
        errorText: undefined,
    },
    {
        projectTitle: "Consumer Motion Graphics",
        projectDates: "2018-2025",
        mediaLink: vidConsumerMotion,
        cardLink: linkConsumerMotion,
        errorText: undefined,
    },
    {
        projectTitle: "Medical Motion and UI",
        projectDates: "2018-2025",
        mediaLink: vidMedUI,
        cardLink: linkMedUI,
        errorText: undefined,
    },
    {
        projectTitle: "Concept App Designs",
        projectDates: "2018-2020",
        mediaLink: vidBankApp,
        cardLink: linkConceptApps,
        errorText: undefined,
    },
]

export default function GroupProjectsMotion() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <ProjectLinkCardsContainer dataArray={groupCardData} />
        </pages.GroupProjectPage>
    )
}

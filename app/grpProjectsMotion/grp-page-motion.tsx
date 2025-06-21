'use client'

import "@/app/globals/globals.css";

import * as pages from "@/app/globals/pages-main";
import { IProjectLinkCard, ProjectLinkCardsContainer } from "@/app/globals/project-link-cards";
import { shuffle_project_list } from "@/app/globals/shuffle-functions";

const vidBankApp = "_project-links/prjLink_bankapp_400px.mp4";
const vidDDRMelee = "_project-links/prjLink_ddr-melee_400px.mp4";
const vidInstaLoops = "_project-links/prjLink_insta-loops_400px.mp4";
const vidMedUI = "_project-links/prjLink_med-ui_400px.mp4";
const vidConsumerMotion = "_project-links/prjLink_mogr-ui_400px.mp4";

const linkMedUI = "../projMedUI";
const linkDDRMelee = "../projDDRMelee";
const linkInstaLoops = "../projLoopAnim";
const linkConsumerMotion = "../projConsumerMotion";
const linkConceptApps = "../projConceptApps";


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
    let shuffled_list = shuffle_project_list(groupCardData)

    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <ProjectLinkCardsContainer dataArray={shuffled_list} />
        </pages.GroupProjectPage>
    )
}

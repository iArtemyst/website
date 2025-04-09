'use client'

import "@/app/globals/globals.css";

import * as pages from "@/app/globals/pages-main";


import vidProcToonCity from "@/app/assets/videos/_project-links/IslandCity_LoopingCard.mp4";
import vidDartPub from "@/app/assets/videos/_project-links/trimmed-loop_dartspub.mp4";
import vidProcMats from "@/app/assets/videos/_project-links/trimmed-loop_procMat.mp4";
import vidStylizedVFX from "@/app/assets/videos/_project-links/trimmed-loop_stylizedvfx.mp4";
import vidUtopaea from "@/app/assets/videos/_project-links/trimmed-loop_utopaea.mp4";
import vidHairGenerator from "@/app/assets/videos/_project-links/ShavingGenerator_LoopingCard.mp4";

const linkStylizedVFX = "../indProjects/projVFX";
const linkDartPub = "../indProjects/projDartPub";
const linkUtopaea = "../indProjects/projUtopaea";
const linkProcToonCity = "../indProjects/projProcIslandCity";
const linkProcMats = "../indProjects/projProcMat";
const linkHairGenerator = "../indProjects/projHairGenerator";

import { IProjectLinkCard, ProjectLinkCardsContainer } from "../globals/project-link-cards";

const columnAmount = "grid-cols-3"

const groupCardData: IProjectLinkCard[] = [
    {
        projectTitle: "Stylized Character VFX",
        projectDates: "2024",
        mediaLink: vidStylizedVFX,
        cardLink: linkStylizedVFX,
        errorText: undefined,
    },
    {
        projectTitle: "Darts and Pub Assets",
        projectDates: "2024",
        mediaLink: vidDartPub,
        cardLink: linkDartPub,
        errorText: undefined,
    },
    {
        projectTitle: '"Utopaea" Game Level',
        projectDates: "2019 & 2024",
        mediaLink: vidUtopaea,
        cardLink: linkUtopaea,
        errorText: undefined,
    },
    {
        projectTitle: "Procedural Materials",
        projectDates: "2023",
        mediaLink: vidProcMats,
        cardLink: linkProcMats,
        errorText: undefined,
    },
    {
        projectTitle: "Island City Generator",
        projectDates: "2023",
        mediaLink: vidProcToonCity,
        cardLink: linkProcToonCity,
        errorText: undefined,
    },
    {
        projectTitle: "Stubble Hair Generator",
        projectDates: "2024",
        mediaLink: vidHairGenerator,
        cardLink: linkHairGenerator,
        errorText: undefined,
    },
]


export default function GroupProjectsGame() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <ProjectLinkCardsContainer dataArray={groupCardData} />
        </pages.GroupProjectPage>
    )
}

'use client'

import "@/app/globals/globals.css";

import * as pages from "@/app/globals/pages-main";
import { IProjectLinkCard, ProjectLinkCardsContainer } from "../globals/project-link-cards";
import { shuffle_project_list } from "@/app/globals/shuffle-functions";

const vidProcToonCity = "_project-links/prjLink_islandGen_400px.mp4";
const vidDartPub = "_project-links/prjLink_dartspub_400px.mp4";
const vidProcMats = "_project-links/prjLink_procMat_400px.mp4";
const vidStylizedVFX = "_project-links/prjLink_stylizedvfx_400px.mp4";
const vidUtopaea = "_project-links/prjLink_utopaea_400px.mp4";
const vidHairGenerator = "_project-links/prjLink_hairgen_400px.mp4";

const linkStylizedVFX = "../projVFX";
const linkDartPub = "../projDartPub";
const linkUtopaea = "../projUtopaea";
const linkProcToonCity = "../projProcIslandCity";
const linkProcMats = "../projProcMat";
const linkHairGenerator = "../projHairGenerator";


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
    let shuffled_list = shuffle_project_list(groupCardData)

    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <ProjectLinkCardsContainer dataArray={shuffled_list} />
        </pages.GroupProjectPage>
    )
}

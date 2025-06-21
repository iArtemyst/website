'use client'

import "@/app/globals/globals.css";
import * as pages from "@/app/globals/pages-main";
import { IProjectLinkCard, ProjectLinkCardsContainer } from "@/app/globals/project-link-cards";
import { shuffle_project_list } from "@/app/globals/shuffle-functions";

const vidDartPub = "_project-links/prjLink_dartspub_400px.mp4";
const vidHorrorHouse = "_project-links/prjLink_horrorhouses_400px.mp4";
const vidMedAnim = "_project-links/prjLink_medanim_400px.mp4";
const vidMonsoonVermut = "_project-links/prjLink_monsoonvermut_400px.mp4";
const vidProcMats = "_project-links/prjLink_procMat_400px.mp4";
const vidProdAnim = "_project-links/prjLink_productanim_400px.mp4";
const vidStylizedVFX = "_project-links/prjLink_stylizedvfx_400px.mp4";
const vidInstaLoops = "_project-links/prjLink_insta-loops_400px.mp4";

const linkHorrorHouse = "../projHorrorHouse";
const linkStylizedVFX = "../projVFX3D";
const linkDartPub = "../projDartPub3D";
const linkMedAnim = "../projMedicalAnim";
const linkMonsoonVermut = "../projMonsoon";
const linkProdAnim = "../projProductAnim";
const linkProcMats = "../projProcMat3D";
const linkInstaLoops = "../projLoopAnim3D";

const columnAmount = "grid-cols-3"

const groupCardData: IProjectLinkCard[] = [
    {
        projectTitle: "Horror Houses",
        projectDates: "2024",
        mediaLink: vidHorrorHouse,
        cardLink: linkHorrorHouse,
        errorText: undefined,
    },
    {
        projectTitle: "Product Animation",
        projectDates: "2018-2025",
        mediaLink: vidProdAnim,
        cardLink: linkProdAnim,
        errorText: undefined,
    },
    {
        projectTitle: "Monsoon Vermut",
        projectDates: "2022",
        mediaLink: vidMonsoonVermut,
        cardLink: linkMonsoonVermut,
        errorText: undefined,
    },
    {
        projectTitle: "Stylized VFX",
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
        projectTitle: "Medical Animation",
        projectDates: "2018-2025",
        mediaLink: vidMedAnim,
        cardLink: linkMedAnim,
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
        projectTitle: "Procedural Materials",
        projectDates: "2023",
        mediaLink: vidProcMats,
        cardLink: linkProcMats,
        errorText: undefined,
    },
]

export default function GroupProjects3D() {
    let shuffled_list = shuffle_project_list(groupCardData)

    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <ProjectLinkCardsContainer dataArray={shuffled_list} />
        </pages.GroupProjectPage>
    )
}

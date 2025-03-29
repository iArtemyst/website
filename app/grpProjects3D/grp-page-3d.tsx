'use client'

import "@/app/globals/globals.css";

import * as pages from "@/app/globals/pages-main";
import { IProjectLinkCard, ProjectLinkCardsContainer } from "../globals/project-link-cards";

import vidDartPub from "/app/assets/videos/_3d/trimmed-loop_dartspub.mp4";
import vidHorrorHouse from "/app/assets/videos/_3d/trimmed-loop_horrorhouses.mp4";
import vidMedAnim from "/app/assets/videos/_3d/trimmed-loop_medanim1.mp4";
import vidMonsoonVermut from "/app/assets/videos/_3d/trimmed-loop_monsoonvermut.mp4";
import vidProcMats from "/app/assets/videos/_3d/trimmed-loop_procMat.mp4";
import vidProdAnim from "/app/assets/videos/_3d/trimmed-loop_productanim.mp4";
import vidStylizedVFX from "/app/assets/videos/_3d/trimmed-loop_stylizedvfx.mp4";
import vidInstaLoops from "/app/assets/videos/_motionui/trimmed-loop_insta-loops.mp4";

const linkHorrorHouse = "../indProjects/projHorrorHouse";
const linkStylizedVFX = "../indProjects/projVFX3D";
const linkDartPub = "../indProjects/projDartPub3D";
const linkMedAnim = "../indProjects/projMedicalAnim";
const linkMonsoonVermut = "../indProjects/projMonsoon";
const linkProdAnim = "../indProjects/projProductAnim";
const linkProcMats = "../indProjects/projProcMat3D";
const linkInstaLoops = "../indProjects/projLoopAnim3D";


const columnAmount = "grid-cols-3"

const groupCardData: IProjectLinkCard[] = [
    {
        projectTitle: "Horror Houses",
        projectDates: "2024",
        mediaLink: vidHorrorHouse,
        cardLink: linkHorrorHouse,
    },
    {
        projectTitle: "Product Animation",
        projectDates: "2018-2025",
        mediaLink: vidProdAnim,
        cardLink: linkProdAnim,
    },
    {
        projectTitle: "Monsoon Vermut",
        projectDates: "2022",
        mediaLink: vidMonsoonVermut,
        cardLink: linkMonsoonVermut,
    },
    {
        projectTitle: "Stylized VFX",
        projectDates: "2024",
        mediaLink: vidStylizedVFX,
        cardLink: linkStylizedVFX,
    },
    {
        projectTitle: "Darts and Pub Assets",
        projectDates: "2024",
        mediaLink: vidDartPub,
        cardLink: linkDartPub,
    },
    {
        projectTitle: "Medical Animation",
        projectDates: "2018-2025",
        mediaLink: vidMedAnim,
        cardLink: linkMedAnim,
    },
    {
        projectTitle: "Looping Animations",
        projectDates: "2020-2024",
        mediaLink: vidInstaLoops,
        cardLink: linkInstaLoops,
    },
    {
        projectTitle: "Procedural Materials",
        projectDates: "2023",
        mediaLink: vidProcMats,
        cardLink: linkProcMats,
    },
]

export default function GroupProjects3D() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <ProjectLinkCardsContainer dataArray={groupCardData} />
        </pages.GroupProjectPage>
    )
}

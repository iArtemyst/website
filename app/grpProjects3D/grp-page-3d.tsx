'use client'

import "@/app/globals/globals.css";
import * as pages from "@/app/globals/pages-main";
import { IProjectLinkCard, ProjectLinkCardsContainer } from "@/app/globals/project-link-cards";
import { useState, useEffect } from "react";
import Loading from "../globals/loading-text";

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
    const [shuffledCards, setArray] = useState<IProjectLinkCard[]>([])
    useEffect(() => {
        setArray(shuffle_about_cards(groupCardData))
    }, []);
    
    function shuffle_about_cards(new_cards: IProjectLinkCard[]) 
    {
        let shuffled_array = structuredClone(new_cards);

        for (let i = new_cards.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i - 1));
            [shuffled_array[i], shuffled_array[j]] = [shuffled_array[j], shuffled_array[i]];
        }

        return shuffled_array;
    }
    return shuffledCards.length != 0 ?
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <ProjectLinkCardsContainer dataArray={shuffledCards} />
        </pages.GroupProjectPage>
        :
        <Loading />
}

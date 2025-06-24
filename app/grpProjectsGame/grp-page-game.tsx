'use client'

import "@/app/globals/globals.css";

import * as pages from "@/app/globals/pages-main";
import { IProjectLinkCard, ProjectLinkCardsContainer } from "../globals/project-link-cards";
// import { shuffle_project_list } from "@/app/globals/shuffle-functions";
import { useState, useEffect } from "react";
import Loading from "../globals/loading-text";

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

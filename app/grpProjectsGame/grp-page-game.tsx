'use client'

import React, { useState, MouseEvent, useCallback } from "react";
import "@/app/globals/globals.css"
import Link from "next/link";

import * as vidcards from "@/app/globals/hover-cards";
import * as fonts from "@/app/globals/fonts";
import * as style from "@/tailwind.config"
import * as pages from "@/app/globals/pages-main";

import vidProcToonCity from "/app/assets/videos/IslandCity_LoopingCard.mp4";
import vidStylizedVFX from "/app/assets/videos/_3d/trimmed-loop_stylizedvfx.mp4";
import vidDartPub from "/app/assets/videos/_3d/trimmed-loop_dartspub.mp4";
import vidUtopaea from "/app/assets/videos/_3d/trimmed-loop_utopaea.mp4";
import vidHairGenerator from "/app/assets/videos/_game/_stubbleGen/ShavingGenerator_LoopingCard.mp4";
import vidProcMats from "/app/assets/videos/_3d/trimmed-loop_procMat.mp4";
import vidDndMaps from "/app/assets/videos/_3d/trimmed-loop_procMat.mp4";

const linkDnDMaps = "../indProjects/projGameDndMaps";
const linkStylizedVFX = "../indProjects/projVFX";
const linkDartPub = "../indProjects/projDartPub";
const linkUtopaea = "../indProjects/projUtopaea";
const linkProcToonCity = "../indProjects/projProcToonCity";
const linkProcMats = "../indProjects/projProcMat";
const linkHairGenerator = "../indProjects/projHairGenerator";

function CardDisplay () {
    return (
        <div className="grid grid-cols-3 gap-4 px-10">
            <vidcards.VideoCardA cardLink={linkStylizedVFX} projectTitle="Stylized Character VFX" projectDate="2024" projectVideo={vidStylizedVFX} />
            <vidcards.VideoCardA cardLink={linkDartPub} projectTitle="Darts and Pub Assets" projectDate="2024" projectVideo={vidDartPub} />
            <vidcards.VideoCardA cardLink={linkUtopaea} projectTitle='"Utopaea" Game Level' projectDate="2024" projectVideo={vidUtopaea} />
            <vidcards.VideoCardA cardLink={linkProcMats} projectTitle="Procedural Materials" projectDate="2023" projectVideo={vidProcMats} />
            {/* <vidcards.VideoCardA cardLink={linkDnDMaps} projectTitle="Dungeon Master Maps" projectDate="2020-2025" projectVideo={vidDndMaps} /> */}
            <vidcards.VideoCardA cardLink={linkProcToonCity} projectTitle="Island City Generator" projectDate="2023" projectVideo={vidProcToonCity} />
            <vidcards.VideoCardA cardLink={linkHairGenerator} projectTitle="Stubble Hair Generator" projectDate="2024" projectVideo={vidHairGenerator} />
        </div>
    )
}

export default function GroupProjectsGame() {
    return (
        <pages.GroupProjectPage>
            <CardDisplay />
        </pages.GroupProjectPage>
    )
}

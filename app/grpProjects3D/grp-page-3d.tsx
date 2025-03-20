'use client'

import React, { useState, MouseEvent, useCallback } from "react";
import "@/app/globals/globals.css"
import Link from "next/link";

import * as vidcards from "@/app/globals/hover-cards";
import * as fonts from "@/app/globals/fonts";

import vidHorrorHouse from "/app/assets/videos/_3d/trimmed-loop_horrorhouses.mp4";
import vidStylizedVFX from "/app/assets/videos/_3d/trimmed-loop_stylizedvfx.mp4";
import vidDartPub from "/app/assets/videos/_3d/trimmed-loop_dartspub.mp4";
import vidMedAnim from "/app/assets/videos/_3d/trimmed-loop_medanim1.mp4";
import vidMonsoonVermut from "/app/assets/videos/_3d/trimmed-loop_monsoonvermut.mp4";
import vidProdAnim from "/app/assets/videos/_3d/trimmed-loop_productanim.mp4";
import vidProcMats from "/app/assets/videos/_3d/trimmed-loop_procMat.mp4";
import vidInstaLoops from "/app/assets/videos/_motionui/trimmed-loop_insta-loops.mp4";

const linkHorrorHouse = "../indProjects/projHorrorHouse";
const linkStylizedVFX = "../indProjects/projVFX3D";
const linkDartPub = "../indProjects/projDartPub3D";
const linkMedAnim = "../indProjects/projMedicalAnim";
const linkMonsoonVermut = "../indProjects/projMonsoon";
const linkProdAnim = "../indProjects/projProductAnim";
const linkProcMats = "../indProjects/projProcMat3D";
const linkInstaLoops = "../indProjects/projLoopAnim3D";

function CardDisplay () {
    return (
        <div className="grid grid-cols-3 gap-4 px-10">
            <vidcards.VideoCardA cardLink={linkHorrorHouse} projectTitle="Horror Houses" projectDate="2024" projectVideo={vidHorrorHouse}/>
            <vidcards.VideoCardA cardLink={linkProdAnim} projectTitle="Product Animation" projectDate="2023" projectVideo={vidProdAnim} />
            <vidcards.VideoCardA cardLink={linkMonsoonVermut} projectTitle="Monsoon Vermut" projectDate="2023" projectVideo={vidMonsoonVermut} />
            <vidcards.VideoCardA cardLink={linkStylizedVFX} projectTitle="Stylized VFX" projectDate="2024" projectVideo={vidStylizedVFX} />
            <vidcards.VideoCardA cardLink={linkDartPub} projectTitle="Darts and Pub" projectDate="2024" projectVideo={vidDartPub} />
            <vidcards.VideoCardA cardLink={linkMedAnim} projectTitle="Medical Animation" projectDate="2018-2025" projectVideo={vidMedAnim} />
            <vidcards.VideoCardA cardLink={linkInstaLoops} projectTitle="Looping Animations" projectDate="2020-2024" projectVideo={vidInstaLoops} />
            <vidcards.VideoCardA cardLink={linkProcMats} projectTitle="Procedural Materials" projectDate="2023" projectVideo={vidProcMats} />
        </div>
    )
}

export default function GroupProjects3D() {
    return (
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-bgColor">
            <div className="relative grid w-full h-full justify-center overflow-visible py-20 overflow-y-auto no-scrollbar">
                <CardDisplay />
            </div>
        </div>
    )
}

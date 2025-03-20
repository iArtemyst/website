'use client'

import React, { useState, MouseEvent, useCallback } from "react";
import "@/app/globals/globals.css"
import Link from "next/link";

import * as vidcards from "@/app/globals/hover-cards";
import * as fonts from "@/app/globals/fonts";


import vidMedUI from "/app/assets/videos/_motionui/trimmed-loops_med-ui_001.mp4";
import vidDDRMelee from "/app/assets/videos/_motionui/trimmed-loop_ddr-melee.mp4";
import vidInstaLoops from "/app/assets/videos/_motionui/trimmed-loop_insta-loops.mp4";
import vidConsumerMotion from "/app/assets/videos/_motionui/trimmed-loops_mogr-ui_001.mp4";
import vidMedMotion from "/app/assets/videos/_motionui/trimmed-loops_med-mogr_001.mp4";
import vidBankApp from "/app/assets/videos/_motionui/trimmed-loop_bankapp.mp4";
import vidPodcastApp from "/app/assets/videos/_motionui/trimmed-loop_podcastapp.mp4";
import vidSteamApp from "/app/assets/videos/_motionui/trimmed-loop_steamapp.mp4";

const linkMedUI = "../indProjects/projMedUI";
const linkDDRMelee = "../indProjects/projDDRMelee";
const linkInstaLoops = "../indProjects/projLoopAnim";
const linkConsumerMotion = "../indProjects/projConsumerMotion";
const linkMedMotion = "../indProjects/projMedMotion";
const linkConceptApps = "../indProjects/projConceptApps";
const linkPodcastApp = "../indProjects/projUIPodcast";
const linkSteamApp = "../indProjects/projUISteam";

function CardDisplay () {
    return (
        <div className="grid grid-cols-3 gap-4 px-10">
            <vidcards.VideoCardA cardLink={linkDDRMelee} projectTitle="DDR Melee Motion Graphics" projectDate="2025" projectVideo={vidDDRMelee} />
            <vidcards.VideoCardA cardLink={linkInstaLoops} projectTitle="Looping Animations" projectDate="2020-2024" projectVideo={vidInstaLoops}/>
            <vidcards.VideoCardA cardLink={linkConsumerMotion} projectTitle="Consumer Motion Graphics" projectDate="2018-2025" projectVideo={vidConsumerMotion} />
            <vidcards.VideoCardA cardLink={linkMedUI} projectTitle="Medical Motion and UI" projectDate="2020-2024" projectVideo={vidMedUI} />
            <vidcards.VideoCardA cardLink={linkConceptApps} projectTitle="Concept App Designs" projectDate="2018-2020" projectVideo={vidBankApp} />
        </div>
    )
}

export default function GroupProjectsMotion() {
    return (
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-bgColor">
            <div className="relative grid w-full h-full justify-center overflow-visible py-20 overflow-y-auto no-scrollbar">
                <CardDisplay />
            </div>
        </div>
    )
}

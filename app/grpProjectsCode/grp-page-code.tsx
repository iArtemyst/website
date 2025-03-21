'use client'

import React from "react";
import "@/app/globals/globals.css";
import { CardHoverFX } from "@/app/globals/card-hover-fx";
import Link from "next/link";

import * as style from "@/tailwind.config"
import * as vidcards from "@/app/globals/hover-cards";
import * as pages from "@/app/globals/pages-main";

import vidWebsite from "/app/assets/videos/_motionui/trimmed-loops_mogr-ui_001.mp4";
import vidBingo from "/app/assets/videos/_code/sqr-loop_codeBingo.mp4";
import vidResume from "/app/assets/videos/_code/sqr-loop_codeResume.mp4";
import { divContainer } from "@/tailwind.config";


const linkWebsite = "../indProjects/projCodeWebsite/";

const gridGap = "gap-[0px]"

function CardDisplay () {
    return (
        <div className={`${gridGap} w-[90%] grid grid-cols-3 justify-self-center overflow-visible`}>
            <vidcards.VideoCardNoLink projectTitle="Javascript + HTML Bingo" projectDate="2025" projectVideo={vidBingo} />
            <vidcards.VideoCardNoLink projectTitle="ReactJS Resume Page" projectDate="2025" projectVideo={vidResume} />
            <vidcards.VideoCardA cardLink={linkWebsite} projectTitle="NextJS Portfolio Website" projectDate="2025" projectVideo={vidWebsite} />
        </div>
    )
}

export default function GroupProjectsCode() {
    return (
        <pages.GroupProjectPage>
            <CardDisplay />
        </pages.GroupProjectPage>
    )
}

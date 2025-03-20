'use client'

import React from "react";
import "@/app/globals/globals.css";
import { CardHoverFX } from "@/app/globals/card-hover-fx";
import Link from "next/link";

import * as vidcards from "@/app/globals/hover-cards";

import vidWebsite from "/app/assets/videos/_motionui/trimmed-loops_mogr-ui_001.mp4";
import vidBingo from "/app/assets/videos/_code/sqr-loop_codeBingo.mp4";
import vidResume from "/app/assets/videos/_code/sqr-loop_codeResume.mp4";

const linkWebsite = "../indProjects/projCodeWebsite/";

function CardDisplay () {
    return (
        <div className="grid grid-cols-3 gap-4 px-10">
            <vidcards.VideoCardNoLink projectTitle="Javascript + HTML Bingo" projectDate="2025" projectVideo={vidBingo} />
            <vidcards.VideoCardNoLink projectTitle="ReactJS Resume Page" projectDate="2025" projectVideo={vidResume} />
            <vidcards.VideoCardA cardLink={linkWebsite} projectTitle="NextJS Portfolio Website" projectDate="2025" projectVideo={vidWebsite} />
        </div>
    )
}

export default function GroupProjectsCode() {
    return (
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-bgColor">
            <div className="w-full h-full grid grid-cols-1 place-items-center">
                <CardDisplay />
            </div>
        </div>
    )
}

'use client'

import "@/app/globals/globals.css";

import * as pages from "@/app/globals/pages-main";

export default function ProjectCodePortfolio() {
    return (
    <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
        <div className="grid grid-rows-3 gap-[24px] w-[90%] justify-self-center my-[48px] bg-blue-200">
            {/* <MainVideoBox videoLink={vidPubDart02}/>
            <BentoBoxA />
            <BentoBoxB /> */}
        </div>
    </pages.GroupProjectPage>
    )
}

'use client'

import React from "react";
import * as fonts from "@/app/globals/fonts";
import "@/app/globals/globals.css";

export function SiteFooter() {
    return (
        <>
            <div className="siteFooterDiv">
                <p className={`${fonts.dotoBlack.className} place-self-center`} onClick={(() => window.open("https://github.com/iartemyst", "_blank"))}>
                    My Portfolio Site | Designed and Developed by Evelyn Youngblood | © 2026
                </p>
            </div>
        </>
        )
}
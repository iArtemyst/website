'use client'

import React, { useState } from "react";
import Link from "next/link";
import * as fonts from "@/app/globals/fonts";
import "@/app/globals/globals.css";
// import { SwitchThemeButton } from "../components/theme-switch-button";

export function SiteFooter() {

    return (
        <>
            <div className="siteFooterDiv">
                <p className={`${fonts.dotoBlack.className} place-self-center`} onClick={(() => window.open("https://github.com/iartemyst", "_blank"))}>
                    My Portfolio Site | Designed and Developed by Evelyn Youngblood
                </p>
            </div>
        </>
        )
}
'use client'

import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";

import imgPortfolioSite01 from "@/app/assets/images/_code/portfolioSite_stills_00.png";
import imgPortfolioSite02 from "@/app/assets/images/_code/portfolioSite_stills_01.png";
import imgPortfolioSite03 from "@/app/assets/images/_code/portfolioSite_stills_02.png";
import imgPortfolioSite04 from "@/app/assets/images/_code/portfolioSite_stills_03.png";
import imgPortfolioSite05 from "@/app/assets/images/_code/portfolioSite_stills_04.png";
import imgPortfolioSite06 from "@/app/assets/images/_code/portfolioSite_stills_05.png";
import imgPortfolioSite07 from "@/app/assets/images/_code/portfolioSite_stills_06.png";
import imgPortfolioSite08 from "@/app/assets/images/_code/portfolioSite_stills_07.png";
import imgPortfolioSite09 from "@/app/assets/images/_code/portfolioSite_stills_08.png";
import imgPortfolioSite10 from "@/app/assets/images/_code/portfolioSite_stills_09.png";
import imgPortfolioSite11 from "@/app/assets/images/_code/portfolioSite_stills_10.png";
import imgPortfolioSite12 from "@/app/assets/images/_code/portfolioSite_stills_11.png";
import imgPortfolioSite13 from "@/app/assets/images/_code/portfolioSite_stills_12.png";

import imgPortfolioCode01 from "@/app/assets/images/_code/portfolio-screenshots_001.jpg";
import imgPortfolioCode02 from "@/app/assets/images/_code/portfolio-screenshots_002.jpg";
import imgPortfolioCode03 from "@/app/assets/images/_code/portfolio-screenshots_003.jpg";
import imgPortfolioCode04 from "@/app/assets/images/_code/portfolio-screenshots_004.jpg";
import imgPortfolioCode05 from "@/app/assets/images/_code/portfolio-screenshots_005.jpg";
import imgPortfolioCode06 from "@/app/assets/images/_code/portfolio-screenshots_006.jpg";

function BentoBox() {
    return (
        <div className="relative z-auto grid grid-cols-2 w-[80%] h-fit justify-self-center rounded-3xl place-content-center gap-[12px] text-white hover:cursor-pointer">
                <bentos.CellText cellSpan="col-span-full">
                    <bentos.HeaderText text="MY PORTFOLIO WEBSITE" textSize="text-[16px]"/>
                    <bentos.ParagraphText text="Designed and Coded by Me!" textSize="text-[16px]"/>
                </bentos.CellText>
                
                <bentos.CellMediaOnClick mediaText="Landing page" mediaLink={imgPortfolioSite01} cellSpan="col-span-2 row-span-2" hoverTextColor="text-textVariant"/>

                <div className="grid col-span-2 grid-rows-2 md:grid-rows-1 md:grid-cols-3 gap-[12px]">
                    <bentos.CellText cellSpan="col-span-2 md:col-span-1">
                        <bentos.ParagraphText text="I am proud to present to you my portfolio website, coded in NextJS React by me. Over the first few months of 2025, I started applying my coding knowledge to a practical project, and created the largest update to my portfolio to date." textSize="text-[12px]"/>
                        </bentos.CellText>
                        <bentos.CellMediaOnClick mediaText="Media popup galleries" mediaLink={imgPortfolioSite06} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                        <bentos.CellMediaOnClick mediaText="Code for some of my page components" mediaLink={imgPortfolioCode03} cellSpan="col-span-1" hoverTextColor="text-textVariant" />
                </div>

                <bentos.CellMediaOnClick mediaText="Project link pages" mediaLink={imgPortfolioSite04} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellText cellSpan="col-span-1">
                    <bentos.ParagraphText text="I developed a lot of skills over the development of this site and improved my efficiency and interactivity quite a bit. Every component or asset was designed, refined, and improved as I learned more useful techniques." textSize="text-[12px]"/>
                </bentos.CellText>
                <bentos.CellMediaOnClick mediaText="Creating assets in After Effects" mediaLink={imgPortfolioCode01} cellSpan="col-span-1" hoverTextColor="text-textVariant" />
                <bentos.CellMediaOnClick mediaText="Code for my landing page cards" mediaLink={imgPortfolioCode06} cellSpan="col-span-1" hoverTextColor="text-textVariant" />

                <div className="grid col-span-2 grid-cols-3 gap-[12px]">
                    <bentos.CellText cellSpan="col-span-1">
                        <bentos.ParagraphText text="I always wanted to have full control over my own personal portfolio site, and what better way then to design it from scratch yourself!" textSize="text-[12px]"/>
                    </bentos.CellText>
                    <bentos.CellMediaOnClick mediaText="Code for my project link cards" mediaLink={imgPortfolioCode04} cellSpan="col-span-1" hoverTextColor="text-textVariant" />
                    <bentos.CellMediaOnClick mediaText="Creating assets in After Effects" mediaLink={imgPortfolioCode02} cellSpan="col-span-1" hoverTextColor="text-textVariant" />
                </div>

                <bentos.CellMediaOnClick mediaText="Fullscreen media view" mediaLink={imgPortfolioSite07} cellSpan="col-span-1" hoverTextColor="text-textVariant" />
                <bentos.CellText cellSpan="col-span-1">
                    <bentos.ParagraphText text="I plan on adding much more to my site as I continue to grow. I've always had a strong interest in coding, and I plan to pick up some more web and game design knowledge for my next projects. Stay tuned!" textSize="text-[12px]"/>
                </bentos.CellText>
                <bentos.CellMediaOnClick mediaText="Project page design grids" mediaLink={imgPortfolioSite10} cellSpan="col-span-1" hoverTextColor="text-textVariant" />
                <bentos.CellMediaOnClick mediaText="Multiple media gallery support" mediaLink={imgPortfolioSite11} cellSpan="col-span-1" hoverTextColor="text-textVariant" />
        </div>
    )
}

export function ProjectCodePortfolio() {
    return (
    <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
        <BentoBox />
    </pages.GroupProjectPage>
    )
}

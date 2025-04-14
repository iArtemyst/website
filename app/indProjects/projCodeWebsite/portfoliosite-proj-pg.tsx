'use client'

import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";
import { MediaType } from "@/app/globals/project-galleries";

const imgPortfolioSite01 = "_code/portfolioSite_stills_00.png";
const imgPortfolioSite04 = "_code/portfolioSite_stills_03.png";
const imgPortfolioSite06 = "_code/portfolioSite_stills_05.png";
const imgPortfolioSite07 = "_code/portfolioSite_stills_06.png";
const imgPortfolioSite10 = "_code/portfolioSite_stills_09.png";
const imgPortfolioSite11 = "_code/portfolioSite_stills_10.png";

const imgPortfolioCode01 = "_code/portfolio-screenshots_001.jpg";
const imgPortfolioCode02 = "_code/portfolio-screenshots_002.jpg";
const imgPortfolioCode03 = "_code/portfolio-screenshots_003.jpg";
const imgPortfolioCode04 = "_code/portfolio-screenshots_004.jpg";
const imgPortfolioCode06 = "_code/portfolio-screenshots_006.jpg";

function BentoBox() {
    return (
        <div className="relative z-auto grid grid-cols-2 w-[80%] h-fit justify-self-center rounded-3xl place-content-center gap-[12px] text-white hover:cursor-pointer">
            <bentos.CellText cellSpan="col-span-full">
                <bentos.HeaderText text="MY PORTFOLIO WEBSITE" textSize="text-[16px]"/>
                <bentos.ParagraphText text="Designed and Coded by Me!" textSize="text-[16px]"/>
            </bentos.CellText>
            
            <bentos.CellMediaOnClick mediaText="Landing page" mediaLink={imgPortfolioSite01} mediaType={MediaType.Image} cellSpan="col-span-2 row-span-2" hoverTextColor="text-textVariant"/>

            <div className="grid col-span-2 grid-rows-2 md:grid-rows-1 md:grid-cols-3 gap-[12px]">
                <bentos.CellText cellSpan="col-span-2 md:col-span-1">
                    <bentos.ParagraphText text="I am proud to present to you my portfolio website, coded in NextJS React by me. Over the first few months of 2025, I started applying my coding knowledge to a practical project, and created the largest update to my portfolio to date." textSize="text-[12px]"/>
                </bentos.CellText>
                <bentos.CellMediaOnClick mediaText="Media popup galleries" mediaLink={imgPortfolioSite06} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaText="Code for some of my page components" mediaLink={imgPortfolioCode03} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant" />
            </div>

            <bentos.CellMediaOnClick mediaText="Project link pages" mediaLink={imgPortfolioSite04} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            <bentos.CellText cellSpan="col-span-1">
                <bentos.ParagraphText text="I developed a lot of skills over the development of this site and improved my efficiency and interactivity quite a bit. Every component or asset was designed, refined, and improved as I learned more useful techniques." textSize="text-[12px]"/>
            </bentos.CellText>
            <bentos.CellMediaOnClick mediaText="Creating assets in After Effects" mediaLink={imgPortfolioCode01} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant" />
            <bentos.CellMediaOnClick mediaText="Code for my landing page cards" mediaLink={imgPortfolioCode06} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant" />

            <div className="grid col-span-2 grid-cols-3 gap-[12px]">
                <bentos.CellText cellSpan="col-span-1">
                    <bentos.ParagraphText text="I always wanted to have full control over my own personal portfolio site, and what better way then to design it from scratch yourself!" textSize="text-[12px]"/>
                </bentos.CellText>
                <bentos.CellMediaOnClick mediaText="Code for my project link cards" mediaLink={imgPortfolioCode04} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant" />
                <bentos.CellMediaOnClick mediaText="Creating assets in After Effects" mediaLink={imgPortfolioCode02} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant" />
            </div>

            <bentos.CellMediaOnClick mediaText="Fullscreen media view" mediaLink={imgPortfolioSite07} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant" />
            <bentos.CellText cellSpan="col-span-1">
                <bentos.ParagraphText text="I plan on adding much more to my site as I continue to grow. I've always had a strong interest in coding, and I plan to pick up some more web and game design knowledge for my next projects. Stay tuned!" textSize="text-[12px]"/>
            </bentos.CellText>
            <bentos.CellMediaOnClick mediaText="Project page design grids" mediaLink={imgPortfolioSite10} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant" />
            <bentos.CellMediaOnClick mediaText="Multiple media gallery support" mediaLink={imgPortfolioSite11} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant" />
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

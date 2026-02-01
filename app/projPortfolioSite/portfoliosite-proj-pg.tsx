'use client'

import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";
import { MediaType } from "@/app/globals/project-galleries";
import { CheckIfMobileBrowser } from "@/app/globals/mobile-check";
import { GalleryV2InfoWithLinks } from "../globals/gallery-v2";

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

const vidPortfolio01 = "_code/portfolio/portfolio-recordering_cropped_a.mp4";
const vidPortfolio02 = "_code/portfolio/portfolio-recordering_cropped_b.mp4";
const vidPortfolio03 = "_code/portfolio/portfolio-recordering_cropped_c.mp4";

const imgPortfolio01 = "_code/portfolio/portfolio-recordering_stills_00.png";
const imgPortfolio02 = "_code/portfolio/portfolio-recordering_stills_01.png";
const imgPortfolio03 = "_code/portfolio/portfolio-recordering_stills_02.png";
const imgPortfolio04 = "_code/portfolio/portfolio-recordering_stills_03.png";
const imgPortfolio05 = "_code/portfolio/portfolio-recordering_stills_04.png";
const imgPortfolio06 = "_code/portfolio/portfolio-recordering_stills_05.png";
const imgPortfolio07 = "_code/portfolio/portfolio-recordering_stills_06.png";
const imgPortfolio08 = "_code/portfolio/portfolio-recordering_stills_07.png";
const imgPortfolio09 = "_code/portfolio/portfolio-recordering_stills_08.png";
const imgPortfolio10 = "_code/portfolio/portfolio-recordering_stills_09.png";
const imgPortfolio11 = "_code/portfolio/portfolio-recordering_stills_10.png";

const linkPortfolioSite = 'https://eevee-feywild.com';
const linkPortfolioSiteGithub = 'https://github.com/iArtemyst/portfolio-website';

function BentoBox() {
    let isMobile = CheckIfMobileBrowser()
    return (
        <div className={`grid-cols-1 relative z-auto grid w-[80%] h-fit justify-self-center rounded-3xl place-content-center gap-[12px] text-white hover:cursor-pointer`}>
            <bentos.CellMediaOnClick mediaText="Landing page of my portfolio site, featuring links to my projects pages and a brief overview of myself." mediaLink={vidPortfolio01} mediaType={MediaType.Video} cellSpan={`col-span-1`} hoverTextColor="text-textVariant"/>

            <div className="col-span-1 grid grid-cols-3">
                <bentos.CellMediaOnClick mediaText="Projects are displayed in various ways, depending on the project type and complexity." mediaLink={imgPortfolio10} mediaType={MediaType.Image} cellSpan={`col-span-2`} hoverTextColor="text-textVariant"/>
                <bentos.CellText cellSpan={`col-span-1`}>
                    <bentos.ParagraphText text="A couple years ago I decided to move away from the traditional quick mockup websites and take full advantage of my skills and interests. Using what I knew about web design and development, I began working on fully custom site with personal widgets and interactions." />
                </bentos.CellText>
            </div>

            <bentos.CellMediaOnClick mediaText="Many elements on my site are reactive to the mouse cursor position, or other logic elements to create an interactive experience." mediaLink={vidPortfolio02} mediaType={MediaType.Video} cellSpan={`col-span-1`} hoverTextColor="text-textVariant"/>

            <div className="col-span-1 grid grid-cols-3">
                <bentos.CellText cellSpan={`col-span-1`}>
                    <bentos.ParagraphText text="This site has developed and will continue to develop over time. Each time I return to update a project, or make improvements, the site is refined, and the experience improved. Elements like the featured projects, and related projects did not exist in the earlier versions of my site, but now offer a better user-flow, creating an easier time navigating the site."/>
                </bentos.CellText>
                <bentos.CellMediaOnClick mediaText="The main project pages showcase a featured projects and animated portfolio reel among the other projects." mediaLink={imgPortfolio08} mediaType={MediaType.Image} cellSpan={`col-span-2`} hoverTextColor="text-textVariant" />
            </div>



            <div className="col-span-1 grid grid-cols-3">
                <bentos.CellMediaOnClick mediaText="Click through galleries are one of the many components I have developed in my portfolio site." mediaLink={imgPortfolio11} mediaType={MediaType.Image} cellSpan={`col-span-2`} hoverTextColor="text-textVariant"/>
                <bentos.CellText cellSpan={`col-span-1`}>
                    <bentos.ParagraphText text="As I work to improve and refine this site, I continue to add and test new features, allowing me to explore creative possibilities and develop my eye for design further. I love the process of iterating and refining my work and code, and learning a new technique to test in a sandbox site such as this portfolio."/>
                </bentos.CellText>
            </div>

            <div className={`col-span-1 grid grid-cols-3 gap-[12px]`}>
                <bentos.CellMediaOnClick mediaText="Creating assets in After Effects" mediaLink={imgPortfolioCode01} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant" />
                <bentos.CellText cellSpan={`col-span-1`}>
                    <bentos.ParagraphText text="In addition to the development work of the site, and the work that went into creating the original project assets, I have also edited and refined the visual assets and animation in After Effects and Photoshop to match the look and feel of my site better."/>
                </bentos.CellText>
                <bentos.CellMediaOnClick mediaText="Code for my landing page cards" mediaLink={imgPortfolioCode06} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant" />
            </div>
        </div>
    )
}

export function ProjectCodePortfolio() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <div className={`place-self-center self-start place-items-center w-full flex flex-col h-fit md:h-auto gap-0 md:gap-[12px]`}>
                <GalleryV2InfoWithLinks 
                    projTitle="My Portfolio Website" 
                    projSummary="A custom portfolio website designed and developed by myself using NextJS and React, showcasing my projects, skills, and experience in one location online. The site features custom interactive elements, a responsive design, and visually appealing layout to present my work to potential clients and employers." 
                    outLink1={linkPortfolioSite} 
                    buttonText1="Portfolio" 
                    outLink2={linkPortfolioSiteGithub
                    
                    } 
                    buttonText2="Github Repo" 
                    projOtherDetails="PERSONAL | SOLO DESIGNER & DEVELOPER"/>
                <BentoBox />
                </div>
        </pages.GroupProjectPage>
    )
}

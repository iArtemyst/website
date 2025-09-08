'use client'

import "@/app/globals/globals.css";

import * as gallery from "@/app/globals/project-galleries";
import * as pages from "@/app/globals/pages-main";
import { GalleryV2, GalleryV2InfoWithLinks } from "@/app/globals/gallery-v2";

const mediaBingoSite01 = "_code/bingo_main-clip.mp4";
const mediaBingoSite02 = "_code/bingo_stills_1.png";

const linkBingoSite = 'https://iartemyst.github.io/_bingo-board/';
const linkBingoGithub = 'https://github.com/iArtemyst/_bingo-board';

const BingoMedia: gallery.IGalleryMedia[] = [
    {
        assetText: "The majority of the functionality for this site is built with JavaScript, while the theming and style for this site is handled with CSS.",
        assetMediaLink: mediaBingoSite01,
        assetMediaType: gallery.MediaType.Video,
        assetStillLink: mediaBingoSite01,
    },
    {
        assetText: "Key features for my Bingo Site include a Dark and Light Mode, Multiple Word Banks, Clearing and Creating a new Board, Multiple Bingos per Card, and Local Data Storage for remembering user selections.",
        assetMediaLink: mediaBingoSite02,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: mediaBingoSite02,
    },
]

export function ProjectCodeBingoBoard() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <div className={`place-self-center self-start place-items-center w-full flex flex-col h-fit md:h-auto gap-0 md:gap-[12px]`}>
                <GalleryV2InfoWithLinks 
                    projTitle="Bingo Board" 
                    projSummary="This project started with the goal of building a better interactive Bingo Board for my relatives while they watch one of their favorite shows. The sites they were currently using were slow, kept outdated word-banks, and did not provide a pleasant mobile user experience, all of which I hoped to address with my design." 
                    outLink1={linkBingoSite} 
                    buttonText1="Bingo Site" 
                    outLink2={linkBingoGithub} 
                    buttonText2="Github Repo" 
                    projOtherDetails="PERSONAL | DESIGNER & DEVELOPER"/>
                <GalleryV2 mediaGallery={BingoMedia}/>
            </div>
        </pages.GroupProjectPage>
    )
}
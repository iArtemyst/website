'use client'

import "@/app/globals/globals.css";

import * as gallery from "@/app/globals/project-galleries";
import * as pages from "@/app/globals/pages-main";
import { GalleryV2, GalleryV2InfoWithLinks } from "@/app/globals/gallery-v2";

const imgBingoSite01 = "_code/bingo_stills_00.png";
const imgBingoSite02 = "_code/bingo_stills_01.png";
const imgBingoSite03 = "_code/bingo_stills_02.png";
const imgBingoSite04 = "_code/bingo_stills_03.png";
const imgBingoSite05 = "_code/bingo_stills_04.png";
const imgBingoSite06 = "_code/bingo_stills_05.png";
const imgBingoSite07 = "_code/bingo_stills_06.png";
const imgBingoSite08 = "_code/bingo_stills_07.png";
const imgBingoSite09 = "_code/bingo_stills_08.png";
const imgBingoSite10 = "_code/bingo_stills_09.png";

const linkBingoSite = 'https://iartemyst.github.io/_bingo-board/';
const linkBingoGithub = 'https://github.com/iArtemyst/_bingo-board';

const BingoMedia: gallery.IGalleryMedia[] = [
    {
        assetText: "1",
        assetMediaLink: imgBingoSite01,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgBingoSite01,
    },
    {
        assetText: "text2",
        assetMediaLink: imgBingoSite02,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgBingoSite02,
    },
    {
        assetText: "text 3",
        assetMediaLink: imgBingoSite03,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgBingoSite03,
    },
    {
        assetText: "text 4",
        assetMediaLink: imgBingoSite04,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgBingoSite04,
    },
    {
        assetText: "testing5",
        assetMediaLink: imgBingoSite05,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgBingoSite05,
    },
    {
        assetText: "testing6",
        assetMediaLink: imgBingoSite06,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgBingoSite06,
    },
    {
        assetText: "testing7",
        assetMediaLink: imgBingoSite06,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgBingoSite06,
    },
    {
        assetText: "testing8",
        assetMediaLink: imgBingoSite07,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgBingoSite07,
    },
    {
        assetText: "testing9",
        assetMediaLink: imgBingoSite08,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgBingoSite08,
    },
    {
        assetText: "testing10",
        assetMediaLink: imgBingoSite09,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgBingoSite09,
    },
    {
        assetText: "testing11",
        assetMediaLink: imgBingoSite10,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgBingoSite10,
    },
]

export function ProjectCodeBingoBoard() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <GalleryV2InfoWithLinks projTitle="Bingo Board" projSummary="This is text about my bingo project, there is a little bit of extra text so that I can look at two lines." outLink1={linkBingoSite} buttonText1="Bingo Site" outLink2={linkBingoGithub} buttonText2="Github Repo"/>
            <GalleryV2 mediaGallery={BingoMedia}/>
        </pages.GroupProjectPage>
    )
}
'use client'

import "@/app/globals/globals.css";

import * as gallery from "@/app/globals/project-galleries";
import * as pages from "@/app/globals/pages-main";
import { GalleryV2, GalleryV2InfoWithLinks } from "@/app/globals/gallery-v2";

const imgSlippiTV01 = "_code/slippiTV_stills_01.png";
const imgSlippiTV02 = "_code/slippiTV_stills_02.png";
const imgSlippiTV03 = "_code/slippiTV_stills_03.png";
const imgSlippiTV04 = "_code/slippiTV_stills_04.png";
const imgSlippiTV05 = "_code/slippiTV_stills_05.png";
const imgSlippiTV06 = "_code/slippiTV_stills_06.png";
const imgSlippiTV07 = "_code/slippiTV_stills_07.png";
const imgSlippiTV08 = "_code/slippiTV_stills_08.png";
const imgSlippiTV09 = "_code/slippiTV_stills_09.png";
const imgSlippiTV10 = "_code/slippiTV_stills_10.png";

const linkSlippiTVSite = 'https://iartemyst.github.io/_bingo-board/';
const linkSlippiTVGithub = 'https://github.com/iArtemyst/_bingo-board';

const SlippiTVMedia: gallery.IGalleryMedia[] = [
    {
        assetText: "1",
        assetMediaLink: imgSlippiTV01,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgSlippiTV01,
    },
    {
        assetText: "text2",
        assetMediaLink: imgSlippiTV02,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgSlippiTV02,
    },
    {
        assetText: "text 3",
        assetMediaLink: imgSlippiTV03,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgSlippiTV03,
    },
    {
        assetText: "text 4",
        assetMediaLink: imgSlippiTV04,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgSlippiTV04,
    },
    {
        assetText: "testing5",
        assetMediaLink: imgSlippiTV05,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgSlippiTV05,
    },
    {
        assetText: "testing6",
        assetMediaLink: imgSlippiTV06,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgSlippiTV06,
    },
    {
        assetText: "testing7",
        assetMediaLink: imgSlippiTV06,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgSlippiTV06,
    },
    {
        assetText: "testing8",
        assetMediaLink: imgSlippiTV07,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgSlippiTV07,
    },
    {
        assetText: "testing9",
        assetMediaLink: imgSlippiTV08,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgSlippiTV08,
    },
    {
        assetText: "testing10",
        assetMediaLink: imgSlippiTV09,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgSlippiTV09,
    },
    {
        assetText: "testing11",
        assetMediaLink: imgSlippiTV10,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgSlippiTV10,
    },
]

export function ProjectCodeSlippiTV() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <GalleryV2InfoWithLinks projTitle="SlippiTV" projSummary="This is text about the SlippiTV project, there is a little bit of extra text so that I can look at two lines." outLink1={linkSlippiTVSite} buttonText1="Slippi.TV" outLink2={linkSlippiTVGithub} buttonText2="Github Repo"/>
            <GalleryV2 mediaGallery={SlippiTVMedia}/>
        </pages.GroupProjectPage>
    )
}
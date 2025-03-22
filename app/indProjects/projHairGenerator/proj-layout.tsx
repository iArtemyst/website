'use client'

import "@/app/globals/globals.css";
import Card01 from "/app/assets/images/_game/_stubbleGen/shave-gen_still-a.png";
import Card02 from "/app/assets/images/_game/_stubbleGen/shave-gen_still-b.png";
import Card03 from "/app/assets/images/_game/_stubbleGen/shave-gen_still-c.png";
import Card04 from "/app/assets/images/_game/_stubbleGen/shave-gen_still-d.png";

import * as bentos from "@/app/globals/bento-boxes";
import * as pages from "@/app/globals/pages-main";

const width = "w-[240px]";
const hWidth = "group-hover:w-[360px]";
const hMargin = "group-hover:mx-[-60px]";
const conMargin = "m-[8px]";
const columnAmount = "grid-cols-4";

import { CardsContainer, IProjectCardData } from "@/app/globals/card-generator";

const cardMedia: IProjectCardData[] = [
    {
        cardWidth: width,
        hoverWidth: hWidth,
        hoverMargin: hMargin,
        containerMargin: conMargin,
        cardText: "Thousands of unique hair shapes",
        cardMediaLink: Card04,
    },
    {
        cardWidth: width,
        hoverWidth: hWidth,
        hoverMargin: hMargin,
        containerMargin: conMargin,
        cardText: "Mathmatical parameter control",
        cardMediaLink: Card03,
    },
    {
        cardWidth: width,
        hoverWidth: hWidth,
        hoverMargin: hMargin,
        containerMargin: conMargin,
        cardText: "Substance designer layout",
        cardMediaLink: Card02,
    },
    {
        cardWidth: width,
        hoverWidth: hWidth,
        hoverMargin: hMargin,
        containerMargin: conMargin,
        cardText: "Timeline render control",
        cardMediaLink: Card01,
    },
];


export default function StubbleGenPage() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
                <CardsContainer dataArray={cardMedia} gridCols={columnAmount}/>
                    <bentos.ProjectDetailText TitleText="PROCEDURAL HAIR GENERATOR" MoreText="Using Substance Designer and a little math, I designed and developed a procedural generator for the growth of facial hair over the course of a week.
                    The goal of this project was to accurately create thousands of images that are similar to existing medical research images of the same subject, in an effort to have a database to train artificial intelligence on.
                    Starting with a single hair strand, this generator system builds up many layers of operations to produce thousands of unique strands per image, and millions of possible generator results.
                    After getting the generator system designed and working, I carefully collapsed the system into a user friendly node with parameters and timeline rendering." />
        </pages.GroupProjectPage>
    )
}
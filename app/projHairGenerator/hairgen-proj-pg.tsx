'use client'

import "@/app/globals/globals.css";
import * as pages from "@/app/globals/pages-main";
import * as gallery from "@/app/globals/project-galleries";

import * as hairGenMedia from "./hairgen-media-links";

export function StubbleGenPage() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <gallery.ProjectCardsNoGalleryContainer cardArray={hairGenMedia.HairGenProjectCardArrays} columnAmount="grid-cols-2 sm:grid-cols-4"/>
                <gallery.ProjectDetailRelativeTextNDA 
                    TitleText="PROCEDURAL HAIR GENERATOR" 
                    MoreText="Using Substance Designer and a little math, I designed and developed a procedural generator for the growth of facial hair over the course of a week.
                    The goal of this project was to accurately create thousands of images that are similar to existing medical research images of the same subject, in an effort to have a database to train artificial intelligence on.
                    Starting with a single hair strand, this generator system builds up many layers of operations to produce thousands of unique strands per image, and millions of possible generator results.
                    After getting the generator system designed and working, I carefully collapsed the system into a user friendly node with parameters and timeline rendering." 
                    NDAText="Due to NDA, I cannot showcase more information about this project than what is above"/>
        </pages.GroupProjectPage>
    )
}
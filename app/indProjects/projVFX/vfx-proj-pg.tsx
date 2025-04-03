'use client'

import "@/app/globals/globals.css";
import * as pages from "@/app/globals/pages-main";
import * as gallery from "@/app/globals/project-galleries";

import * as vfxmedia from "./vfx-media-links";

export default function ProjectVFXPage() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <gallery.ProjectCardsWithGalleryContainer cardArray={vfxmedia.VFXProjectCardArrays} columnAmount="grid-cols-5"/>
            <gallery.ProjectDetailRelativeText
                TitleText="STYLIZED VFX"
                MoreText="In an effort to practice my 2D shader development, I quickly rigged and animated a simple character model and set about recreating some stylized shaders applied to simple geometry.
                The VFX assets are made of several layers of meshes, shaders, and timed animations. And with the fireball animation, I developed a procedural system to spawn and cast a fireball along a spline in scene." /> 
        </pages.GroupProjectPage>
    );
}
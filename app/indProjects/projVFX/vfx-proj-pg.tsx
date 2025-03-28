'use client'

import * as bentos from "@/app/globals/bento-boxes";
import "@/app/globals/globals.css";
import * as pages from "@/app/globals/pages-main";
import * as cards from "@/app/globals/card-generator";
import * as gallery from "@/app/globals/gallery-component";

import * as vfxmedia from "./vfx-media-links";

export default function ProjectVFXPage() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <bentos.ProjectDetailText
                TitleText="STYLIZED VFX"
                MoreText="In an effort to practice my 2D shader development, I quickly rigged and animated a simple character model and set about recreating some stylized shaders applied to simple geometry.
                The VFX assets are made of several layers of meshes, shaders, and timed animations. And with the fireball animation, I developed a procedural system to spawn and cast a fireball along a spline in scene." /> 
            <gallery.ProjectCardsWithGalleryContainer cardArray={vfxmedia.VFXProjectCardArrays} />
        </pages.GroupProjectPage>
    );
}
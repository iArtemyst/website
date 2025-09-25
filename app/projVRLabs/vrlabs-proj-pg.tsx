'use client'

import "@/app/globals/globals.css";

import * as gallery from "@/app/globals/project-galleries";
import * as pages from "@/app/globals/pages-main";
import { GalleryV2, GalleryV2TopInfoDiv } from "@/app/globals/gallery-v2";

const imgVRLab01 = "_3d/_vr-labs/vr-lab_still_001.png";
const imgVRLab02 = "_3d/_vr-labs/vr-lab_still_002.png";
const imgVRLab03 = "_3d/_vr-labs/vr-lab_still_003.png";

const ConceptAppMedia: gallery.IGalleryMedia[] = [
    {
        assetText: "Assets modeled or converted from CAD for use in the Game Engine",
        assetMediaLink: imgVRLab01,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgVRLab01,
    },
    {
        assetText: "Laying out the scenes included the 3D assets, textures, lights, and cameras",
        assetMediaLink: imgVRLab02,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgVRLab02,
    },
    {
        assetText: "These demonstrations expanded into a new technology division for my client",
        assetMediaLink: imgVRLab03,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: imgVRLab03,
    },
]

export function ProjectVRLabs() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <div className={`place-self-center self-start place-items-center w-full flex flex-col h-fit md:h-auto gap-0 md:gap-[12px]`}>
                <GalleryV2TopInfoDiv 
                    projTitle="VR Lab Environments" 
                    projSummary="Utilizing 3DS Max, Unity Engine, Vray, and more, I worked with a team of Tech Artist and Developers that were responsible for delivering 3D VR Scenes of Medical Laboratory spaces for a client." 
                    projOtherDetails="CLIENT | 3D ASSET DESIGNER & ENVIRONMENT ARTIST"/>
                <GalleryV2 mediaGallery={ConceptAppMedia}/>
            </div>
        </pages.GroupProjectPage>
    )
}
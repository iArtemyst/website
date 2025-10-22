'use client'

import "@/app/globals/globals.css";
import * as pages from "@/app/globals/pages-main";
import { IProjectLinkCard, ProjectLinkCardsContainer } from "@/app/globals/project-link-cards";
import { useState, useEffect } from "react";
import Loading from "../globals/loading-text";
import { FeaturedProjectsDiv, IFeaturedProjectCard } from "../globals/featured-projects";
import { LazyHoverVideo, LazyNonHoverVideo, LazyVideo } from "../globals/lazy-video";
import * as fonts from "@/app/globals/fonts";

const vidDartPub = "_project-links/prjLink_dartspub_400px.mp4";
const vidHorrorHouse = "_project-links/prjLink_horrorhouses_400px.mp4";
const vidMedAnim = "_project-links/prjLink_medanim_400px.mp4";
const vidMammotome = "_project-links/prjLink_Mammotome.mp4";
const vidEESDevices = "_project-links/prjLink_eesDevices.mp4";
const vidMedVisualization = "_project-links/prjLink_medVisualization.mp4";
const vidMonsoonVermut = "_project-links/prjLink_monsoonvermut_400px.mp4";
const vidProcMats = "_project-links/prjLink_procMat_400px.mp4";
const vidProdAnim = "_project-links/prjLink_productanim_400px.mp4";
const vidMakino = "_project-links/prjLink_Makino_400px.mp4";
const vidFlowserve = "_project-links/prjLink_Flowserve_400px.mp4";
const vidConsumerProd = "_project-links/prjLink_ConsumerProd_400px.mp4";
const vidStylizedVFX = "_project-links/prjLink_stylizedvfx_400px.mp4";
const vidInstaLoops = "_project-links/prjLink_insta-loops_400px.mp4";
const vidSasukeModel = "_project-links/foxsuke_model_sqLink-vid_400px.mp4";
const vidProcToonCity = "_project-links/prjLink_islandGen_400px.mp4";
const vidUtopaea = "_project-links/prjLink_utopaea_400px.mp4";
const vidHairGenerator = "_project-links/prjLink_hairgen_400px.mp4";
const vidVRLabs = "_3d/_vr-labs/prjLink_vrLabs_400px.mp4";
const vidFoxsukeVideo = "_project-links/prjLink_FoxsukeCV_400px.mp4";

const reel3D = "_project-links/portfolioReel_3D_EY_compressed.mp4"

const linkHorrorHouse = "../projHorrorHouse";
const linkStylizedVFX = "../projVFX3D";
const linkDartPub = "../projDartPub";
const linkMedAnim = "../projMedicalAnim";
const linkMammotome = "../projMammotome";
const linkEESDevices = "../projEthiconDevices";
const linkMedVisualization = "../projMedVisualization";
const linkMonsoonVermut = "../projMonsoon";
const linkProdAnim = "../projProductAnim";
const linkFlowserve = "../projFlowservePumps";
const linkMakino = "../projMakinoMachinery";
const linkConsumerProd = "../projConsumerProduct";
const linkProcMats = "../projProcMat3D";
const linkInstaLoops = "../projLoopAnim3D";
const linkSasukeModel = "../projSasukeModel";
const linkUtopaea = "../projUtopaea";
const linkProcToonCity = "../projProcIslandCity";
const linkHairGenerator = "../projHairGenerator";
const linkVRLabs = "../projVRLabs";
const linkFoxsukeVideo = "../projFoxsukeVideo";


const featuredProjectsData: IFeaturedProjectCard[] = [
    {
        projectTitle: "Foxsuke Shippuden Opening (SSBM)",
        projectDates: "2025",
        mediaLink: vidFoxsukeVideo,
        cardLink: linkFoxsukeVideo,
        softwareUsed: "Blender 3D + After Effects",
        cardColor: 'bg-[#906C02] border-[#A89D7A]',
        projectDesc: "Recreation of Naruto Shippuden Opening with Super Smash Bros. Melee Characters, including a SSBM Combo Video",
    },
    {
        projectTitle: "Darts and Pub Assets",
        projectDates: "2024",
        mediaLink: vidDartPub,
        cardLink: linkDartPub,
        softwareUsed: "Blender 3D + Substance Painter",
        cardColor: 'bg-[#6B321A] border-[#81695E]',
        projectDesc: "3D modeled and UV unwrapped environment and prop assets based upon a local Pub where I played darts at until they closed down",
    },
]

const groupCardData: IProjectLinkCard[] = [
    {
        projectTitle: "Horror Houses",
        projectDates: "2024",
        mediaLink: vidHorrorHouse,
        cardLink: linkHorrorHouse,
        errorText: "Blender 3D",
    },
    {
        projectTitle: "Makino Machinery Animation",
        projectDates: "2018-2025",
        mediaLink: vidMakino,
        cardLink: linkMakino,
        errorText: "3DS Max + After Effects + Cinema 4D",
    },
    {
        projectTitle: "Flowserve Pumps Animation",
        projectDates: "2018-2025",
        mediaLink: vidFlowserve,
        cardLink: linkFlowserve,
        errorText: "3DS Max + After Effects + Keyshot",
    },
    {
        projectTitle: "Consumer Product Animation",
        projectDates: "2018-2025",
        mediaLink: vidConsumerProd,
        cardLink: linkConsumerProd,
        errorText: "3DS Max + Vray + Keyshot",
    },
    {
        projectTitle: "Monsoon Vermut",
        projectDates: "2022",
        mediaLink: vidMonsoonVermut,
        cardLink: linkMonsoonVermut,
        errorText: "3DS Max + Blender 3D",
    },
    {
        projectTitle: "Stylized VFX",
        projectDates: "2024",
        mediaLink: vidStylizedVFX,
        cardLink: linkStylizedVFX,
        errorText: "Blender 3D + Unreal Engine",
    },
    {
        projectTitle: "Medical Visualization",
        projectDates: "2018-2025",
        mediaLink: vidMedVisualization,
        cardLink: linkMedVisualization,
        errorText: "3DS Max + Blender + After Effects",
    },
    {
        projectTitle: "Ethicon Device Visualization",
        projectDates: "2018-2025",
        mediaLink: vidEESDevices,
        cardLink: linkEESDevices,
        errorText: "3DS Max + Keyshot + After Effects",
    },
    {
        projectTitle: "Mammotome AutoCore Device",
        projectDates: "2023-2024",
        mediaLink: vidMammotome,
        cardLink: linkMammotome,
        errorText: "3DS Max + Vray + After Effects",
    },
    {
        projectTitle: "Looping Animations",
        projectDates: "2020-2024",
        mediaLink: vidInstaLoops,
        cardLink: linkInstaLoops,
        errorText: "Blender 3D + 3DS Max",
    },
    {
        projectTitle: "Procedural Materials",
        projectDates: "2023",
        mediaLink: vidProcMats,
        cardLink: linkProcMats,
        errorText: "Blender 3D + Substance Designer",
    },
    {
        projectTitle: "Sasuke SSBM Model",
        projectDates: "2025",
        mediaLink: vidSasukeModel,
        cardLink: linkSasukeModel,
        errorText: "Blender 3D + Mod Tooling",
    },
    {
        projectTitle: '"Utopaea" Game Level',
        projectDates: "2019 & 2024",
        mediaLink: vidUtopaea,
        cardLink: linkUtopaea,
        errorText: "Blender 3D + 3DS Max, Unreal Engine",
    },
    {
        projectTitle: "Island City Generator",
        projectDates: "2023",
        mediaLink: vidProcToonCity,
        cardLink: linkProcToonCity,
        errorText: "Blender 3D",
    },
    {
        projectTitle: "VR Lab Environments",
        projectDates: "2022-2024",
        mediaLink: vidVRLabs,
        cardLink: linkVRLabs,
        errorText: "3DS Max + Unity Engine",
    },
]


export default function GroupProjects3D() {
    const [shuffledCards, setArray] = useState<IProjectLinkCard[]>([])
    
    useEffect(() => {
        setArray(shuffle_about_cards(groupCardData))
    }, []);
    
    function shuffle_about_cards(new_cards: IProjectLinkCard[]) 
    {
        let shuffled_array = structuredClone(new_cards);

        for (let i = new_cards.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i - 1));
            [shuffled_array[i], shuffled_array[j]] = [shuffled_array[j], shuffled_array[i]];
        }

        return shuffled_array;
    }



    return shuffledCards.length != 0 ?
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <div className="w-[85%] md:w-[75%] place-self-center h-fit justify-items-center flex rounded-xl overflow-clip shadow-[2px_2px_6px_#00000030,-2px_-2px_6px_#ffffff30] hover:shadow-[2px_2px_3px_#00000010,-2px_-2px_3px_#ffffff10] hover:scale-[99%] active:scale-[98%]">
                <LazyNonHoverVideo 
                        src={reel3D}
                        autoplay={true}
                        controls={true}
                        muted={true}
                        loop={true}
                        />
            </div>
            <FeaturedProjectsDiv dataArray={featuredProjectsData}/>
            <ProjectLinkCardsContainer dataArray={shuffledCards} />
        </pages.GroupProjectPage>
        :
        <Loading />
}

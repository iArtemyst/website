import "@/app/globals/globals.css";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

import * as SVGComponents from "@/app/svgs/index";
import * as fonts from "./fonts";

const linkAbout = '/about';
const linkHome = '/'
const linkArtstation = 'https://eevee-feywild.artstation.com/';
const linkGithub = 'https://github.com/iArtemyst';

function HeaderSVGButton({buttonLink, children}: {buttonLink:Url, children:any}) {
    return (
            <Link href={buttonLink} rel="noopener noreferrer" target="_blank" className="hover:cursor-pointer justify-self-center content-center col-span-1 opacity-50 hover:opacity-100 hover:scale-110">
                <div className={`relative w-[18px] sm:w-[20px] md:w-[22px] lg:w-[24px] xl:w-[28px] 2xl:w-[32px]`}>
                    {children}
                </div>
            </Link>
    )
}

function HeaderTextButton({buttonText, buttonLink}: {buttonText:String, buttonLink:Url}) {
    return(
        <Link href={buttonLink}>
            <button className="group mt-[4px] relative h-auto w-auto justify-self-center flex hover:cursor-pointer rounded-full -translate-y-[8px] hover:translate-y-0 transition-all duration-200 px-[.5rem] opacity-50 hover:opacity-100 hover:scale-125 active:scale-110">
                <p className={`${fonts.dotoBlack.className} text-[14px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-priColor`}>
                    {buttonText}
                </p>
            </button>
        </Link>
    )
}

export function NavUI() {
    return(
        <nav className={`absolute left-0 right-0 top-0 bottom-0 w-full h-full`}>
            <div className="relative w-auto h-auto z-50 mt-[8px] flex justify-center">
                    <HeaderTextButton buttonText="HOME" buttonLink={linkHome}/>
                    <HeaderTextButton buttonText="ABOUT" buttonLink={linkAbout}/>
            </div>

            <div className="absolute flex right-0 top-0 w-fit h-fit hover:cursor-pointer grid-cols-2 gap-2 m-[12px] md:m-[16px] z-50">
                <HeaderSVGButton buttonLink={linkArtstation}><SVGComponents.ArtstationSVG /></HeaderSVGButton>
                <HeaderSVGButton buttonLink={linkGithub}><SVGComponents.GithubSVG /></HeaderSVGButton>
            </div>
        </nav>
    )
}

function BackButton({buttonText=""}:{buttonText:String}){
    return (
    <div className={`${fonts.dotoBlack.className} text-[7px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] relative text-center w-auto h-auto px-[.5rem] sm:px-[1rem] py-[.25rem] rounded-full backdrop-blur-[8px] bg-[#FFFFFF40] hover:bg-[#FFFFFF] hover:scale-[110%] transition-all duration-[200ms]`}>
        <p>{buttonText}</p>
    </div>
    )
}

export function BackButtonRSticky({backLink="", buttonText=""}:{backLink:string, buttonText:String}) {
    return (
    <Link href={backLink}>
        <div className="fixed right-0 bottom-0 w-auto h-auto m-[24px]">
            <BackButton buttonText={buttonText} />
        </div>
    </Link>
    )
}
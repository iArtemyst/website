'use client'

import "@/app/globals/globals.css";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

import * as SVGComponents from "@/app/svgs/index";
import * as fonts from "./fonts";
import StyledLink from "./styled-link";

const linkAbout = '/about';
const linkHome = '/'
const linkArtstation = 'https://eevee-feywild.artstation.com/';
const linkGithub = 'https://github.com/iArtemyst';

export function NavUI() {
    function HeaderSVGButton({buttonLink, children}: {buttonLink: Url, children: any}) {
        return (
            <Link href={buttonLink} rel="noopener noreferrer" target="_blank" className="relative hover:cursor-pointer w-fit h-fit col-span-1 opacity-50 hover:opacity-100 hover:scale-110 m-[3px]">
                <div className={`w-[14px] sm:w-[16px] md:w-[18px] lg:w-[20px] xl:w-[24px] 2xl:w-[28px] h-auto`}>
                    {children}
                </div>
            </Link>
        )
    }
    
    function HeaderTextButton({buttonText, buttonLink}: {buttonText: string, buttonLink: Url}) {
        return (
            <StyledLink href={buttonLink}>
                <button className="static h-fit w-fit justify-self-center hover:cursor-pointer  transition-all duration-200 px-[.25rem] sm:px-[.5rem] opacity-50 hover:opacity-100 hover:scale-125 active:scale-110">
                    <p className={`${fonts.dotoBlack.className} text-[14px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-priColor`}>
                        {buttonText}
                    </p>
                </button>
            </StyledLink>
        )
    }
    
    return (
        <nav className={`fixed left-0 right-0 top-0 bottom-0 z-[200] p-[2px] sm:p-[4px] md:p-[6px] w-full h-fit`}>
            <div className="absolute left-[50%] -translate-x-[50%] top-0 w-fit h-auto grid grid-cols-2 justify-items-center">
                <HeaderTextButton buttonText="HOME" buttonLink={linkHome}/>
                <HeaderTextButton buttonText="ABOUT" buttonLink={linkAbout}/>
            </div>

            <div className="absolute right-[8px] top-[2px] sm:top-[4px] flex w-fit h-fit hover:cursor-pointer grid-cols-2 content-center">
                <HeaderSVGButton buttonLink={linkArtstation}><SVGComponents.ArtstationSVG /></HeaderSVGButton>
                <HeaderSVGButton buttonLink={linkGithub}><SVGComponents.GithubSVG /></HeaderSVGButton>
            </div>
        </nav>
    )
}

export function BackButtonRSticky({backLink="", buttonText=""}: {backLink: string, buttonText: string}) {
    return (
        <StyledLink href={backLink}>
            <div className="fixed z-[9999] right-0 bottom-0 w-auto h-auto m-[24px]">
                <div className={`${fonts.dotoBlack.className} text-[7px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] relative text-center w-auto h-auto px-[.5rem] sm:px-[1rem] py-[.25rem] rounded-full backdrop-blur-[8px] bg-[#FFFFFF40] hover:bg-[#FFFFFF] hover:scale-[110%] transition-all duration-[200ms]`}>
                    <p>{buttonText}</p>
                </div>
            </div>
        </StyledLink>
    )
}
import "@/app/globals/globals.css"
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

import * as SVGComponents from "../assets/svgs/index";
import * as fonts from "./fonts";

const linkAbout = '/about';
const linkHome = '/'
const linkArtstation = 'https://eevee-feywild.artstation.com/';
const linkGithub = 'https://github.com/iArtemyst';

function HeaderSVGButton({buttonLink = "", children}: {buttonLink:Url, children:any}) {
    return (
            <Link href={buttonLink} rel="noopener noreferrer" target="_blank" className="hover:cursor-pointer justify-self-center content-center col-span-1 opacity-100">
                <div className="relative h-[24px] w-auto">
                    {children}
                </div>
            </Link>
    )
}
function NavBarLine() {
    return (
        <div className="absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] w-full h-full rounded-full group-hover:opacity-0 transition-all duration-300 content-center delay-100">
            <p className={`${fonts.dotoBlack.className} text-center text-[18px] text-hoverTextColor`}>HOVER FOR MENU</p>
        </div>
    )
}

function HeaderTextButton({buttonText = "Button", buttonLink = ""}: {buttonText:String, buttonLink:Url}) {
    return(
        <Link href={buttonLink}>
            <button className="relative h-full w-auto justify-self-center col-span-1 opacity-100">
                <p className={`${fonts.bebasNeue.className} text-[20px] w-auto text-priColor`}>
                    {buttonText}
                </p>
            </button>
        </Link>
    )
}

function NavUI() {
    return(
        <nav>
            <div className="absolute top-0 w-auto h-[32px] left-[50%] -translate-x-[50%] z-50 rounded-full mt-[8px]
                flex justify-between gap-[12px] px-[12px] hover:cursor-pointer           
                bg-opacity-[30%] backdrop-blur-[4px]
                scale-[65%] hover:scale-[100%] -translate-y-[8px] hover:translate-y-0 transition-all duration-200">
                
                {/* <NavBarLine /> */}

                <HeaderTextButton buttonText="Home" buttonLink={linkHome}/>

                <HeaderTextButton buttonText="ABOUT" buttonLink={linkAbout}/>
            </div>

            <div className="absolute flex right-0 top-0 w-[40px] h-auto hover:cursor-pointer grid-cols-2 gap-2 mx-[12px] my-[8px] z-50">
                <HeaderSVGButton buttonLink={linkArtstation}><SVGComponents.ArtstationSVG /></HeaderSVGButton>
                <HeaderSVGButton buttonLink={linkGithub}><SVGComponents.GithubSVG /></HeaderSVGButton>
            </div>
        </nav>
    )
}


export default NavUI;
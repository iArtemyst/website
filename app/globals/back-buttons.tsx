import "@/app/globals/globals.css";
import Link from "next/link";

import * as fonts from "@/app/globals/fonts";

function BackButton({buttonText=""}:{buttonText:String}){
    return (
    <div className={`${fonts.dotoBlack.className} text-textSml relative text-center w-auto h-auto px-3 py-1 rounded-full backdrop-blur-[8px] bg-[#FFFFFF40] hover:bg-[#FFFFFF] hover:scale-[110%] transition-all duration-[200ms]`}>
        <p>{buttonText}</p>
    </div>
    )
}

export function BackButtonCenter({backLink="", buttonText=""}:{backLink:string, buttonText:String}) {
    return (
    <Link href={backLink}>
        <div className="relative justify-self-center w-auto h-auto my-[12px]">
            <BackButton buttonText={buttonText} />
        </div>
    </Link>
    )
}

export function BackButtonRight({backLink="", buttonText=""}:{backLink:string, buttonText:String}) {
    return (
    <Link href={backLink}>
        <div className="absolute right-0 bottom-0 w-auto h-auto mx-[24px]">
            <BackButton buttonText={buttonText} />
        </div>
    </Link>
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

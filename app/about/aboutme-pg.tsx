'use client'

import "@/app/globals/globals.css";

const vidBackA  = "_aboutme/aboutme_a_back.mp4";
const vidFrontA = "_aboutme/aboutme_a_front.mp4";
const vidBackB  = "_aboutme/aboutme_b_back.mp4";
const vidFrontB = "_aboutme/aboutme_b_front.mp4";
const vidBackC  = "_aboutme/aboutme_c_back.mp4";
const vidFrontC = "_aboutme/aboutme_c_front.mp4";
const vidBackD  = "_aboutme/aboutme_d_back.mp4";
const vidFrontD = "_aboutme/aboutme_d_front.mp4";

import { IDoubleSideAboutCard, AboutCardContainer } from "@/app/globals/double-sided-cards";
import * as fonts from "@/app/globals/fonts";
import * as pages from "@/app/globals/pages-main";
import { NoSelect } from "../globals/styles";
import { useState, useEffect } from "react";
import Loading from "../globals/loading-text";
// import { shuffle_aboutme_cards } from "../globals/shuffle-functions";

const cardStyle = "group-hover:m-[-20px] md:group-hover:m-[-40px] 2xl:group-hover:m-[-60px] group-hover:w-[200px] md:group-hover:w-[320px] lg:group-hover:w-[400px] xl:group-hover:w-[440px] 2xl:group-hover:w-[540px] w-[160px] md:w-[240px] lg:w-[275px] xl:w-[320px] 2xl:w-[360px]"
const titleSmlTextStyle= `${fonts.dotoBlack.className} h-fit w-fit text-[8px] sm:text-[12px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] text-secColor leading-none tracking-tighter self-end my-[8px] laptop:my-[16px]`;
const titleTextStyle = `${fonts.dotoBlack.className} text-priColor text-[16px] sm:text-[36px] md:text-[44px] lg:text-[56px] 2xl:text-[64px] text-left text-balance leading-none -my-[2px] laptop:-my-[12px]`;

function DoubleSidedCardPageText() {
    return (
        <div className={`absolute left-0 bottom-0 w-full h-fit flex p-[24px] sm:p-[30px] md:p-[36px] lg:p-[42px] xl:p-[48px] place-items-end justify-self-center`} style={NoSelect}>
            <div className={`relative w-full h-fit flex-inline justify-self-start text-nowrap tracking-tighter`}>
                <p className={`${titleSmlTextStyle}`}>Get to know me</p>
                <p className={`${titleTextStyle}`}>EVELYN YOUNGBLOOD</p>
            </div>
        </div>
    )
}


// function random_number() {
//     const [randomNum, setRandomNum] = useState(0.5);
//     const createRandomNumber = () => {
//         const random = (Math.random());
//         setRandomNum(random);
//     };
//     return randomNum
// }

// function shuffle_aboutme_cards(new_cards:any) {
//     let shuffled_array: IDoubleSideAboutCard[] = structuredClone(new_cards);
//     for (let i = shuffled_array.length -1; i > 0; i--) {
//         let j = Math.floor(random_number() * (i - 1));
//         [shuffled_array[i], shuffled_array[j]] = [shuffled_array[j], shuffled_array[i]];
//     };
//     return shuffled_array;
// }


// function randomgenerate() {
//     const max = 20;
//     let random = (max * -1) + Math.floor(((Math.random() * max)));

//     if (random >= 0 || random <= 5 ) {
//         random += 5;
//     }
//     if (random < 0 || random >= -5) {
//         random -= 5;
//     }

//     return random
// }

// let rotdegrees1 = randomgenerate()
// let rotdegrees2 = randomgenerate()
// let rotdegrees3 = randomgenerate()
// let rotdegrees4 = randomgenerate()

const cardMedia: IDoubleSideAboutCard[] = [
    {
        cardVideoFront: vidFrontA,
        cardVideoBack: vidBackA,
        cardStyle: cardStyle,
        rotatedAngle: `rotate-[0deg]`,
    },
    {
        cardVideoFront: vidFrontB,
        cardVideoBack: vidBackB,
        cardStyle: cardStyle,
        rotatedAngle: `rotate-[0deg]`,
    },
    {
        cardVideoFront: vidFrontC,
        cardVideoBack: vidBackC,
        cardStyle: cardStyle,
        rotatedAngle: `rotate-[0deg]`,
    },
    // {
    //     cardVideoFront: vidFrontD,
    //     cardVideoBack: vidBackD,
    //     cardStyle: cardStyle,
    //     rotatedAngle: `rotate-[0deg]`,
    // },
]

export function AboutMePage() {
    const [shuffledCards, setArray] = useState<IDoubleSideAboutCard[]>([])
    useEffect(() => {
        setArray(shuffle_about_cards(cardMedia))
    }, []);
    
    function shuffle_about_cards(new_cards: IDoubleSideAboutCard[]) 
    {
        let shuffled_array = structuredClone(new_cards);

        for (let i = new_cards.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i - 1));
            [shuffled_array[i], shuffled_array[j]] = [shuffled_array[j], shuffled_array[i]];
        }

        return shuffled_array;
    }

    return shuffledCards.length != 0 ?
        <pages.GroupProjectPage overflowStyle="overflow-hidden">
            <AboutCardContainer dataArray={shuffledCards} />
            <DoubleSidedCardPageText />
        </pages.GroupProjectPage>
        :
        <Loading />
}

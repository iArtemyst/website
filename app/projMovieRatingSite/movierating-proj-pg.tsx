
'use client'

import "@/app/globals/globals.css";

import * as gallery from "@/app/globals/project-galleries";
import * as pages from "@/app/globals/pages-main";
import { GalleryV2, GalleryV2InfoWithLinks } from "@/app/globals/gallery-v2";
import * as bentos from "@/app/globals/bento-boxes";
import { MediaType } from "@/app/globals/project-galleries";

const mediaMovieRatingSite01 = "_code/movieRatingSite/MovieRating_Clip_A.mp4";
const mediaMovieRatingSite02 = "_code/movieRatingSite/MovieRating_Still_A_00.png";
const mediaMovieRatingSite03 = "_code/movieRatingSite/MovieRating_Still_B_00.png";
const mediaMovieRatingSiteCode01 = "_code/movieRatingSite/MovieRatingSite_Code_Stills_00.png";
const mediaMovieRatingSiteCode02 = "_code/movieRatingSite/MovieRatingSite_Code_Stills_01.png";
const mediaMovieRatingSiteCode03 = "_code/movieRatingSite/MovieRatingSite_Code_Stills_02.png";
const mediaMovieRatingSiteCode05 = "_code/movieRatingSite/MovieRatingSite_Code_Stills_04.png";
const mediaMovieRatingSiteCode06 = "_code/movieRatingSite/MovieRatingSite_Code_Stills_05.png";
const mediaMovieRatingSiteCode07 = "_code/movieRatingSite/MovieRatingSite_Code_Stills_06.png";
const mediaMovieRatingSiteCode09 = "_code/movieRatingSite/MovieRatingSite_Code_Stills_08.png";

const linkMovieRatingSite = 'https://whatisitrated.com';
const linkMovieRatingGithub = 'https://github.com/iArtemyst/movie-rating-site';

const SlippiTVMedia: gallery.IGalleryMedia[] = [
    {
        assetText: "Utilizing a quick JS script in my browser, I obtained thousands of IMDB movie ids to build up a database of information",
        assetMediaLink: mediaMovieRatingSiteCode09,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: mediaMovieRatingSiteCode09,
    },
    {
        assetText: "Using C# and .NET I built a server that delivers three movies daily, cycling at midnight PST, along with related information about the movie such as the Director, Top Billed Actors, a Plot Summary, the Rating for the movie, and which site the rating belongs to",
        assetMediaLink: mediaMovieRatingSiteCode07,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: mediaMovieRatingSiteCode07,
    },
    {
        assetText: "After obtaining all the movies, I wrote a quick JS script to shuffle the movie database",
        assetMediaLink: mediaMovieRatingSiteCode06,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: mediaMovieRatingSiteCode06,
    },
    {
        assetText: "Throughout development of the server, I also started developing a ReactJS website as the location for playing the trivia game",
        assetMediaLink: mediaMovieRatingSiteCode01,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: mediaMovieRatingSiteCode01,
    },
    {
        assetText: "Utilizing local data storage, I keep track of the local player stats and keep the game state updated properly",
        assetMediaLink: mediaMovieRatingSiteCode05,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: mediaMovieRatingSiteCode05,
    },
    {
        assetText: "The components are designed to work together utilizing the active information in the game, updating to the most current state when information updates",
        assetMediaLink: mediaMovieRatingSiteCode02,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: mediaMovieRatingSiteCode02,
    },
    {
        assetText: "I designed CSS classes for almost every element on the site, taking advantage of the CSS classes to build site flexibility and reactive styling",
        assetMediaLink: mediaMovieRatingSiteCode03,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: mediaMovieRatingSiteCode03,
    },
]


function BentoBoxB() {
    return (
        <div className="relative z-10 grid grid-cols-1 w-[80%] h-fit justify-self-center text-white hover:cursor-pointer gap-[12px]">

            <bentos.CellMediaOnClickNoShadow mediaText="WhatIsItRated.com, a movie trivia site design and developed by myself with ReactJs, .NET, and C#" mediaLink={mediaMovieRatingSite01} mediaType={MediaType.Video} cellSpan="col-span-1" hoverTextColor="text-textVariant" />

            <bentos.CellText cellSpan={`col-span-1`}>
                <bentos.ParagraphText textSize={"text-24px"} 
                    text="While watching a movie for my monthly movie club, I had an idea: If I were given just a little bit of information about a movie, maybe a poster, the director, who's top billed, could I guess what the collective internet agrees that the movie is rated? That idea evolved into WhatIsItRated.com." />
            </bentos.CellText>
            
            <div className="col-span-1 grid grid-cols-2 gap-[12px]">
                <bentos.CellMediaOnClickNoShadow mediaText="Multiple themes with persistence through local storage data" mediaLink={mediaMovieRatingSite03} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClickNoShadow mediaText="I utilized a small group of trusted friends and family to test and improve UI and functionality before v1.0 release" mediaLink={mediaMovieRatingSite02} mediaType={MediaType.Image} cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
            </div>

            <div className="w-[95%] md:w-[80%] flex place-self-center mt-[1em] sm:mt-[2em]">
                <GalleryV2 mediaGallery={SlippiTVMedia} />
            </div>
        </div>
    )
}

export function ProjectCodeMovieRatingSite() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <div className={`place-self-center self-start place-items-center w-full flex flex-col h-fit md:h-auto gap-0 md:gap-[12px]`}>
                <GalleryV2InfoWithLinks 
                    projTitle="WhatIsItRated?" 
                    projSummary="A movie trivia site that presents three random movies daily, with related information about the movie, and asks the user of the site to input their guess for what the movie is actually rated, on one of three sites. After a guess is submitted, the correct rating is shown, and a point value it given based upon how close the submitted guess was to the correct guess." 
                    outLink1={linkMovieRatingSite} 
                    buttonText1="WhatIsItRated" 
                    outLink2={linkMovieRatingGithub
                    
                    } 
                    buttonText2="Github Repo" 
                    projOtherDetails="PERSONAL | SOLO DESIGNER & DEVELOPER"/>
                <BentoBoxB />
            </div>
        </pages.GroupProjectPage>
    )
}
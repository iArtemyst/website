import { IProjectLinkCard} from "@/app/globals/project-link-cards";
import { IDoubleSideAboutCard, IDoubleSideLandingCard} from "@/app/globals/double-sided-cards";

export function shuffle_project_list(new_list:any) {
    let shuffled_array: IProjectLinkCard[] = structuredClone(new_list);
    for (let i = shuffled_array.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffled_array[i], shuffled_array[j]] = [shuffled_array[j], shuffled_array[i]];
    };

    return shuffled_array
}

export function shuffle_aboutme_cards(new_cards:any) {
    let shuffled_array: IDoubleSideAboutCard[] = structuredClone(new_cards);
    for (let i = shuffled_array.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffled_array[i], shuffled_array[j]] = [shuffled_array[j], shuffled_array[i]];
    };

    return shuffled_array
}

export function shuffle_landing_cards(new_cards:any) {
    let shuffled_array: IDoubleSideLandingCard[] = structuredClone(new_cards);
    for (let i = shuffled_array.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffled_array[i], shuffled_array[j]] = [shuffled_array[j], shuffled_array[i]];
    };

    return shuffled_array
}

import { IProjectLinkCardRestricted } from "@/app/globals/project-link-cards";
import { IDoubleSideLandingCard } from "@/app/globals/double-sided-cards";

export function ShuffleCards(new_cards: IProjectLinkCardRestricted[]) {
    let shuffled_array = structuredClone(new_cards);

    for (let i = new_cards.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i - 1));
        [shuffled_array[i], shuffled_array[j]] = [shuffled_array[j], shuffled_array[i]];
    }

    return shuffled_array;
}

export function ShuffleLandingCards(new_cards: IDoubleSideLandingCard[]) {
    let shuffled_array = structuredClone(new_cards);

    for (let i = new_cards.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i - 1));
        [shuffled_array[i], shuffled_array[j]] = [shuffled_array[j], shuffled_array[i]];
    }

    return shuffled_array;
}

export function ShuffleCardArray(new_cards: any[]) {
    let shuffled_array = structuredClone(new_cards);

    for (let i = new_cards.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i - 1));
        [shuffled_array[i], shuffled_array[j]] = [shuffled_array[j], shuffled_array[i]];
    }

    return shuffled_array;
}
export function GenerateHash(str: string): number {
    let hash = 0;
    for (const char of str) {
        hash = ((hash<<5) - hash) + char.charCodeAt(0);;
        hash |= 0;
    }
    return hash;
};
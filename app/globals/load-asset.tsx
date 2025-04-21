
export default async function LoadAsset(path: string): Promise<string>
{
    if (process.env.NODE_ENV === "development")
    {
        return `./_next/static/media/${path}`
    }
    else
    {
        return `https://eevee-feywild.art/${path}`;
    }
}
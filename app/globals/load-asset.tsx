
export default async function LoadAsset(path: string): Promise<string>
{
    if (process.env.NODE_ENV === "development")
    {
        return import(`@/app/assets/${path}`);
    }
    else
    {
        return `https://eevee-feywild.art/${path}`;
    }
}
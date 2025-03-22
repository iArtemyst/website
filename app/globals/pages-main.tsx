import "@/app/globals/globals.css";

export function GroupProjectPage({children, overflowStyle}:{children:any, overflowStyle:string}) {
    return (
        <div className={`absolute left-0 right-0 top-0 bottom-0 bg-bgColor`}>
            <div className={`${overflowStyle} relative grid grid-cols-1 gap-[24px] w-full h-full justify-center py-[48px] no-scrollbar`}>
                {children}
            </div>
        </div>
    )
}
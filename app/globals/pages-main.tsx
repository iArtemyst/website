export function GroupProjectPage({children}:{children:any}) {
    return (
        <div className={`absolute left-0 right-0 top-0 bottom-0 bg-bgColor`}>
            <div className={`relative grid grid-cols-1 gap-[24px] w-full h-full justify-center overflow-visible py-[48px] overflow-y-auto no-scrollbar`}>
                {children}
            </div>
        </div>
    )
}
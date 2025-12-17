import { useState } from "react"
import { GenerateHash } from "./generate-hash"
import { hashpass } from "./constants"


export function LockedProjectPage() {
    const [locked, setLocked] = useState(true)
    const [typedInput, setTypedInput] = useState("")
    const [requestText, setRequestText] = useState("Please Input Password")

    function handleClick() {
        const currentHPass = GenerateHash(typedInput)
        if (currentHPass === hashpass) {
            setLocked(false)
        }
        else {
            setRequestText("Wrong Password, Please Try Again")
        }
    }

    if (locked) {
        return (
            <div className={`fixed w-full h-full bg-[#000000cc] z-[100] flex place-content-center backdrop-blur-[.375em]`}>
                <div className={`w-fit h-fit place-self-center relative bg-[#FCFCFC] text-textColor backdrop-blur-sm px-[2em] py-[2em] rounded-[1em] flex flex-col gap-[.75em]`}>
                    <div className="relative w-full h-fit px-[.5em] py-[.25em] rounded-[.5em]">
                        <p className="text-balance w-full place-self-center text-[16px]">
                            Sorry, this page is restricted access only.
                        </p>
                    </div>
                    
                    <label className="relative flex flex-col text-center gap-[.125em] text-[12px]">
                        {requestText}
                        <input 
                            type="text" 
                            id="passwordInput" 
                            name="passwordInput" 
                            required 
                            minLength={4} 
                            maxLength={24}
                            value={typedInput}
                            className={`bg-[#e9e9e9] rounded-[1em] text-center w-[80%] self-center text-textColor py-[.25em] text-[16px]`}
                            onInput={(e) => { setTypedInput(e.currentTarget.value)} }
                            onKeyDown={(e) => { if (e.key === 'Enter') {handleClick()}}}
                            />
                    </label>
                    <p className={`text-[12px] bg-slate-100 px-[2em] py-[.5em] w-fit self-center rounded-[1em] hover:scale-[96%] active:scale-[93%] cursor-pointer`} onClick={handleClick}>Submit</p>
                </div>
            </div>
        )
    }
}
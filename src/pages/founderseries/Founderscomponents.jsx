import React from "react"
import { Founder1 } from "./founderimages"
export const Eachfounders = ({ founderImage }) =>{
    return(
        <div className="p-2 flex flex-col space-y-[-4rem]">
            <div className="flex justify-between">
                <div className="w-2/5 flex flex-col space-y-6">
                    <p className="text-[2.4rem] font-[600]">Shola Akinlade the CEO <br /> of Paystack</p>
                    <p className="text-[2.3rem]">Why i started Paysatck?</p>
                    <p className="text-[1.6rem]">Precurio became a success, and banks started reaching out to Shola, requesting his services. He built software applications for three different banks. Subsequently, Shola started Paystack alongside Ezra in 2016 after being displeased by the state of payments and financial transactions in Africa</p>
                </div>
                <div className="w-[50%]"><img className="w-full" src={founderImage} alt="" /></div>
            </div>
            <div><button className="rounded-xl bg-[#FF0000] p-[1rem] text-white text-[1.3rem]">Continue Reading</button></div>
        </div>
    )
}
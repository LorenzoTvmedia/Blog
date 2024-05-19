import React from "react";
import Featuredmembers from '../../assets/feauturedmember.png'
import { CiStar } from "react-icons/ci";
import { GoBookmark } from "react-icons/go";
import './smallcomponents.css'

export const Feauturedformembers = () =>{
    return(
        <div className="w-[300px]">
            <div className="w-[300px] h-[400px]">
                <img className="w-full" src={Featuredmembers} alt="feautured member" />
                </div>
            <div className="flex flex-col space-x-4">
                <div><p className="text-[#A1A1A1]">FEMINISM, EMPOWERMENT</p></div>
                <div className="flex flex-col space-y-2">
                    <p className="text-[32px] font-[600]">Lorem ipsum dolor sit amet</p>
                    <p className="text-[18px]">amet, consectetur dipisci elit, sed eiusmod tempor incidunt ut 
                        labore et dolore magna aliqua ut enim ad minim veniam, 
                        quis nostrum ullam exercitationem corporis suscipit laboriosam
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="flex items-center space-x-4">Jan 19 - 5 min read <CiStar /></p>
                    <span><GoBookmark /></span>
                </div>
            </div>
        </div>
    )
}

export const Categories = () =>{
    return(
        <div className="w-[250px] bg-white py-4 px-6 rounded-md">
            <p className="text-[2.7rem] font-[500] text-[#FF0000]">Categories</p>
            <ul className="list-none flex space-y-[1rem] flex-col mt-2 mb-10">
                <li className="text-[#FF0000] border-b-[1px] border-[#FF0000] text-[1.4rem] font-[500] pb-[.3rem]">Technology</li>
                <li className="text-[#FF0000] border-b-[1px] border-[#FF0000] text-[1.4rem] font-[500] pb-[.3rem]">Finance</li>
                <li className="text-[#FF0000] border-b-[1px] border-[#FF0000] text-[1.4rem] font-[500] pb-[.3rem]">Entertainment</li>
                <li className="text-[#FF0000] border-b-[1px] border-[#FF0000] text-[1.4rem] font-[500] pb-[.3rem]">Movies</li>
                <li className="text-[#FF0000] text-[1.4rem] font-[500]">Self Help</li>
            </ul>
        </div>
    )
}


export const Toppost = () =>{
    return(
        <div className="w-[250px] bg-white py-4 px-6 rounded-md">
            <ol className="alphabetic-list">
                <li className="">Bene</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ol>
        </div>
    )
}
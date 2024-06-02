import React from "react";
import Featuredmembers from '../../assets/feauturedmember.png'
import Resentpostimage from '../../assets/recentpost.png'
import Guy from '../../assets/guy.png'
import { CiStar } from "react-icons/ci";
import { GoBookmark } from "react-icons/go";
import './smallcomponents.css'


export const Feauturedformembers = () =>{
    return(
        <div className="w-[380px] bg-white">
            <div className="w-[380px]">
                <img className="w-full" src={Featuredmembers} alt="feautured member" />
            </div>
            <div className="flex flex-col space-y-2 p-4">
                <div><p className="text-[#A1A1A1]">FEMINISM, EMPOWERMENT</p></div>
                <div className="flex flex-col space-y-2">
                    <p className="text-[1.4rem] font-[600]">Lorem ipsum dolor sit amet</p>
                    <p className="text-[1.2rem]">amet, consectetur dipisci elit, sed eiusmod tempor incidunt ut 
                        labore et dolore magna aliqua ut enim ad minim veniam, 
                        quis nostrum ullam exercitationem corporis suscipit laboriosam
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="flex items-center space-x-4 text-[#aaa]">Jan 19 - 5 min read <CiStar className="text-[1.3rem]"/></p>
                    <span><GoBookmark className="text-[1.3rem] text-[#aaa]"/></span>
                </div>
            </div>
        </div>
    )
}

export const Categories = () =>{
    return(
        <div className="w-[350px] bg-white py-4 px-6 rounded-xl">
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
        <div className="w-[350px] h-[80vh] bg-white py-[3rem] pr-4 rounded-xl">
            <p className="text-[2.7rem] text-[#FF0000] font-[600] px-6 py-6">Top Posts</p>
            <ol className="alphabetic-list pl-20 ">
                <li className="font-[500] text-[14px]"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p><p className="text-[.95rem] text-[#999]">TECHNOLOGY, PROGRAMMING - FEB 14, 2024</p></li>
                <li className="font-[500] text-[14px]"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p><p className="text-[.95rem] text-[#999]">TECHNOLOGY, PROGRAMMING - FEB 14, 2024</p></li>
                <li className="font-[500] text-[14px]"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p><p className="text-[.95rem] text-[#999]">TECHNOLOGY, PROGRAMMING - FEB 14, 2024</p></li>
                <li className="font-[500] text-[14px]"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p><p className="text-[.95rem] text-[#999]">TECHNOLOGY, PROGRAMMING - FEB 14, 2024</p></li>
                <li className="font-[500] text-[14px]"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p><p className="text-[.95rem] text-[#999]">TECHNOLOGY, PROGRAMMING - FEB 14, 2024</p></li>
            </ol>
        </div>
    )
}


export const Resentblogpost = () =>{
    return(
        <div className="w-[380px] bg-white">
            <div className="w-[380px]">
                <img className="w-full" src={Resentpostimage} alt="recent post" />
            </div>
            <div className="flex flex-col space-y-2 p-4">
                <div><p className="text-[#A1A1A1]">TCHNOLOGY, PROGRAMMING</p></div>
                <div className="flex flex-col space-y-2">
                    <p className="text-[1.4rem] font-[600]">Lorem ipsum dolor sit amet</p>
                    <p className="text-[1.2rem] leading-5">amet, consectetur dipisci elit, sed eiusmod tempor incidunt ut 
                        labore et dolore magna aliqua ut enim ad minim veniam, 
                        quis nostrum ullam exercitationem corporis suscipit laboriosam
                    </p>
                </div>
                <div className="flex items-center space-x-4">
                    <div><img src={Guy} alt="" /></div>
                    <p className="text-[1.1rem] text-[#aaa]">Gbemisola Taiwo 14 Feb 2024</p>
                </div>
            </div>
        </div>
    )
}



export const Currenttrend = ({ paragraph, title, backgroundImage }) =>{
    return(
        <div className="p-6 w-[600px] bg-center bg-cover bg-no-repeat h-[75vh] flex flex-col justify-end" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="flex flex-col space-y-2">
                <p className="text-white text-[20px]">Featured</p>
                <p className="text-white text-[25px]">Tech the new oil: The <br /> Beginner’s Tip</p>
                <p className="text-[14px] text-white">{paragraph}</p>
            </div>
        </div>
    )
}

export const Eachmembers = ({Member, name, role}) =>{
    return(
        <div>
            <div className="w-[200px]"><img className="w-full" src={Member} alt="Member" /></div>
            <div className="text-center">
                <p className="text-[1.3rem] font-[550]">{name}</p>
                <p className="text-[1.2rem]">{role}</p>
            </div>
        </div>
    )
}
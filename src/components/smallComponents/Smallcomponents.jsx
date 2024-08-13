import React from "react";
import Featuredmembers from '../../assets/feauturedmember.png'
import Topicimage1 from '../../assets/topic1.png'
import Topicimage2 from '../../assets/topic2.png'
import Topicimage3 from '../../assets/topic3.png'
import Resentpostimage from '../../assets/recentpost.png'
import Guy from '../../assets/guy.png'
import { CiStar } from "react-icons/ci";
import { GoBookmark } from "react-icons/go";
import './smallcomponents.css'
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { RxCross2 } from "react-icons/rx";


export const Feauturedformembers = () =>{
    return(
        <div className="w-[400px] bg-white">
            <div className="w-[400px]">
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

const allTopics = [
    {imageTopic: Topicimage1, date: '08.08.2029', mainTopic: 'dream destination for africans to europe', content: "Let's get one thing out of the way: you don't norProduct Design. We sat with Frankie Sullivan to talk about gatekeeping in product design"},
    {imageTopic: Topicimage2, date: '08.08.2029', mainTopic: 'dream destination for africans to europe', content: "Let's get one thing out of the way: you don't norProduct Design. We sat with Frankie Sullivan to talk about gatekeeping in product design"},
    {imageTopic: Topicimage3, date: '08.08.2029', mainTopic: 'dream destination for africans to europe', content: "Let's get one thing out of the way: you don't norProduct Design. We sat with Frankie Sullivan to talk about gatekeeping in product design"},
    {imageTopic: Topicimage1, date: '08.08.2029', mainTopic: 'dream destination for africans to europe', content: "Let's get one thing out of the way: you don't norProduct Design. We sat with Frankie Sullivan to talk about gatekeeping in product design"},
    {imageTopic: Topicimage2, date: '08.08.2029', mainTopic: 'dream destination for africans to europe', content: "Let's get one thing out of the way: you don't norProduct Design. We sat with Frankie Sullivan to talk about gatekeeping in product design"}
]

export const Topic = () =>{
    return(
        <ul className="flex flex-wrap gap-[1.5rem] items-center">
            {
                allTopics.map((topic, index) =>(
                    <li key={index} className="w-full flex justify-center md:w-[calc(50%-0.75rem)] lg:w-[calc(33%-1rem)]">
                        <div className="flex items-center gap-6 sm:block md:w-full">
                            <div className="w-full">
                                <img className="w-full" src={topic.imageTopic} alt="feautured member" />
                            </div>
                            <div className="flex flex-col space-y-[.8rem] sm:space-y-2" style={{marginTop: '1rem'}}>
                                <p className="lg:text-[1.2rem] text-[1rem] font-[600]">{topic.date}</p>
                                <p className="lg:text-[2.5rem] md:text-[2rem] text-[1.6rem] font-[700]">{topic.mainTopic}</p>
                                <p className="lg:text-[1.4rem] md:text-[1.2rem] text-[.9rem]">{topic.content}
                                </p>
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}


const allresentblogposts = [
    {imageTopic: Topicimage1, date: '08.08.2029', mainTopic: 'dream destination for africans to europe', content: "Let's get one thing out of the way: you don't norProduct Design. We sat with Frankie Sullivan to talk about gatekeeping in product design"},
    {imageTopic: Topicimage2, date: '08.08.2029', mainTopic: 'dream destination for africans to europe', content: "Let's get one thing out of the way: you don't norProduct Design. We sat with Frankie Sullivan to talk about gatekeeping in product design"},
    {imageTopic: Topicimage3, date: '08.08.2029', mainTopic: 'dream destination for africans to europe', content: "Let's get one thing out of the way: you don't norProduct Design. We sat with Frankie Sullivan to talk about gatekeeping in product design"},
    {imageTopic: Topicimage1, date: '08.08.2029', mainTopic: 'dream destination for africans to europe', content: "Let's get one thing out of the way: you don't norProduct Design. We sat with Frankie Sullivan to talk about gatekeeping in product design"},
    {imageTopic: Topicimage2, date: '08.08.2029', mainTopic: 'dream destination for africans to europe', content: "Let's get one thing out of the way: you don't norProduct Design. We sat with Frankie Sullivan to talk about gatekeeping in product design"}
]


export const Resentpost = () =>{
    return(
        <ul className="flex flex-wrap gap-[1.5rem] items-center">
            {
                allresentblogposts.map((resentpost, index) =>(
                    <li key={index} className="w-full flex justify-center md:w-[calc(50%-0.75rem)] lg:w-[calc(33%-1rem)]">
                        <div className="flex items-center gap-6 sm:block md:w-full">
                            <div className="">
                                <img className="" src={resentpost.imageTopic} alt="feautured member" />
                            </div>
                            <div className="flex flex-col space-y-0 sm:space-y-2" style={{marginTop: '1rem'}}>
                                <p className="text-[16px] sm:text-[21px] font-[700]">{resentpost.mainTopic}</p>
                                <p className="text-[1.3rem]">{resentpost.content}</p>
                                <div className="flex items-center space-x-4">
                                    <div className="w-[5rem]"><img src={Guy} alt="" /></div>
                                    <p className="text-[1.2rem] font-[500] text-[#000]">Gbemisola Taiwo 14 Feb 2024</p>
                                </div>
                            </div>
                         </div>
                    </li>
                ))
            }
        </ul>
    )
}

export const Sidebar = ({logOutHandler, setopenNav}) =>{
    return(
        <div className="flex flex-col space-x-[2rem] bg-black fixed w-[50%] left-0 top-0 h-screen md:hidden">
            <div><RxCross2 className="text-[15px] bg-white text-black rounded-full" onClick={() => setopenNav(false)}/></div>
            <ul className="flex items-start justify-center flex-col gap-16 mt-[10rem]">
            {/* <li>
                <NavLink
                to="/myposts"
                className={({ isActive }) =>
                    isActive ? "header__active" : ""
                }
                >
                My Posts
                </NavLink>
                </li> */}
                <li className="text-[15px]">
                <Link to="/myposts" className="text-black">Home</Link>
                </li>
                {/* <li>
                <Link to="/myposts/addpost">Blog</Link>
                </li> */}
                <li className="text-[15px]">
                <Link to="/founderseries" className="">Founder's Series</Link>
                </li>
                <li className="text-[15px]">
                <Link to="/aboutus" className="">About us</Link>
                </li>
                <li className="text-[15px]">
                <Link to="/myposts/addpost" className=""> Write</Link>
                </li>
            </ul>
            <span className="flex items-center space-x-6">
                <Button
                type="button"
                className="logout text-[.9rem] bg-[#8C0202] text-white font-[600] rounded-md"
                onClick={logOutHandler}
                >
                Logout
                </Button>
            </span>
        </div>
    )
}


export const Footerlinks = ({ links, linktitle }) =>{
    return(
        <div className="flex flex-col gap-4">
            <h5 className="text-[20px] font-[700]">{linktitle}</h5>
            <ul className="flex flex-col gap-2">
                {
                    links.map((link, index) =>(
                        <li className="text-[14px]">
                            <Link>{link.label}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
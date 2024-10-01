import React, { useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import Blogpostimage from '../../assets/blogpostbg.png'
import { CiHeart } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { TfiComment } from "react-icons/tfi";
import { Eachcomment } from '../../components/smallComponents/Smallcomponents';
import { Resentpost } from '../../components/smallComponents/Smallcomponents';
const Blogpost = () => {
  const [ like, setlike ] = useState(false)
  const [ showMoreComments, setShowMoreComments ] = useState(false)
  return (
    <div className='flex justify-between flex-col p-6'>
        <Navigation />
        <img className='mt-[2rem] h-[60vh]' src={Blogpostimage} alt="" />
        <div className=''>
            <p className='text-[23px] font-[700] mt-8'>dream destinatio for africans <span className='text-[15px]'>kabir yusuf - 12 jan 2026</span></p>
            <p className='text-[1.4rem]'>Let's get one thing out of the way: you don't norProduct Design. 
                We sat down with Frankie Sullivan to talk about gatekeeping in product design and 
                how anyone can get into thisgrowing industry.Let's get one thing out of the way: you don't norProduct Design. We sat down with Frankie Sullivan to talk. 
                about gatekeepinin product design andhow anyone can get into this growing industry.Let's get one thing out of the way: you don't norProduct Design. 
                We sat down with Frankie Sullivan to talk abou t gatekeeping in product 
                design and how anyone can get into this growing industry.
            </p>
            <div className='flex justify-end items-center gap-4'>
                <div className='flex gap-2 items-center text-[14px]'><span>{!like ? <CiHeart onClick={() => setlike(true)} className='text-[20px]'/> : <IoMdHeart onClick={() => setlike(false)} className='text-[20px] text-red-700'/>}</span><span>Like</span></div>
                <div className='flex gap-2 items-center text-[14px]'><span><TfiComment className='text-[15px]'/></span><span>Comment</span></div>
            </div>
        </div>
        <div className=''>
          <div className='p-6'>
            <h3 className='text-[20px] font-[600]'>Comments</h3> 
            <div className={`w-3/6 ${showMoreComments ? 'flex flex-col' : 'h-[50vh] overflow-hidden' }`}>
              <Eachcomment />
              <Eachcomment />
              <Eachcomment />
            </div>
            <div className='flex justify-end my-6 text-[13px] underline'><button onClick={() => setShowMoreComments(!showMoreComments)}>{showMoreComments ? 'Show less' : 'Show more'}</button></div>
          </div>
          <div className='mb-10'>
            <Resentpost />
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Blogpost

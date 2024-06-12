import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import AboutUS from '../../assets/pen1.jpg'
import About3 from '../../assets/about3.jpeg'
import Flower from '../../assets/flower.png'
import Write from '../../assets/write.png'
import Member from '../../assets/member.png'
import { Eachmembers } from '../../components/smallComponents/Smallcomponents'


function Aboutus() {
  return (
    <div className='overflow-hidden'>
      <div 
        className='w-full bg-red-500 h-screen bg-no-repeat bg-cover'
        style={{ backgroundImage: `url(${About3})` }}>
        <Navigation />
        {/* <div className='flex flex-col justify-center items-center mt-[20rem]'>
            <p className='text-[4.5rem] font-[700]'>About Us</p>
            <p className='text-[1.5rem]'>Home/About Us</p>
        </div> */}
      </div>
      <div className="flex items-center justify-center space-x-6 mt-20">
            <div className="w-2/5 flexs flex-col space-y-4">
                <p className="text-[2.3rem] font-[500]">Why i started Paysatck?</p>
                <p className="text-[1.5rem]">Precurio became a success, and banks started reaching out to Shola, requesting his services. He built software applications for three different banks. Subsequently, Shola started Paystack alongside Ezra in 2016 after being displeased by the state of payments and financial transactions in Africa</p>
            </div>
            <div className="w-[35%]"><img className="w-full" src={Write} alt="" /></div>
       </div>
       <div className="flex items-center justify-center mt-20">
            <div className="w-2/5 flexs flex-col space-y-4">
                <p className="text-[2.3rem] font-[500]">Why i started Paysatck?</p>
                <p className="text-[1.5rem]">Precurio became a success, and banks started reaching out to Shola, requesting his services. He built software applications for three different banks. Subsequently, Shola started Paystack alongside Ezra in 2016 after being displeased by the state of payments and financial transactions in Africa</p>
            </div>
            <div className="w-[35%]"><img className="w-full" src={Flower} alt="" /></div>
       </div>
       <div className='flex flex-col items-center justify-center mt-[6rem]'>
            <p className='text-[2.5rem] font-[550] mb-6'>All Members</p>
            <div className='flex items-center space-x-10'>
                <Eachmembers Member={Member} name='Bene Abiola' role='Founder'/>
                <Eachmembers Member={Member} name='Bene Abiola' role='Founder'/>
                <Eachmembers Member={Member} name='Bene Abiola' role='Founder'/>
                <Eachmembers Member={Member} name='Bene Abiola' role='Founder'/>
            </div>
       </div>
      <Footer />
    </div>
  )
}

export default Aboutus

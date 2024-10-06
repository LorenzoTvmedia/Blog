import React, { useState } from 'react'
import './profile.css'
import Navigation from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { CiUnlock } from "react-icons/ci";
import { RiLogoutCircleLine } from "react-icons/ri";
import Yusuf from '../../assets/yusuf.png'



export const Userinfo = () =>{
  return(
    <div className='pl-10'>
      <div className='flex items-center gap-14 mb-28'>
        <div><img src={Yusuf} alt="" className='rounded-full shadow-lg shadow-slate-600'/></div>
        <p className='text-[1.9rem] font-extrabold'>kabir Yusuf</p>
      </div>
      <form action="" className='w-4/6'>
        <div className='profileform'>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-[1.4rem] font-[500]'>First Name</label>
            <input 
            type="text"
            className='bg-[#d9d9d9] p-4 rounded-md outline-none text-[1.3rem]'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-[1.4rem] font-[500]'>First Name</label>
            <input 
            type="text"
            className='bg-[#d9d9d9] p-4 rounded-md outline-none text-[1.3rem]'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-[1.4rem] font-[500]'>First Name</label>
            <input 
            type="text"
            className='bg-[#d9d9d9] p-4 rounded-md outline-none text-[1.3rem]'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-[1.4rem] font-[500]'>First Name</label>
            <input 
            type="text"
            className='bg-[#d9d9d9] p-4 rounded-md outline-none text-[1.3rem]'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-[1.4rem] font-[500]'>First Name</label>
            <input 
            type="text"
            className='bg-[#d9d9d9] p-4 rounded-md outline-none text-[1.3rem]'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-[1.4rem] font-[500]'>First Name</label>
            <input 
            type="text"
            className='bg-[#d9d9d9] p-4 rounded-md outline-none text-[1.3rem]'
            />
          </div>
        </div>
        <div className='flex items-center justify-center mt-10 w-full'>
          <button 
          type='submit'
          className='bg-[#8C0202] text-white py-4 px-6 text-[1.3rem] font-bold rounded-lg'
          >Save changes</button>
        </div>
      </form>
    </div>
  )
}


export const Password = () =>{
  return(
    <div>
      <div className='flex items-center'>
        <span><CiUnlock className='border-[1px] border-black'/></span>
        <p>Change Password</p>
      </div>
    </div>
  )
}


const Profile = () => {
  const [ showSetting, setShowSetting ] = useState(true)
  return (
    <div className=''>
      <Navigation />
      <section className='px-8 mt-[4rem]'>
        <div className='flex items-center justify-between'>
          <span><IoIosMenu className='text-[32px]'/></span>
          <p className='flex items-center gap-2 text-[15px] font-bold'>
            <span><IoPersonCircleOutline /></span>
            <span>Kabir Yusuf</span>
          </p>
        </div>
        <div className='px-10 pt-10 h-[90vh] flex gap-6'>
          <div className='w-1/5 flex flex-col justify-between h-full border-r-[1px] border-red-900'>
            <div className=''>
              <p className='text-[25px] font-bold'>Settings</p>
              <div className='text-[17px] mt-10 flex flex-col items-start gap-4'>
                <button className={`setting`} onClick={() => setShowSetting(true)}>User Info</button>
                <button className={`setting`} onClick={() => setShowSetting(false)}>Password</button>
              </div>
            </div>
            <p className='text-red-800 p-10 font-bold text-[1.5rem] flex items-center gap-2'><RiLogoutCircleLine /> Log Out</p>
          </div>
          <div className='px-10 w-4/5'>
            {showSetting ? (
              <Userinfo />
            ):(
              <Password />
            )
            }
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  )
}

export default Profile

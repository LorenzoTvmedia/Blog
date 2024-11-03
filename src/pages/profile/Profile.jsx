import React, { useState } from 'react'
import './profile.css'
import Navigation from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { CiUnlock } from "react-icons/ci";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import Yusuf from '../../assets/yusuf.png'



export const Userinfo = () =>{
  return(
    <div className='pl-10'>
      <div className='flex items-center gap-14 mb-28'>
        <div><img src={Yusuf} alt="" className='rounded-full shadow-lg shadow-slate-600'/></div>
        <p className='text-[1.9rem] font-extrabold'>kabir Yusuf</p>
      </div>
      <form action="" className='md:w-5/6 lg:w-5/6'>
        <div className='profileform'>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-[1.4rem] font-[500]'>First Name</label>
            <input 
            type="text"
            className='bg-[#d9d9d9] p-4 rounded-md outline-none text-[1.3rem]'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-[1.4rem] font-[500]'>Last Name</label>
            <input 
            type="text"
            className='bg-[#d9d9d9] p-4 rounded-md outline-none text-[1.3rem]'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-[1.4rem] font-[500]'>Email Address</label>
            <input 
            type="email"
            className='bg-[#d9d9d9] p-4 rounded-md outline-none text-[1.3rem]'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-[1.4rem] font-[500]'>Phone Number</label>
            <input 
            type="number"
            className='bg-[#d9d9d9] p-4 rounded-md outline-none text-[1.3rem]'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-[1.4rem] font-[500]'>Location</label>
            <input 
            type="text"
            className='bg-[#d9d9d9] p-4 rounded-md outline-none text-[1.3rem]'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-[1.4rem] font-[500]'>Poster Code</label>
            <input 
            type="number"
            className='bg-[#d9d9d9] p-4 rounded-md outline-none text-[1.3rem]'
            />
          </div>
        </div>
        <div className='flex items-center justify-center my-10 w-full'>
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
  const [showpassword, setShowpassword] = useState(true)
  const [showNew, setShowNew] = useState(true)
  const [showCurrent, setShowCurrent] = useState(true)

  const [ current, setcurrent ] = useState('')
  const [ newPassword, setnewPassword ] = useState('')
  const [ password, setPassword ] = useState('')
  const handleCurrent = () =>{
    setShowCurrent(!showCurrent)
  }
  const handleNew = () =>{
    setShowNew(!showNew)
  }
  const handleShowPassword = () =>{
    setShowpassword(!showpassword)
  }
  return(
    <div className='md:px-16 p-6'>
      <div className='flex items-center gap-8'>
        <span className='border-[1px] border-black p-2 rounded-full'><CiUnlock className='text-[4rem]'/></span>
        <p className='text-[20px] font-[600]'>Change Password</p>
      </div>
      <section className='mt-10 flex flex-col gap-8 w-full md:w-5/6 lg:w-4/6'>
        <div className='relative w-full'>
          <label className='text-[16px] font-[500]' htmlFor="">Current Password</label> <br />
          <input 
          className='w-full outline-none rounded-md py-5 px-6 bg-[#d5d4d4] text-[1.5rem]'
          value={current}
          onChange={(e) => setcurrent(e.target.value)}
          type={showCurrent ? 'password' : 'text'} />
          {!showCurrent ? <span onClick={handleCurrent} className='absolute right-3 bottom-[.7rem] text-[2.7rem] text-[#343333] bg-[#d5d4d4]'><IoEyeOutline /></span>: 
          <span onClick={handleCurrent} className='absolute right-3 bottom-[.7rem] text-[2.7rem] text-[#343333] bg-[#d5d4d4]'><IoEyeOffOutline /></span>
          }
        </div>
        <div className='relative w-full'>
          <label className='text-[16px] font-[500]'  htmlFor="">New Password</label> <br />
          <input 
          className='w-full outline-none rounded-md py-5 px-6 bg-[#d5d4d4] text-[1.5rem]'
          value={newPassword}
          onChange={(e) => setnewPassword(e.target.value)}
          type={showNew ? 'password' : 'text'} />
          {!showNew ? <span onClick={handleNew} className='absolute right-3 bottom-[.7rem] text-[2.7rem] text-[#343333] bg-[#d5d4d4]'><IoEyeOutline /></span>: 
          <span onClick={handleNew} className='absolute right-3 bottom-[.7rem] text-[2.7rem] text-[#343333] bg-[#d5d4d4]'><IoEyeOffOutline /></span>
          }
        </div>
        <div className='relative w-full'>
          <label className='text-[16px] font-[500]' htmlFor="">Confirm New Password</label> <br />
          <input 
          className='w-full outline-none rounded-md py-5 px-6 bg-[#d5d4d4] text-[1.5rem]'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showpassword ? 'password' : 'text'} />
          {!showpassword ? <span onClick={handleShowPassword} className='absolute right-3 bottom-[.7rem] text-[2.7rem] text-[#343333] bg-[#d5d4d4]'><IoEyeOutline /></span>: 
          <span onClick={handleShowPassword} className='absolute right-3 bottom-[.7rem] text-[2.7rem] text-[#343333] bg-[#d5d4d4]'><IoEyeOffOutline /></span>
          }
        </div>
      </section>
    </div>
  )
}


const Profile = () => {
  const [ showSetting, setShowSetting ] = useState(0)
  return (
    <div className=''>
      <Navigation />
      <section className='px-8 mt-[4rem]'>
        <div className='flex items-center justify-end'>
          {/* <span><IoIosMenu className='text-[32px]'/></span> */}
          <p className='hidden md:flex items-center gap-2 text-[15px] font-bold'>
            <span><IoPersonCircleOutline /></span>
            <span>Kabir Yusuf</span>
          </p>
        </div>
        <div className='px-10 pt-10 flex gap-6'>
          <div className='hidden w-1/5 md:flex flex-col justify-between h-[75vh] fixed border-r-[1px] border-red-900'>
            <div className=''>
              <p className='text-[25px] font-bold'>Settings</p>
              <div className='text-[17px] mt-10 flex flex-col items-start gap-4'>
                <button className={`setting ${showSetting === 0 ? 'act' : ''}`} onClick={() => setShowSetting(0)}>User Info</button>
                <button className={`setting ${showSetting === 1 ? 'act' : ''}`} onClick={() => setShowSetting(1)}>Password</button>
              </div>
            </div>
            <p className='text-red-800 p-10 font-bold text-[1.5rem] flex items-center gap-2'><RiLogoutCircleLine /> Log Out</p>
          </div>
          <div className='px-10 w-full md:w-4/5 ml-0 md:ml-[20%]'>
            {showSetting === 0 ? (
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

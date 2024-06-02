import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import { Eachfounders } from './Founderscomponents'
import { Founder1, Founder2, Founder3, Founder4, Founder5, Founder6 } from './founderimages'

function Founderseries() {
  return (
    <div>
      <Navigation />
      <div className='p-12'>
        <div className='flex items-center justify-center'>
            <p className='text-[3rem] font-[600]' style={{textAlign: 'center'}}>Founder’s Series: <br /> Navigating obstacles in the founder’s series</p>
        </div>
        <div className='mt-[7rem] flex flex-col space-y-[3rem]'>
            <Eachfounders founderImage={Founder1}/>
            <Eachfounders founderImage={Founder2}/>
            <Eachfounders founderImage={Founder3}/>
            <Eachfounders founderImage={Founder4}/>
            <Eachfounders founderImage={Founder5}/>
            <Eachfounders founderImage={Founder6}/>        
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Founderseries

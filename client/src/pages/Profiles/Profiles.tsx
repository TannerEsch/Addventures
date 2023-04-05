// npm packages
import { useState, useEffect } from 'react'

// services
import * as profileService from '../../Services/profileService'

// types
import { Profile } from '../../Types/models'
import bg2 from './bg2.png'

import mainpic from './mainpic.png'

import { ProfileDailyChallenge, ProfileFeaturedGames, ProfileMathByTopic } from './ProfileComps'

const Profiles = (props: any) => {
  const {user, profile} = props
  return ( 
  <>
    <img src={bg2} className="absolute z-[-1] h-screen w-screen" />
    <div className='px-5 flex flex-col justify-center items-center'>     
      <div className='flex items-center gap-4'>
        <div className='text-[35px] font-nunito sm:text-[4rem]'>Welcome back!</div>
        <img src={mainpic} className='rounded-[50%] border-black border-[1px] w-20 h-20 sm:w-24 sm:h-24 3xs:w-16 3xs:h-16 ml-auto m-4 3xs:m-1'/>
      </div>

    <div className="flex flex-col gap-4 items-center 3xs:scale-y-[0.9] 3xs:mt-[-2rem]">
      <ProfileDailyChallenge/>
      <ProfileFeaturedGames/>
      <div className='flex overflow-x-scroll items-center'>
        <ProfileMathByTopic/>
      </div>
    </div>
    </div>
     </>
  )
}
 
export default Profiles
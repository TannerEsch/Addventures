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
  console.log(profile, user)
  return ( 
  <>
    <img src={bg2} className="absolute z-[-1] h-screen w-screen" />
    <div className='px-5 flex flex-col justify-center items-center'>     
      <div className='flex items-center gap-4'>
        <div className='text-[35px] font-nunito'>Welcome back!</div>
        <img src={mainpic} alt="" className='rounded-[50%] border-black border-[1px] w-20 h-20 ml-auto m-4'></img>
      </div>

    <div className="flex flex-col gap-4 xs:items-center">
      <ProfileDailyChallenge/>
      <ProfileFeaturedGames/>
      <div className='flex overflow-x-scroll xs:items-center'>
        <ProfileMathByTopic/>
      </div>
    </div>
    </div>
     </>
  )
}
 
export default Profiles
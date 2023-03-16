// npm packages
import { useState, useEffect } from 'react'
import { ProfileDailyChallenge, ProfileFeaturedGames, ProfileMathByTopic } from './ProfileComps'

const Profiles = (props: any) => {
  const {user, profile} = props
  console.log(profile, user)
  return (
    <div className='bg-orbit px-5'>     
      <div className='flex items-center'>
        <div className='text-[35px] font-nunito'>Welcome back!</div>
        <img src="" alt="" className='rounded-[50%] border-black border-[1px] w-20 h-20 ml-auto m-4'></img>
      </div>

    <div className="flex flex-col gap-4 xs:items-center">
      <ProfileDailyChallenge/>
      <ProfileFeaturedGames/>
      <div className='flex overflow-x-scroll xs:items-center'>
        <ProfileMathByTopic/>
      </div>
    </div>

    </div>
  )
}
 
export default Profiles
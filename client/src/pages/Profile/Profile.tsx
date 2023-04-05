// npm modules
import { useEffect, useState } from "react"

//types
import { Profile } from "../../types/models";
import mainpic from './mainpic.png'

import bg from './bg.png'

// services
import * as profileService from '../../Services/profileService'

// stylesheets
import './Profile.css'

const ProfilePage = (props: any) => {
  const { user, profile } = props
  console.log(user, profile)


  return (
    <>
    <img src={bg} className="absolute z-[-1]" />
    <div className="flex flex-col gap-8 items-center justify-center">

    <div className="flex w-screen mt-6">
      <div className="mt-1 ml-1 font-bold font-nunito">
          <h2 className="text-3xl">Example name</h2>
          <h3>Level 2</h3>
      </div>
        <img src={mainpic} className="w-24 ml-auto mr-4 mt-1 h-24"/>
      </div>

      <div className="flex w-screen justify-around">
        <img src="/xp.png" alt="" />
        <img src="/score.png" alt="" />
      </div>

      <div className="font-bold font-nunito text-2xl">
        <p>Level</p>
        <img src="/slider-demo.png" alt="" />
      </div>

      <div className="font-bold font-nunito text-2xl">
        <p>Daily Streak</p>
        <img src="/week-challenge.png" alt="" />
      </div>
      <div className="font-bold font-nunito text-2xl">
        <h1>Achievements</h1>
        <img src="/achievements.png" alt="" />
      </div>
      </div>
    </>
  );
}

export default ProfilePage;
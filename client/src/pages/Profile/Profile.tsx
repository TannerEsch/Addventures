// npm modules
import { useEffect, useState } from "react"

//types
import { Profile } from "../../types/models";
import mainpic from './mainpic.png'

import bg from './bg.png'
import moon from './moon.png'
import star from './star.png'

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
        <div className="bg-valvetNight h-16 w-[90vw] rounded-3xl">
        <div className="flex justify-between px-4 items-center h-[100%]">
          <img src={star}/>
          <div className="bg-white w-[100%] mt-1 h-2">
          <div className="bg-yellow-500 w-[15%] h-2"></div>
          </div>
          <img src={star} />
        </div>
        </div>
      </div>

        <div>
        <p className="foint-nunito text-2xl font-bold mr-auto mb-1">Daily Streak</p>
        <div className="flex flex-col font-nunito items-center gap-1 text-white font-bold h-20 w-[90vw] rounded-3xl bg-valvetNight">
        <div className="flex w-[100%] justify-evenly mt-4">
        <p className="border-yellow-500 border-2 rounded-[50%] w-8 h-8 flex items-center justify-center">S</p>
        <p className="border-yellow-500 border-2 rounded-[50%] w-8 h-8 flex items-center justify-center">M</p>
        <p className="border-yellow-500 border-2 rounded-[50%] w-8 h-8 flex items-center justify-center">T</p>
        <p className="border-yellow-500 border-2 rounded-[50%] w-8 h-8 flex items-center justify-center">W</p>
        <p className="border-yellow-500 border-2 rounded-[50%] w-8 h-8 flex items-center justify-center">T</p>
        <p className="border-yellow-500 border-2 rounded-[50%] w-8 h-8 flex items-center justify-center">F</p>
        <p className="border-yellow-500 border-2 rounded-[50%] w-8 h-8 flex items-center justify-center">S</p>
        </div>
        <p className="text-lg">Keep up your daily progress!</p>
        </div>
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
import React from 'react';
import dcPlanet from './images/dc-planet.svg';
import rbPlanet from './images/purple-rocket.svg';
import astronaut from './images/astronaut.svg';
import countPlanet1 from './images/count-planet-1.svg';
import countPlanet2 from './images/count-planet-2.svg';
import countPlanet3 from './images/count-planet-3.svg';
import jupiter from './images/add-planet.svg';
import './ProfileComps.css'

const planets = [countPlanet1, countPlanet2, countPlanet3];

export const ProfileDailyChallenge = () => {
  return (
    <>
      <div id='dc' className="flex items-center justify-end w-[22rem] sm:w-[95vw] h-[6rem] sm:h-[6.5rem] border-[1px] rounded-3xl shadow-xl opacity-70 relative">
        <div className='font-nunito text-lunarWhite absolute z-10 top-4 left-10'>
          <h1 className='text-lg font-bold sm:text-3xl'>Daily Challenge</h1>
          <h2 className='text-md font-thin sm:text-2xl'>Solve 5 problems in a row!</h2>
        </div>
        <img src={dcPlanet} alt='planet' className='mr-8' />
      </div>
    </>
  )
}

export const ProfileFeaturedGames = () => {
    return (
      <div className='flex flex-col font-nunito'>
        <h1 className='text-lg pt-1 font-bold sm:text-[3rem] sm:mb-2'>Featured Games</h1>
        <div className='flex justify-start gap-[5vw] text-lunarWhite font-bold'>
          <div className='relative'>
            <img src={rbPlanet} alt='rocket ship' className='absolute top-[10%] left-2 z-30 sm:left-[3.3rem] sm:scale-[1.4] sm:top-[15%]'></img>
            <div id='rb' className="flex items-end justify-center w-[10rem] h-[15rem] sm:h-[20rem] sm:w-[15rem] border-[1px] rounded-tl-none rounded-2xl shadow-xl opacity-70 relative">
              <h1 className='absolute z-20 bottom-3 text-lg'>Rocket Builder</h1>
              <div className='w-[100%] h-[3rem] bg-black opacity-20 overflow-hidden rounded-t-none rounded-2xl'></div>
            </div>
          </div>
          <div className='relative'>
            <img src={astronaut} alt='astronaut' className='absolute top-[10%] left-2 z-30 sm:scale-[1.4] sm:top-[15%]'/>
            <div id='an' className="flex items-end justify-center w-[10rem] h-[15rem] sm:h-[20rem] sm:w-[15rem] border-[1px] rounded-tl-none rounded-2xl shadow-xl opacity-70 relative">
              <h1 className='absolute z-20 bottom-3 text-lg'>Astronaughty</h1>
              <div className='w-[100%] h-[3rem] bg-white opacity-10 overflow-hidden rounded-t-none rounded-2xl'></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export const ProfileMathByTopic = () => {
    return (
      <>
    <div className='flex flex-col font-nunito text-lg font-bold'>
        <h1 className='text-lg pt-1 font-bold font-nunito sm:text-[3rem] sm:mb-3'>Math by topic</h1>
        <div className='flex justify-start gap-[5vw] text-lunarWhite'>
          <div className='relative'>
            <div className='absolute flex left-2 top-[20%] sm:gap-4 sm:top-[25%] sm:left-8'>
              {planets.map((planet, index) => {
                return (
                  <img src={planet} alt='planet' className='z-30 sm:scale-[1.5] rotate-6' key={index}/>
                )
              })}
            </div>
            <div className="flex items-end justify-center w-[10rem] sm:w-[15rem] sm:h-[15rem] h-[10rem] border-[1px] bg-lime-300 rounded-tl-none rounded-2xl shadow-xl relative">
              <h1 className='absolute z-20 bottom-3'>Counting</h1>
              <div className='w-[100%] h-[3rem] bg-black opacity-20 overflow-hidden rounded-t-none rounded-2xl'></div>
            </div>
          </div>
          <div className='relative'>
            <img src={jupiter} alt='planet' className='absolute top-[10%] left-2 z-30 sm:left-[5rem] sm:scale-[1.8] sm:top-[24%]' />
            <div className="flex items-end justify-center w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem] border-[1px] bg-yellow-400 rounded-2xl shadow-xl relative">
              <h1 className='absolute z-20 bottom-3'>Addition</h1>
              <div className='w-[100%] h-[3rem] bg-black opacity-20 overflow-hidden rounded-t-none rounded-2xl'></div>
            </div>
          </div>
        </div>
    </div>
      </>
    )
  }



import React, {useState} from 'react'
import av1 from './avatarpics/av1.png'
import av2 from './avatarpics/av2.png'
import av3 from './avatarpics/av3.png'
import av4 from './avatarpics/av4.png'
import av5 from './avatarpics/av5.png'
import av6 from './avatarpics/av6.png'
import av7 from './avatarpics/av7.png'
import av8 from './avatarpics/av8.png'
import av9 from './avatarpics/av9.png'
import moon from './avatarpics/moon.png'
import star from './avatarpics/star.png'
import mainpic from './avatarpics/mainpic.png'
import paint from './avatarpics/paint.png'
import hat from './avatarpics/hat.png'
import hair from './avatarpics/hair.png'
import shirt from './avatarpics/shirt.png'
import glasses from './avatarpics/glasses.png'
import bg from './avatarpics/bg.png'

const Avatar = () => {
  const [activeStyle, setActiveStyle] = useState<string | null>(null)
  const [activeOption, setActiveOption] = useState<number | null>(null)
  return (
    <>    
    <img src={bg} className='absolute z-[-1]' />
    <div className='flex flex-col w-screen h-screen gap-3 justify-center items-center'>
      <div className='flex gap-52 mt-[-2rem] mb-10 xxs:mt-0 xxs:mb-2'>
      <div className='bg-valvetNight w-fit gap-2 rounded-xl h-fit p-1 text-white font-bold flex'>
        <img src={moon} />
        <p>333 xp</p>
      </div>
      <div className='bg-valvetNight w-16 gap-2 rounded-xl h-fit p-1 text-white font-bold flex'>
        <img src={star}/>
        <p>3</p>
      </div>
      </div>
    <div className='flex w-screen justify-evenly'>
      <img onClick={() => setActiveStyle('glasses')} src={glasses} className={`w-14 h-14 mt-12 ${activeStyle==='glasses'? "scale-[1.5]" : null}`} />
      <img onClick={() => setActiveStyle('hair')} src={hair} className={`w-14 h-14 mt-[-3px] ${activeStyle==='hair'? "scale-[1.5]" : null}`} />
      <img onClick={() => setActiveStyle('shirt')} src={shirt} className={`w-14 h-14 mt-[-2rem] ${activeStyle==='shirt'? "scale-[1.5]" : null}`} />
      <img onClick={() => setActiveStyle('hat')} src={hat} className={`w-14 h-14 mt-[-3px] ${activeStyle==='hat'? "scale-[1.5]" : null}`} />
      <img onClick={() => setActiveStyle('paint')} src={paint} className={`w-14 h-14 mt-12 ${activeStyle==='paint'? "scale-[1.5]" : null}`} />
    </div>
    <img src={mainpic} className='mx-auto mt-[-4rem]' />
    <div className='bg-orbitOrange grid grid-cols-3 grid-rows-3 gap-4 w-[95vw] place-items-center rounded-3xl p-4 mb-20 xxs:mb-28'>
      <img onClick={() => setActiveOption(0)} src={av1} className={`bg-lightBlue rounded-3xl ${activeOption===0? 'outline outline-red-400' :null}`} />
      <img onClick={() => setActiveOption(1)} src={av2} className={`bg-lightBlue rounded-3xl ${activeOption===1? 'outline outline-red-400' :null}` } />
      <img onClick={() => setActiveOption(2)} src={av3} className={`bg-lightBlue rounded-3xl ${activeOption===2? 'outline outline-red-400' :null}` } />
      <img onClick={() => setActiveOption(3)} src={av4} className={`bg-lightBlue rounded-3xl ${activeOption===3? 'outline outline-red-400' :null}` } />
      <img onClick={() => setActiveOption(4)} src={av5} className={`bg-lightBlue rounded-3xl ${activeOption===4? 'outline outline-red-400' :null}` } />
      <img onClick={() => setActiveOption(5)} src={av6} className={`bg-lightBlue rounded-3xl ${activeOption===5? 'outline outline-red-400' :null}` } />
      <img onClick={() => setActiveOption(6)} src={av7} className={`bg-lightBlue rounded-3xl ${activeOption===6? 'outline outline-red-400' :null}` } />
      <img onClick={() => setActiveOption(7)} src={av8} className={`bg-lightBlue rounded-3xl ${activeOption===7? 'outline outline-red-400' :null}` } />
      <img onClick={() => setActiveOption(8)} src={av9} className={`bg-lightBlue rounded-3xl ${activeOption===8? 'outline outline-red-400' :null}` } />
    </div>
    </div>
    </>
  )
}

export default Avatar
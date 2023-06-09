import React, {useEffect, useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from '../../Components/Modal'
import { BsArrowLeftShort } from 'react-icons/bs';
import chill from './astrochill.png'
import './Levels.css'
import meteorgroup from './meteorgroup.png'
import meteor from "./meteor.png"
import bg2 from './bg2.png'

const Level3 = (props:any) => {
const { user, level} = props;
const [arrOfNums, setArrOfNums] = useState<number[]>([])
const navigate = useNavigate()
const [ranNum, setRanNum] = useState<number[]>([])
const [ranNum2, setRanNum2] = useState<number[]>([])
const [selectedNum, setSelectedNum] = useState<number>()
const [xp, setXp] = useState<number>(0)
const [open, setOpen] = useState<any[]>([])
const [barStyle, setBarStyle] = useState<number>(0)
const [currentQuestion, setCurrentQuestion] = useState<number>(1)
const [succesScreen, setSuccessScreen] = useState<boolean>(false)

useEffect(() => {
    let meteorArray:number[] = []
    let meteorArray2:number[] = []              
    let numArray:number[] = []
    let rando = Math.floor(Math.random() * 5 + 1)
    let rando3 = Math.floor(Math.random() * 5)
    let rando2 = Math.floor(Math.random() * 5 + 1 )
        for(let i=0; i < rando; i++){
            meteorArray.push(1)
        } 
        for(let i=0; i < rando2; i++){
            meteorArray2.push(1)
        }       
    while(numArray.length<4) {
        numArray.push(Math.floor(Math.random() * 10))  
    }
    numArray.push(meteorArray.length + meteorArray2.length)
    numArray.splice(numArray.indexOf(numArray[rando3]), 0, numArray[numArray.length-1])
    numArray.pop()
    if(numArray.indexOf(meteorArray.length + meteorArray2.length) === numArray.lastIndexOf(meteorArray.length + meteorArray2.length)) {
        setArrOfNums(numArray)
    } else {
       let filteredMap = numArray.filter(num => num == meteorArray.length + meteorArray2.length ) 
       numArray.splice(numArray.indexOf(filteredMap[0]), 1, filteredMap[1]+1)
         setArrOfNums(numArray)
    }
    setRanNum(meteorArray)
    setRanNum2(meteorArray2)
 }, [xp])
console.log(typeof barStyle)
 function checkAnswer() {
    let answer = ranNum.length + ranNum2.length
    if(selectedNum == answer) {
        setBarStyle(prev => prev + 3)
        setXp(prev => prev + 5)
        setOpen([true, 1]) 
        setCurrentQuestion(prev => prev + 1)
        if(currentQuestion == 5) {
            setSuccessScreen(true)
        }
    } else {
        setOpen([true, 2])
    }
 }

 function backToWorlds() {
    setSuccessScreen(false)
    navigate('/worlds')
 }


  return (
    <>
    <img src={bg2} className="absolute z-[-1] h-screen w-screen" />
    {succesScreen == true?
    <div className="absolute w-screen h-screen flex flex-col items-center z-10 bg-galaxy" id='success-screen'>
        <div className='text-white font-boldest mb-[-4rem] mt-8 text-[3rem]'>Stellar Work!</div>
        <img className="mt-32 mx-auto" src={meteorgroup} />
        <img className="mx-auto" src={chill}/>
        <div onClick={(e) => backToWorlds()} className='absolute bottom-[8rem] cursor-pointer bg-beyondBlue mb-[-2rem] rounded-xl text-white font-nunito font-bolder text-center w-fit p-4 px-20'>Back To Soaring!</div>
    </div> : null}
    
    <div className='w-screen absolute h-[40%] top-20'>
        <div className='fixed top-1 font-bolder text-[3.5rem]' onClick={() => navigate('/worlds')}><BsArrowLeftShort/></div>
        <div className='text-center mt-[-4rem] bg-valvetNight rounded-xl p-1 w-fit text-white font-nunito font-bolder mx-auto'>XP {xp}</div>
        <div className='mx-20 mt-2 w-screen'>
        <div className='absolute bg-gray-200 w-[16rem] h-2 rounded-xl'></div>
        <div style={{width: barStyle+"rem"}} className={`absolute bg-valvetNight h-2 rounded-xl`}></div>
        </div>
        <div className='flex justify-center items-center flex-col p-4'>
        <div className='flex flex-wrap'>
        {ranNum?.map((n) =><img src={meteor}/>)}
        </div>
        {open[0] == true? <Modal open={open} setOpen={setOpen}/> :null }
        <div className='font-nunito font-boldest text-[5rem]'>+</div>       
        <div className='flex flex-wrap '>
        {ranNum2?.map((n) =><img src={meteor}/>)}
        </div>

        </div>
    </div> 
        <div className='flex w-screen gap-[2rem] justify-center absolute bottom-[15rem]'>
            {arrOfNums?.map((n) => <><div onClick={(e) => setSelectedNum(n)}className='bg-asteroidGray rounded-lg p-2 h-16 w-10 hover:bg-gray-400 text-center pt-5 font-bolder text-xl font-nunito xxs:mb-[-2rem]'>{n}</div></>)}
        </div>
        <div className='w-screen flex justify-center'>
        <div onClick={(e) => checkAnswer()} className='absolute bottom-[8rem] cursor-pointer bg-beyondBlue rounded-xl text-white font-nunito font-bolder text-center w-fit p-4 px-10'>Check Answer</div>
        </div>
    </>
  )
}

export default Level3
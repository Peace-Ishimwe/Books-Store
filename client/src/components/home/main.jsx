import React, { useState } from 'react'
import Bg1 from '../../images/bg1.png'
import Bg2 from '../../images/bg2.png'
import Books from '../../images/top-10-books.jpeg'
import {Qoutes} from './qoutes'

export default function Main () {
    console.log(Qoutes)
    const [qoute , setQoute] = useState(Qoutes[1].qoute)
    const [author , setAuthor] = useState(Qoutes[1].author)

    const handleClick = () =>{
        const randomNumber = Math.floor(Math.random()*7)
        console.log(randomNumber)
        setQoute(Qoutes[randomNumber].qoute)
        setAuthor(Qoutes[randomNumber].author)
    }

  return (
    <div className='main--hero py-10 flex justify-between xl:px-[10%] px-[2%] flex-col lg:flex-row gap-10 xl:gap-0 h-fit lg:h-[88.8vh] items-center'>

        <div className='xl:w-6/12 w-fit mx-auto'>
            <img className='rounded-md hover:blur-[1px]' src={Books} alt="" />
            <button class="transition mx-auto ease-in-out delay-150 text-white py-2 mt-5 px-7 font-semibold text-xl rounded-md md:flex hidden  bg-[#ebc87d]  hover:-translate-y-1 hover:scale-110  duration-300 ...">
                Read Now
            </button>
        </div>
        <div className='xl:w-6/12 w-fit mx-auto xl:items-end items-center flex flex-col'>
            <div className='w-fit flex flex-col'>
                <p className='sm:text-8xl text-5xl font-semibold text-white '>BookTopia</p>
                <p className='text-white text-xl mt-2'>The best online book store</p>
                <button class="transition self-center ease-in-out delay-150 text-white py-2 mt-5 px-7  font-semibold text-xl rounded-md bg-blue-500  hover:-translate-y-1 hover:scale-110  duration-300 ...">
                    Contact us
                </button>
            </div>
            <div className='sm:w-7/12 xs:w-full mx-auto py-6 px-3 rounded-md h-[300px] bg-[#ffffff9e]  mt-10 xl:mr-14 flex flex-col'>
                <div className='h-[80%]'>
                    <h1 className="font-bold text-3xl mx-auto w-fit mb-2" >Qoutes</h1>
                    <p className='text-slate-900 text-lg text-center'>{qoute}</p>
                    <p className='font-semibold text-center mt-2'>---{author}----</p>
                </div>
                <div>
                    <button type="submit" className='bg-blue-500 py-2 px-3 w-full text-white rounded-md  mt-4' onClick={handleClick}>New Qoute</button>
                </div>
            </div>
        </div>
    </div>
  ) 
}
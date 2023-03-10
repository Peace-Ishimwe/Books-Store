import React from 'react'
import { Icon } from '@iconify/react'

const Homepage = () => {
  return (
    <div className='main--container'>
        <header className="flex justify-between items-center xl:px-[10%] px-[2%] py-3 lg:h-[11.2vh] lg:py-0 sticky bg-blue-500 top-0 shadow-md">
            <div>
            <div className=" text-white flex flex-col">
                <span className="font-bold text-3xl ">Booktopia</span>
                <span className="sm:block hidden"> Your Ultimate Online Book Destination</span>
            </div>
            </div>
            <nav className="flex gap-10 justify-center items-center">
                <ul className="flex gap-5 font-semibold text-white text- text-lg">
                    <li>
                        <a href="#">Product</a>
                    </li>
                    <li className="xxs:block hidden">
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a className='flex justify-center items-center ml-3 gap-2' href="/login">
                            <Icon width={'25px'} icon="mdi:logout" />
                            Logout
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            
        </main>
    </div>
  )
}

export default Homepage
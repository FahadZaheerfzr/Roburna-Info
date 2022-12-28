import React from 'react'
import Styles from './Hero.module.css'

export default function Hero() {
    return (
        <div className={`${Styles.hero} h-screen w-full`}>
            <div className={`${Styles.background} w-full h-full`}>
                <div className='flex flex-col justify-between h-full'>
                    <div className='h-full flex w-full items-end justify-center'>
                        <img className='md:hidden' src='logo-mobile.svg' alt='mobile-logo' />
                    </div>
                    <div className="flex justify-center items-center mt-10 h-full">
                        <div className='md:hidden bg-[#FFF4CC] blur-[74.5px] w-[300px] h-[300px] absolute' />
                        <div className='md:hidden bg-[#FFF851] blur-[42px] w-[251px] h-[251px] absolute' />
                        <img src="/hero/hero-plant.png" alt="hero-plant" className='w-[300px] md:w-[530px] absolute' />
                        <span className='relative z-10 text-center text-white font-extrabold text-4xl md:text-7xl xl:text-9xl !leading-normal '>
                            Developing a Green <br />Web3
                        </span>
                    </div>

                    <div className='explore-div flex items-end justify-center h-full'>
                        <div className='flex flex-col items-center mb-5'>
                            <span className='font-light text-2xl text-white'>explore</span>
                            <img className='w-3 ml-2 mt-1' src="/hero/arrow-down.svg" alt="arrow-down" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
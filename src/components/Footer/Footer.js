import React from 'react'
import Styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={`h-28 ${Styles.footer} md:h-48 flex flex-col md:flex-row items-center`}>
            <div className='flex flex-col md:hidden items-center'>
                <span className='text-black font-normal leading-normal text-sm'>
                    © 2022 All Rights Reserved.
                </span>

                <span className={`mt-6 ${Styles.footerText} font-bold text-sm`}>
                    Privacy & Terms <span className='font-normal'>|</span>  Cookie Policy
                </span>
            </div>

            <div className='hidden w-full md:flex justify-center'>
                <img src="/logo.svg" alt="logo" />
            </div>

            <div className='hidden w-full md:flex flex-col justify-center items-center'>
                <span className='text-white font-normal md:text-xl lg:text-2xl'>
                    Cookie Policy
                </span>

                <span className='mt-8 text-white font-normal md:text-xl lg:text-2xl text-center'>
                    © 2022 All Rights Reserved.
                </span>
            </div>

            <div className='hidden md:block w-full'></div>
        </div>
    )
}

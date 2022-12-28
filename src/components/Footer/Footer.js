import React from 'react'
import Styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={`${Styles.footer} h-48 flex items-center`}>
            <div className='w-full flex justify-center'>
                <img src="/logo.svg" alt="logo" />
            </div>

            <div className='w-full flex flex-col justify-center items-center'>
                <span className='text-white font-normal text-2xl'>
                    Cookie Policy
                </span>

                <span className='mt-8 text-white font-normal text-2xl'>
                    © 2022 All Rights Reserved"
                </span>
            </div>

            <div className='w-full'>
            </div>
        </div>
    )
}

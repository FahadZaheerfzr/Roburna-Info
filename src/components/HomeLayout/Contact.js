import React from 'react'
import Styles from './Home.module.css'

export default function Contact() {
    return (
        <div className='flex flex-col items-center'>
            <span className='font-medium text-8xl'>
                Contact
            </span>

            <span className='mt-20 font-medium text-5xl'>
                RoburnaLabs OÜ
            </span>

            <span className='mt-5 font-normal text-5xl'>
                Registry code 16614454
            </span>

            <span className='mt-5 font-semibold text-5xl'>
                Tallinn, Estonia
            </span>

            <div className={`${Styles.contactEmail} mt-14 px-1 py-1`}>
                <div className='rounded-[61px] bg-[#F5F6F7] w-full px-11 py-3'>
                    <span className={`${Styles.emailInfo} text-5xl font-medium text-center`}>
                        info@roburnalabs.com
                    </span>
                </div>
            </div>


        </div>
    )
}

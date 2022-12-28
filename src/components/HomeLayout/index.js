import React from 'react'
import About from '../About/About'
import Clients from '../Clients/Clients'
import Contact from '../Contact/Contact'
import Founder from '../Founder/Founder'
import Hero from '../Hero/Hero'
import Styles from './Home.module.css'

export default function HomeLayout() {
    return (
        <div className='font-jost'>
            <Hero />

            <div className={`${Styles.mainDiv}`}>
                <div className={`${Styles.topDiv}`}>
                    <div className='h-screen flex items-center justify-center'>
                        <About />
                    </div>

                    <div className=''>
                        <Founder />
                    </div>
                </div>
                <div className={`${Styles.clientDiv}  mt-12`}>
                    <div className='md:mt-12 lg:mt-20'>
                        <Clients />
                    </div>

                    <div className='md:mt-40 md:pb-40 lg:mt-52 lg:pb-52 xl:mt-60 xl:pb-60'>
                        <Contact />
                    </div>
                </div>
            </div>
        </div>
    )
}

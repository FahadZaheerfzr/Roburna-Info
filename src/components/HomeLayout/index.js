import React from 'react'
import About from './About'
import Clients from './Clients'
import Contact from './Contact'
import Founder from './Founder'
import Hero from './Hero'
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
                    <div className='mt-20'>
                        <Clients />
                    </div>

                    <div className='mt-60 pb-60'>
                        <Contact />
                    </div>
                </div>
            </div>
        </div>
    )
}

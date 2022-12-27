import React from 'react'
import About from './About'
import Clients from './Clients'
import Founder from './Founder'
import Hero from './Hero'
import Styles from './Home.module.css'

export default function HomeLayout() {
    return (
        <div className='font-jost'>
            <Hero />

            <div className={`${Styles.mainDiv}`}>
                <div className='h-screen flex items-center justify-center'>
                    <About />
                </div>

                <div className=''>
                    <Founder />
                </div>

                <div className={`${Styles.clientDiv} mt-20 pt-12 pb-32`}>
                    <Clients />

                    
                </div>
            </div>
        </div>
    )
}

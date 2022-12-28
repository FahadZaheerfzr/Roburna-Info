import React, { useRef, useState } from 'react'
import About from '../About/About'
import Clients from '../Clients/Clients'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Founder from '../Founder/Founder'
import Hero from '../Hero/Hero'
import Topbar from '../Topbar/Topbar'
import Styles from './Home.module.css'

export default function HomeLayout() {
    const [active, setActive] = useState("About");

    const aboutRef = useRef(null);
    const founderRef = useRef(null);
    const clientRef = useRef(null);
    const contactRef = useRef(null);



    const executeScroll = (name) => {
        if (name === "About") {
            setActive("About");
            aboutRef.current.scrollIntoView()
        }
        else if (name === "Founder") {
            setActive("Founder");
            founderRef.current.scrollIntoView()
        }
        else if (name === "Clients") {
            setActive("Clients");
            clientRef.current.scrollIntoView()
        }
        else if (name === "Contact") {
            setActive("Contact");
            contactRef.current.scrollIntoView()
        }
    }

    return (
        <div className='font-jost'>
            <Topbar active={active} setActive={setActive} executeScroll={executeScroll} />

            <Hero />

            <div className={`${Styles.mainDiv}`}>
                <div className={`${Styles.topDiv}`}>
                    <div ref={aboutRef} className='h-full md:h-screen flex items-center justify-center'>
                        <About />
                    </div>

                    <div ref={founderRef} className='mt-32 md:mt-0'>
                        <Founder />
                    </div>
                </div>
                <div className={`${Styles.clientDiv}  mt-12`}>
                    <div ref={clientRef} className='md:mt-12 lg:mt-20'>
                        <Clients />
                    </div>

                    <div ref={contactRef} className='mt-28 pb-28 md:mt-40 md:pb-40 lg:mt-52 lg:pb-52 xl:mt-60 xl:pb-60'>
                        <Contact />
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

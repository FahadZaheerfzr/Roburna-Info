import React, { useState } from 'react'
import Footer from '../components/Footer/Footer';
import HomeLayout from '../components/HomeLayout'
import Topbar from '../components/Topbar/Topbar'

export default function LandingPage() {
  const [active, setActive] = useState("About");

  return (
    <div className='main-div'>
      <Topbar active={active} setActive={setActive} />
      <HomeLayout />

      <Footer />
    </div>
  )
}
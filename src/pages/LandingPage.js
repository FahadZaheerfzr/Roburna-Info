import React, { useEffect } from 'react'
import HomeLayout from '../components/HomeLayout'

export default function LandingPage() {

  useEffect(() => {
    document.title = 'Roburna Info'
  }, [])

  return (
    <div className='main-div'>
      <HomeLayout />
    </div>
  )
}

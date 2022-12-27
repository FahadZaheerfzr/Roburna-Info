import React from 'react'
import About from './About'
import Hero from './Hero'

export default function HomeLayout() {
  return (
    <div className='font-jost'>
        <Hero />

        <About />
    </div>
  )
}

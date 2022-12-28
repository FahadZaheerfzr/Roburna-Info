import React from 'react'
import { clients } from '../../utils/clients'

export default function Clients() {
  return (
    <div className={` flex flex-col items-center`}>
      <span className='font-bold md:font-medium text-[22px] text-center md:text-6xl xl:text-8xl pt-24 pb-16'>
        Our <br className='md:hidden' /> Clients
      </span>

      <div className='hidden md:flex items-center md:mt-10'>
        <img src="/clients/bsc.jpg" alt="bsc" className='md:w-[150px] lg:w-[180px] xl:w-full md:mr-16 lg:mr-20' />

        <img src="/clients/ten.png" alt="ten" className='md:w-[150px] lg:w-[180px] xl:w-full md:mr-16 lg:mr-20' />

        <img src="/clients/prime.jpeg" alt="prime" className='md:w-[150px] lg:w-[180px] xl:w-full  md:mr-16 lg:mr-20 xl:mr-0 opacity-60' />

        <img src="/clients/bsc_news.png" alt="bsc_news" className='md:w-[150px] lg:w-[180px] xl:w-full' />
      </div>

      <div className='hidden md:flex items-center md:mt-24 xl:mt-10 gap-x-24'>
        <img src="/clients/coingecko.png" alt="coingecko" className='md:w-[150px] lg:w-[180px] xl:w-full' />

        <img src="/clients/beefy.png" alt="beefy" className='md:w-[150px] lg:w-[180px] xl:w-full' />

        <img src="/clients/defistation.png" alt="defistation" className='md:w-[150px] lg:w-[180px] xl:w-full' />
      </div>

      <div className='grid grid-cols-2 md:hidden gap-y-12 gap-x-8 items-center'>
        {clients.map((client) => (
          client.id !== 3 &&
          <img key={client.id} src={client.src} alt={client.name} className='w-[120px]' />
        ))}
      </div>
    </div>
  )
}

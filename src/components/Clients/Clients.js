import React from 'react'

export default function Clients() {
  return (
    <div className={` flex flex-col items-center`}>
        <span className='font-medium md:text-6xl xl:text-8xl py-24'>
        Our Clients
        </span>

        <div className='flex items-center mt-10'>
            <img src="/clients/bsc.jpg" alt="bsc" className='md:w-[150px] lg:w-[180px] xl:w-full md:mr-16 lg:mr-20' />

            <img src="/clients/ten.png" alt="ten" className='md:w-[150px] lg:w-[180px] xl:w-full md:mr-16 lg:mr-20' />

            <img src="/clients/prime.jpeg" alt="prime" className='md:w-[150px] lg:w-[180px] xl:w-full  md:mr-16 lg:mr-20 xl:mr-0 opacity-60' />

            <img src="/clients/bsc_news.png" alt="bsc_news" className='md:w-[150px] lg:w-[180px] xl:w-full'/>
        </div>

        <div className='flex items-center md:mt-24 xl:mt-10 gap-x-24'>
            <img src="/clients/coingecko.png" alt="coingecko" className='md:w-[150px] lg:w-[180px] xl:w-full' />

            <img src="/clients/beefy.png" alt="beefy" className='md:w-[150px] lg:w-[180px] xl:w-full' />

            <img src="/clients/defistation.png" alt="defistation" className='md:w-[150px] lg:w-[180px] xl:w-full' />
        </div>
    </div>  
  )
}

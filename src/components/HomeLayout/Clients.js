import React from 'react'

export default function Clients() {
  return (
    <div className={` flex flex-col items-center`}>
        <span className='font-medium text-8xl py-24'>
        Our Clients
        </span>

        <div className='flex items-center mt-10'>
            <img src="/clients/bsc.jpg" alt="bsc" className='mr-20' />

            <img src="/clients/ten.png" alt="ten" className='mr-10' />

            <img src="/clients/prime.jpeg" alt="prime" className=' opacity-60' />

            <img src="/clients/bsc_news.png" alt="bsc_news" className='' />
        </div>
        <div className='flex items-center mt-10 gap-x-24'>
            <img src="/clients/coingecko.png" alt="coingecko" className='' />

            <img src="/clients/beefy.png" alt="beefy" className='' />

            <img src="/clients/defistation.png" alt="defistation" className='' />
        </div>
    </div>  
  )
}

import React from 'react'

export default function Founder() {
    return (
        <div className='flex flex-col items-center'>
            <span className='font-bold lg:text-8xl xl:text-[118px] leading-none text-center'>
                Lars <br />
                Fabricius
            </span>

            <img className='my-28 rounded-full lg:w-[500px] lg:h-[500px] xl:w-[650px] xl:h-[650px]' src="/founder/lars.png" alt="founder" />


            <span className='font-normal text-3xl text-center'>
                Lars has been an IT developer and <span className='font-semibold'>entrepreneur for over 15 years,</span> <br />
                working with many well known American and European companies. He has <br />
                been involved with blockchain technology for a decade, with 5 years <br />
                experience in Solidity development. Blockchain is groundbreaking <br />
                technology with almost endless applications, and Lars aspires to bring <br />
                about lasting change through his projects.
            </span>

            <img src='/founder/linkedin.svg' alt='linkedin' className='mt-20 cursor-pointer' />
        </div>
    )
}

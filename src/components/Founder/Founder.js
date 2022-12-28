import React from 'react'

export default function Founder() {
    return (
        <div className='flex flex-col items-center'>
            <span className='font-bold text-[22px] md:text-8xl xl:text-[118px] leading-none text-center'>
                Lars <br />
                Fabricius
            </span>

            <img className='mt-11 mb-5 md:my-28 rounded-full w-[136px] h-[136px] md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] xl:w-[650px] xl:h-[650px]' src="/founder/lars.png" alt="founder" />


            <span className='font-normal text-xs md:text-xl lg:text-2xl xl:text-3xl text-center'>
                Lars has been an IT developer and <span className='font-semibold'>entrepreneur for <br className='md:hidden' />over 15 years,</span> <br className='hidden md:block'/>
                working with many well known American<br className='md:hidden' /> and European companies. He has <br className='hidden md:block' />
                been involved with<br className='md:hidden' /> blockchain technology for a decade, with 5 years <br />
                experience in Solidity development. Blockchain is<br className='md:hidden' /> groundbreaking <br className='hidden md:block' />
                technology with almost endless<br className='md:hidden' /> applications, and Lars aspires to bring <br className='hidden md:block' />
                about lasting<br className='md:hidden' /> change through his projects.
            </span>

            <img src='/founder/linkedin.svg' alt='linkedin' className='w-12 h-12  mt-8 md:mt-20 cursor-pointer' />
        </div>
    )
}

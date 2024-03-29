import React from 'react'

const icons = [
    {
        id: 1,
        icon: '/about/icon-1.png'
    },
    {
        id: 2,
        icon: '/about/icon-2.png'
    },
    {
        id: 3,
        icon: '/about/icon-3.png'
    },
    {
        id: 4,
        icon: '/about/icon-4.png'
    },
    {
        id: 5,
        icon: '/about/icon-5.png'
    },
]

export default function About() {
    return (
        <div className='mt-16 md:mt-10'>
            <div className='flex flex-col items-center justify-center '>
                <span className='font-medium text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center leading-snug'>
                    Our clients are active <br className='md:hidden' /> across tech and non-tech <br />
                    industries, with needs as <br className='md:hidden' /> varied as
                </span>

                <div className='hidden md:flex md:gap-x-[62px] my-9 items-center md:justify-center'>
                {icons.map((icon)=>(
                    <img key={icon.id} className={`${icon.id === 2 ? "h-[50px] w-[50px]" :"h-[42px] w-[42px]"} md:${icon.id === 3 ? "md:h-[90px] md:w-[90px] lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px]" :"md:w-20 md:h-20 lg:w-[90px] lg:h-[90px] xl:w-[100px] xl:h-[100px]"}`} src={icon.icon} alt="about-icon" />
                ))}
                </div>

                <div className="flex md:hidden mt-8 gap-x-6 items-center justify-center">
                {icons.map((icon)=>(
                    icon.id < 4 &&
                    <img key={icon.id} className={`${icon.id === 2 ? "h-[50px] w-[50px]" :"h-[42px] w-[42px]"}`} src={icon.icon} alt="about-icon" />
                ))}
                </div>

                <div className="flex md:hidden gap-x-7 items-center justify-center">
                {icons.map((icon)=>(
                    icon.id >= 4 &&
                    <img key={icon.id} className={`${icon.id === 2 ? "h-[50px] w-[50px]" :"h-[42px] w-[42px]"}`} src={icon.icon} alt="about-icon" />
                ))}
                </div>

                <span className='mt-11 md:mt-0 font-normal text-base md:text-3xl lg:text-4xl xl:text-5xl text-center leading-snug'>
                    blockchain protocols, game<br className='md:hidden' /> development, <br className='hidden md:block'/>
                    financial service <br className='md:hidden' /> platforms, e-shops, and more.
                </span>
            </div>
        </div>
    )
}

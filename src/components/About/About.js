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
        <div className='mt-10'>
            <div className='flex flex-col items-center justify-center '>
                <span className='font-medium md:text-3xl lg:text-4xl xl:text-5xl text-center leading-snug'>
                    Our clients are active across tech and non-tech <br />
                    industries, with needs as varied as
                </span>

                <div className='flex gap-x-[62px] my-9 items-center'>
                {icons.map((icon)=>(
                    <img key={icon.id} className={`${icon.id === 3 ? "md:h-[90px] md:w-[90px] lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px]" :"md:w-20 md:h-20 lg:w-[90px] lg:h-[90px] xl:w-[100px] xl:h-[100px]"}`} src={icon.icon} alt="icon" />
                ))}
                </div>

                <span className=' font-normal md:text-3xl lg:text-4xl xl:text-5xl text-center leading-snug'>
                    blockchain protocols, game development, <br/>
                    financial service platforms, e-shops, and more.
                </span>
            </div>
        </div>
    )
}

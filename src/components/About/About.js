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
                <span className='font-medium text-5xl text-center leading-snug'>
                    Our clients are active across tech and non-tech <br />
                    industries, with needs as varied as
                </span>

                <div className='flex gap-x-[62px] my-9 items-center'>
                {icons.map((icon)=>(
                    <img key={icon.id} className={`${icon.id === 3 ? "w-[120px] h-[120px]" :"w-[100px] h-[100px]"}`} src={icon.icon} alt="icon" />
                ))}
                </div>

                <span className=' font-normal text-5xl text-center leading-snug'>
                    blockchain protocols, game development, <br/>
                    financial service platforms, e-shops, and more.
                </span>
            </div>
        </div>
    )
}

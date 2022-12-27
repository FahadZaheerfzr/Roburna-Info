import React from 'react'
import { navItems } from '../../utils/nav_items'

export default function Topbar({active}) {
    return (
        <div className='flex mt-7 w-full items-center justify-between bg-transparent absolute top-0'>
            <div className='flex items-center w-full justify-center'>
                <img className='pr-10' src="/logo.svg" alt="logo" />
            </div>

            <div className='flex items-center gap-x-14 w-full'>
                {navItems.map((nav_item)=>(
                    <span key={nav_item.id} className={`text-2xl text-white ${active===nav_item.name && "font-semibold"}`}>
                        {nav_item.name}
                    </span>
                ))}
            </div>

            <div className='w-full'> 

            </div>
        </div>
    )
}

import React, { useState } from 'react'
import { navItems } from '../../utils/nav_items'
import Styles from './Topbar.module.css'

export default function Topbar({ active, executeScroll }) {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    }
    return (
        <div className='flex mt-7 w-full items-center justify-between bg-transparent absolute top-0'>
            <div className={`flex md:hidden md:w-0 items-start`}>
                <img className='ml-6 cursor-pointer' src={menu ? '/topbar/menu-close.svg' : '/topbar/menu.svg'} alt="menu"
                    onClick={toggleMenu} />

                {menu &&
                    <div className={`${Styles.mobileMenu} w-40 ml-3`}>
                        {navItems.map((nav_item) => (
                            <div key={nav_item.id} className="cursor-pointer"
                                onClick={() => executeScroll(nav_item.name)}
                            >
                                <span className={`text-white leading-[2.625]  my-2 ml-6 ${active === nav_item.name && "font-bold"}`}>
                                    {nav_item.name}
                                </span>
                                <div className={`w-full ${Styles.separator}`} />
                            </div>
                        ))}
                    </div>}
            </div>
            <div className='hidden md:flex items-center w-full justify-center'>
                <img className='pr-10' src="/logo.svg" alt="logo" />
            </div>

            <div className='hidden md:flex items-center gap-x-14 w-full'>
                {navItems.map((nav_item) => (
                    <span key={nav_item.id} className={`text-2xl text-white cursor-pointer ${active === nav_item.name && "font-semibold"}`}
                        onClick={() => executeScroll(nav_item.name)}
                    >
                        {nav_item.name}
                    </span>
                ))}
            </div>

            <div className='hidden md:flex w-full'>

            </div>
        </div>
    )
}

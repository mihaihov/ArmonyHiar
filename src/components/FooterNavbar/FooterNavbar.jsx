import React from 'react'
import { NavbarItems } from '../../constants'

const FooterNavbar = () => {
    return (
        <div className={`flex flex-col justify-center items-center w-full pb-12`}>
            <h1 className="text-[#8fa99e] text-5xl tracking-wide lg:text-5xl lg:tracking-widest">navigare</h1>
            <div className="flex flex-row justify-center gap-4 md:gap-8 lg:gap-0">
                {NavbarItems.map((item, index) => (
                    <h1 key={item.id} className="text-sm sm:text-base lg:text-3xl mt-8 font-semibold lg:font-light lg:ml-16 text-[#8fa99e] hover:text-black cursor-pointer"><a href={item.link}>{item.label}</a></h1>
                ))}
            </div>
            <div className="flex flex-row justify-center mt-0">
                <h1 className="text-xs mt-8 lg:ml-16 hover:text-[#8fa99e] cursor-pointer lg:text-sm font-poppins font-light"><a href='https://www.github.com/mihaihov' target='_blank'>contact dezolvatator</a></h1>
            </div>
        </div>
    )
}

export default FooterNavbar
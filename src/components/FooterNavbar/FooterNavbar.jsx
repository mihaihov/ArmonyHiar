import React from 'react'

const FooterNavbar = () => {
    return (
        <div className={`flex flex-col justify-center items-center w-full`}>
            <h1 className="text-[#8fa99e] text-2xl tracking-wide lg:text-5xl lg:tracking-widest">navigare</h1>
            <div className="flex flex-row justify-center gap-4 md:gap-8 lg:gap-0">
                <h1 className="text-base mt-8 lg:text-3xl lg:ml-16 hover:text-[#8fa99e] cursor-pointer"><a href="/">Home</a></h1>
                <h1 className="text-base mt-8 lg:text-3xl lg:ml-16 hover:text-[#8fa99e] cursor-pointer"><a href="/about">About</a></h1>
                <h1 className="text-base mt-8 lg:text-3xl lg:ml-16 hover:text-[#8fa99e] cursor-pointer"><a href="/services">Services</a></h1>
                <h1 className="text-base mt-8 lg:text-3xl lg:ml-16 hover:text-[#8fa99e] cursor-pointer"><a href="/contact">Contact</a></h1>
            </div>
        </div>
    )
}

export default FooterNavbar
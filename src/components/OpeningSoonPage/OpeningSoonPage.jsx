import React from 'react'
import { logoBlack } from '../../assets'

const OpeningSoonPage = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <img src={logoBlack} className="w-[300px]" />
            <h1 className="tracking-widest text-3xl font-poppins text-[#8fa99e]">OPENING SOON</h1>
        </div>
    )
}

export default OpeningSoonPage
import React from 'react'
import { logoBlack } from '../../assets'

const OpeningSoonPage = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-[#313638]">
            <img src={logoBlack} className="w-[300px]" />
            <h1 className="tracking-widest text-3xl font-poppins text-[#8fa99e]">IN CURAND...</h1>
        </div>
    )
}

export default OpeningSoonPage
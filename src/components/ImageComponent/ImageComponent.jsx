import React from 'react'


const ImageComponent = (props) => {

    const { data, onClick } = props;

    const handleClickImage = (index) => {
        onClick(index);
    }
    return (
        <div className=' max-w-[1200px] mx-8 grid grid-cols-3'>
            {data.map((slide, index) => (
                <div onClick={() => handleClickImage(index)} key={index} className='w-full h-80 cursor-pointer'>
                    <img src={slide.src} alt={slide.description} className='w-full h-full object-cover rounded-md' />
                </div>
            ))}
        </div>
    )
}

export default ImageComponent
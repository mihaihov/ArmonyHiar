import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox';
import { slides } from '../../assets/gallerySource';
import 'yet-another-react-lightbox/styles.css';
import ImageComponent from '../ImageComponent/ImageComponent';
import { logoBlack } from '../../assets';

const GalleryPage = () => {

    function GetIndexOdd(index) {   //impar
        return index * 2 + 1;
    }

    function GetIndexEven(index) {
        return index * 2;
    }

    const [index, setIndex] = useState(-1)
    return (
        <div className='flex flex-col justify-center'>
            <div className='w-full flex flex-col items-center mt-8 mb-20'>
                <img src={logoBlack} className='w-[200px] md:w-[300px]' />
                <div className="text-xl mt-8 font-poppins tracking-widest text-zinc-500">Galerie</div>
            </div>

            <div className='grid grid-cols-2 mx-4 gap-2'>
                <div>
                    {slides.filter((slide, index) => index % 2 !== 0).map((slide, index) => (
                        <img key={index} src={slide.src} className='object-cover rounded-md mb-1 cursor-pointer' onClick={() => { setIndex(GetIndexOdd(index)) }} />
                    ))}
                </div>
                <div>
                    {slides.filter((slide, index) => index % 2 === 0).map((slide, index) => (
                        <img key={index} src={slide.src} className='object-cover rounded-md mb-1 cursor-pointer' onClick={() => { setIndex(GetIndexEven(index)) }} />
                    ))}
                </div>

                <Lightbox slides={slides} index={index} open={index >= 0} close={() => setIndex(-1)} />
            </div>
        </div>
    )
}

export default GalleryPage
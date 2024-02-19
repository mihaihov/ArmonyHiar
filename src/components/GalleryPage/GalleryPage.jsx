import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox';
import { slides } from '../../assets/gallerySource';
import 'yet-another-react-lightbox/styles.css';
import ImageComponent from '../ImageComponent/ImageComponent';

const GalleryPage = () => {

    const [index, setIndex] = useState(-1)
    return (
        <>

            <div className='flex flex-row justify-center'>
                <ImageComponent data={slides} onClick={(currentIndex) => setIndex(currentIndex)} />
            </div>

            <Lightbox slides={slides} index={index} open={index >= 0} close={() => setIndex(-1)} />
        </>
    )
}

export default GalleryPage
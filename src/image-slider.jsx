import React from 'react'
import next from './assets/icon-next.svg'
import prev from './assets/icon-previous.svg'
import { useState } from 'react'


function imageSlider({ imageUrls}) {
    const [imageIndex, setImageIndex] = useState(0)
    function nextImage() {
        setImageIndex(index => {
            if (index === imageUrls.length - 1) {
                return 0
            }else{
                return index + 1 
            }
        })
    }
    function prevImage() {
        setImageIndex(index => {
            if (index === 0) {
                return imageUrls.length - 1
            }else{
                return index - 1 
            }
        })
    }
    return (
    <>
    <div 
        style={{
            width: '100%', 
            height: '100%', 
            position:'relative',
            display: 'flex',
            overflow: 'hidden'
        }}>

        {imageUrls.map(url => (
            <img 
            src={url} 
            className='image' 
            key={url} 
            style={{translate: `${-100 * imageIndex}%`}}
            />
        ))}
      

      <button className='image-slider-buttons' style={{left:'0'}} onClick={prevImage}>
        <img src={prev} alt="" />
      </button>

      <button className='image-slider-buttons' style={{right:'0'}} onClick={nextImage}>
        <img src={next} alt="" />
      </button>

      
        

    </div>
    <div style={{
        position:'absolute',
        bottom: '40px',
        left:'50%',
        translate:'-50%',
        display:'flex',
        gap:'7px'
    }}>
    {imageUrls.map((_, index) => (
            <button className='dot-button' style={{borderColor : index === imageIndex ? '#fff': '#000'}} onClick={() => setImageIndex(index)}></button>
        ))}
    </div>
    
    </>
  )
}

export default imageSlider

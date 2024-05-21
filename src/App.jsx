import React from 'react'
import img1 from './assets/mj1.jpg'
import img2 from './assets/mj2.jpg'
import img3 from './assets/mj3.jpg'
import img4 from './assets/mj4.jpg'
import img5 from './assets/mj5.jpg'
import img6 from './assets/mj6.jpg'
import ImageSlider from './image-slider'


const Images = [img1, img2, img3, img4, img5, img6]

function App() {
  return (
    <div style={{maxWidth:'500px', width:'100%', aspectRatio:'4 / 5', margin:'0 auto'}}>
      <h1 style={{textAlign:'center', color:'#fff'}}>Michael Jordan's Bald Greatness</h1>
      <ImageSlider imageUrls = {Images} />
    </div>
    
  )
}

export default App

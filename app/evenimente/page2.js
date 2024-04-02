import React from 'react'
import Carousel from '../components/Carousel'
import '../globals.css'


const slides =[
    'https://i.pinimg.com/736x/2e/cf/06/2ecf067a2069128f44d75d25a32e219e.jpg',
    'https://www.poho.com.au/cdn/shop/products/Pastel_Wrap_WebCrop.jpg?v=1642474094',
    'https://images.squarespace-cdn.com/content/v1/5eac4ea3e88fff1b365dc45d/1599599381716-G6S1JK3EQVVQR1F4ZJ4S/AUGUST+pink+50x70.jpg?format=1000w',
    'https://cdn11.bigcommerce.com/s-lzx6le/images/stencil/1280x1280/products/1241/2902/167398L__04164.1557610883.jpg?c=2'
]
const page = () => {
   

  return (
    <main >
        <div className='max-w-lg'>
         <Carousel>
            {slides.map((s)=>(
                <img src={s} key={s}/>
            )) }
         </Carousel>
        </div>
    </main>
  )
}

export default page
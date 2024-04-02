'use client'
import '../globals.css'
import React, { useState } from 'react'
import tailwindConfig from '@/tailwind.config'
import {ChevronLeft, ChevronRight} from 'react-feather'

const Carousel = ({children:slides}) => {
    const [curr, setCurr] = useState(0)

    const prev =() => setCurr((curr) => (curr === 0? slides.length - 1 : curr - 1))

    const next =() => setCurr((curr) => (curr ===  slides.length - 1? 0 : curr + 1))
  return (
    <div className='overflow-hidden relative'>
        <div className='flex transition-transform ease-out duration-500' style={{transform: `translateX(-${curr * 100}%)`}}>
            {slides}
        </div>
        <div className='absolute inset-0 flex items-center justify-between p-4'>
            <button>
                <ChevronLeft onClick={prev} size= {40} className='p-1 rounded-full  bg-white/30 text-gray-800 hover:bg-white/50'/>
            </button>
            <button>
                <ChevronRight onClick={next} size= {40} className='p-1 rounded-full  bg-white/30 text-gray-800 hover:bg-white/50'/>
            </button>
        </div>
    </div>
  )
}

export default Carousel
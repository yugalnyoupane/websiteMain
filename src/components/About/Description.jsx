import React from 'react'
import AboutImage from '../../images/assests/AboutImage.png'

const Description = ({heading,paragraph , reverse=false}) => {
  return (
    <div className={` flex justify-center my-20  ${reverse?'flex-row-reverse':''}`}>
        <div className={`relative h-AboutImageHeight w-1/3 rounded-2xl ${reverse?'ml-40':'mr-40'}`}>

          <img className='w-full h-AboutImageHeight rounded-2xl' src={AboutImage} alt="" />
          <div class="absolute inset-0 bg-blue-500 opacity-50"></div>
        </div>

        <div className={`flex flex-col items-center w-3/12 `}>
            <h1 className='text-6xl mb-8'>{heading}</h1>
            <p className='leading-7'>{paragraph}</p>

        </div>
    </div>
  )
}

export default Description
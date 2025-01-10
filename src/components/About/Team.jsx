import React from 'react'


const Team = ({image,Name,Role}) => {
  return (
    <div className="flex flex-col items-center w-1/5 h-full mx-10 rounded-2xl">
          <img className='w-full h-full mb-5 rounded-3xl' src={image} alt="" />
          <h1 className='text-3xl font-AboutTeamFontWeight'>{Name}</h1>
          <p className='text-xl'>{Role}</p>
      </div>
  )
}

export default Team
import React from 'react'
import Team from './Team'
import AboutArrow from '../../images/assests/AboutTeamArrow.png'

import { useState } from 'react'

const TeamAlumini = ({TeamList}) => {
  const [loadAll, setloadAll] = useState(false);

  return (
    <div className='mb-20 w-full flex flex-col items-center'>
            <div className="flex justify-center w-full h-96 ">
              {TeamList.map((item,index)=>(
                  ((loadAll || index<=2)&& item.row==1) && (<Team key={index} image={item.Image} Role={item.Role} Name={item.Name}></Team>)
              ))}
            </div>
            <div className={`flex justify-center w-full ${loadAll?'h-96':'h-0'}  transition-all duration-300`}>
              {TeamList.map((item,index)=>(
                  ((loadAll || index<=2)&& item.row==2) && (<Team key={index} image={item.Image} Role={item.Role} Name={item.Name}></Team>)
              ))}

            </div>
            <div className={`flex justify-center w-full ${loadAll?'h-96':'h-0'} transition-all duration-300`}>
              {TeamList.map((item,index)=>(
                  ((loadAll || index<=2)&& item.row==3) && (<Team key={index} image={item.Image} Role={item.Role} Name={item.Name}></Team>)
              ))}
            </div>
            <div className='ArrowCustomBorder cursor-pointer' 
            onClick={() => {
              setloadAll(!loadAll)
              
            }}>
              <img className='' src={AboutArrow} alt="" />
            </div>
    </div>
  )
}

export default TeamAlumini

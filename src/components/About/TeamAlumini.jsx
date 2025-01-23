import React, { useState, useEffect } from 'react';
import Team from './Team';
import AboutArrow from '../../images/assests/AboutTeamArrow.png';

const TeamAlumini = ({ TeamList }) => {
  const [loadAll, setLoadAll] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(4); // Default: 4 items for small screens (sm)

  // Adjust items to show based on screen size
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 640 && window.innerWidth < 768) {
        setItemsToShow(4); // 4 items for small screens (sm)
      } else if(window.innerWidth > 768) {
        setItemsToShow(3); // 3 items for larger screens (md and above)
      }
    };

    updateItemsToShow(); // Initial check
    window.addEventListener('resize', updateItemsToShow); // Add resize event listener

    return () => window.removeEventListener('resize', updateItemsToShow); // Clean up listener
  }, []);

  return (
    <div className="mb-20 w-full flex flex-col items-center">
      {/* Rows */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 gap-6 place-items-center w-full">
        {TeamList.map((item, index) =>
          ((loadAll || index < itemsToShow) && (
            <Team key={index} image={item.Image} Role={item.Role} Name={item.Name} />
          ))
        )}
      </div>

      {/* Load More Button */}
      <div 
        className="ArrowCustomBorder cursor-pointer mt-4"
        onClick={() => setLoadAll(!loadAll)}
      >
        <img src={AboutArrow} alt="Toggle View" />
      </div>
    </div>
  );
};

export default TeamAlumini;

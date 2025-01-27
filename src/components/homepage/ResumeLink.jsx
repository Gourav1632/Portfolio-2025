import React from 'react';
import NorthEastIcon from '@mui/icons-material/NorthEast';

function ResumeLink() {
  return (
    <a href="" >
      <button className=" bg-[#39FF14]  aspect-square  h-[140px] md:h-[200px] lg:h-full rounded-4xl lg:rounded-[40px] relative flex items-center justify-center">
        <NorthEastIcon fontSize='large' className="absolute top-2 lg:top-4 right-2 lg:right-4"  />
        <span className='text-[20px]  italic'>Resume</span>
      </button>
    </a>
  );
}

export default ResumeLink;

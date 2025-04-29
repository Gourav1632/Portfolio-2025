import React from 'react';

function Tech({ name }) {
  return (
      <div className="button font-fira border-[#3d3d3d] border rounded-full p-3 text-[12px]  h-[24px] lg:h-[40px] xl:h-[48px] flex gap-1 justify-center items-center ">
        <span className='text-white '>{name}</span>
      </div>
  );
}

export default Tech;
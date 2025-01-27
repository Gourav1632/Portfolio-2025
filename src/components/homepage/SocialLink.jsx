import React from 'react';

function SocialLink({ link, Icon, name }) {
  return (
    <a href={link} target="_blank">
      <button className="button border-[#3d3d3d] border rounded-full min-w-[136px] w-full h-[44px] lg:h-[40px] xl:h-[48px] flex gap-1 justify-center items-center ">
        <Icon fontSize="medium" className="text-white" />
        <span className='text-[#a6a6a6]'>{name}</span>
      </button>
    </a>
  );
}

export default SocialLink;

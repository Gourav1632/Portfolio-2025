import React from 'react'

function SkillCard({title, body,isWhite,width}) {
  return (
    <div className={`skill ${width} ${isWhite ? 'bg-white text-black' : 'bg-[#121212] text-white border border-[#a6a6a6] '} rounded-[48px] h-auto font-[Open_Sans] p-8`}>
        <div className="title text-xl mb-2 text-[#a6a6a6]">
            {title}
        </div>
        <div className="body font-fira leading-8 ">{body}</div>
    </div>
  )
}

export default SkillCard

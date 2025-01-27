import React from 'react';

function Profile() {
  return (
    <div className="h-[140px] md:h-[200px] lg:h-full w-full flex justify-center items-center border-3 rounded-[30px] lg:rounded-[40px] border-white overflow-hidden ">
      <img
        className="object-cover object-center w-full h-full"
        src="/profile.jpg"
        alt="Profile"
      />
    </div>

  );
}

export default Profile;

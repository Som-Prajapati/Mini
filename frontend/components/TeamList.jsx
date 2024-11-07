import React from 'react';

const TeamList = ({ listName, handleClick }) => {
  // console.log("HELLLLOOOOOO",listName)
  return (
    <div 
      onClick={handleClick}
      className="px-4 py-2 text-white w-[21vw] h-[60px] hover:bg-zinc-800 cursor-pointer rounded-md transition-colors"
    >
      <div className="flex items-start justify-between">
        <span>{listName}</span>
      </div>
    </div>
  );
};

export default TeamList;
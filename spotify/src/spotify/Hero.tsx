import React from "react";

const Hero: React.FC = () => {
  return (
    <>
      <div className="w-full h-screen bg-black  flex justify-evenly">
        <div className="w-[310px] h-250 rounded-lg bg-[white]"></div>
        <div className="w-[1000px] h-250 bg-[#212121] rounded-lg"></div>
      </div>
    </>
  );
};
export default Hero;

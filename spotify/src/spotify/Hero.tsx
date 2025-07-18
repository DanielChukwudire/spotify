import React from "react";

const Hero: React.FC = () => {
  return (
    <>
      <div className="w-full h-screen bg-black  flex justify-evenly">
        <div className="w-[315px] h-135 rounded-lg bg-[#121212] flex flex-col items-center justify-around ">
          <div className="w-[300px] h-[80px] flex  items-center justify-between">
            <div className="text-white">Your Library</div>
            <div className="text-white">+</div>
          </div>
          <div className="w-75 h-35 rounded-2xl bg-[#1f1f1f]  justify-around  items-center flex flex-col text-white">
            <h1 className="font-bold">Create your first playlist</h1>
            <p>it's easy,we'll help you</p>
            <button className="w-30 h-10 bg-white rounded-full  text-black font-bold items-center justify-center ">
              Create Playlist
            </button>
          </div>
          <div className="w-75 h-8 rounded-2xl bg-[#1f1f1f]  justify-around  items-center flex flex-col text-white"></div>
          <div className="w-[315px] h-64  flex flex-wrap items-center justify-around">
            <ul className="w-[295px] items-center text-[12px] justify-evenly flex flex-wrap h-30 text-white">
              <li>Legal</li>
              <li>Safe & Privacy Center</li>
              <li>Privacy Policy</li>
              <li>Cookies</li>
              <li>About Ads</li>
              <li>Accessibility</li>
            </ul>
            <div className="w-[300px] h-20 flex flex-col justify-between  text-white font-bold ">
              Cookies
              <div className="w-20 h-8 border-2  flex  items-center justify-center text-white font-bold  border-white rounded-full">
                English
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1000px] h-250 bg-[#212121] rounded-lg"></div>
      </div>
    </>
  );
};
export default Hero;

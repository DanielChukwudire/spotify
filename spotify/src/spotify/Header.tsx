import React from "react";
import logo from "../assets/spotify.jpg";

const Header: React.FC = () => {
  return (
    <>
      <div className="w-full h-20  bg-black flex items-center justify-between">
        <div className="w-[580px]  flex justify-between">
          <div>
            <img className="w-18 h-15" src={logo} />
          </div>
          <div className="w-15 h-15 bg-[#1f1f1f] rounded-full">
            {/* <img className="" src={"HomeIcon"} /> */}
          </div>
          <input
            type="text"
            placeholder="RONALDO IS THE GOAT"
            className="w-[400px] h-15 bg-[#1f1f1f] text-white p-2 text-2xl border-3 border-white rounded-full"
          />
        </div>
        <div className="w-[700px] h-15 flex items-center justify-around">
          <div className="text-xl text-white flex  font-bold items-center">
            Premium Support Download | Install Apps Sign up
          </div>
          <div className="w-28 bg-white h-14 rounded-full flex text-[25px] font-bold items-center justify-center">
            Log in
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;

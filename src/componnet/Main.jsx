import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import back3 from '../assets/back3.jpg'

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover "
        src={back3}
        alt="/"
      />
      <div className="w-full h-full absolute top-0 left-0 bg-white/40">
        <div className="max-w-[700px] w-full h-screen m-auto flex   flex-col justify-center  lg:items-start items-center  ">
          <h1 className="md:text-5xl text-4xl font-bold text-gray-800 ">Hi, I'm Mordecai</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                " web developer", // Types 'One'
                1000, // Waits 1s
                " grafic designer", // Deletes 'One' and types 'Two'
                3000, // Waits 2s
                " software Engenier",
                2000, // Types 'Three' without deleting 'Two'
                
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft:"5px" }}
            />
          </h2>
          <div className=" flex justify-between  pt-6 max-w-[200px] w-full">
          <FaFacebook className="cursor-pointer" size={30} />
          <FaTwitter className="cursor-pointer" size={30} />
          <FaInstagram className="cursor-pointer" size={30} />
          <FaYoutube className="cursor-pointer" size={30} />
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Main;

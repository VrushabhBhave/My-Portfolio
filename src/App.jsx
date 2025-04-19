import { useState } from "react";
import image from "./assets/profile.jpg";
import Typewriter from "typewriter-effect";
import 'animate.css';

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { VscGithubInverted } from "react-icons/vsc";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";


function App(){
  const [burger, setBurger] = useState("hidden");

  function displayNavbar(){
    setBurger(burger === "hidden" ? "block" : "hidden");
  }

  return (
    <>
      <header className="flex flex-col sm:flex-row justify-between items-center bg-[#0F172A] text-white p-[1.2rem] sm:px-[2rem] lg:px-[8rem] sticky top-0 z-1000">
        <div className="left flex justify-between items-center w-full">
        <div className="heading">
          <h1 className="text-[#38BDF8] text-2xl text-700 font-bold">VRUSHABH</h1>
        </div>
        <div className="burger block sm:hidden">
          <span onClick={displayNavbar}>{burger == "hidden" ? <GiHamburgerMenu className="text-3xl cursor-pointer text-[#38BDF8]"/> :
          <MdOutlineClose className="text-3xl cursor-pointer text-[#38BDF8]"/>}</span>
        </div>
        </div>
        <nav className = {`navbar ${burger} py-5 bg-[#112240] w-[100vw] mt-5 sm:bg-[#0F172A] sm:w-105 sm:mt-0 sm:py-0 sm:block`}>
          <ul className="flex flex-col text-center gap-4 sm:flex-row lg:gap-3 font-bold">
            <li className="list"><a className="mx-1 sm:px-0 lg:px-2 text-lg" href="">Home</a></li>
            <li className="list"><a className="mx-1 sm:px-0 lg:px-2 text-lg" href="">About</a></li>
            <li className="list"><a className="mx-1 sm:px-0 lg:px-2 text-lg" href="">Skills</a></li>
            <li className="list"><a className="mx-1 sm:px-0 lg:px-2 text-lg" href="">Projects</a></li>
            <li className="list"><a className="mx-1 sm:px-0 lg:px-2 text-lg" href="">Contact</a></li>
          </ul> 
        </nav>
      </header>
      <main className="main text-white flex flex-col items-center">
        <div className="heading text-center py-5">
          <h3 className="text-lg lg:text-2xl animate__animated animate__backInDown">Hello, my name is</h3>
          <h1 className="text-3xl lg:text-4xl text-[#38BDF8] font-bold">
            <Typewriter 
              options={{
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 100,
                strings: ["VRUSHABH BHAVE"],
                pauseFor: 1500,
              }}
            />
          </h1>
        </div>
        <div className="profile py-3">
          <img src={image} alt="profile.jpg" className="w-40 lg:w-50 rounded-full border-[#38BDF8] border-5"/>
        </div>
        <div className="content text-center p-5 font-bold">
          <p className="text-2xl lg:text-3xl text-[#8b949e]">Passionate Frontend Developer and Competitive Coder</p>
          <p className="py-2 text-xl lg:text-2xl text-[#c9d1d9]">Building UIs by day, solving algorithms by night</p>
        </div>
        <div className="icons flex p-5 text-4xl gap-5">
              <span><a href="https://github.com/VrushabhBhave" target="_blank"><VscGithubInverted /></a></span>
              <span><a href="https://www.linkedin.com/in/vrushabh-bhave-41473a240" target="_blank"><IoLogoLinkedin /></a></span>
              <span><a href="mailto:vrushabhbhave31@gmail.com" target="_blank"><IoMdMail /></a></span>
        </div>
      </main>
    </>
  )
}

export default App;
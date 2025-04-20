import { useEffect, useState } from "react";
import image from "./assets/profile.jpg";
import Typewriter from "typewriter-effect";
import 'animate.css';
import Aos from "aos";
import "aos/dist/aos.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { VscGithubInverted } from "react-icons/vsc";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaJava } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";


function App(){
  const [burger, setBurger] = useState("hidden");

  useEffect(() => {
    Aos.init();
  }, [])

  function displayNavbar(){
    setBurger(burger === "hidden" ? "block" : "hidden");
  }

  function collapseNav(){
    setBurger("hidden");
  }

  return (
    <>
      <header className="flex flex-col sm:flex-row justify-between items-center bg-[#0F172A] text-white p-[1.2rem] sm:px-[2rem] lg:px-[8rem] sticky top-0 z-1000">
        <div className="left flex justify-between items-center w-full">
        <div className="heading">
          <h1 className="text-[#38BDF8] text-2xl text-700 font-bold animate__animated animate__backInDown">VRUSHABH</h1>
        </div>
        <div className="burger block sm:hidden">
          <span onClick={displayNavbar}>{burger == "hidden" ? <GiHamburgerMenu className="text-3xl cursor-pointer text-[#38BDF8]"/> :
          <MdOutlineClose className="text-3xl cursor-pointer text-[#38BDF8]"/>}</span>
        </div>
        </div>
        <nav className = {`navbar sm:block ${burger} py-5 bg-[#112240] w-[100vw] mt-5 sm:bg-[#0F172A] sm:w-105 sm:mt-0 sm:py-0 sm:block animate__animated animate__backInDown`}>
          <ul className="flex flex-col text-center gap-4 sm:flex-row lg:gap-3 font-bold">
            <li className="list"><a onClick={collapseNav} className="mx-1 sm:px-0 lg:px-2 text-lg" href="#home">Home</a></li>
            <li className="list"><a onClick={collapseNav} className="mx-1 sm:px-0 lg:px-2 text-lg" href="#about">About</a></li>
            <li className="list"><a onClick={collapseNav} className="mx-1 sm:px-0 lg:px-2 text-lg" href="#skills">Skills</a></li>
            <li className="list"><a onClick={collapseNav} className="mx-1 sm:px-0 lg:px-2 text-lg" href="">Projects</a></li>
            <li className="list"><a onClick={collapseNav} className="mx-1 sm:px-0 lg:px-2 text-lg" href="">Contact</a></li>
          </ul> 
        </nav>
      </header>
      <main id="home" className="main text-white flex flex-col items-center py-5 scroll-mt-20">
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
        <div className="content text-center p-5 font-bold overflow-x-hidden">
          <p className="text-2xl lg:text-3xl text-[#8b949e] animate__animated animate__backInLeft">Passionate Frontend Developer and Competitive Coder</p>
          <p className="py-2 text-xl lg:text-2xl text-[#c9d1d9] animate__animated animate__backInRight">Building UIs by day, solving algorithms by night</p>
        </div>
        <div className="icons flex p-2 text-4xl gap-6 text-[#c9d1d9]">
              <span className="animate__animated animate__backInDown"><a href="https://github.com/VrushabhBhave" target="_blank"><VscGithubInverted /></a></span>
              <span className="animate__animated animate__backInDown"><a href="https://www.linkedin.com/in/vrushabh-bhave-41473a240" target="_blank"><IoLogoLinkedin /></a></span>
              <span className="animate__animated animate__backInDown"><a href="mailto:vrushabhbhave31@gmail.com" target="_blank"><IoMdMail /></a></span>
        </div>
        <div className="btn py-6">
          <a href="/resume.pdf" target="_blank"><button type="button" className="submit-btn border-2 border-[#38BDF8] px-5 py-2 font-bold rounded-lg cursor-pointer">View Resume</button></a>
        </div>
      </main>
      <main id="about" className="">
        <div className="about-me">
          <h1 data-aos="fade-right" className="text-center text-[#58a6ff] text-[1.8rem] sm:text-[2.5rem] font-bold my-[1.5rem]">About Me</h1>
          <p data-aos="fade-up" className="text-[1.1rem] text-[#c9d1d9] mx-[auto] my-[1rem] max-w-[800px]">I'm Vrushabh Bhave, a passionate frontend developer and competitive coder who enjoys crafting engaging and responsive user interfaces. With a strong grasp of HTML, CSS, JavaScript, and React, I strive to bring intuitive and clean designs to life. When I'm not building websites, you'll find me solving algorithmic challenges and sharpening my problem-solving skills.</p>
        </div>
        <div className="education">
          <h1 data-aos="fade-right" className="text-center text-[#58a6ff] text-[1.8rem] sm:text-[2.5rem] font-bold my-[1.5rem]">Education</h1>
          <p data-aos="fade-up" className="text-[1.1rem] text-[#c9d1d9] mx-[auto] my-[1rem] max-w-[800px]">I post graduated in Master Of Computer Application(MCA) from the Kaviyatri Bahinabai Chaudhari North Maharashtra University (NMU), Jalgaon. My academic journey taught me the value of structured problem-solving and nurtured my technical curiosity.</p>
        </div>
        <div className="hobbies">
          <h1 data-aos="fade-right" className="text-center text-[#58a6ff] text-[1.8rem] sm:text-[2.5rem] font-bold my-[1.5rem]">Hobbies & Interests</h1>
          <p data-aos="fade-up" className="text-[1.1rem] text-[#c9d1d9] mx-[auto] my-[1rem] max-w-[800px]">Outside of tech, I enjoy writing poetry and reading. I’m deeply interested in geopolitics and global affairs, often diving into articles and books that explore the world from different perspectives.</p>
        </div>
      </main>
      <main id="skills" className="px-[16px] py-[64px]">
        <div className="heading py-5">
          <h1 data-aos="fade-right" className="text-center text-[#58a6ff] text-[1.8rem] sm:text-[2.5rem] font-bold my-[0.5rem]">MY SKILLS</h1>
        </div>
        <div className="skill-data m-auto">
          <div data-aos="zoom-in" className="java flex flex-col items-center px-8 py-3 border-2 rounded-2xl border-[#58a6ff] bg-[#1f2937]">
            <FaJava className="text-[#f89820] text-7xl"/>
            <span className="text-white py-2 font-medium">Java</span>
          </div>
          <div data-aos="zoom-in" className="javascript flex flex-col items-center px-8 py-3 border-2 rounded-2xl border-[#58a6ff] bg-[#1f2937]">
            <IoLogoJavascript className="text-[#f0db4f] text-7xl"/>
            <span className="text-white py-2 font-medium">JavaScript</span>
          </div>
          <div data-aos="zoom-in" className="react flex flex-col items-center px-8 py-3 border-2 rounded-2xl border-[#58a6ff] bg-[#1f2937]">
            <FaReact className="text-[#61dbfb] text-7xl"/>
            <h3 className="text-white py-2 font-medium">React</h3>
          </div>
          <div data-aos="zoom-in" className="react flex flex-col items-center px-8 py-3 border-2 rounded-2xl border-[#58a6ff] bg-[#1f2937]">
            <FaHtml5 className="text-[#e44d26] text-7xl"/>
            <h3 className="text-white py-2 font-medium">HTML</h3>
          </div>
          <div data-aos="zoom-in" className="react flex flex-col items-center px-8 py-3 border-2 rounded-2xl border-[#58a6ff] bg-[#1f2937]">
            <FaCss3Alt className="text-[#264de4] text-7xl"/>
            <h3 className="text-white py-2 font-medium">CSS</h3>
          </div>
          <div data-aos="zoom-in" className="react flex flex-col items-center px-8 py-3 border-2 rounded-2xl border-[#58a6ff] bg-[#1f2937]">
            <RiTailwindCssFill className="text-[#38bdf8] text-7xl"/>
            <h3 className="text-white py-2 font-medium">TailWind</h3>
          </div>
          <div data-aos="zoom-in" className="react flex flex-col items-center px-8 py-3 border-2 rounded-2xl border-[#58a6ff] bg-[#1f2937]">
            <FaGithub className="text-[#ffffff] text-7xl"/>
            <h3 className="text-white py-2 font-medium">GitHub</h3>
          </div>
        </div>
      </main>
    </>
  )
}

export default App;
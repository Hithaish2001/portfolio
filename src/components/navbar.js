import React, {useState} from "react"
import {FaBars, FaTimes, FaGithub} from 'react-icons/fa';
import {BsLinkedin, BsInstagram} from 'react-icons/bs';
import { GrTwitter} from 'react-icons/gr';
import './navbar.css'
import { Link } from 'react-router-dom';
import moon from "../assets/moon.png";
import sun from "../assets/sun.png";
import  uparrow from "../assets/up-arrow.png";


const Navbar=()=>{

    const [nav, setNav]=useState(false)
    const handleclick=()=>setNav(!nav);

    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: 'smooth' });
      setNav(!nav)
    };

    const [mode, setmode] = useState(sun)

      const handleMode=()=>{
        if (mode===sun) {
          setmode(moon)
        } else {
          setmode(sun)
        }
        let htmltag = document.getElementById('htmlTag');
        if (htmltag.classList.contains('dark')){
          htmltag.classList.remove('dark')
        }
        else{
          htmltag.classList.add('dark')

        }
      }

    return(
       <main className="fixed sm:static w-screen h-24 text-black dark:text-white bg-transparent z-50" id="navbar">
            <div className="nav z-50 flex  justify-between bg-transparent ">
                <div className="w-screen flex justify-between items-center h-24">
                        <div className="logo flex">
                            <h1 className="hidden sm:block text-2xl font-semibold px-16">Portfolio.</h1>
                        </div>
                    <div className=" hidden sm:flex font-medium pt-6 px-5">
                        <li className="list-none px-5"><Link to="/"   onClick={() => scrollToSection('home')} className="links">HOME</Link></li>
                        <li className="list-none px-5"><Link to="/about"  onClick={() => scrollToSection('about')}  className="links">ABOUT</Link></li>
                        <li className="list-none px-5"><Link to="/projects"   onClick={() => scrollToSection('projects')} className="links">PROJECTS</Link></li>
                        <li className="list-none px-5"><Link to="/contact"  onClick={() => scrollToSection('contact')}  className="links">CONTACT  ME</Link></li>
                        <li className="list-none px-5"><img src={mode} alt="" onClick={handleMode} className="bg-gradient-to-br from-slate-300 to-white  rounded-full text-white p-2 w-12 h-12 cursor-pointer -translate-y-3 hover:rotate-45 transition-all duration-700"/></li>
                    </div>
                </div>
                


                {/* mobile navbar */}

                <div  className="sm:hidden flex items-center justify-between w-full fixed z-10 text-zinc-500 " id="navbar">
                        <div className="px-5"><img src={mode} alt="" onClick={handleMode} className="bg-gradient-to-br from-slate-300 to-white  rounded-full text-white p-2 w-9 h-9 cursor-pointer translate-y-3 hover:rotate-45 transition-all duration-700"/></div>
                        <div className="px-5 pt-3" onClick={handleclick}>{!nav ? <FaBars size={25}/> : <FaTimes size={25}/>}</div>

                </div>

                <ul className={!nav ? "hidden" : "absolute text-zinc-500 top-0 left-0 w-full h-screen bg-white dark:bg-neutral-900 flex flex-col justify-center items-center space-y-5  "}>
                    <li className="list-none "><Link to="/"   onClick={() => scrollToSection('home')} className="hover:text-black hover:font-medium dark:hover:text-white">HOME</Link></li>
                    <li className="list-none "><Link to="/about"  onClick={() => scrollToSection('about')} className="hover:text-black hover:font-medium dark:hover:text-white">ABOUT</Link></li>
                    <li className="list-none "><Link to="/projects"   onClick={() => scrollToSection('projects')} className="hover:text-black hover:font-medium dark:hover:text-white">PROJECTS</Link></li>
                    <li className="list-none "><Link to="/contact"  onClick={() => scrollToSection('contact')} className="hover:text-black hover:font-medium dark:hover:text-white">CONTACT  ME</Link></li>
                </ul>
                
            </div>


            {/* social accout reach-outs */}
            <div className="social hidden lg:flex fixed flex-col left-0 top-[350px]">
            <ul>
                <li className="bg-transparent w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-700">
                    <a className="flex w-36 dark:text-white text-black justify-between items-center text-xl pl-5 font-medium" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hithaish-n-shetty-698a45227">LinkedIn <BsLinkedin size={35}/></a>
                </li>
                <li className="bg-transparent w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-700">
                    <a className="flex w-36 dark:text-white text-black justify-between items-center text-xl pl-5 font-medium" target="_blank" rel="noreferrer" href="https://github.com/Hithaish2001">Github <FaGithub size={35}/></a>
                </li>
                <li className="bg-transparent w-44 h-14 flex justify-between items-center ml-[-116px] hover:ml-[0px] duration-700">
                    <a className="flex w-40 dark:text-white text-black justify-between items-center text-xl pl-5 font-medium " target="_blank" rel="noreferrer" href="https://www.instagram.com/the_lazy_.sage/">Instagram <BsInstagram size={35}/></a>
                </li>
                <li className="bg-transparent w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-700">
                    <a className="flex w-36 dark:text-white text-black justify-between items-center text-xl pl-5 font-medium" target="_blank" rel="noreferrer" href="https://twitter.com/Hithaish01">Twitter <GrTwitter size={35}/></a>
                </li>
            </ul>
            </div>

            <div className="fixed bottom-2 right-2 sm:right-6 sm:bottom-6 w-10 sm:w-12 h-10 sm:h-12 z-50  dark:border-white border bg-white border-black justify-center items-center flex  rounded-lg">
                <div className="w-8 h-8 translate-y-1 cursor-pointer" onClick={() => scrollToSection('home')}><img src={uparrow} alt=""  className="animate-animation1-bounce bottom-0"/></div>
            </div>

       </main>
    )
}

export default Navbar
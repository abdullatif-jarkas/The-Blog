import { NavLink } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";
import SideBar from "../SideBar/SideBar";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AuthSide from "./AuthSide";

interface userNav
{
    navData : navData[]
}
interface navData
{
    text: string;
    path: string;
}
export default function NavBar({navData} : userNav) {
  const [isMenuOpen,setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav      
    className={`flex fixed   lg:px-28  w-screen z-10 bg-white font-Inter  dark:bg-dark px-5 py-5 justify-between items-center dark:text-white  top-0 transition-shadow ${
      isScrolled ? "shadow-lg sha dark:shadow-slate-800	" : ""
    }`}>
        <AuthSide/>
        <NavLink to={"/"}  className="font-semibold   text-lg  lg:text-xl leading-6 " ></NavLink>
        {/* menu */}
        <div className=" items-center md:flex hidden	">
         {navData.map((e, i) => (
          <NavLink  className= { ({ isActive }) => isActive ? 'mr-3.5 font-normal border-b-2 border-gray-950 dark:border-white  dark:pb-5-5 text-lg  lg:text-xl leading-6' : "mr-3.5 font-normal  dark:pb-5-5 text-lg  lg:text-xl leading-6"} key={i} to={e.path}>
            {e.text}
          </NavLink>
        ))}
        <DarkMode/>
        </div>
        <div className=" md:hidden block">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} >
          <FontAwesomeIcon icon={faBars} className="dark:text-withe text-2xl w-8" />
          </button>
        </div>
        <SideBar  isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
    </nav>
  )
}

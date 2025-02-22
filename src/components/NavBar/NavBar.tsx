import { NavLink } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";
import SideBar from "../SideBar/SideBar";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface userNav
{
    userName : string;
    navData : navData[]
}
interface navData
{
    text: string;
    path: string;
}
export default function NavBar({userName , navData} : userNav) {
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
    className={`flex   lg:px-28 lg:py-30 px-5 py-5 justify-between items-center dark:text-white sticky top-0 transition-shadow ${
      isScrolled ? "shadow-lg sha dark:shadow-slate-800	" : ""
    }`}>
        <NavLink to={"/"}  className="font-semibold   text-lg  lg:text-xl leading-6 " >{userName}</NavLink>
        {/* menu */}
        <div className=" items-center md:flex hidden	">
         {navData.map((e, i) => (
          <NavLink className="mr-3.5 font-normal dark:first-of-type:border-b dark:first-of-type:border-t-white dark:pb-5-5 text-lg  lg:text-xl leading-6" key={i} to={e.path}>
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
        <SideBar userName={userName} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
    </nav>
  )
}

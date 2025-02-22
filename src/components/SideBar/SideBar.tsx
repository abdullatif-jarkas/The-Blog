
import { navData } from "../../data/nav";
import { NavLink } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface SideBarProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
    userName : string
}

export default function SideBar({ isMenuOpen, setIsMenuOpen , userName}: SideBarProps ) {
  return (

    <>
      <div className={`absolute xl:hidden h-screen top-0  items-center justify-end  right-0  w-full bg-white dark:bg-dark flex flex-col item-center z-10 ${ isMenuOpen ? "flex" : "hidden"}`}>
        <div className=" flex-grow flex flex-col items-center justify-center">
        <NavLink to={"/"}  className="font-semibold text-lg  lg:text-xl leading-6 mb-54" >{userName}</NavLink>
         <div className=" flex flex-col justify-center items-center gap-5">
         {navData.map((e, i) => (
          <NavLink onClick={() => setIsMenuOpen(false)} className="mr-3.5 font-normal  text-lg  lg:text-xl leading-6" key={i} to={e.path}>
            {e.text}
          </NavLink>
        ))}
        <DarkMode/>
        </div>
        </div>
        <div className="py-5">
          <button onClick={()=> setIsMenuOpen(!isMenuOpen)} >
             <FontAwesomeIcon icon={faXmark} className="w-8" />
          </button>
        </div>
      </div>
    </>
  )
}

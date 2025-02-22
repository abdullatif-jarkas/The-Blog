import NavBar from "../NavBar/NavBar";
import { navData } from "../../data/nav";

export default function Header() {
  return (
    <header className=" sticky  top-0 z-10 bg-white font-Inter  dark:bg-dark">
       <NavBar userName="Haneen Al-hariri" navData ={navData}/>
    </header>
  )
}

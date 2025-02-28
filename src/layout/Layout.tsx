import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { footerData } from "../data/footer";
import NavBar from "../components/NavBar/NavBar";
import { navData } from "../data/nav";

export default function Layout() {
  return (
    <div>
        <NavBar navData={navData}/>
        <Outlet/>
        <Footer copy="© 2023" footerData={footerData} />
    </div>
  )
}

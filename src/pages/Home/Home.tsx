import AllBlog from "../../components/AllBlog/AllBlog";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Recent from "../../components/Recent/Recent";
import { footerData } from "../../data/footer";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero title = "THE BLOG"/>
      <Recent/>
      <AllBlog/>
      <Footer copy="© 2023" footerData={footerData} />
    </>
  )
}

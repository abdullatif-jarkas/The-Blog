import AllBlog from "../../components/AllBlog/AllBlog";
import Hero from "../../components/Hero/Hero";
import Recent from "../../components/Recent/Recent";

export default function Home() {
  return (
    <>
      <Hero title = "THE BLOG"/>
      <Recent/>
      <AllBlog/>
    </>
  )
}

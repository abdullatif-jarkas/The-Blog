
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import RecentBlog from "../../components/RecentBlog/RecentBlog";
import SingleArticle from "../../components/SingleArticle/SingleArticle";
import StoriesNew from "../../components/StoriesNew/StoriesNew";
import { footerData } from "../../data/footer";


export default function Blog() {

  return (
    <>
      <Header/>
      <section className="lg:px-28 lg:py-30 py-5 px-8 md:py-8 md:px-8 flex flex-col md:flex-row lg:justify-center justify-between  lg:gap-8 gap-4 text-black dark:text-white">
       <RecentBlog title="Recent blog posts"/>
       <SingleArticle/>
      </section>
      <section className="w-full flex justify-end lg:px-28 lg:py-30 py-5 px-8 md:py-8 md:px-8     lg:gap-8 gap-4 text-black dark:text-white">
        <div className="lg:w-63 w-full lg:mr-8 mr-0">
        <StoriesNew
        title="Stories and interviews"
        pText="Newletters"
        placInput="Enter your email"
        btn="Subscribe"
        Supporting="Subscribe to learn about new product features, the latest in technology, solutions, and updates."
        Hint="We care about your data in our "
        span="privacy policy"
      />
        </div>
      </section>
      <Footer copy="© 2023" footerData={footerData}/>
    </>
  )
}

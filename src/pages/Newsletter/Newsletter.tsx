import AllNew from "../../components/AllNew/AllNew";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import StoriesNew from "../../components/StoriesNew/StoriesNew";
import { footerData } from "../../data/footer";


export default function Newsletter() {
  return (
    <>
      <Header/>
      <section className="lg:px-28 lg:py-30 py-5 px-8 md:px-0 md:py-72">
      <StoriesNew 
        title="Stories and interviews" 
        pText="Newlatters" 
        placInput="Enter your email"
        btn="Subscribe"
        Supporting="Subscribe to learn about new product features, the latest in technology, solutions, and updates."
        Hint="We care about your data in our" 
        span = "privacy policy"
        />
      </section>
      <AllNew/>
      <Footer copy="© 2023" footerData={footerData}/>
    </>
  )
}

import AllNew from "../../components/AllNew/AllNew";
import StoriesNew from "../../components/StoriesNew/StoriesNew";


export default function Newsletter() {
  return (
    <>
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
    </>
  )
}

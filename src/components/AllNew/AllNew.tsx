import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectLatestArticles } from "../../redux/slice";
import Title from "../Title/Title";
import { GoArrowUpRight } from "react-icons/go";


export default function AllNew() {
    const latestArticles = useSelector(selectLatestArticles);

  return (
    <section className="lg:px-28 lg:py-30 py-30 px-8 md:pb-72 md:pt-0 md:px-8 text-black dark:text-white">
        <Title title="All blog posts"/>
    <div className="grid gap-x-8 gap-y-8 xl:gap-x-8 md:gap-x-4 md:gap-y-6 md:grid-rows-2 lg:grid-rows-1  xl:grid-rows-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
    <Link to={`/blog/${latestArticles[3].id}`} className="md:col-span-1 md:row-span-1 h-[444px] ">
        <div className="h-full flex flex-col">
            <img className="mb-8 h-60 w-full object-cover" src={latestArticles[3].mainImg} alt={latestArticles[3].mainTitle} />
            <h3 className="text-date font-semibold text-sm mb-3">{latestArticles[3].author} • {latestArticles[3].date}</h3>
            <div className="flex mb-3 items-center justify-between">
                <h2 className="font-semibold text-2xl">{latestArticles[3].mainTitle}</h2>
                <GoArrowUpRight className="min-w-6 h-7" />
            </div>
            <p className="text-Normal dark:text-dark-gray font-normal text-base mb-6">{latestArticles[3].introduction}</p>
            <div className="flex">
                <span className={latestArticles[3].category[0] ? `mr-2 px-2.5 text-date bg-design rounded-2xl py-0.5 text-sm font-medium` : ''}>
                    {latestArticles[3].category[0]}
                </span>
                <span className={latestArticles[3].category[1] ? `mr-2 px-2.5 text-Presentation bg-Presentation rounded-2xl py-0.5 text-sm font-medium` : ''}>
                    {latestArticles[3].category[1]}
                </span>
                <span className={latestArticles[3].category[2] ? `mr-2 px-2.5 text-sky-700 bg-Research rounded-2xl py-0.5 text-sm font-medium` : ''}>
                    {latestArticles[3].category[2]}
                </span>
            </div>
        </div>
    </Link>
    <Link to={`/blog/${latestArticles[2].id}`} className="md:col-span-1 md:row-span-1 h-[444px]">
        <div className="h-full flex flex-col">
            <img className="mb-8 lg:w-full md:w-full sm:w-full h-60 object-cover" src={latestArticles[2].mainImg} alt={latestArticles[2].mainTitle} />
            <h3 className="text-date font-semibold text-sm mb-3">{latestArticles[2].author} • {latestArticles[2].date}</h3>
            <div className="flex mb-3 items-center justify-between">
                <h2 className="font-semibold text-2xl">{latestArticles[2].mainTitle}</h2>
                <GoArrowUpRight className="min-w-6 h-7" />
            </div>
            <p className="text-Normal dark:text-dark-gray font-normal text-base mb-6">{latestArticles[2].introduction}</p>
            <div className="flex">
                <span className={latestArticles[2].category[0] ? `mr-2 px-2.5 text-date bg-design rounded-2xl py-0.5 text-sm font-medium` : ''}>
                    {latestArticles[2].category[0]}
                </span>
                <span className={latestArticles[2].category[1] ? `mr-2 px-2.5 text-Presentation bg-Presentation rounded-2xl py-0.5 text-sm font-medium` : ''}>
                    {latestArticles[2].category[1]}
                </span>
                <span className={latestArticles[2].category[2] ? `mr-2 px-2.5 text-sky-700 bg-Research rounded-2xl py-0.5 text-sm font-medium` : ''}>
                    {latestArticles[2].category[2]}
                </span>
            </div>
        </div>
    </Link>
    <Link to={`/blog/${latestArticles[1].id}`} className="md:col-span-2 md:row-span-1 lg:col-span-1 xl:col-span-1 h-[444px]">
        <div className="h-full flex flex-col">
            <img className="mb-8 lg:w-full md:w-full sm:w-full h-60 object-cover" src={latestArticles[1].mainImg} alt={latestArticles[1].mainTitle} />
            <h3 className="text-date font-semibold text-sm mb-3">{latestArticles[1].author} • {latestArticles[1].date}</h3>
            <div className="flex mb-3 items-center justify-between">
                <h2 className="font-semibold text-2xl">{latestArticles[1].mainTitle}</h2>
                <GoArrowUpRight className="min-w-6 h-7" />
            </div>
            <p className="text-Normal dark:text-dark-gray font-normal text-base mb-6">{latestArticles[1].introduction}</p>
            <div className="flex">
                <span className={latestArticles[1].category[0] ? `mr-2 px-2.5 text-date bg-design rounded-2xl py-0.5 text-sm font-medium` : ''}>
                    {latestArticles[1].category[0]}
                </span>
                <span className={latestArticles[1].category[1] ? `mr-2 px-2.5 text-Presentation bg-Presentation rounded-2xl py-0.5 text-sm font-medium` : ''}>
                    {latestArticles[1].category[1]}
                </span>
                <span className={latestArticles[1].category[2] ? `mr-2 px-2.5 text-sky-700 bg-Research rounded-2xl py-0.5 text-sm font-medium` : ''}>
                    {latestArticles[1].category[2]}
                </span>
            </div>
        </div>
    </Link>
    </div>
    </section>
  )
}

import { useSelector } from "react-redux";
import { selectLatestArticles} from "../../redux/slice";
import { Link,} from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import Title from "../Title/Title";



export default function Recent() {
    const latestArticles = useSelector(selectLatestArticles);


    return (
        <section className="lg:px-28 lg:py-30 py-30 px-8 md:py-30 md:px-8 text-black dark:text-white">
            <Title title="Recent blog posts"/>
            <div className="flex pb-30 flex-wrap xl:flex-nowrap gap-8">
                <Link to={`/blog/${latestArticles[3].id}`} className="xl:w-2/4 lg:w-full md:w-full sm:w-full">
                <div >
                <img className="lg:mb-8 mb-6 lg:w-full md:w-full h-56 sm:h-auto sm:w-full" src={latestArticles[3].mainImg} alt={latestArticles[3].mainTitle} />
                <h3 className=" text-date font-semibold	text-sm	mb-3">{latestArticles[3].author}  •  {latestArticles[3].date}</h3>
                <div className="flex mb-3 items-center  justify-between">
                    <h2 className=" font-semibold text-2xl">{latestArticles[3].mainTitle}</h2>
                    <GoArrowUpRight className="w-6 h-7" />
                </div>
                <p className="text-Normal dark:text-dark-gray	 font-normal text-base mb-6">{latestArticles[3].introduction}</p>
                <span className="mr-2 px-2.5 text-date bg-design rounded-2xl py-0.5	 text-sm font-medium">{latestArticles[3].category[0]}</span>
                <span className="mr-2 px-2.5 font-medium text-sm text-Research bg-Research rounded-2xl py-0.5">{latestArticles[3].category[1]}</span>
                <span className="mr-2 px-2.5 font-medium text-sm rounded-2xl py-0.5 text-Presentation bg-Presentation">{latestArticles[3].category[2]}</span>
                </div>
                </Link>
                <div className="flex xl:w-2/4 lg:w-full flex-col gap-8">
                    <Link to={`/blog/${latestArticles[2].id}`}>
                    <div className="flex flex-wrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap">
                    <img className="md:mr-6 mb-6 md:w-auto w-full mr-0" src={latestArticles[2].mainImg} alt={latestArticles[2].mainTitle} />
                    <div>
                    <h3 className=" text-date font-semibold	text-sm	mb-3">{latestArticles[2].author}  •  {latestArticles[2].date}</h3>
                    <div className="flex mb-2 items-center  justify-between">
                        <h2 className=" font-semibold text-lg">{latestArticles[2].mainTitle}</h2>
                        <GoArrowUpRight className="w-6 h-7" />
                    </div>
                    <p className="text-Normal font-normal dark:text-dark-gray text-base mb-6">{latestArticles[2].introduction}</p>
                    <span className="mr-2 px-2.5 text-sky-700 bg-Research rounded-2xl py-0.5	 text-sm font-medium">{latestArticles[2].category[0]}</span>
                    <span className="mr-2 px-2.5 font-medium text-sm text-Presentation bg-Presentation rounded-2xl py-0.5">{latestArticles[2].category[1]}</span>
                    </div>
                  </div>
                    </Link>
                    <Link to={`/blog/${latestArticles[1].id}`}>
                    <div className="flex flex-wrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap">
                    <img className="md:mr-6 mb-6 md:w-auto w-full mr-0" src={latestArticles[1].mainImg} alt={latestArticles[1].mainTitle} />
                    <div>
                    <h3 className=" text-date font-semibold	text-sm	mb-3">{latestArticles[1].author}  •  {latestArticles[1].date}</h3>
                    <div className="flex mb-2 items-center  justify-between">
                        <h2 className=" font-semibold text-lg">{latestArticles[1].mainTitle}</h2>
                        <GoArrowUpRight className="w-6 h-7" />
                    </div>
                    <p className="text-Normal dark:text-dark-gray font-normal text-base mb-6">{latestArticles[1].introduction}</p>
                    <span className="mr-2 px-2.5 text-sky-700 bg-Research rounded-2xl py-0.5	 text-sm font-medium">{latestArticles[1].category[0]}</span>
                    <span className="mr-2 px-2.5 font-medium text-sm text-Presentation bg-Presentation rounded-2xl py-0.5">{latestArticles[1].category[1]}</span>
                    </div>
                    </div>
                    </Link>
                </div>
            </div>
            <Link to={`/blog/${latestArticles[0].id}`}>
            <div className="flex gap-8 flex-wrap xl:flex-nowrap max-h-max pt-30"> 
                <img className=" xl:w-2/4 md:w-full sm:w-full" src={latestArticles[0].mainImg} alt={latestArticles[0].mainTitle} />
                <div className="lg:w-2/4  w-full sm:w-full">
                    <h3 className=" text-date font-semibold	text-sm	mb-3">{latestArticles[0].author}  •  {latestArticles[0].date}</h3>
                    <div className="flex mb-3  items-center  justify-between">
                        <h2 className=" font-semibold text-2xl">{latestArticles[0].mainTitle}</h2>
                        <GoArrowUpRight className="min-w-6 h-7 " />
                    </div>
                    <p className="text-Normal dark:text-dark-gray font-normal text-base mb-6">{latestArticles[0].introduction}</p>
                    <span className="mr-2 px-2.5 text-date bg-design rounded-2xl py-0.5	 text-sm font-medium">{latestArticles[0].category[0]}</span>
                    <span className="mr-2 px-2.5 font-medium text-sm text-Presentation bg-Presentation rounded-2xl py-0.5">{latestArticles[0].category[1]}</span>
                </div>
            </div> 
            </Link>

        </section>
    );
}

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { selectPaginatedArticles, setPage } from "../../redux/slice/slider";
import { Link } from "react-router-dom";
import Title from "../Title/Title";
import { GoArrowUpRight } from "react-icons/go";
import Pagination from "../Pagination/Pagination";

export default function AllBlog() {
  const dispatch = useDispatch();
  const paginatedArticles = useSelector((state: RootState) => selectPaginatedArticles(state));
  const currentPage = useSelector((state: RootState) => state.slide.currentPage);
  const totalPages = Math.ceil(20 / 6);

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
  };

  return (
    <section className="lg:px-28 lg:py-30 py-30 px-8 md:py-30 md:px-8 text-black dark:text-white">
      <Title title="All blog posts" />
      <div className="grid pb-30 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 md:gap-x-4 md:gap-y-6  gap-4 gap-y-12 ">
        {paginatedArticles.map((article, index) => (
          <Link key={index} to={`/blog/${article.id}`}>
            <div className="article-card max-height: min-content">
              <img className="mb-8 w-full h-60" src={article.mainImg} alt={article.mainTitle} />
              <h3 className="text-date font-semibold text-sm mb-3">
                {article.author} • {article.date}
              </h3>
              <div className="flex justify-between">
                <h2 className="font-semibold text-2xl mb-3">{article.mainTitle}</h2>
                <GoArrowUpRight className="min-w-6 h-7" />
              </div>
              <p className="text-Normal dark:text-dark-gray font-normal text-base mb-6">{article.introduction}</p>
              <span className={article.category[0] ? `mr-2 px-2.5 text-date bg-design rounded-2xl py-0.5 text-sm font-medium` : ''}>
                {article.category[0]}
              </span>
              <span className={article.category[1] ? `mr-2 px-2.5 text-Presentation bg-Presentation rounded-2xl py-0.5 text-sm font-medium` : ''}>
                {article.category[1]}
              </span>
              <span className={article.category[2] ? `mr-2 px-2.5 text-sky-700 bg-Research rounded-2xl py-0.5 text-sm font-medium` : ''}>
                {article.category[2]}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </section>
  );
}

import { useSelector } from 'react-redux';
import { showOtherPosts } from '../../redux/slice';
import { Link, useParams } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { GoArrowUpRight } from 'react-icons/go';

interface RecentBlog{
  title: string;
}

export default function RecentBlog({title} :RecentBlog) {
    const { id } = useParams<{ id: string }>();
    const article = useSelector((state : RootState) => showOtherPosts(state, parseInt(id || "0")));
  return (
    <div className="lg:w-28 md:w-44 w-auto  order-2 md:order-1">
    <h3 className='font-semibold text-2xl mb-8'>{title}</h3>
    {article?.map((article) => (
       <Link key={article.id}  to={`/blog/${article.id}`}>
        <div className="my-8 ">
            <img className='mb-6' src={article.mainImg} alt={article.mainTitle} />
            <h3 className=" text-date font-semibold	text-sm	mb-3">{article?.day}  •  {article?.date} </h3>
            <div className="flex  justify-between">
              <h2 className=" font-semibold text-2xl mb-3">{article.mainTitle}</h2>
              <GoArrowUpRight className="min-w-6 h-7 " />
            </div>
            <p className='mb-6 text-Normal dark:text-dark-gray text-base font-normal'>{article.introduction}</p>
            <span className={article.category[0] ? `mr-2 px-2.5 text-date bg-design rounded-2xl py-0.5	 text-sm font-medium` : ''}>{article.category[0]}</span>
            <span className={article.category[1] ? `mr-2 px-2.5 text-date bg-design rounded-2xl py-0.5	 text-sm font-medium` : ''}>{article.category[1]}</span>
            <span className={article.category[2] ? `mr-2 px-2.5 text-date bg-design rounded-2xl py-0.5	 text-sm font-medium` : ''}>{article.category[2]}</span>
        </div>
        </Link>
    ))}
</div>
  )
}

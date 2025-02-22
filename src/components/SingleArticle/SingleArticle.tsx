import { useNavigate, useParams } from "react-router-dom";
import { selectPostById } from "../../redux/slice";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";

export default function SingleArticle() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const article = useSelector((state: RootState) =>
    selectPostById(state, parseInt(id || "0"))
  );

  useEffect(() => {
    if (!id) {
      navigate('/blog/1');
    }
  }, [id, navigate]);

  return (
    <div className="lg:w-63 md:w-53 w-auto order-1 md:order-2">
      <h3 className="text-date font-semibold text-sm mb-8">
        {article?.author} • {article?.date}
      </h3>
      <h2 className="font-semibold text-4xl mb-8">{article?.mainTitle}</h2>
      <img className="w-full  mb-8" src={article?.mainImg} alt="" />
      <p className="mb-3 text-Normal dark:text-dark-gray">{article?.introduction}</p>
      <p className="mb-3 text-Normal dark:text-dark-gray">{article?.description}</p>

      {article?.subsections.map((subsection, index) => (
        <div key={index}>
          <h3 className="text-center lg:px-32 px-5 mb-3 text-Normal dark:text-dark-gray font-bold">{subsection.title}</h3>
          {subsection.image && <img className="mb-3" src={subsection.image} alt="" />}
          {subsection.description && <p className="mb-3 text-Normal dark:text-dark-gray">{subsection.description}</p>}
          {subsection.description1 && <p className="mb-3 text-Normal dark:text-dark-gray">{subsection.description1}</p>}
          {subsection.description2 && <p className="mb-3 text-Normal dark:text-dark-gray">{subsection.description2}</p>}
          {subsection.description3 && <p className="mb-3 text-Normal dark:text-dark-gray">{subsection.description3}</p>}
          {subsection.title2 && <h3 className="mb-3 text-Normal dark:text-dark-gray">{subsection.title2}</h3>}
          {subsection.imgDes && <p className="mb-3 text-Normal dark:text-dark-gray">{subsection.imgDes}</p>}
        </div>
      ))}
      <div className="flex ةلا-8">
                <span className={article?.category[0] ? `mr-2 px-2.5 text-date bg-design rounded-2xl py-0.5 text-sm font-medium` : ''}>
                    {article?.category[0]}
                </span>
                <span className={article?.category[1] ? `mr-2 px-2.5 text-Presentation bg-Presentation rounded-2xl py-0.5 text-sm font-medium` : ''}>
                    {article?.category[1]}
                </span>
                <span className={article?.category[2] ? `mr-2 px-2.5 text-sky-700 bg-Research rounded-2xl py-0.5 text-sm font-medium` : ''}>
                    {article?.category[2]}
                </span>
            </div>
    </div>
    
  );


}

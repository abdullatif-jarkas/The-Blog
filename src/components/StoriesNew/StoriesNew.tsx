interface StoriesNew
{
    pText: string;
    title : string;
    Supporting : string;
    placInput: string
    btn: string;
    Hint : string
    span : string
}

export default function StoriesNew({pText ,title, Supporting , placInput , btn ,Hint ,span} : StoriesNew) {
  return (
    <div className="flex flex-col items-center dark:text-white">
      <p className="mb-3 text-date font-semibold text-base">{pText}</p>
      <h3 className="mb-6 font-semibold text-5xl leading-60">{title}</h3>
      <p className="mb-10 lg:w-[768px] w-auto font-normal sm:text-center text-xl text-start sm:px-5 text-Normal dark:text-dark-gray">{Supporting}</p>
      <form className="sm:w-auto w-full "> 
      <div className="flex flex-col sm:w-[326px] w-auto  sm:flex-row gap-4 mb-2">
        <div className="py-3 pl-4 pr-6 border rounded-lg dark:bg-white">
            <input className=" placeholder:text-Normal  placeholder:text-base placeholder:font-normal" type="email" placeholder={placInput} />
        </div>
        <button className="py-3 w-[118px] text-white bg-violet-700 outline-none border-0 rounded-lg font-medium text-base px-5" type="submit">{btn}</button>
      </div>
    <p className="font-normal text-sm sm:text-base text-Normal dark:text-dark-gray ">{Hint} <span className=" underline">{span}</span></p>
      </form>
    </div>
  )
}

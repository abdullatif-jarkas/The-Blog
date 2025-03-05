interface herodata
{
    title : string
}


export default function Hero({title} :herodata) {
  return (
    <section className="mt-[88px] lg:px-28 lg:py-30 md:py-30 md:px-0 py-5 font-Inter text-center text-black  dark:text-white ">
       <h1 className="font-bold border-y xl:leading-hero border-y-slate-950 dark:border-y-slate-50  md:text-hero-md  laptop:text-hero lg:text-hero-lg lg:leading-hero-lg text-7xl md:leading-hero-md leading-hero-sm">{title}</h1>
    </section>
  )
}

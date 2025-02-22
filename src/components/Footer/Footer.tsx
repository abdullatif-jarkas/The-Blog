interface footer 
{
    copy : string,
    footerData : footerData[]
}
interface footerData
{
  text: string;
  path: string;
}

export default function Footer({copy , footerData} : footer) {
  return (
<footer className="lg:px-28 flex flex-col  sm:flex-row text-center lg:py-30 pt-30 pb-23 px-8 md:py-30 md:px-8 text-black dark:text-white">
    <span className="mr-3.5 order-last pt-30 sm:pt-0 sm:order-first">{copy}</span>
    <ul className="flex flex-col gap-3.5  sm:flex-row items-center sm:items-start text-center">
        {footerData.map((e, i) => (
            <li  key={i}><a href={e.path}>{e.text}</a></li>
        ))}
    </ul>
</footer>

  )
}

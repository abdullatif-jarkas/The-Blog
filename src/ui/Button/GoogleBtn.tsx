export default function GoogleBtn({text , src} : {text : string , src : string}) {
  return (
    <button className=" w-full py-3 px-5    desktop:rounded-[10px] bg-black text-white rounded-lg bg-White/97 border border-White/95 text-sm  desktop:text-lg font-medium leading-27 flex justify-center items-center gap-3.5">
       <img src={src} alt={text} className=" desktop:w-7.5 w-6  desktop:h-7.5 h-6" />
       {text}
    </button>
  )
}

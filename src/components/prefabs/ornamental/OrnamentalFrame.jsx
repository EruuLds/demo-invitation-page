export default function OrnamentalFrame({children, isHeading}) {
  return (
    <div className={`flex flex-col items-center ${isHeading && 'mb-6'}`}>
        <img className="w-full max-w-[20rem]" src="img/ornament-top.svg"/>
            <div className="my-1">
                {children}
            </div>
        <img className="w-full max-w-[20rem]" src="img/ornament-bottom.svg"/>
    </div>
  )
}

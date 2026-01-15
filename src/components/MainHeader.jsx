import CountdownTimer from "./CountdownTimer";

export default function MainHeader() {
  return (
    <header className='h-screen bg-[url(img/cover.jpg)] bg-cover bg-top'>
        <div className='w-full h-full bg-linear-to-b from-black/0 to-black/50'>
            <div className='h-full responsive-container flex justify-center items-center'>
                <div className='w-[30rem]'>
                    <img className='w-full opacity-75 mb-8' src="img/logo.svg" alt="Event Logo" />
                    <h3 className="text-center col-span-4 text-white/75 mb-4">Faltan:</h3>
                    <CountdownTimer></CountdownTimer>
                </div>
            </div>
        </div>
    </header>
  )
}

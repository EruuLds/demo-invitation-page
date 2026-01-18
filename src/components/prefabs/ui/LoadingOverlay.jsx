import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export default function LoadingOverlay({loadingMessage}) {
  return (
    <div className='w-full h-full absolute -translate-1/2 top-1/2 left-1/2 flex flex-col justify-center items-center bg-white/50'>
        <FontAwesomeIcon icon={faCircleNotch} className='text-primary text-3xl mb-1' spin />
        {loadingMessage && <p className='font-semibold'>{loadingMessage}</p>}
    </div>
  )
}

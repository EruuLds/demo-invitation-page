import { useDataContext } from "../hooks/useDataContext";
import { useCountdown } from "../hooks/useCountdown";

export default function CountdownTimer() {
  const { eventDate } = useDataContext();
  const { days, hours, minutes, seconds } = useCountdown(eventDate);
  
  return (
    <div className="grid grid-cols-4 gap-4 p-4 bg-white font-semibold rounded-2xl">
      <div className="text-center">
        <p className="text-2xl mb-1">{days}</p>
        <p className="uppercase text-xs font-bold">D</p>
      </div>
      <div className="text-center">
        <p className="text-2xl mb-1">{hours}</p>
        <p className="uppercase text-xs font-bold">Hrs</p>
      </div>
      <div className="text-center">
        <p className="text-2xl mb-1">{minutes}</p>
        <p className="uppercase text-xs font-bold">Min</p>
      </div>
      <div className="text-2xl text-center">
        <p className="mb-1">{seconds}</p>
        <p className="uppercase text-xs font-bold">Seg</p>
      </div>
    </div>
  );
}

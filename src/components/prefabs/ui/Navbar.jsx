import Dropdown from "./Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

export default function Navbar() {
    const [ showMenu, setShowMenu ] = useState(false)
    const isMobile = useMediaQuery("(max-width: 640px)");

    useEffect(() => {
        if(isMobile) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
    }, [isMobile])

    return (
        <div className="traslucid-panel mb-8">
            {isMobile &&   
                <div className="responsive-container cursor-pointer grid grid-cols-[1fr_auto] items-center gap-6 py-6" onClick={() => setShowMenu(!showMenu)} >
                    <div className="flex items-center">
                        <h4>Menú</h4>
                    </div>
                    <div className={`relative transition-all duration-500 ${showMenu ? 'rotate-180' : 'rotate-0'}`}>
                        <FontAwesomeIcon 
                            icon={faBars} 
                            size="xl"
                            className={`transition-all duration-300 ${showMenu ? 'opacity-0' : 'opacity-100'}`}
                        />
                        <FontAwesomeIcon 
                            icon={faChevronDown} 
                            size="xl" 
                            className={`absolute top-0 left-0 transition-all duration-300 ${showMenu ? 'opacity-100' : 'opacity-0'}`}
                        />
                    </div>
                </div>
            }

            <Dropdown isOpen={(showMenu || !isMobile)}>
                <ul className="responsive-container flex flex-col sm:flex-row justify-center items-center gap-6 pt-0 pb-6 sm:py-6" onClick={(e) => e.stopPropagation()}>
                    <li>
                        <a href="#venueInfo" onClick={() => setShowMenu(false)}>¿Dónde y Cuándo?</a>
                    </li>
                    <li>
                        <a href="#itinerary" onClick={() => setShowMenu(false)}>Itinerario</a>
                    </li>
                    <li>
                        <a href="#dressCode" onClick={() => setShowMenu(false)}>Dress Code</a>
                    </li>
                    <li>
                        <a href="#attendance" onClick={() => setShowMenu(false)}>Confirmar Asistencia</a>
                    </li>
                </ul>
            </Dropdown>
            
        </div>
  )
}

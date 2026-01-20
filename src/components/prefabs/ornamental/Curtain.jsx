import ReactDOM from "react-dom";
import { useDataContext } from "../../../hooks/useDataContext";
import { useEffect, useState } from "react";
import LoadingOverlay from "../ui/LoadingOverlay";

export default function Curtain() {
    const { invitationIsOpen, initialLoading } = useDataContext();
    const [showCurtain, setShowCurtain] = useState(true);

    useEffect(() => {
        if (!invitationIsOpen) return;

        const t = setTimeout(() => {
          setShowCurtain(false);
        }, 1500);
      
        return () => {
          clearTimeout(t);
        };
    }, [invitationIsOpen]);

    return ReactDOM.createPortal(
        <>
            {showCurtain &&
                <div 
                    className={`fixed h-screen w-full top-0 left-0 overflow-hidden z-[300] transition-all duration-[1.5s] 
                    ${invitationIsOpen ? 'backdrop-blur-[0]' : 'backdrop-blur-[3rem]'
                }`}>
                    
                        <img 
                            className={`absolute h-full w-full min-w-fit object-cover object-left left-0 transition-all duration-[1.5s] 
                            ${invitationIsOpen && '-translate-x-full'}`}
                            src="/img/ornaments/flowers-left.png"
                        />
                        <img 
                            className={`absolute h-full w-full min-w-fit object-cover object-right right-0 transition-all duration-[1.5s] 
                            ${invitationIsOpen && 'translate-x-full'}`} 
                            src="/img/ornaments/flowers-right.png" 
                        />
                </div>
            }
            {initialLoading &&
                <div className="fixed h-screen w-full top-0 left-0 overflow-hidden z-[300] backdrop-blur-lg">
                    <LoadingOverlay loadingMessage={'Cargando invitación...'} />
                </div>
            }
        </>,
        document.getElementById("curtain")
    );
}

import Button from "./Button";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useModalContext } from "../../../hooks/useModalContext";
import { useDataContext } from "../../../hooks/useDataContext";
import { useHandleModals } from "../../../hooks/useHandleModals";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

export default function Modal({ id, headingText, children, onClose }) {
    const { visibleModals } = useModalContext();
    const { loading } = useDataContext();
    const isVisible = visibleModals.some((modal) => modal === id);
    const isMobile = useMediaQuery("(max-width: 768px)");

    const handleModals = useHandleModals();

    const handleClose = () => {
        if (!loading) {
            onClose ?? handleModals("close", id);
        }
    };

    return ReactDOM.createPortal(
        <div
            id="overlay"
            className={`
        z-[900] 
        fixed
        inset-0 
        w-full 
        h-full
        transition-all 
        duration-500 
        ${isMobile && "responsive-container"}
        ${isVisible ? "backdrop-blur-lg bg-black/25" : "backdrop-blur-[0] bg-black/0"}`}
            onClick={handleClose}
        >
            <div className="relative flex justify-center w-full h-full">
                <div
                    id="box"
                    className={`
                        absolute 
                        bg-white/60
                        rounded-[1.5rem]
                        transition-all 
                        standard-ease
                        duration-500 
                        overflow-hidden
                        sm:max-w-[1280px]
                        sm:min-w-[25rem]
                        mx-auto
                        -translate-y-1/2 
                        top-1/2 
                        ${isVisible 
                            ? "scale-none opacity-100" 
                            : "scale-[0.9] opacity-0"
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="relative p-4">
                        <div className="w-full flex justify-between items-center mb-4">
                            <h4 className="me-4">{headingText}</h4>
                            <div className="aspect-square">
                                <Button color={"secondary"} onClick={handleClose} small>
                                    <FontAwesomeIcon icon={faXmark} />
                                </Button>
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById("modals"),
    );
}

import { createContext, useState } from "react";

export const ModalContext = createContext();

export function ModalContextProvider(props) {
    const [openModals, setOpenModals] = useState([]);
    const [visibleModals, setVisibleModals] = useState([]);

    return (
        <ModalContext.Provider
            value={{
                openModals,
                setOpenModals,
                visibleModals,
                setVisibleModals
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

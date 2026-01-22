import ButtonLink from "../prefabs/ui/ButtonLink"
import Button from "../prefabs/ui/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBills, faChevronDown, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDataContext } from "../../hooks/useDataContext";
import Dropdown from "../prefabs/ui/Dropdown";
import CopyTextOnClick from "../prefabs/functional/CopyTextOnClick";

export default function Gifts() {
    const [showBankAccountData, setShowBankAccountData] = useState(false);
    const { eventData } = useDataContext();

    return (
        <>
            <p className='text-center mb-4'>Tu presencia es nuestro mejor regalo, pero si deseas hacernos un detalle, te sugerimos alguna de las siguientes opciones:</p>
            <div className='transparent-panel mb-6'>
                <div className="grid sm:grid-cols-3 gap-4 text-center">
                    <ButtonLink color={'secondary'} href={'https://mesaderegalos.liverpool.com.mx/'} grow >
                        <div className="flex flex-col justify-center items-center my-2">
                            <img className="h-9 max-w-full mb-1" src="/img/liverpool_logo.svg" alt="Logo de Liverpool" />
                            <p>Mesa de Regalos</p>
                        </div>

                    </ButtonLink>
                    <ButtonLink color={'secondary'} href={'https://www.amazon.com.mx/registries/custom'} grow >
                        <div className="flex flex-col justify-center items-center my-2">
                            <img className="h-9 max-w-full mb-1" src="/img/amazon_logo.svg" alt="Logo de Liverpool" />
                            <p>Mesa de Regalos</p>
                        </div>
                    </ButtonLink>
                    <Button color={'secondary'} grow >
                        <div className="flex flex-col justify-center items-center my-2">
                            <FontAwesomeIcon icon={faMoneyBills} className="mb-1" size="2xl"/>
                            <p>Sobre de Efectivo</p>
                        </div>
                    </Button>
                </div>
            </div>
            <div className="transparent-panel overflow-hidden cursor-pointer" onClick={() => setShowBankAccountData(!showBankAccountData)}>
                <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faBuildingColumns} className="me-2"/>
                        <p>Datos Bancarios</p>
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} className={`transition-all duration-500 ${showBankAccountData ? 'rotate-180' : 'rotate-0'}`}/>
                </div>
                <Dropdown isOpen={showBankAccountData}>
                    <div className="pt-4 cursor-auto" onClick={(e) => e.stopPropagation()}>
                        <div className="flex wrap items-center mb-2">
                            <p className="me-1 font-semibold">Banco:</p>
                            <span>{eventData.bankData.bank}</span>
                        </div>
                        <div className="flex wrap items-center mb-2">
                            <p className="me-1 font-semibold">CLABE:</p>
                            <span className="mark-secondary text-sm"><CopyTextOnClick>{eventData.bankData.CLABE}</CopyTextOnClick></span>
                        </div>
                        <div className="flex wrap items-center mb-2">
                            <p className="me-1 font-semibold">No. de Cuenta:</p>
                            <span className="mark-secondary text-sm"><CopyTextOnClick>{eventData.bankData.account}</CopyTextOnClick></span>
                        </div>
                        <div className="flex wrap items-center mb-2">
                            <p className="me-1 font-semibold">Titular:</p>
                            <span className="mark-secondary text-sm"><CopyTextOnClick>{eventData.bankData.accountHolder}</CopyTextOnClick></span>
                        </div>
                    </div>
                </Dropdown>
            </div>
        </>
    )
}

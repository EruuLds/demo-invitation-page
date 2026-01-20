import Modal from "../prefabs/ui/Modal";
import Button from "../prefabs/ui/Button";
import LoadingOverlay from "../prefabs/ui/LoadingOverlay";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useDataContext } from "../../hooks/useDataContext";
import { useModalContext } from "../../hooks/useModalContext";
import { useHandleModals } from "../../hooks/useHandleModals";
import AttendanceForm from "../prefabs/AttendanceForm";

export default function ModalManager() {
    const { loading, initialLoading } = useDataContext();
    const { openModals } = useModalContext();
    const handleModals = useHandleModals();

    return (
        <>
            {(openModals.some((modal) => modal === 'confirmSendResponseModal') && !initialLoading) &&
                <Modal id={'confirmSendResponseModal'} headingText={'Enviar Respuesta'}>
                    <p className="mb-4 text-center"> Se enviará tu respuesta a los anfitriones.</p>
                    <div className="flex justify-center gap-4">
                        <Button color={'transparent'} onClick={() => handleModals('close', 'confirmSendResponseModal')} >
                            <span>Volver</span>
                        </Button>
                        <Button color={'primary'} targetForm={'attendanceForm'}>
                            <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                            <span>Sí, enviar</span>
                        </Button>
                    </div>
                    {loading && <LoadingOverlay loadingMessage={'Enviando respuesta'}/>}
                </Modal>
            }

            {(openModals.some((modal) => modal === 'modifyResponseModal') && !initialLoading) &&
                <Modal id={'modifyResponseModal'} headingText={'Modificar Respuesta'} >
                    <div className="bg-white/40 rounded-[0.75rem] p-4">
                        <AttendanceForm />
                    </div>
                    
                    <div className="flex justify-center gap-4 mt-4">
                        <Button color={'transparent'} onClick={() => handleModals('close', 'modifyResponseModal')} >
                            <span>Volver</span>
                        </Button>
                        <Button color={'primary'} targetForm={'attendanceForm'}>
                            <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                            <span>Reenviar</span>
                        </Button>
                    </div>
                    {loading && <LoadingOverlay loadingMessage={'Reenviando respuesta'}/>}
                </Modal>
            }
        </>
    );
}

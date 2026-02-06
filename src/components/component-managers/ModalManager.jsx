import Modal from "../prefabs/ui/Modal";
import Button from "../prefabs/ui/Button";
import LoadingOverlay from "../prefabs/ui/LoadingOverlay";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { useDataContext } from "../../hooks/useDataContext";
import { useHandleModals } from "../../hooks/useHandleModals";
import { useEffect } from "react";
import AttendanceForm from "../prefabs/AttendanceForm";
import OrnamentalFrame from "../prefabs/ornamental/OrnamentalFrame";

export default function ModalManager() {
    
    const { loading, dataLoaded, setInvitationIsOpen, eventData, setMusicIsPlaying, guestData } = useDataContext();
    const handleModals = useHandleModals();

    useEffect(() => {
        if (!dataLoaded) return;
        if (guestData === undefined) return;

        if (guestData === null) {
            handleModals('open', 'invitationNotFoundModal');
        } else {
            handleModals('open', 'initialModal');
        }
        console.log({dataLoaded, guestData});
    }, [dataLoaded]);
    
    return (
        <>
            <Modal id={'initialModal'} headingText={eventData.eventName} >
                <OrnamentalFrame>
                    <div className="my-2">
                        <p className="text-center font-semibold">¡Hola, {guestData?.name}!</p>
                        <p className="mb-4 text-center">Con mucha emoción te extendemos esta invitación.</p>
                        <div className="flex justify-center">
                            <Button color={'primary'} grow onClick={() => handleModals(
                                'close', 
                                'initialModal', 
                                () => {
                                    setInvitationIsOpen(true);
                                    setMusicIsPlaying(true);
                            })}>
                                <FontAwesomeIcon icon={faEnvelopeOpen} className="me-2" />
                                <span>Abrir</span>
                            </Button>
                        </div>
                    </div>
                </OrnamentalFrame>
            </Modal>
            <Modal id={'invitationNotFoundModal'} headingText={'Invitación no disponible'} >
                <p className="mb-6 text-center">
                    Es posible que el enlace sea incorrecto o que la invitación ya no esté disponible. 
                    Te sugerimos{' '}
                    <span className="font-semibold">
                        verificar el enlace
                    </span>{' '}
                    o{' '}
                    <span className="font-semibold">
                        contactar a los anfitriones.
                    </span>
                </p>
                <img className="max-h-[1em] m-auto text-dark" src="/img/invitex-logo-mono.svg" alt="Logo de Invitex"/>
            </Modal>
            <Modal id={'confirmSendResponseModal'} headingText={'Enviar Respuesta'} closeButton closeClickingOutside >
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
            <Modal id={'modifyResponseModal'} headingText={'Modificar Respuesta'} closeButton closeClickingOutside >
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
        </>
    );
}

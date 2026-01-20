import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { requestInvitation } from '../../../utils/requestInvitation';

export default function Footer() {
    return (
        <>
            <footer className="traslucid-panel p-4">
                <div className="flex justify-center items-center mb-2">
                    <p className="me-2">
                        Made with <FontAwesomeIcon icon={faHeart} /> by
                    </p>
                    <img
                        className="max-h-[1em] text-dark"
                        src="/img/invitex-logo-mono.svg"
                        alt="Logo de Invitex"
                    />
                </div>
                <div className="mb-12">
                    <p className="text-center text-sm">
                        ¿Te gustó esta invitación? Consigue la tuya{" "}
                        <a className="link-primary" href={requestInvitation()} target='_blank'>aquí</a>.
                    </p>
                </div>
            </footer>
        </>
    );
}

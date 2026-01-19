import OrnamentalFrame from "../prefabs/ornamental/OrnamentalFrame";
import { useDataContext } from "../../hooks/useDataContext";
import { QRCodeSVG } from "qrcode.react";

export default function Invitation() {
    const { invitationId, guestData } = useDataContext();

    return (
        <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-[auto_1fr] sm:items-start mb-6">
                <QRCodeSVG value={invitationId} className="w-full h-full aspect-square bg-white p-4 rounded-[1.5rem]" />

                <div className="h-full transparent-panel flex justify-center items-center text-center">
                    <OrnamentalFrame>
                        <p>A nombre de:</p>
                        <h4 className="mark-primary rounded-lg mb-4 font-medium text-lg">{`${guestData.name} ${guestData.lastName}`}</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p>Pases:</p>
                                <h4 className="mark-primary rounded-lg font-medium text-lg">
                                    {guestData.passes}
                                </h4>
                            </div>
                            <div>
                                <p>Mesa:</p>
                                <h4 className="mark-primary rounded-lg font-medium text-lg">
                                    {guestData.table}
                                </h4>
                            </div>
                        </div>
                    </OrnamentalFrame>
                </div>
            </div>
            <div className="transparent-panel">
                <p className="text-sm text-center">
                    Este pase QR es tu acceso al evento, y se activará una vez que
                    confirmes tu asistencia en la{" "}
                    <a href="#attendance" className="link-primary">
                        última sección.
                    </a>
                </p>
            </div>
        </>
    );
}

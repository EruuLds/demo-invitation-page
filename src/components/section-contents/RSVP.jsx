import AttendanceForm from "../prefabs/AttendanceForm";
import Button from "../prefabs/ui/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useDataContext } from "../../hooks/useDataContext";
import { useHandleModals } from "../../hooks/useHandleModals";

export default function RSVP() {
    const { guestData } = useDataContext();
    const handleModals = useHandleModals();
    
    return (
      <>
        {guestData.status === "pending" && (
            <div>
                <p className="text-center mb-6">
                  Tu presencia es muy significativa para nosotros. Si puedes
                  acompañarnos, por favor,{" "}
                  <span className="font-semibold">
                    confirma tu asistencia antes del 30 de septiembre
                  </span>
                  .
                </p>
                <div className="transparent-panel overflow-hidden relative">
                    <AttendanceForm />
                    <div className="flex justify-center mt-4">
                        <Button color={"primary"} onClick={() => handleModals("open", "confirmSendResponseModal")}>
                            <FontAwesomeIcon icon={faPaperPlane} className="me-1" />
                            <span>Enviar respuesta</span>
                        </Button>
                    </div>
                </div>
            </div>
        )}

        {guestData.status === "confirmed" && (
          <>
            <div className="transparent-panel mb-6 text-center">
              <h4>¡Qué alegría saber que nos acompañarás!</h4>
              <p className="my-8">
                Confirmaste tu asistencia para{" "}
                <span className="mark-primary font-semibold">
                  {guestData.confirmedPasses}{" "}
                  {guestData.confirmedPasses > 1 ? "personas" : "persona"}
                </span>
              </p>
              <p>
                Estamos muy emocionados de compartir este momento contigo.{" "}
                <span className="font-semibold">¡Nos vemos pronto!</span>
              </p>
            </div>
          </>
        )}

        {guestData.status === "declined" && (
          <>
            <div className="transparent-panel mb-6 text-center">
              <h4 className="mb-4">¡Gracias por avisarnos!</h4>
              <p>
                Sentiremos tu ausencia, pero entendemos que no siempre es
                posible asistir.
              </p>
            </div>
          </>
        )}

        {guestData.status !== "pending" && (
          <div className="transparent-panel text-center">
            <p className="text-sm">
              Si cambias de opinion, puedes{" "}
              <button
                className="link-primary"
                onClick={() => handleModals("open", "modifyResponseModal")}
              >
                modificar tu respuesta
              </button>{" "}
              hasta el 30 de septiembre.{" "}
            </p>
          </div>
        )}
      </>
    );
}

import ButtonLink from "../prefabs/ui/ButtonLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCalendarDay, faMap, faCalendarPlus } from "@fortawesome/free-solid-svg-icons";

export default function VenueInfo() {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="h-full min-h-100 rounded-[1.5rem] bg-[url(/img/venue.jpg)] bg-cover bg-center" />
        <div className="grid gap-6">
          <div className="transparent-panel">
            <div className="flex items-center mb-4">
              <h4 className="me-2">
                <FontAwesomeIcon icon={faLocationDot} />
              </h4>
              <h4>
                <span className="italic">Mansión del Conde</span> - Castillo
                Santa Rosa
              </h4>
            </div>
            <p className="mb-4">
              Carretera San Roque Km 5, Rancho La Cruz, 36580 Irapuato, Gto.
            </p>
            <ButtonLink
              color={"primary"}
              href={"https://maps.app.goo.gl/QZXzxTRMZSdYyxcXA"}
            >
              <FontAwesomeIcon icon={faMap} className="me-1" />
              <span>Abrir en Google Maps</span>
            </ButtonLink>
          </div>
          <div className="transparent-panel">
            <div className="flex items-center mb-4">
              <h4 className="me-2">
                <FontAwesomeIcon icon={faCalendarDay} />
              </h4>
              <h4>Sábado, 17 de Octubre del 2026</h4>
            </div>
            <p className="mb-2">
              <span className="font-semibold">Ceremonia Civil</span> - 15:30
              Hrs.
            </p>
            <p className="mb-4">
              <span className="font-semibold">Recepción</span> - 16:00 Hrs.
            </p>
            <ButtonLink
              color={"primary"}
              href={"assets/downloadable/boda-ale-luis.ics"}
              download
            >
              <FontAwesomeIcon icon={faCalendarPlus} className="me-1" />
              <span>Agregar al Calendario</span>
            </ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
}

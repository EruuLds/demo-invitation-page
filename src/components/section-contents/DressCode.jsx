import ButtonLink from "../prefabs/ui/ButtonLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt } from "@fortawesome/free-solid-svg-icons";

export default function DressCode() {
    return (
        <>
            <div className="transparent-panel text-center mb-6">
                <h4 className="mb-4">Formal</h4>
                <div className="grid grid-cols-2 mb-4">
                    <div className="flex justify-end">
                        <img
                            className="max-h-80"
                            src="/img/dress-code-women.png"
                            alt="Vestido largo"
                        />
                    </div>
                    <div className="flex justify-start">
                        <img
                            className="max-h-80"
                            src="/img/dress-code-men.png"
                            alt="Teaje formal"
                        />
                    </div>
                </div>
                <p className="mb-2">Colores:</p>
                <div className="flex justify-center gap-4 mb-4">
                    <span className="size-9 rounded-full bg-[#8c8c4ccc]"></span>
                    <span className="size-9 rounded-full bg-[#925692cc]"></span>
                    <span className="size-9 rounded-full bg-[#930c47cc]"></span>
                    <span className="size-9 rounded-full bg-[#7b0c51cc]"></span>
                    <span className="size-9 rounded-full bg-[#be8190cc]"></span>
                </div>
                <ButtonLink color={"primary"} href={'https://pin.it/77PDGh3TM'}>
                    <FontAwesomeIcon icon={faShirt} className="me-2" />
                    <span>Ver ejemplos</span>
                </ButtonLink>
            </div>
            <div className="transparent-panel text-center">
                <p className="text-sm">
                    <span className="font-semibold">
                        Queda el color blanco reservado para la novia.
                    </span>{" "}
                    Agradecemos su consideración al elegir su atuendo.
                </p>
            </div>
        </>
    );
}

export default function Itinerary() {
    return (
        <>
            <div className="grid grid-cols-[1fr_1.5rem_1fr] gap-x-3">
                <div className="flex flex-col text-end items-end mb-6">
                    <img
                        className="size-[3rem]"
                        src="img/icons/i-ceremonia.svg"
                        alt="icon"
                    />
                    <h4 className="mb-1">Ceremonia Civil</h4>
                    <p>15:30 Hrs.</p>
                </div>
                <div className="flex flex-col">
                    <div className="size-[1.5rem] bg-[var(--color-dark)] rounded-full text-white/75 text-center font-semibold">
                        <p>1</p>
                    </div>
                    <div className="flex-1 relative">
                        <div className="vertical-line"></div>
                    </div>
                </div>
                <div className="flex flex-col text-start items-start mb-6 me-6">
                    <p className="text-sm">
                        La ceremonia dará inicio puntual a las 15:30 Hrs. Te pedimos llegar
                        al menos 20 minutos antes para ubicarse con calma.
                    </p>
                </div>

                <div></div>
                <div className="flex flex-col">
                    <div className="size-[1.5rem] bg-[var(--color-dark)] rounded-full text-white/75 text-center font-semibold">
                        <p>2</p>
                    </div>
                    <div className="flex-1 relative">
                        <div className="vertical-line"></div>
                    </div>
                </div>
                <div className="flex flex-col text-start items-start mb-4">
                    <img
                        className="size-[3rem]"
                        src="/img/icons/i-recepcion.svg"
                        alt="icon"
                    />
                    <h4 className="mb-1">Recepción</h4>
                    <p>16:00 Hrs.</p>
                </div>

                <div className="flex flex-col text-end items-end mb-6">
                    <img className="size-[3rem]" src="/img/icons/i-cena.svg" alt="icon" />
                    <h4 className="mb-1">Cena</h4>
                    <p>18:00 Hrs.</p>
                </div>
                <div className="flex flex-col">
                    <div className="size-[1.5rem] bg-[var(--color-dark)] rounded-full text-white/75 text-center font-semibold">
                        <p>3</p>
                    </div>
                    <div className="flex-1 relative">
                        <div className="vertical-line"></div>
                    </div>
                </div>
                <div></div>

                <div></div>
                <div className="flex flex-col">
                    <div className="size-[1.5rem] bg-[var(--color-dark)] rounded-full text-white/75 text-center font-semibold">
                        <p>4</p>
                    </div>
                    <div className="flex-1 relative">
                        <div className="vertical-line"></div>
                    </div>
                </div>
                <div className="flex flex-col text-start items-start mb-4">
                    <img className="size-[3rem]" src="/img/icons/i-fiesta.svg" alt="icon" />
                    <h4 className="mb-1">Vals y Fiesta</h4>
                    <p>19:00 Hrs.</p>
                </div>
            </div>
        </>
    );
}

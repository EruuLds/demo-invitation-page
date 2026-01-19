import OrnamentalFrame from "../prefabs/ornamental/OrnamentalFrame";

export default function PhotoGallery() {
    return (
        <>
            <div className="transparent-panel mb-6">
                <OrnamentalFrame>
                    <p className="italic text-center mb-4">
                        “Aprendemos a amar, no cuando encontramos a la persona perfecta,
                        sino cuando llegamos a ver de manera perfecta a una persona
                        imperfecta”
                    </p>
                    <p className="font-semibold text-center">– Sam Keen</p>
                </OrnamentalFrame>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
                <div className="h-full min-h-100 rounded-[1.5rem] bg-[url(/img/img_01.jpg)] bg-cover bg-top" />
                <div className="grid gap-6">
                    <div className="h-full min-h-80 rounded-[1.5rem] bg-[url(/img/img_02.jpg)] bg-cover bg-top" />
                    <div className="h-full min-h-80 rounded-[1.5rem] bg-[url(/img/img_03.jpg)] bg-cover bg-top" />
                </div>
            </div>
        </>
    );
}

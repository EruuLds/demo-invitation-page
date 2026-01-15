import OrnamentalFrame from "./OrnamentalFrame";

export default function Section({headingText, children, id}) {
  return (
    <div id={id} className="responsive-container flex justify-center mb-8 scroll-mt-8">
        <div className="w-full max-w-[48rem] traslucid-panel rounded-[3rem] p-6">
            <OrnamentalFrame isHeading>
                <h3 className="text-center">{headingText}</h3>
            </OrnamentalFrame>
            {children}
        </div>
    </div>
  )
}

import OrnamentalFrame from "../ornamental/OrnamentalFrame"

export default function Section({headingText, children, id}) {
  return (
    <div id={id} className="relative responsive-container flex justify-center mb-8 scroll-mt-8 overflow-hidden">
        <div className="w-full max-w-[48rem] traslucid-panel rounded-[3rem] p-6">
            {headingText && 
              <OrnamentalFrame isHeading>
                <h3 className="text-center">{headingText}</h3>
              </OrnamentalFrame>
            }
            {children}
        </div>
    </div>
  )
}

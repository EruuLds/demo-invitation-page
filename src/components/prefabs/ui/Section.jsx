import OrnamentalFrame from "../ornamental/OrnamentalFrame"
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver"
import { useRef } from "react";

export default function Section({headingText, children, id}) {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, {threshold: 0.1});

  return (
    <div id={id} className="relative responsive-container flex justify-center mb-8 scroll-mt-8 overflow-hidden" ref={sectionRef}>
        <div className={`w-full max-w-[48rem] traslucid-panel rounded-[3rem] p-6 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
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

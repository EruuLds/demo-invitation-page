import { useRef, useState, useLayoutEffect } from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

export default function Dropdown({ isOpen, children }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const isMobile = useMediaQuery('(max-width: 640px)');

  useLayoutEffect(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
      setOpacity(1);
    } else {
      setHeight(0);
      setOpacity(0);
    }
  }, [isOpen, children, isMobile]);

  return (
    <div className='overflow-y-hidden will-change-[height] will-change-[opacity] transition-all duration-500' style={{height, opacity}}>
      <div ref={contentRef} >
        {children}
      </div>
    </div>
  );
}
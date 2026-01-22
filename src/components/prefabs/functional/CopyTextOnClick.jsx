import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

export default function CopyTextOnClick({ children }) {
  const [showFeedback, setShowFeedback] = useState(false);
  const textRef = useRef(null);
  const timeoutRef = useRef(null);

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(textRef.current.innerText);

      setShowFeedback(true);

      // Limpia timeout previo si existe
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setShowFeedback(false);
        timeoutRef.current = null;
      }, 2000);
    } catch (err) {
      alert("Error al copiar. Puede que tu navegador no sea compatible.");
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <span
      ref={textRef}
      onClick={copyText}
      className="cursor-pointer inline-flex items-center gap-1"
    >
      {children}
      <FontAwesomeIcon
        icon={showFeedback ? faClipboardCheck : faClipboard}
        className={showFeedback ? "text-emerald-300" : undefined}
      />
    </span>
  );
}
import { useModalContext } from "./useModalContext";

export function useHandleModals() {
  const { setOpenModals, setVisibleModals } = useModalContext();

  const handleModals = (action, id, afterClose) => {
    if (action === 'open') {
      setOpenModals(prev => [...prev, id]);
      setTimeout(() => {
        setVisibleModals(prev => [...prev, id]);
      }, 10);
    } else if (action === 'close') {
      setVisibleModals(prev => prev.filter(item => item !== id));
      setTimeout(() => {
        setOpenModals(prev => prev.filter(item => item !== id));
        afterClose && afterClose();
      }, 500);
    } else if (action === 'clear') {
      setVisibleModals([]);
      setTimeout(() => {
        setOpenModals([]);
        afterClose && afterClose();
      }, 500);
    }
  };

  return handleModals;
}
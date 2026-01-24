import { createContext , useEffect, useState} from "react";
import { ref, onValue, update} from "firebase/database";
import database from '../firebase/firebaseConfig';

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const eventData = {
    eventId: "demo2026",
    eventName: "Boda de Ale & Luis",
    eventDate: new Date('October 17, 2026 15:30:00').getTime(),
    confirmationDeadline: new Date('September 30, 2026 15:30:00').getTime(),
    bankData: {
      bank: "Banorte",
      CLABE: 'XXXXXXXXXXXXXXXXXX',
      account: 'XXXXXXXXXX',
      accountHolder: 'Alejandra Martínez'
    }
  }

  const invitationId = new URLSearchParams(window.location.search).get('id');
  const [invitationIsOpen, setInvitationIsOpen] = useState(false);
  const [musicIsPlaying, setMusicIsPlaying] = useState(false);

  const [dataLoaded, setDataLoaded] = useState(false);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const initialLoading = !(dataLoaded && assetsLoaded);
  
  
  const [guestData, setGuestData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const onLoad = () => setAssetsLoaded(true);

    if (document.readyState === "complete") {
      setAssetsLoaded(true);
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => window.removeEventListener("load", onLoad);
  }, []);

  useEffect(() => {
    const guestRef = ref(database, `events/${eventData.eventId}/guests/${invitationId}`);
    const unsubscribe = onValue(
      guestRef,
      snapshot => {
        const data = snapshot.val();
        if (data) {
          setGuestData(data);
        } else {
          setGuestData(null);
        }
        setDataLoaded(true);
      },
      err => {
        setError(err.message);
        setDataLoaded(true);
      }
    );

    return () => unsubscribe();
  }, []);

  const updateGuest = async (id, updatedData, onError, onComplete) => {
    setLoading(true);
    try {
      await update(ref(database, `events/${eventData.eventId}/guests/${id}`), updatedData);
    } catch (err) {
      setError(err.message);
      onError?.();
    } finally {
      setLoading(false);
      onComplete?.();
    }
  };

  return (
    <DataContext.Provider value={{
      eventData,
      invitationId,
      invitationIsOpen,
      setInvitationIsOpen,
      musicIsPlaying,
      setMusicIsPlaying,
      guestData,
      initialLoading,
      loading,
      error,
      dataLoaded,
      updateGuest
    }}>
      {children}
    </DataContext.Provider>
  );
}
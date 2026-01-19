import { createContext , useEffect, useState} from "react";
import { ref, onValue, update} from "firebase/database";
import database from '../firebase/firebaseConfig';

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const eventId = 'demo2026';
  const eventDate = new Date('October 17, 2026 15:30:00').getTime();
  const confirmationDeadline = new Date('September 30, 2026 15:30:00').getTime();
  const urlParams = new URLSearchParams(window.location.search);
  const invitationId = urlParams.get('id');

  const [guestData, setGuestData] = useState({});
  const [initialLoading, setInitialLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const guestRef = ref(database, `events/${eventId}/guests/${invitationId}`);
    const unsubscribe = onValue(
      guestRef,
      snapshot => {
        const data = snapshot.val();
        if (data) {
          setGuestData(data);
        } else {
          setGuestData(null);
        }
        setInitialLoading(false);
      },
      err => {
        setError(err.message);
        setInitialLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const updateGuest = async (id, updatedData, onError, onComplete) => {
    setLoading(true);
    try {
      await update(ref(database, `events/${eventId}/guests/${id}`), updatedData);
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
      eventDate,
      confirmationDeadline,
      invitationId,
      guestData,
      initialLoading,
      loading,
      error,
      updateGuest
    }}>
      {children}
    </DataContext.Provider>
  );
}
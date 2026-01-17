import { createContext , useEffect, useState} from "react";
import { ref, onValue, push, update, remove } from "firebase/database";
import database from '../firebase/firebaseConfig';

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const eventDate = new Date('October 18, 2026 15:30:00').getTime();
  const urlParams = new URLSearchParams(window.location.search);
  const invitationId = urlParams.get('id');

  const [guestData, setGuestData] = useState({});
  const [initialLoading, setInitialLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const guestRef = ref(database, `events/demo2026/guests/${invitationId}`);
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

  const updateGuest = async (id, updatedData, onSuccess, onError, onComplete) => {
    setLoading(true);
    try {
      await update(ref(database, `events/demo2026/guests/${id}`), updatedData);
      onSuccess?.();
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
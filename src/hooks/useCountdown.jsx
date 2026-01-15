import { useState, useEffect } from 'react';

export function useCountdown(target) {
    const targetDate = new Date(target);
    const [countDown, setCountDown] = useState(targetDate.getTime() - new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(targetDate.getTime() - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
};
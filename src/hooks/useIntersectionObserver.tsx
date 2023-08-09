import { SetStateAction, useEffect, useRef, useState, Dispatch } from 'react';

export const useIntersectionObserver = (callback: () => void): Dispatch<SetStateAction<null>> => {
  const [observationTarget, setObservationTarget] = useState(null);
  const observer = useRef(
    new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (!entry.isIntersecting) return;
        callback();
      },
      { threshold: 1 },
    ),
  );

  useEffect(() => {
    const currentTarget = observationTarget;
    const currentObserver = observer.current;
    if (currentTarget) {
      currentObserver.observe(currentTarget);
    }
    return () => {
      if (currentTarget) {
        currentObserver.unobserve(currentTarget);
      }
    };
  }, [observationTarget]);

  return setObservationTarget;
};

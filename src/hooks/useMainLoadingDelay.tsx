import React, { createContext, useContext, useEffect, useState } from "react";

type TLoadingDelayContext = {
  isLoadingDelayFinished: boolean;
}

const mainLoadingDelayContext = createContext<TLoadingDelayContext | undefined>(undefined);

interface LoadingDelayProviderProps {
  children: React.ReactNode;
  delayMs: number;
}

export const LoadingDelayProvider: React.FC<LoadingDelayProviderProps> = ({ children, delayMs }) => {
  const [isLoadingDelayFinished, setIsLoadingDelayFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingDelayFinished(true);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs]);

  return (
    <mainLoadingDelayContext.Provider value={{ isLoadingDelayFinished }}>
      {children}
    </mainLoadingDelayContext.Provider>
  );
};

export const useMainLoadingDelay = (): TLoadingDelayContext => {
  const context = useContext(mainLoadingDelayContext);
  if (!context) {
    throw new Error("useLoadingDelay must be used within a LoadingDelayProvider");
  }
  return context;
};

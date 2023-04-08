import React, { createContext, useState } from 'react';

type ContextType = {
  status?: boolean;
  login: () => void;
  logout: () => void;
};

type ContextProviderType = {
  children: React.ReactNode;
};

export const DataContext = createContext<ContextType>({
  status: false,
  login: () => {},
  logout: () => {},
});

export const DataContextProvider = ({ children }: ContextProviderType) => {
  const [status, setStatus] = useState<boolean>(false);

  const loginHandler = () => {
    setStatus(true);
  };
  const logoutHandler = () => {
    setStatus(false);
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value: ContextType = {
    status,
    login: loginHandler,
    logout: logoutHandler,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

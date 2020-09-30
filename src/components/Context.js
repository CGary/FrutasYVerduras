import React, { createContext, useState } from "react";

export const StoreContext = createContext();

export default function Provider({ children }) {
  //verifica si autenticación
  const [isAuth, setIsAuth] = useState(false);

  const [state1, setState1] = useState(false);

  const store = {
    isAuth,
    activateAuth: () => {
      setIsAuth(true);
    },
    removeAuth: () => {
      setIsAuth(false);
    },
    state1,
    setState1,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

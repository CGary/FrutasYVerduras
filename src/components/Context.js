import React, { createContext, useState } from "react";

export const StoreContext = createContext();

export default function Provider({ children }) {
  //verifica si autenticación
  const [isAuth, setIsAuth] = useState(false);
  //verifica si se tiene que mostrar el onboarding

  const store = {
    isAuth,
    activateAuth: () => {
      setIsAuth(true);
    },
    removeAuth: () => {
      setIsAuth(false);
    },
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

import { createContext, useMemo, useReducer, useEffect } from "react";
import { initializer, reducer } from "./reducer";
import { setLocalStorage } from "./localStorage";

export const themes = {
  light: {
    font: 'black',
    background: 'white'
  },
  dark: {
    font: 'white',
    background: 'black'
  }
};

export const initialState = { theme: themes.light, data: [] }

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [{ theme, data }, dispatch] = useReducer (reducer, initialState, initializer);

  const contextValue = useMemo(() => {
    return [{ theme, data }, dispatch];
  }, [{theme, data}, dispatch])

  useEffect(() => {
    setLocalStorage("theme", theme);
  }, [theme])


  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};


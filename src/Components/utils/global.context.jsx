import { createContext, useState, useMemo, useEffect } from "react";
import { callDentists } from "../../Services/dentistas.service";

export const initialState = { theme: "", data: [] }

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

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [data, setData] = useState([]);
  useEffect(() => {
    handleCallDentist();

  }, [])
  const handleCallDentist = async () => {
    try {
      const dentistas = await callDentists();
      setData(dentistas)
      console.log(dentistas);

    } catch (error) {
      console.error(error)
    }

  }
  const dentistasValue = useMemo(() => ({
    data,
    setData
  }), [data, setData])

  const [theme, setTheme] = useState(themes.light);
  const handleChangeTheme = () => {
    if (theme === themes.dark) setTheme(themes.light)
    if (theme === themes.light) setTheme(themes.dark)
  }

  const themeValue = useMemo(() => ({
    theme,
    handleChangeTheme
  }), [theme, handleChangeTheme])
  console.log(themeValue);


  return (
    <ContextGlobal.Provider value={{ data: dentistasValue.data, theme: themeValue }}>
      {children}
    </ContextGlobal.Provider>
  );
};


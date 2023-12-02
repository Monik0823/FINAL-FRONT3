
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextGlobal } from "./Components/utils/global.context";
import { useContext } from "react";
import { setDentists } from "./Components/utils/reducer";
import { useEffect } from "react";
import { callDentists } from "./Services/dentistas.service";

function App() {
  const [{ theme }, dispatch] = useContext(ContextGlobal);

  useEffect(() => {
    handleCallDentist();
  }, []);

  const handleCallDentist = async () => {
    try {
      const dentistas = await callDentists();
      dispatch(
        setDentists(dentistas)
      )
      console.log(dentistas);

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={"App " + theme.font == "black" ? "dark" : ""} style={{ background: theme.background, color: theme.font }}>

      <Navbar />
      <Outlet />
      <Footer />

    </div>

  );
}

export default App;

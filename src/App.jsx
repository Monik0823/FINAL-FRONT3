
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import { ContextGlobal } from "./Components/utils/global.context";
import { useContext } from "react";



function App() {

  const {theme} = useContext(ContextGlobal);

  return (
      <div className= {"App " + theme.theme.font == "black" ? "dark" : ""} style={{background: theme.theme.background, color:theme.theme.font}}>

          <Navbar/>
          <Outlet/>
          <Footer/>

      </div>
      
  );
}

export default App;

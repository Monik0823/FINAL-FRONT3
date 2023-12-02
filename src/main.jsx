import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from "./Components/utils/global.context";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home'
import Favs from './Routes/Favs'
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import NotFount from './Routes/NotFount';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}  >
            <Route index element={<Home />} />
            <Route path='/dentista/:id' element={<Detail />} />
            <Route path='/favs' element={<Favs />} />
            <Route path='/contacto' element={<Contact />} />
            <Route path='*' element={<NotFount />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>

  </React.StrictMode>
);

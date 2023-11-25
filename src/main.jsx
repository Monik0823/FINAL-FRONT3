import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home'
import Favs from './Routes/Favs'
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import NotFount from './Routes/NotFount';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}  >
          <Route path='/home' element={<Home />} />
          <Route path='/detail/:id?' element={<Detail />} />
          <Route path='/fav' element={<Favs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFount />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

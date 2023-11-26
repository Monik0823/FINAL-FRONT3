import React, { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';
import { Link } from 'react-router-dom'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { theme } = useContext(ContextGlobal)


  return (

    <nav className='navbar'>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <ul type="none" className='menu'>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/favs'>Favorite</Link>
        </li>
        <li>
          <Link to='/contacto'>Contact</Link>
        </li>
      </ul>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={theme.handleChangeTheme}
        style={{ background: theme.theme.background, color: theme.theme.font }}>Change theme</button>
    </nav>
  )
}

export default Navbar
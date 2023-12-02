import React, { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';
import { Link } from 'react-router-dom'
import { changeTheme } from './utils/reducer';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Navbar = () => {
  const [state, dispatch] = useContext(ContextGlobal);

  const handleChangeTheme = () => {
    console.log('here')
    console.log({state})
    dispatch(changeTheme());
  }

  return (

    <nav className='navbar'>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <ul className='menu'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/favs'>Favorite</Link>
        </li>
        <li>
          <Link to='/contacto'>Contact</Link>
        </li>
      </ul>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleChangeTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar
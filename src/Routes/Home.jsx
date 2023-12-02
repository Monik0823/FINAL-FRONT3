import React, { useContext } from 'react';
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [{data}] = useContext(ContextGlobal);

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {
          data?.map ((dentista) => (
            <Card 
              name={dentista.name}
              username={dentista.username}
              id={dentista.id}
              key={dentista.id}
            />
          ))
        }
      </div>
    </main>
  )
}

export default Home
import React from "react";
import { Link } from 'react-router-dom'
import { useState } from "react";

const Card = ( {name, username, id , removeFromFavs} ) => {

  const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem("favs"))?.some((card) => card.id === id) || false)

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage


    const favs = JSON.parse(localStorage.getItem("favs")) || []

    if (!favs.some((card) => card.id == id)) {
      favs.push({ name, username, id })

      localStorage.setItem("favs", JSON.stringify(favs))
      setFavorite(true)
    } else {
      const newFav = favs.filter((card) => card.id !== id)
      localStorage.setItem("favs", JSON.stringify(newFav))
      setFavorite(false)
      if (removeFromFavs) {
        removeFromFavs(id);
      }
    }
  }


return (
  <div className="card">
    {/* En cada card deberan mostrar en name - username y el id */}
    {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
    <Link to={`/dentista/${id}`} >
      <img src="./images/doctor.jpg" alt="Doctor" /></Link>
    <h2>{name}</h2>
    <h3>{username}</h3>
    <h3>{id}</h3>
    


    {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
    <button onClick={addFav} className="favButton">{favorite ? "❤️" : "🤍"}</button>
  </div>
);
}

export default Card;

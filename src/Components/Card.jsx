import React from "react";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  const [vector, setVector] = useState([])

  useEffect(()=>{
    getData()
},[])

const getData = async () =>{
  const data = await
  fetch('https://jsonplaceholder.typicode.com/users')
  const convert = await data.json()
  console.log(data);
  setVector(convert)
  console.log(setVector);
}


  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <h3>Fetch</h3>
            <div>
                <ul>
                    {vector.map(obj=>(
                        <li key={obj.id}>
                            {obj.name}
                        </li>
                    ))}
                </ul>
            </div>



        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;

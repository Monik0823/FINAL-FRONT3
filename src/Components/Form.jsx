import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [resultado, setResultado] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre.length <= 5 || !emailRegex.test(email)) {
      alert("Por favor verifique su información nuevamente")
    } 
    if (!emailRegex.test(email)) {
      setErrorEmail(true);
    }else {
      const mensaje = `¡¡ Gracias ${nombre}, te contactaremos cuanto antes vía mail !!`;
      setResultado(mensaje);
    }

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre: </label>
          <input
            type="text"
            placeholder="Ingresa tu nombre completo"
            id='nombre'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            placeholder="Ingresa tu email"
            id='email'
            value={email}
            onChange={(e) => {setEmail(e.target.value)
              setErrorEmail(false)
            }}
          />
        </div>
        <div>
          <button type='submit'>
            Enviar
          </button>
        </div>

      </form>
      {resultado && <p>{resultado}</p>}
    </div>
  );
};

export default Form;

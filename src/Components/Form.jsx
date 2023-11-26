import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorNombre, setErrorNombre] = useState(false);
  const [resultado, setResultado] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    let valid = true;
  
    if (nombre.trim().length <= 5 || /^\s|\s$/.test(nombre)) {
      setErrorNombre(true);
      valid = false;
    } else {
      setErrorNombre(false);
    }
  
    if (!emailRegex.test(email) || /\s/.test(email)) {
      setErrorEmail(true);
      valid = false;
    } else {
      setErrorEmail(false);
    }
  
    if (valid) {
      const mensaje = `¡Gracias ${nombre}, te contactaremos pronto vía email!`;
      setResultado(mensaje);
    } else {
      setResultado("");
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
            onChange={(e) => {
              setNombre(e.target.value);
              setErrorNombre(false);
            }}
          />
          {errorNombre && (
            <p className="mensaje-error">El nombre debe tener más de 5 caracteres y no contener espacios en blanco.</p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            placeholder="Ingresa tu email"
            id='email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrorEmail(false);
            }}
          />
          {errorEmail && (
            <p className="mensaje-error">Por favor ingresa un email válido sin espacios en blanco.</p>
          )}
        </div>
        <div>
          <button type='submit'>
            Enviar
          </button>
        </div>

      </form>
      {resultado && <p className="mensaje-exitoso">{resultado}</p>}
    </div>
  );
};

export default Form;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { callDentistId } from '../Services/dentistas.service'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const params = useParams()

  const [data, setData] = useState([]);
  useEffect(() => {
    handleCallDentistId();

  }, [])
  const handleCallDentistId = async () => {
    try {
      const dentista = await callDentistId(params.id);
      setData(dentista)
      console.log(dentista);

    } catch (error) {
      console.error(error)
    }

  }
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist {params.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

      <table>

      <thead>
        <tr>

          <th>Name</th>

          <th>Email</th>

          <th>Phone</th>

          <th>Web Site</th>

        </tr>
        </thead>

        <tbody>
        <tr>

          <td>{data.name}</td>

          <td>{data.email}</td>

          <td>{data.phone}</td>

          <td>{data.website}</td>

        </tr>
        </tbody>

      </table>




    </>
  )
}

export default Detail
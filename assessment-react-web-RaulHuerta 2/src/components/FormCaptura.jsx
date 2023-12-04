import { useState } from "react";
import "./Styles/FormCaptura.css";

// eslint-disable-next-line react/prop-types
const FormCaptura = ({ onFormSubmit }) => {
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [correo, setCorreo] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const datos = { nombre, edad, correo };
      onFormSubmit(datos);
      setNombre("");
      setEdad("");
      setCorreo("");
    };
  
    const isDisabled = !nombre || !edad || !correo; 
  
    return (
      <form className="form-captura" onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <br />
        <label>
          Edad:
          <input
            type="number"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </label>
        <br />
        <label>
          Correo electrónico:
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" disabled={isDisabled}>
          Mostrar
        </button>
      </form>
    );
  };
  
  export default FormCaptura;
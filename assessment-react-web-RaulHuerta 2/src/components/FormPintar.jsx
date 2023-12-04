/* eslint-disable react/prop-types */
import "./Styles//FormPintar.css";

const FormPintar = ({ datos }) => {
  return (
    <div className="form-pintar">
      {datos ? (
        <>
          <h2>Datos Capturados:</h2>
          <p>Nombre: {datos.nombre}</p>
          <p>Edad: {datos.edad}</p>
          <p>Correo electrónico: {datos.correo}</p>
        </>
      ) : (
        <p>No hay datos capturados. Por favor, capture los datos primero.</p>
      )}
    </div>
  );
};

export default FormPintar;
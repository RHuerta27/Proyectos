import { useEffect, useState } from "react";
import { SERVICE_CONFIG } from "../utils/Constants";
import "./Styles/ListarServicio.css";

const ListarServicio = () => {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(SERVICE_CONFIG.baseURL);
        const data = await response.json();
        setServicios(data.results);
      } catch (error) {
        console.error("Error al obtener datos del servicio:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="listar-servicio-container">
      <h2>Listado de Servicios</h2>
      <ul className="servicios-list">
        {servicios.map((servicio) => (
          <li key={servicio.name}>{servicio.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListarServicio;
import { useEffect, useState } from "react";
import InstructionsOne from "./components/InstructionsOne";
import InstructionsTwo from "./components/InstructionsTwo";
import FormCaptura from "./components/FormCaptura";
import FormPintar from "./components/FormPintar";
import ListarServicio from "./components/ListarServicio"; // Importa el nuevo componente

const initialStateForm = JSON.parse(localStorage.getItem("formulario")) || [];

function App() {
  const [formulario, setFormulario] = useState(initialStateForm);

  useEffect(() => {
    localStorage.setItem("Datos", JSON.stringify(formulario));
  }, [formulario]);

  const addFormulario = (datos) => {
    setFormulario([...formulario, datos]);
  };

  return (
    <>
      <div className="container mb-2">
        <InstructionsOne />
        <FormCaptura onFormSubmit={addFormulario} />
        <FormPintar datos={formulario[formulario.length - 1]} />

        <InstructionsTwo />
        {/* Aquí debes incluir el nuevo componente */}
        <ListarServicio />
      </div>
    </>
  );
}

export default App;
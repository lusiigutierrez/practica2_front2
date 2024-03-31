import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import Axios from "npm:axios";
import Deleteform from "../components/deleteform.tsx";

const DeleteS: FunctionComponent = () => {
  const [name, setName] = useState("");
  const [creator, setCreator] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const eliminar = async (): Promise<void> => {
    try {
      if (!name || !creator) {
        throw new Error(
          "Por favor, ingrese el nombre del superhéroe y el nombre del creador.",
        );
      }

      console.log("Data del formulario:", name, creator); // Agregar este console.log para verificar los datos

      const API_URL = "https://supermondongo.deno.dev/";

      const exists = name;

      if (exists) {
        const headers = {
          "Content-Type": "application/json",
        };

        const datacreator = {
          creator: creator,
        };

        const response = await Axios.delete(
          `https://supermondongo.deno.dev/${name}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            data: JSON.stringify(datacreator),
          },
        );

        // Agregar console.log para verificar la respuesta
        console.log("Respuesta del servidor:", response);
      }
    } catch (error) {
      <p>Ha habido un error</p>;
    }
  };

  return (
    <div>
      <Deleteform />
    </div>
  );
};

export default DeleteS;

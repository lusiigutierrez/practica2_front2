import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { superHeroe } from "../types.ts";
import DeleteS from "./deleteSuper.tsx";

const Eliminar: FunctionComponent<superHeroe[]> = (props) => {
  const superHeroes = props.docs;
  const [showDeleteForm, setShowDeleteForm] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteForm(true);
  };

  return (
    <div>
      <div class="heroelist">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Sound</th>
            </tr>
          </thead>
          <tbody>
            {superHeroes.map((hero) => (
              <tr key={hero.name}>
                <td>{hero.name}</td>
                <td>
                  <img
                    src={hero.image}
                    alt={hero.name}
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>
                <td>
                  <audio controls>
                    <source src={hero.sound} type="audio/mp3" />
                  </audio>
                </td>
                <td>
                  <a href="/eliminarsuper">
                  <button type="button" onClick={handleDeleteClick}>
                    Eliminar superheroe
                  </button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Eliminar;

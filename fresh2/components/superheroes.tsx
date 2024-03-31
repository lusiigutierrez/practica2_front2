import { FunctionComponent } from "preact";
import { superHeroe } from "../types.ts";

const Super: FunctionComponent<superHeroe[]> = (props) => {
  const superHeroes = props.docs; // Ensure superHeroes is defined

  return (
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Super;

import { FunctionComponent } from "preact";

const Deleteform: FunctionComponent = () => {
  return (
    <form class="delete" action="/eliminarsuper" method="post">
      <h1>Eliminar a un superheroe</h1>
      <input type="text" name="name" placeholder="Nombre del personaje ..." />
      <input
        type="text"
        name="creator"
        placeholder="Creador del personaje ..."
      />
      <button type="submit">Eliminar</button>
    </form>
  );
};

export default Deleteform;

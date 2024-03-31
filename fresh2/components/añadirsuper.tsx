import { FunctionComponent } from "preact";

const Addsuper: FunctionComponent = () => {
  return (
    <form class="Add" action="/add" method="post">
      <h1>Añadir nuevo superheroe</h1>
      <input type="text" name="name" placeholder="Nombre del personaje ..." />
      <input
        type="text"
        name="image"
        placeholder="URL de la imagen del personaje ..."
      />
      <input
        type="text"
        name="sound"
        placeholder="URL del sonido del personaje ..."
      />
      <input
        type="text"
        name="creator"
        placeholder="Creator del personaje ..."
      />
      <button type="submit">Añadir superheroe!</button>
    </form>
  );
};

export default Addsuper;

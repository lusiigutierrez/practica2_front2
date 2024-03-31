import { FunctionComponent } from "preact";

const Buscarsuper: FunctionComponent = () => {
  return (
    <form class="AddSuper" action="/buscarOne" method="post">
      <h1>Buscar un superheroe</h1>
      <input type="text" name="name" placeholder="Nombre del personaje ..." />
      <button type="submit">Buscar !!</button>
    </form>
  );
};

export default Buscarsuper;

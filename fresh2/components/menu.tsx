import { FunctionComponent } from "preact";

type MenuProps = {
  selected:
    | "Lista superheroes"
    | "Añadir superheroe"
    | "Buscar un superheroe"
    | "Ver un superheroe";
};
const Menu: FunctionComponent<MenuProps> = ({ selected }) => {
  return (
    <div class="menu">
      <a href="/" class={selected === "Lista superheroes" ? "selected" : ""}>
        Lista de los superheroes
      </a>
      <a href="/add" class={selected === "Añadir superheroe" ? "selected" : ""}>
        Añadir superheroe
      </a>
      <a
        href="/buscarOne"
        class={selected === "Buscar un superheroe" ? "selected" : ""}
      >
        Buscar un superheroe
      </a>
      <a
        href="/getonesuper/ButifarraGirl"
        class={selected === "Ver un superheroe" ? "selected" : ""}
      >
        Ver un superheroe
      </a>
    </div>
  );
};

export default Menu;

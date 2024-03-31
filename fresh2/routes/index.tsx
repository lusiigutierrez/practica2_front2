import Eliminar from "../islands/eliminar.tsx";
import { superHeroe } from "../types.ts";
import Axios from "npm:axios";

export default async function ruta() {
  try {
    const API_URL = Deno.env.get("API_URL");

    const response = await Axios.get(`${API_URL}`);
    const superHeroesAPI: superHeroe[] = response.data;

    return (
      <div
        style={{
          backgroundImage:
            "url(https://images.hdqwalls.com/wallpapers/batman-and-spiderman-4k-rr.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <Eliminar docs={superHeroesAPI} />
      </div>
    );
  } catch (e) {
    return <div>Ha habido un error</div>;
  }
}

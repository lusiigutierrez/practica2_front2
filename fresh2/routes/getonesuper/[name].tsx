import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { superHeroe } from "../../types.ts";
import Super from "../../components/superheroes.tsx";
import Axios from "npm:axios";

export default async function ruta(_: unknown, ctx: FreshContext) {
  try {
    const { name } = ctx.params;
    const API_URL = Deno.env.get("API_URL");

    const response = await Axios.get(`${API_URL}${name}`);
    const superHeroesAPI: superHeroe[] = response.data;
    return (
      <div
        style={{
          backgroundImage:
            "url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcW4xdG85dGN3c3VpNG1ocmU0a2s0dTRwNnVvNGFneWljNWl0a3QxYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xGdvlOVSWaDvi/giphy.gif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <Super docs={superHeroesAPI} />;
      </div>
    );
  } catch (e) {
    return <div>Ha habido un error</div>;
  }
}

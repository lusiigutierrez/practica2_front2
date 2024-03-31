import { FreshContext, Handlers } from "$fresh/server.ts";
import Buscarsuper from "../components/buscar.tsx";

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    try {
      const form = await req.formData();
      const data = {
        name: form.get("name"),
      };
      const exists = data.name;

      let location = "/";
      if (exists) {
        location = `/getonesuper/${data.name}`;
      } else {
        location = "/no";
      }

      return new Response("", {
        status: 303,
        headers: {
          "Location": location,
        },
      });
    } catch (error) {
      return new Response(error.message, {
        status: 500,
      });
    }
  },
};

const Page = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://www.lavozdegalicia.es/default/2015/02/12/00121423764927311777512/Foto/wally.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Buscarsuper />
    </div>
  );
};

export default Page;

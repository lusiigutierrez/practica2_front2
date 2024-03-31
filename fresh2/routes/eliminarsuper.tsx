import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import Deleteform from "../components/deleteform.tsx";

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    try {
      const form = await req.formData();
      const data = {
        name: form.get("name"),
        creator: form.get("creator"),
      };

      console.log("Data del formulario:", data); // Agregar este console.log para verificar los datos

      const API_URL = Deno.env.get("API_URL");
      if (!API_URL) {
        throw new Error(
          "API_URL no está definida en las variables de entorno.",
        );
      }

      const response = await fetch(`${API_URL}`);
      if (!response.ok) {
        throw new Error("Error al obtener los datos de la API.");
      }
      const responseData = await response.text();
      const exists = data.name;

      if (exists) {
        const headers = {
          "Content-Type": "application/json",
        };

        const datacreator = {
          creator: data.creator,
        };

        const response = await fetch(
          `https://supermondongo.deno.dev/${data.name}`,
          {
            method: "DELETE",
            headers: headers,
            body: JSON.stringify(datacreator),
          },
        );

        // Agregar console.log para verificar la respuesta
        console.log("Respuesta del servidor:", response);
      }

      return new Response("", {
        status: 303,
        headers: {
          "Location": "/",
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
          "url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWM5MTlpY2tuZTRzZWd4ZnA3ZWkzZjF0NjRhbHNjOHEwOGRvMXNucCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/H3YVOci4pyQx3THHAV/giphy.gif)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Deleteform />
    </div>
  );
};

export default Page;

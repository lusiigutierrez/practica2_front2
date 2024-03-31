import { Handlers } from "$fresh/server.ts";
import Addsuper from "../components/añadirsuper.tsx";
import Axios from "npm:axios";

export const handler: Handlers = {
  POST: async (req: Request) => {
    try {
      const form = await req.formData();
      const data = {
        name: form.get("name"),
        image: form.get("image"),
        sound: form.get("sound"),
        creator: form.get("creator"),
      };

      const response = await Axios.post(
        "https://supermondongo.deno.dev/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

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
          "url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWVqaTEzcDNpM29zbW82MWpweHV5eHV5NjVudWE3ZTlucWdlazY2biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vyAZ6iYWp1je8/giphy.gif)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Addsuper />
    </div>
  );
};

export default Page;

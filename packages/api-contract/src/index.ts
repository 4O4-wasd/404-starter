import { Hono } from "hono";

type Bindings = {
   Bindings: Cloudflare.Env;
};

const app = new Hono<Bindings>().get("/", async (c) => {
   return c.text("Hello frm dsfAdpdsdsi");
});

export type AppType = typeof app;

export default app;

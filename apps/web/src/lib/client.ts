import { AppType } from "@repo/api-contract";
import { hc } from "hono/client";

export const client = hc<AppType>(
   process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000"
);

import { client } from "@/lib/client";
import { Suspense } from "react";

const Page = async () => {
   const text = await (await client.index.$get()).text();

   return <div className="">{text}</div>;
};

export default Page;



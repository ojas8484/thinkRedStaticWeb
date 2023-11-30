import type { APIContext } from "astro";

export async function get({locals}: APIContext) => {
  // the type KVNamespace comes from the @cloudflare/workers-types package
  const { mail_api } = locals.runtime.env;

  return {
    // ...
  };
};
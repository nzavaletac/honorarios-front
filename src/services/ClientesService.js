import { URL_BACKEND } from "../../src/environments/environments";

export const createCliente = async (obj) => {
  const result = await fetch(`${URL_BACKEND}/clientes`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-type": "application/json",
    },
  });

  return await result.json();
};

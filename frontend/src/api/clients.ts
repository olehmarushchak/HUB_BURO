import { Clients } from "../types/clients";
import { client } from "../utils/client";

export const createNewClient = (newClient: Clients) => {
  return client.post("/client", newClient);
};

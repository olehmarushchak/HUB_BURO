import { Projects } from "../types/projects.type.ts";
import { client } from "../utils/client.ts";

export const getAllProject = () => {
  return client.get<Projects[]>("/projects");
};



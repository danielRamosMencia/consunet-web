export type Project = {
  id: string;
  name: string;
  code: string;
};

export type UserProjects = {
  data: Project[];
  message: string;
};

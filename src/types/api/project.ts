export type Project = {
  id: string;
  name: string;
  code: string;
};

export type UserProjects = {
  data: Project[];
  message: string;
};

export type ProjectDevices = {
  data?: {
    id: string;
    device: string;
    activity: string;
    max_consumption: number;
    min_consumption: number;
  }[];
  message: string;
};

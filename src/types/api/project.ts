export type Project = {
  id: string;
  name: string;
  code: string;
};

export type UserProjects = {
  data: Project[];
  message: string;
};

export type ProjectDevice = {
  id: string;
  device: string;
  activity: string;
  max_consumption: number;
  min_consumption: number;
}

export type ProjectDevices = {
  data?: ProjectDevice[];
  message: string;
};

export type ProjectDetail = {
  data: {
    id: string;
    name: string;
    code: string;
    connection_name: string;
    created_at: Date;
    updated_at: Date;
  };
  message: string;
};

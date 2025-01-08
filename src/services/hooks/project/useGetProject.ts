import axiosClient from "@services/configs/axios";
import { ErrorResponse } from "@shared/index";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ProjectDetail } from "@api/project";

const fetchProject = async (id: string): Promise<ProjectDetail> => {
  const response = await axiosClient.get<ProjectDetail>(`/projects/${id}`);
  return response.data;
};

export const useGetProject = (id: string) => {
  return useQuery<ProjectDetail, AxiosError<ErrorResponse>>({
    queryKey: ["project", id],
    queryFn: () => fetchProject(id),
  });
};

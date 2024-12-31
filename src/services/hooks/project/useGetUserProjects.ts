import axiosClient from "@services/configs/axios";
import { ErrorResponse } from "@shared/index";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { UserProjects } from "@api/project";

const fetchUserProjects = async (): Promise<UserProjects> => {
  const response = await axiosClient.get<UserProjects>("/projects");
  return response.data;
};

export const useGetUserProjects = () => {
  return useQuery<UserProjects, AxiosError<ErrorResponse>>({
    queryKey: ["user-projects"],
    queryFn: fetchUserProjects,
  });
};

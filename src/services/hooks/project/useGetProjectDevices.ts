import axiosClient from "@services/configs/axios";
import { ErrorResponse } from "@shared/index";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ProjectDevices } from "@api/project";

const fetchProjectDevices = async (id: string): Promise<ProjectDevices> => {
  const response = await axiosClient.get<ProjectDevices>(
    `/projects/devices/${id}`
  );
  return response.data;
};

export const useGetProjectDevices = (id: string) => {
  return useQuery<ProjectDevices, AxiosError<ErrorResponse>>({
    queryKey: ["project-devices", id],
    queryFn: () => fetchProjectDevices(id),
  });
};

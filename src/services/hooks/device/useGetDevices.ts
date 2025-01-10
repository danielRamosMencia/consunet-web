import axiosClient from "@services/configs/axios";
import { ErrorResponse } from "@shared/index";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { SelectOptions } from "@shared/index";

const fetchDevices = async (): Promise<SelectOptions> => {
  const response = await axiosClient.get<SelectOptions>("/devices");

  return response.data;
};

export const useGetDevices = () => {
  return useQuery<SelectOptions, AxiosError<ErrorResponse>>({
    queryKey: ["devices"],
    queryFn: fetchDevices,
  });
};

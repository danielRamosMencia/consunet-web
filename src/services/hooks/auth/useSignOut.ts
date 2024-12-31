import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponse } from "@shared/index";
import axiosClient from "@services/configs/axios";
import { LogoutResponse } from "@api/auth";

const SignOut = async (): Promise<LogoutResponse> => {
  const response = await axiosClient.post<LogoutResponse>("/auth/sign-out");
  return response.data;
};

export const useSignOut = () => {
  return useMutation<LogoutResponse, AxiosError<ErrorResponse>, void>({
    mutationFn: SignOut,
    mutationKey: ["sign-out"],
  });
};

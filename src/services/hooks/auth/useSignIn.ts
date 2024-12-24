import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponse } from "@shared/index";
import { LoginResponse } from "@api/auth";
import { LoginData } from "@schemas/loginSchema";
import axiosClient from "@services/configs/axios";

const SignIn = async (data: LoginData): Promise<LoginResponse> => {
  const response = await axiosClient.post<LoginResponse>("/auth/sign-in", data);
  return response.data;
};

export const useSignIn = () => {
  return useMutation<LoginResponse, AxiosError<ErrorResponse>, LoginData>({
    mutationFn: SignIn,
    mutationKey: ["sign-in"],
  });
};

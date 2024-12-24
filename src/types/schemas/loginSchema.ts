import { z } from "zod";

export const LoginSchema = z.object({
  username: z
    .string({
      required_error: "El usuario es requerido",
    })
    .min(4, {
      message: "El usuario debe tener al menos 4 caracteres",
    }),
  email: z
    .string({
      required_error: "El email es requerido",
    })
    .email({
      message: "El email no es válido",
    }),
  password: z
    .string({
      required_error: "La contraseña es requerida",
    })
    .min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    }),
});

export type LoginData = z.infer<typeof LoginSchema>;

import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string({
      required_error: "El usuario es requerido",
    })
    .min(4, {
      message: "El usuario debe tener al menos 4 caracteres",
    }),
  password: z
    .string({
      required_error: "La contraseña es requerida",
    })
    .min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    }),
});

export type loginData = z.infer<typeof loginSchema>;

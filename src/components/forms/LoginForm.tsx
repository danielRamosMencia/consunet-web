import Button from "@components/ui/button/Button";
import { loginData, loginSchema } from "./schemas/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "@components/ui/input/Input";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: loginData) => {
    console.log("Form submitted");
    console.log("Data", JSON.stringify(data, undefined, 2));
  };

  const onCancel = () => {
    console.log("Form canceled");
  };

  return (
    <div className="container m-auto border p-4 w-1/2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 my-2"
      >
        <InputField
          id="username"
          label="Nombre de usuario"
          placeholder="Ingrese su nombre de usuario"
          type="text"
          register={register("username")}
          error={errors.username}
        />

        <InputField
          id="password"
          label="Contraseña"
          placeholder="Ingrese su contraseña"
          type="password"
          register={register("password")}
          error={errors.password}
        />

        <div className="flex gap-2 items-end justify-end">
          <Button key={"login-button-submit"} type="submit" variant="primary">
            Ingresar
          </Button>
          <Button
            key={"login-button-cancel"}
            onClick={onCancel}
            variant="cancel"
          >
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

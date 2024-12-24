import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginSchema, LoginData } from "@schemas/loginSchema";
import Button from "@components/ui/button/Button";
import Input from "@components/ui/input/Input";
import { useContext } from "react";
import { AuthContext } from "@context/AuthContext";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
  });

  const navigate = useNavigate();

  const { setAuthenticated, setUsername, setEmail } = useContext(AuthContext);

  const onSubmit = (data: LoginData) => {
    console.log("Form submitted");
    console.log("Data", JSON.stringify(data, undefined, 2));
    setAuthenticated(true);
    setUsername(data.username);
    setEmail(data.username + "@consunet.com");
    navigate("/projects");
  };

  const onCancel = () => {
    console.log("Form canceled");
    setAuthenticated(false);
    setUsername(null);
    setEmail(null);
  };

  return (
    <div className="container m-auto border p-4 w-1/2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 my-2"
      >
        <Input
          id="username"
          label="Nombre de usuario"
          placeholder="Ingrese su nombre de usuario"
          type="text"
          register={register("username")}
          error={errors.username}
          required
        />

        <Input
          id="password"
          label="Contraseña"
          placeholder="Ingrese su contraseña"
          type="password"
          register={register("password")}
          error={errors.password}
          required
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

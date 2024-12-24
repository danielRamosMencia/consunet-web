import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { LoginSchema, LoginData } from "@schemas/loginSchema";
import Button from "@components/ui/button/Button";
import Input from "@components/ui/input/Input";
import { useContext } from "react";
import { AuthContext } from "@context/AuthContext";
import { useSignIn } from "@services/hooks/useSignIn";


const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
  });

  const { mutate: signIn, isError, error } = useSignIn();

  const navigate = useNavigate();

  const { setAuthenticated, setUsername, setEmail } = useContext(AuthContext);

  const onSubmit = (data: LoginData) => {
    signIn(data, {
      onSuccess: (result) => {
        setAuthenticated(true);
        setUsername(result.user.username);
        setEmail(result.user.email);
        navigate("/projects");
      },
      onError: (error) => {
        console.error("Sign in error", error.code, error.message);
      },
    });
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
          id="email"
          label="Email"
          placeholder="Ingrese su email"
          register={register("email")}
          error={errors.email}
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

      {isError && (
        <div className="text-red-500">
          {error.response?.data && <p>{error.response.data.message}</p>}
        </div>
      )}
    </div>
  );
};

export default LoginForm;

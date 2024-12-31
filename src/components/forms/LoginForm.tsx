import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginData } from "@schemas/loginSchema";
import Button from "@components/ui/button/Button";
import Input from "@components/ui/input/Input";
import { AuthContext } from "@context/AuthContext";
import { useSignIn } from "@services/hooks/auth/useSignIn";
import { useToast } from "@context/ToastContext";

const LoginForm = () => {
  const { setAuthenticated, setUsername, setEmail } = useContext(AuthContext);
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
  });

  const { mutate } = useSignIn();

  const navigate = useNavigate();

  const onSubmit = (data: LoginData) => {
    mutate(data, {
      onSuccess: (result) => {
        console.log("Sign in success", result);
        setAuthenticated(true);
        setUsername(result.user_data.username);
        setEmail(result.user_data.email);

        localStorage.setItem("token", result.token);
        localStorage.setItem("username", result.user_data.username);
        localStorage.setItem("email", result.user_data.email);
        localStorage.setItem("id", result.user_data.id);

        showToast(result.message, "success", 7000);
        navigate("/projects");
      },
      onError: (error) => {
        console.error(
          "Sign in error",
          error.code,
          error.message,
          error.response?.data.code
        );
        showToast(
          error.response?.data.error ??
            "Error desconocido, contacte a soporte técnico",
          "error",
          7000
        );
      },
    });
  };

  const onCancel = () => {
    console.log("Form canceled");
    showToast("Formulario cancelado", "info", 7000);
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
    </div>
  );
};
LoginForm.displayName = "LoginForm";

export default LoginForm;

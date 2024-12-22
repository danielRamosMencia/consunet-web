import Button from "@components/ui/button/Button";

const LoginForm = () => {
  const onSubmit = () => {
    console.log("Form submitted");
  };

  const onCancel = () => {
    console.log("Form canceled");
  };

  return (
    <div>
      <Button
        key={"login-button-submit"}
        onClick={onSubmit}
        type="submit"
        variant="secondary"
      >
        Ingresar
      </Button>
      <Button
        key={"login-button-cancel"}
        onClick={onCancel}
        type="submit"
        variant="cancel"
      >
        Cancelar
      </Button>
    </div>
  );
};

export default LoginForm;

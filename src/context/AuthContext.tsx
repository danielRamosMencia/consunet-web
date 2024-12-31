import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router";

type Props = {
  children?: ReactNode;
};

type AuthContextType = {
  authenticated: boolean;
  setAuthenticated: (newState: boolean) => void;
  username: string | null;
  setUsername: (newUsername: string | null) => void;
  email: string | null;
  setEmail: (newEmail: string | null) => void;
  id: string | null;
  setId: (newId: string | null) => void;
};

const initialVaues: AuthContextType = {
  authenticated: false,
  setAuthenticated: () => {},
  username: null,
  setUsername: () => {},
  email: null,
  setEmail: () => {},
  id: null,
  setId: () => {},
};

const AuthContext = createContext<AuthContextType>(initialVaues);

const AuthProvider = ({ children }: Props) => {
  const [authenticated, setAuthenticated] = useState<boolean>(
    () => localStorage.getItem("authenticated") === "true"
  );
  const [username, setUsername] = useState<string | null>(() =>
    localStorage.getItem("username")
  );
  const [email, setEmail] = useState<string | null>(() =>
    localStorage.getItem("email")
  );
  const [id, setId] = useState<string | null>(() => localStorage.getItem("id"));
  const navigate = useNavigate();

  const updateAuthentication = (newState: boolean) => {
    setAuthenticated(newState);
    localStorage.setItem("authenticated", String(newState));
  };

  const updateUsername = (newUsername: string | null) => {
    setUsername(newUsername);
    localStorage.setItem("username", newUsername || "");
  };

  const updateEmail = (newEmail: string | null) => {
    setEmail(newEmail);
    localStorage.setItem("email", newEmail || "");
  };

  const updateId = (newId: string | null) => {
    setId(newId);
    localStorage.setItem("id", newId || "");
  };

  if (authenticated) {
    if (username === null || email === null) {
      navigate("/login");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        setAuthenticated: updateAuthentication,
        username,
        setUsername: updateUsername,
        email,
        setEmail: updateEmail,
        id,
        setId: updateId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

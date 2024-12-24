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
};

const initialVaues: AuthContextType = {
  authenticated: false,
  setAuthenticated: () => {},
  username: null,
  setUsername: () => {},
  email: null,
  setEmail: () => {},
};

const AuthContext = createContext<AuthContextType>(initialVaues);

const AuthProvider = ({ children }: Props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const navigate = useNavigate();

  if (authenticated) {
    if (username === null || email === null) {
      navigate("/login");
    }
    console.log("Authenticated: ", authenticated, username, email);
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        username,
        setUsername,
        email,
        setEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

import { useState, useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "@context/AuthContext";
import { useToast } from "@context/ToastContext";
import { useSignOut } from "@services/hooks/auth/useSignOut";

const NavBar = () => {
  const { setAuthenticated, setUsername, setEmail, setId, authenticated } =
    useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (): void => {
    setIsOpen(!isOpen);
  };

  const { mutate } = useSignOut();

  const { showToast } = useToast();

  const handleLogout = () => {
    mutate(undefined, {
      onSuccess: (result) => {
        setAuthenticated(false);
        setUsername(null);
        setEmail(null);
        setId(null);

        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("id");

        showToast(result.message, "success", 7000);
      },
      onError: (error) => {
        showToast(
          error.response?.data.error ??
            "Error desconocido, contacte a soporte técnico",
          "error",
          7000
        );
      },
    });
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md w-full mb-2 font-kanit fixed top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink className={"text-2xl font-bold"} to={"/"} end>
              Consunet
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to={"/login"}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500"
                end
              >
                Login
              </NavLink>
              {authenticated && (
                <button
                  onClick={handleLogout}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={handleOpen}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
            to={"/login"}
            className="block py-2 rounded-md text-base font-medium hover:bg-blue-500"
            end
          >
            Login
          </NavLink>
          {authenticated && (
            <button
              onClick={handleLogout}
              className="block py-2 rounded-md text-base font-medium hover:bg-blue-500"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

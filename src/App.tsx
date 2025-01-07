import { Routes, Route, Navigate, Outlet, Link } from "react-router";
import Home from "@pages/home/Home";
import Login from "@pages/login/Login";
import NavBar from "@layouts/navbar/NavBar";
import { useContext } from "react";
import { AuthContext } from "@context/AuthContext";
import Projects from "@pages/projects/Projects";
import ProjectWorkspace from "@pages/projects/ProjectWorkspace";
import Info from "@pages/info/Info";

const PrivateRoutes = () => {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

const App = () => {
  return (
    <>
      <NavBar />
      <div className="font-kanit container m-auto mt-20">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Private routes */}
          <Route element={<PrivateRoutes />}>
            {/* Project Routers */}
            <Route path="/projects">
              <Route index element={<Projects />} />
              <Route path=":id" element={<ProjectWorkspace />} />
              <Route />
            </Route>

            {/* Info Routes */}
            <Route path="/info">
              <Route index element={<Info />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;

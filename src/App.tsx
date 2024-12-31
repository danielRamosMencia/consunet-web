import { Routes, Route, Navigate, Outlet } from "react-router";
import Home from "@pages/home/Home";
import Login from "@pages/login/Login";
import NavBar from "@layouts/navbar/NavBar";
import { useContext } from "react";
import { AuthContext } from "@context/AuthContext";
import Projects from "@pages/projects/Projects";
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
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/info" element={<Info />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;

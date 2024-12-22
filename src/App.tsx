import { Routes, Route } from "react-router";
import Home from "@pages/home/Home";
import Login from "@pages/login/Login";
import NavBar from "@layouts/navbar/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="font-kanit container m-auto mt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";

export default function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

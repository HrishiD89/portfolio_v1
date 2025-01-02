import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";

export default function App() {
  return (
    <>
      <Navbar /> {/* Rendered as a Component */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

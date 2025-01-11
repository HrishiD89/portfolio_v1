import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import { useState } from "react";

export default function App() {
  const [toggleSideBar,setToggleSideBar] = useState(false);

  return (
    <>
      <Navbar toggleSideBar={toggleSideBar} setToggleSideBar={setToggleSideBar} /> 
      <Routes>
        <Route path="/" element={<Home toggleSideBar={toggleSideBar} setToggleSideBar={setToggleSideBar}/>} />
      </Routes>
    </>
  );
}

import { useState } from "react";
import MenuIcon from "../ui/icons/menuIcon";
import CloseIcon from "../ui/icons/CloseIcon";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 left-0 z-[99] bg-white">
      <div className="flex justify-between px-6 py-6 ">
        <span className="flex gap-4 justify-center items-center">
          <span className="w-5 h-5 bg-yellow-400 rounded-full"></span>
          <p className="">Hrishikesh</p>
        </span>

        <ul className="sm:flex gap-4 hidden">
          <a className="" href="#home">Home</a>
          <a className="" href="#about">About me </a>
          <a className="" href="#work">Work</a>
          <a className="" href="#contact">Contact</a>
        </ul>

        {!open ? (
          <span
            onClick={() => setOpen(true)}
            className="sm:hidden cursor-pointer"
          >
            <MenuIcon />
          </span>
        ) : (
          <span
            onClick={() => setOpen(false)}
            className="sm:hidden cursor-pointer"
          >
            <CloseIcon />
          </span>
        )}
      </div>
    </nav>
  );
}

/* eslint-disable react/prop-types */
import MenuIcon from "../ui/icons/MenuIcon";
import CloseIcon from "../ui/icons/CloseIcon";
import { motion } from "motion/react";

export default function Navbar({ toggleSideBar, setToggleSideBar }) {
  return (
    <nav className="w-full sticky top-0  z-[99] bg-white transition-all">
      <div className="flex justify-between px-6 py-6 ">
        <span className="flex gap-4 justify-center items-center">
          <span className="bg-my-icon bg-cover bg-center w-7 h-7 bg-yellow-400 rounded-full"></span>
          <p className="">Hrishikesh Kalita</p>
        </span>

        <ul className="sm:flex gap-4 hidden transition">
          <a
            className="hover:border-b-4 border-b-4 border-white hover:border-b-yellow-500"
            href="#home"
          >
            Home
          </a>
          <a
            className="hover:border-b-4 border-b-4 border-white hover:border-b-yellow-500"
            href="#about"
          >
            About me{" "}
          </a>
          <a
            className="hover:border-b-4 border-b-4 border-white hover:border-b-yellow-500"
            href="#projects"
          >
            Projects
          </a>

          <a
            className="hover:border-b-4 border-b-4 border-white hover:border-b-yellow-500"
            href="#contact"
          >
            Contact
          </a>
        </ul>

        {!toggleSideBar ? (
          <motion.span
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setToggleSideBar((prev) => !prev);
            }}
            className="sm:hidden cursor-pointer "
          >
            <MenuIcon />
          </motion.span>
        ) : (
          <motion.span
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setToggleSideBar((prev) => !prev);
            }}
            className="sm:hidden cursor-pointer"
          >
            <CloseIcon />
          </motion.span>
        )}
      </div>
    </nav>
  );
}

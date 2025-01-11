/* eslint-disable react/prop-types */
import { useCallback } from "react";
import { motion } from "motion/react";

const SideBar = ({ setToggleSideBar }) => {
  const handleToggle = useCallback(() => {
    setToggleSideBar((prev) => !prev);
  }, [setToggleSideBar]);

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: "0" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="text-black bg-gray-100 py-6 overflow-hidden w-4/5 min-h-screen fixed top-0 left-0 z-[99] inline-block sm:hidden "
    >
      <span className="flex  flex-col justify-center px-6">
        <span className="bg-my-icon bg-cover bg-center w-24 h-24 bg-yellow-400 rounded-full"></span>
        <p className="py-4">
          <span className=" text-gray-700 italic">Hrishikesh Kalita</span>
          <br />
          <span className=" text-gray-700 italic">hrishi282k@gmail.com</span>
        </p>
      </span>
      <ul className="flex flex-col transition-all ">
        <div className="text-5xl py-4  border-t-2 px-6 ">
          <a
            className="hover:italic hover:translate-x-4 text-yellow-500"
            href="#home"
            onClick={handleToggle}
          >
            Home
          </a>
        </div>
        <div className="text-4xl py-4 px-6 border-t-2 ">
          <a
            className="hover:italic hover:translate-x-4"
            href="#about"
            onClick={handleToggle}
          >
            About me{" "}
          </a>
        </div>
        <div className="text-4xl py-4 border-t-2 px-6 ">
          <a
            className="hover:italic hover:translate-x-4"
            href="#projects"
            onClick={handleToggle}
          >
            Projects
          </a>
        </div>

        <div className="text-4xl py-4 border-y-2 px-6 ">
          <a
            className="hover:italic hover:translate-x-4"
            href="#contact"
            onClick={handleToggle}
          >
            Contact
          </a>
        </div>
      </ul>
    </motion.div>
  );
};

export default SideBar;

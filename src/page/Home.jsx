/* eslint-disable react/prop-types */
import WorkContainer from "../components/WorkContainer";

import LinkedinIcon from "../ui/icons/LinkedinIcon";
import GitHubIcon from "../ui/icons/GitHubIcon";
import TwitterIcon from "../ui/icons/TwitterIcon";
import { Bounce, ToastContainer } from "react-toastify";
import ContactMe from "../components/ContactMe";
import SideBar from "../components/SideBar";
import { motion } from "motion/react";

const Home = ({ toggleSideBar, setToggleSideBar }) => {
  return (
    <div className="relative w-full h-full">
      <motion.div
      >
      {toggleSideBar && <SideBar setToggleSideBar={setToggleSideBar} />}
      </motion.div>
      <div className="px-6 w-screen h-full flex flex-col gap-6 overflow-hidden transition-all">
        <section id="home" className=" w-full scroll-mt-[76px]">
          <div className="flex gap-6 sm:flex-row flex-col">
            <div className="flex flex-none sm:w-3/5 rounded-2xl sm:bg-about-me bg-cover bg-center relative overflow-hidden  lg:h-screen">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg"></div>

              <div className="relative z-10 p-4   w-full  sm:p-12 text-green-900  sm:text-white  flex flex-col gap-6">
                <div className="text-3xl sm:items-start items-center text-center w-full flex flex-col gap-3">
                  <span>Hey, I&apos;am </span>
                  <span className=" text-yellow-500 sm:inline-block w-full text-5xl text-center sm:text-start">
                    Hrishikesh
                  </span>
                  <span className="text-xl italic  ">Fullstack Developer.</span>
                </div>
                <p className="text-base sm:text-left text-center">
                As a full-stack developer, I enjoy crafting elegant solutions from the front-end to the back-end, bringing human-centered design to life.
                </p>
                <div className="flex gap-6 items-center sm:flex-row flex-col flex-shrink-0">
                  <span className="flex gap-4">
                    <a
                      href="#contact"
                      className="px-4 py-2 bg-yellow-400 flex items-center justify-center text-black rounded-full text-sm w-90"
                    >
                      Contact Me
                    </a>
                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/1y5MaVvuA0vYlZJ4d57QFGUZPNFVVrdNa/view?usp=drive_link"
                      className="px-4 py-2 border-2 border-yellow-400 text-yellow-400 sm:text-white rounded-full text-sm "
                    >
                      View CV
                    </a>
                  </span>
                  <span className="flex gap-4 mt-2 sm:mt-0 h-full items-center">
                    <a
                      target="_blank"
                      href="https://github.com/HrishiD89"
                      className="bg-white p-2 rounded-full"
                    >
                      <GitHubIcon />
                    </a>
                    <a
                      target="_blank"
                      href="https://x.com/hrishiiiii__"
                      className="bg-white p-2 rounded-full"
                    >
                      <TwitterIcon />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/hrishikesh-kalita-854000207/"
                      className="bg-white p-2 rounded-full"
                    >
                      <LinkedinIcon />
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* my photo */}
            <div className=" justify-center flex flex-1 rounded-2xl overflow-hidden lg:h-screen ">
              <img
                className=" h-80 w-full  rounded-2xl sm:h-full object-cover "
                src="IMG-20230924-WA0084.jpg"
                alt="my img"
              />
            </div>
          </div>
        </section>
        <WorkContainer />
        <ContactMe />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </div>
    </div>
  );
};

export default Home;

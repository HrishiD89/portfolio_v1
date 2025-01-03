import WorkContainer from "../components/WorkContainer";
import ContactMe from "../components/ContactMe";
import LinkedinIcon from "../ui/icons/LinkedinIcon";
import GitHubIcon from "../ui/icons/GitHubIcon";
import TwitterIcon from "../ui/icons/TwitterIcon";
import { Bounce, ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <div className="px-6 w-screen h-full flex flex-col gap-6 overflow-hidden transition-all">
      {/* main */}
      <section id="home" className=" w-full scroll-mt-[76px]">
        <div className="flex gap-6 sm:flex-row flex-col">
          <div className="flex flex-none sm:w-3/5 rounded-2xl sm:bg-about-me bg-cover bg-center relative overflow-hidden  lg:h-screen">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg"></div>

            <div className="relative z-10 p-4 sm:p-12 text-green-900  sm:text-white  flex flex-col gap-6">
              <h1 className="text-3xl sm:text-start text-center w-full">
                Hey, I&apos;am{" "}
                <span className=" text-yellow-500 sm:inline-block w-full text-6xl py-2">
                  Hrishikesh{" "}
                </span>
                <span className="inline-block text-2xl">
                  A Fullstack developer with 1 year of experience
                </span>
              </h1>
              <p className="mt-2 text-lg max-w-xl  sm:text-left text-center">
                I care a lot about using design for positive impact. and enjoy
                creating user-centric, delightful, and human experiences.
              </p>
              <div className="flex gap-6 items-center sm:flex-row flex-col flex-shrink-0">
                <span className="flex gap-4">
                  <a
                    href="#contact"
                    className="px-4 py-2 bg-yellow-400 text-black rounded-full text-sm w-90"
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
        autoClose={5000}
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
  );
};

export default Home;

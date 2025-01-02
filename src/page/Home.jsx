import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WorkContainer from "../components/WorkContainer";

const Home = () => {
  return (
    <div className="px-6 w-screen flex flex-col gap-6">
      <section id="Home" className="">
        <div className="flex gap-6 sm:flex-row flex-col">
          <div className="flex   flex-1 rounded-2xl sm:bg-about-me bg-cover bg-center relative overflow-hidden  sm:h-screen">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg"></div>

            <div className="relative z-10 p-4 sm:p-12 text-green-900  sm:text-white  flex flex-col gap-4">
              <h1 className=" text-2xl sm:text-left text-center sm:text-6xl font-semibold ">
                Hey, I&apos;m{" "}
                <span className="sm:text-green-900 text-yellow-500">
                  Hrishikesh
                </span>
                , a Fullstack developer with 1 years of experince
              </h1>
              <p className="mt-2 text-lg max-w-xl font-thin sm:text-left text-center">
                I care a lot about using design for positive impact. and enjoy
                creating user-centric, delightful, and human experiences.
              </p>
              <div className="flex gap-4 items-center sm:flex-row flex-col ">
                <span className="flex gap-4">
                  <button className="px-4 py-2 bg-yellow-400 text-black rounded-full text-sm w-90">
                    Contact Me
                  </button>
                  <button className="px-4 py-2 border-2 border-yellow-400 text-yellow-400 sm:text-white rounded-full text-sm">
                    Download CV
                  </button>
                </span>
                <span className="flex gap-4 mt-2 sm:mt-0 h-full items-center">
                  <EmailIcon />
                  <GitHubIcon />
                  <XIcon />
                  <LinkedInIcon />
                </span>
              </div>
            </div>
          </div>

          {/* my photo */}
          <div className=" justify-center flex flex-none  sm:w-2/6 rounded-2xl overflow-hidden sm:h-screen h-96">
            <img
              className=" w-80 h-80 sm:w-full  rounded-2xl sm:h-full object-cover "
              src="IMG-20230924-WA0084.jpg"
              alt="my img"
            />
          </div>
        </div>
        <div>{/* projects */}</div>
      </section>
      <WorkContainer />
    </div>
  );
};

export default Home;

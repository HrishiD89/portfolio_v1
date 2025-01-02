/* eslint-disable react/prop-types */
import GitHubIcon from "@mui/icons-material/GitHub";

const Project = ({ title, image, description, customStyle, githubLink }) => {
  return (
    <div
      className={`bg-center bg-cover bg-no-repeat text-white flex-1 h-full rounded-xl p-6 sm:h-screen ${customStyle}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex justify-between">
        <span>
          <h1 className="text-2xl sm:text-3xl">{title}</h1>
          <p className="my-4 font-thin  text-sm sm:text-xl">{description}</p>
        </span>
        <span className="w-20 h-20 flex justify-center items-center">
          <a href={githubLink} className="">
            <GitHubIcon sx={{ fontSize: 60 }} />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Project;

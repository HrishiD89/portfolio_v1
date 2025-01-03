/* eslint-disable react/prop-types */
import ArrowUpRight from "../ui/icons/ArrowUpRight";
import GitHubIcon from "../ui/icons/GitHubIcon";

const Project = ({
  title,
  image,
  description,
  demourl,
  customStyle,
  githubLink,
}) => {
  return (
    <>
      <div
        className={`bg-[#6558aa] flex-1 h-full   items-center sm:items-start rounded-xl p-6  ${customStyle} relative flex flex-col w-full h-full`}
      >
        <div className="flex flex-col mb-6 gap-6 w-full">
          <span className="flex justify-between items-center">
            <h1 className="text-5xl">{title}</h1>
            <a
              href={githubLink}
              className="flex items-center gap-4 flex-shrink-0 px-2 py-2 w-fit sm:hidden  bg-white rounded-full"
            >
              <GitHubIcon />
            </a>
          </span>
          <p className="max-w-xl">{description}</p>
        </div>
        <div className="flex gap-4 mb-6 flex-col sm:flex-row">
          <a
            href={githubLink}
            className="sm:flex items-center gap-4 flex-shrink-0 px-2 py-2 w-fit hidden  bg-white rounded-full"
          >
            <GitHubIcon />
          </a>
          <a
            href={demourl}
            className="flex text-black items-center gap-4 flex-shrink-0 w-fit hover:bg-gray-200 bg-white px-4 py-2 rounded-full animate-bounce"
          >
            <ArrowUpRight />
            <p className="text-xl">Demo</p>
          </a>
        </div>
        <a href={image} className=" rounded-md overflow-hidden object-cover ">
          <img src={image} alt={`${title}img`} />
        </a>
        <div className="py-6">
          <ul className="sm:flex gap-4 flex-wrap hidden">
            <li className="px-2 py-1 text-sm bg-green-100 rounded-full text-gray-600 ">
              # React JS
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Project;

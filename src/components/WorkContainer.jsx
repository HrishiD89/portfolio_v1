import Project from "./Project";

const WorkContainer = () => {
  return (
    <section id="work" className=" w-full scroll-mt-[74px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-full gap-6">
        <Project
          title="DropBrain"
          image="/project1.png"
          description="Your personal inventory where you can drop all you important information such as youtube tweets etc "
          customStyle=""
          githubLink="https://github.com/HrishiD89/brainly-FullApp"
          demourl="https://brainly-full-app.vercel.app"
          tech="React, Tailwind, MongoDB, Express, Nodejs"
        />
        <Project
          title="Social"
          image="/project2.png"
          description="Custum social links "
          customStyle="bg-black text-white"
          githubLink="https://github.com/HrishiD89/Social-links-profile"
          demourl="https://social-links-profile-three-mu.vercel.app "
          tech="React, Tailwind, MongoDB, Express, Nodejs"
        />
       
        <span>
        <div className="bg-gray-700 text-white flex-1 h-full rounded-xl p-6 sm:h-screen ">
          <div className="flex w-full h-full justify-center items-center ">
            <h1 className="text-2xl sm:text-4xl">See More...</h1>
          </div>
        </div>
        </span>
      </div>
    </section>
  );
};

export default WorkContainer;

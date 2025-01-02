import Project from "./Project";

const WorkContainer = () => {
  return (
    <section id="work" className=" w-full h-screen">
      <div className="grid grid-cols-2 w-full h-full gap-6">
        <Project
          title="Project 1"
          image="https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=600"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          customStyle=""
          githubLink="https://github.com/"
          demourl="https://github.com/"
        />
        <Project
          title="Project 1"
          image="https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=600"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          customStyle=""
        />

        <Project
          title="Project 1"
          image="https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=600"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          customStyle=""
        />
        <div
      className="bg-gray-700 text-white flex-1 h-full rounded-xl p-6 sm:h-screen "
    >
      <div className="flex w-full h-full justify-center items-center ">
        <h1 className="text-4xl">See More...</h1>
      </div>
    </div>

       
      </div>
    </section>
  );
};

export default WorkContainer;

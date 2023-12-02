import Button from "./Button";

export default function SideBar({ onStartAddProject, projects }) {
  return (
    <aside className="bg-black h-screen rounded-tr-xl ">
      <h2 className="uppercase font-bold text-white p-8">Your Projects</h2>
      <Button onClick={onStartAddProject}>+ add project</Button>
      <div>
        <ul className="flex flex-col gap-4 p-3 mt-8">
          {/* {projectList.length > 0
            ? projectList.map((eachProject, index) => (
                <li
                  className="text-slate-500 hover:text-slate-200 px-4 py-2"
                  key={index}
                >
                  <button onClick={showProject}>{eachProject.title}</button>
                </li>
              ))
            : undefined} */}
          {projects.map((project) => (
            <li key={project.id}>
              <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:bg-gray-800 hover:text-stone-200">
                {project.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

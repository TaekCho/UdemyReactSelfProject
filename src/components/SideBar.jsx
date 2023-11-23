export default function SideBar({ onAddProject, projectList }) {
  return (
    <aside className="bg-black h-screen w-1/6 rounded-tr-xl">
      <h2 className="text-transform: uppercase font-bold text-white p-8">
        Your Projects
      </h2>
      <button
        className="text-transform: capitalize text-current bg-slate-700 p-3 rounded-lg ml-4"
        onClick={onAddProject}
      >
        + add project
      </button>
      <div>
        <ul className="flex flex-col gap-4">
          {projectList.length > 0
            ? projectList.map((eachProject, index) => (
                <li className="text-slate-500 p-4" key={index}>
                  {eachProject.title}
                </li>
              ))
            : undefined}
        </ul>
      </div>
    </aside>
  );
}

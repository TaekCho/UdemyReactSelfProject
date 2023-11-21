export default function SideBar({ onAddProject, projectData }) {
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
          {projectData
            ? projectData.map((eachProject, index) => (
                <li key={index}>{eachProject.title}</li>
              ))
            : ""}
        </ul>
      </div>
    </aside>
  );
}

import Button from "./Button";

export default function SideBar({ onAddProject, projectList, showProject }) {
  return (
    <aside className="bg-black h-screen rounded-tr-xl ">
      <h2 className="uppercase font-bold text-white p-8">Your Projects</h2>
      <Button onClick={onAddProject}>+ add project</Button>
      <div>
        <ul className="flex flex-col gap-4 p-3">
          {projectList.length > 0
            ? projectList.map((eachProject, index) => (
                <li
                  className="text-slate-500 hover:text-slate-200 px-4 py-2"
                  key={index}
                >
                  <button onClick={showProject}>{eachProject.title}</button>
                </li>
              ))
            : undefined}
        </ul>
      </div>
    </aside>
  );
}

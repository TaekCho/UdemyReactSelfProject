export default function ProjectInfo({}) {
  return (
    <section className="w-4/6 max-h-min">
      <div className="flex flex-col p-6 gap-2">
        <div className="flex flex-row w-full justify-between">
          <h2 className="text-2xl font-bold">{projectList.title}</h2>
          <button className="text-zinc-400">Delete</button>
        </div>
        <div className="text-gray-400">{projectList.dueDate}</div>
        <div>{projectList.description}</div>
      </div>
      <hr />
      <div className="flex flex-col p-6">
        <h3 className="font-bold">Tasks</h3>
        <div className="flex gap-4">
          <input type="text" className="w-2/6 bg-gray-300 py-0.5 my-2" />
          <button>Add Task</button>
        </div>
        {/* if no task, react accordingly */}
        {/* if there are, show them in order */}
        {projectList.tasks.length > 0 ? (
          <div className="flex flex-col gap-2 bg-gray-100 p-6 my-4">
            {projectList.tasks.map((task, index) => {
              return (
                <div key={index} className="flex justify-between">
                  <span>{task}</span>
                  <button className="text-gray-400">Clear</button>
                </div>
              );
            })}
          </div>
        ) : (
          <div>This project does not have any tasks yet.</div>
        )}
      </div>
    </section>
  );
}

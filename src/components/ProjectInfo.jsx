export default function ProjectInfo({ projectList }) {
  return (
    <>
      <section className="flex flex-col p-6 gap-2">
        <div>
          <h2>{projectList.title}</h2>
          <button>Delete</button>
        </div>
        <div>{projectList.dueDate}</div>
        <div>{projectList.description}</div>
      </section>
      <hr />
      <section>
        <h3>Tasks</h3>
        <div className="flex gap-4">
          <input type="text" className="w-16" />
          <button>Add Task</button>
        </div>
        {/* if no task, react accordingly */}
        {!tasks && <div>This project does not have any tasks yet.</div>}
      </section>
    </>
  );
}

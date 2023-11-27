import Input from "./Input";

export default function AddProject({
  inputHandler,
  clickHandlerToAddProject,
  projectList,
}) {
  let todayDate = new Date().toISOString().split("T")[0];

  return (
    <form className="w-2/4 m-16" name="addProject">
      <menu className="flex gap-2 justify-end">
        <button className="px-6 py-3 text-transform: capitalize">cancel</button>
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-lg text-transform: capitalize"
          onClick={clickHandlerToAddProject}
        >
          save
        </button>
      </menu>
      <Input
        textarea={false}
        label="title"
        id="title"
        type="text"
        onChange={inputHandler}
      />
      <Input
        textarea={true}
        label="description"
        id="description"
        onChange={inputHandler}
      />
      <Input
        textarea={false}
        label="Due Date"
        type="date"
        id="dueDate"
        onChange={inputHandler}
        min={todayDate}
      />
    </form>
  );
}

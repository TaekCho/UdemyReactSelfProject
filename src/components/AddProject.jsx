import Input from "./Input";

export default function AddProject({ inputHandler, clickHandlerToAddProject }) {
  let todayDate = new Date().toISOString().split("T")[0];

  return (
    <form className="w-2/4 m-16">
      <div className="flex gap-2 justify-end">
        <button className="px-6 py-3 text-transform: capitalize">cancel</button>
        <button
          className="bg-black text-white px-6 py-3 rounded-lg text-transform: capitalize"
          onClick={clickHandlerToAddProject}
        >
          save
        </button>
      </div>
      <h3 className="text-transform: uppercase">title</h3>
      <Input type="text" id="title" onChange={inputHandler} />
      <h3 className="text-transform: uppercase">description</h3>
      <textarea
        id="description"
        type="text-area"
        className="w-full mb-2 bg-slate-200 border-2 border-b-stone-300 focus:border:none focus:border-b-stone-600"
        onChange={inputHandler}
      />
      <h3 className="text-transform: uppercase">due date</h3>
      <Input
        type="date"
        id="dueDate"
        onChange={inputHandler}
        min={todayDate}
        max="2050-12-31"
      />
    </form>
  );
}

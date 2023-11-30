import { useRef } from "react";

import Input from "./Input";

export default function AddProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  let todayDate = new Date().toISOString().split("T")[0];

  return (
    <form className="w-2/4 m-16" name="addProject">
      <menu className="flex gap-2 justify-end">
        <button className="px-6 py-3 text-transform: capitalize text-stone-700 hover:text-stone-950">
          cancel
        </button>
        <button
          className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-3 rounded-lg text-transform: capitalize"
          onClick={handleSave}
        >
          save
        </button>
      </menu>
      <Input
        textarea={false}
        label="title"
        id="title"
        type="text"
        ref={title}
      />
      <Input
        textarea={true}
        label="description"
        id="description"
        ref={description}
      />
      <Input
        textarea={false}
        label="Due Date"
        type="date"
        id="dueDate"
        min={todayDate}
        ref={dueDate}
      />
    </form>
  );
}

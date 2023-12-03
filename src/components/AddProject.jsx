import { useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";

export default function AddProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  let todayDate = new Date().toISOString().split("T")[0];

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Opps ... looks like you for got to enter a value
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a value for every input field.
        </p>
      </Modal>
      <form className="w-2/4 m-16" name="addProject">
        <menu className="flex gap-2 justify-end">
          <button
            className="px-6 py-3 text-transform: capitalize text-stone-700 hover:text-stone-950"
            onClick={onCancel}
          >
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
    </>
  );
}

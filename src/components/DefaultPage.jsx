import noteImage from "../assets/no-projects.png";
import Button from "./Button";

export default function DefaultPage({ onAddProject }) {
  return (
    <section className="mt-24 flex flex-col items-center w-2/3">
      <img
        src={noteImage}
        alt="note-pad-image"
        // object-contain prevents the distortion of the image
        className="w-32 h-32 object-contain"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <div className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </div>
      <div>
        <Button onAddProject={onAddProject}>+ add project</Button>
      </div>
    </section>
  );
}

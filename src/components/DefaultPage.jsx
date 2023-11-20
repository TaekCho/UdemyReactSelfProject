import noteImage from "../assets/no-projects.png";

export default function DefaultPage() {
  return (
    <section className="flex flex-col items-center">
      <img src={noteImage} alt="note-pad-image" className="w-32 h-32" />
      <h2 className="text-xl font-bold">No Project Selected</h2>
      <div>Select a project or get started with a new one</div>
      <button className="pd-">Create New Project</button>
    </section>
  );
}

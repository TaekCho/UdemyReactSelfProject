export default function AddProject() {
  return (
    <section className="w-2/4 m-16">
      <div class="flex gap-2 justify-end">
        <button className="px-6 py-3 text-transform: capitalize">cancel</button>
        <button className="bg-black text-white px-6 py-3 rounded-lg text-transform: capitalize">
          save
        </button>
      </div>
      <h3 className="text-transform: uppercase">title</h3>
      <input
        type="text"
        className="w-full bg-slate-200 border-2 border-b-stone-300"
      />
      <h3 className="text-transform: uppercase">description</h3>
      <input
        type="text-area"
        className="w-full bg-slate-200 border-2 border-b-stone-300"
      />
      <h3 className="text-transform: uppercase">due date</h3>
      <input
        type="date"
        className="w-full bg-slate-200 border-2 border-b-stone-300"
      />
    </section>
  );
}

export default function Button({ children, onAddProject, ...props }) {
  return (
    <button
      className="capitalize text-current text-stone-300 hover:text-stone-800 bg-slate-700 hover:bg-slate-400 p-3 rounded-lg ml-4"
      onClick={onAddProject}
      {...props}
    >
      {children}
    </button>
  );
}

export default function Input({ label, textarea, ...props }) {
  let inputClassName =
    "w-full mb-2 bg-stone-200 border-2 rounded-sm border-b-stone-300 bg-stone-200 focus:outline-none focus:border-b-stone-400 text-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm uppercase font-bold text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea {...props} className={inputClassName} />
      ) : (
        <input {...props} className={inputClassName} />
      )}
    </p>
  );
}

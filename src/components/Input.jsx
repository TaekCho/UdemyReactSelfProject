export default function Input({ label, textarea, ...props }) {
  let inputClassName =
    "w-full mb-2 bg-slate-200 border-2 border-b-stone-300 focus:border-b-stone-600";

  return (
    <p>
      <label className="uppercase">{label}</label>
      {textarea ? (
        <textarea {...props} className={inputClassName} />
      ) : (
        <input {...props} className={inputClassName} />
      )}
    </p>
  );
}

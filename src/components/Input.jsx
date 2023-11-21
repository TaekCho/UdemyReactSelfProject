export default function Input({ onInputChange, ...props }) {
  let inputClassName =
    "w-full mb-2 bg-slate-200 border-2 border-b-stone-300 focus:border-b-stone-600";

  return <input className={inputClassName} {...props} />;
}

import react from "react";
import { clsx } from "clsx";

export function Button({ text, onSetTask, className }) {
  return (
    <button
      className={clsx(
        className,
        "bg-amber-300 ml-2 text-gray-600 rounded-md px-3 py-1 hover:bg-amber-200 transition-colors inline-block",
      )}
      onClick={onSetTask}
    >
      {text}
    </button>
  );
}

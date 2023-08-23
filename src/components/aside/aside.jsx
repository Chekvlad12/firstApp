import { nanoid } from "nanoid";
export function Aside() {
  const menuArr = [
    { id: nanoid(), title: "Collation" },
    { id: nanoid(), title: "Doing" },
    { id: nanoid(), title: "Done" },
    { id: nanoid(), title: "Create new list" },
  ];
  const display = menuArr.map((elem) => {
    return (
      <li key={elem.id} className=" text-slate-300">
        {elem.title}
        <span className=" ml-10 text-sm text-slate-300 p-1 rounded-md bg-slate-800">
          12
        </span>
      </li>
    );
  });
  return (
    <aside className=" w-60 h-screen bg-slate-900 border-r-slate-800 border border-y-slate-900 border-l-slate-900 ">
      <ul className=" flex flex-col items-center gap-10 mt-28 ">{display}</ul>
    </aside>
  );
}

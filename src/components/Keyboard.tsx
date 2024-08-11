const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const Keyboard = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(75px,1fr))] gap-2">
      {KEYS.map((key, index) => (
        <button
          key={key}
          className="text-black border-2 border-black w-full uppercase p-2 aspect-square text-4xl font-bold hover:bg-slate-200 focus:bg-slate-200 disabled:opacity-5 "
        >
          {key}
        </button>
      ))}
    </div>
  );
};
export default Keyboard;

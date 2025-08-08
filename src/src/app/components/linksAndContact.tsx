import Links from "./links";
import Contact from "./contact";

export default function LinksAndContact() {
  return (
    <div className="max-w-full my-2">
      <div className="bg-stone-300 dark:bg-zinc-800 text-gray-600 dark:text-amber-100 dark:border dark:border-amber-100/25 rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-2">
          <h2 className="font-bold text-xl mb-2">
            Links & Contact
          </h2>
          <Links />
          <Contact />
        </div>
      </div>
    </div>
  );
}

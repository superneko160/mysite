import Links from "./links";
import Contact from "./contact";

export default function LinksAndContact() {
  return (
    <div className="max-w-full my-2">
      <div className="bg-stone-300 dark:bg-sky-950 rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-2">
          <h2 className="text-gray-600 dark:text-gray-50 font-bold text-xl mb-2">
            Links & Contact
          </h2>
          <Links />
          <Contact />
        </div>
      </div>
    </div>
  );
}

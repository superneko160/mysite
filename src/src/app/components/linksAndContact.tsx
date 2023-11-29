import Links from "./links";
import Contact from "./contact";

export default function LinksAndContact() {
  return (
    <div className="max-w-full my-2">
      <div className="bg-sky-950 rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-50 font-bold text-xl mb-2">Links & Contact</div>
          <Links />
          <Contact />
        </div>
      </div>
    </div>
  )
}

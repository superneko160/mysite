import ProfilePicture from "./profilePicture";

export default function Overview() {
  return (
    <div className="max-w-full my-2">
      <div className="bg-sky-950 rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-50 font-bold text-xl mb-2">Overview</div>
          <div className="sm:flex flex-none justify-center items-center gap-2 mt-3">
            <ProfilePicture />
            <p className="text-gray-50 text-base">Hello,there.I am Sneko. I can write a little program. I am more interested in the backend. What else? I like cats, but I don't have one, because I'm a cat myself.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
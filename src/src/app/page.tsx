
export default function Home() {
  return (
    <main className="container mx-auto px-8 bg-slate-950">

    <h1 className="text-4xl font-bold text-center">Sneko</h1>
    <hr className="my-2" />

    <div className="max-w-sm w-full lg:max-w-full lg:flex my-2">
      <div className="bg-sky-900 rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-50 font-bold text-xl mb-2">Overview</div>
          <p className="text-gray-50 text-base">Hello,there. I like cats, but I don't have one.</p>
        </div>
      </div>
    </div>

    <div className="max-w-sm w-full lg:max-w-full lg:flex my-2">
      <div className="bg-sky-900 rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-50 font-bold text-xl mb-2">Skill</div>
          <p className="text-gray-50 text-base">Java / C# / Rust / PHP / Python / JavaScript / TypeScript / Node.js / Laravel / MySQL / PostgreSQL / git / Docker etc...</p>
        </div>
      </div>
    </div>

    <div className="max-w-sm w-full lg:max-w-full lg:flex my-2">
      <div className="bg-sky-900 rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-50 font-bold text-xl mb-2">History</div>
          <p className="text-gray-50 text-base">2999.01.01 My birthday.</p>
          <p className="text-gray-50 text-base">2999.12.31 R.I.P</p>
        </div>
      </div>
    </div>
    
    <div className="max-w-sm w-full lg:max-w-full lg:flex my-2">
      <div className="bg-sky-900 rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-50 font-bold text-xl mb-2">Links & Contacts</div>
            <p className="text-gray-50 text-base">
              <a href="https://github.com/superneko160">[GitHub]</a>
              <a href="https://www.amazon.co.jp/">[Amazon]</a>
            </p>
        </div>
      </div>
    </div>

    </main>
  )
}

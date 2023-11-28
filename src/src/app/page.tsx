
export default function Home() {
  return (
    <main className="container mx-auto px-8 bg-slate-950">

    <h1 className="text-4xl font-bold text-center mt-2">Sneko</h1>
    <hr className="my-2" />

    <div className="max-w-full my-2">
      <div className="bg-sky-950 rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-50 font-bold text-xl mb-2">Overview</div>
          <p className="text-gray-50 text-base">Hello,there.I am Sneko. I can write a little program. I am more interested in the backend. What else? I like cats, but I don't have one, because I'm a cat myself.</p>
        </div>
      </div>
    </div>

    <div className="max-w-full my-2">
      <div className="bg-sky-950 rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-50 font-bold text-xl mb-2">Skill</div>
          <p className="text-gray-50 text-base">I have over 4 years of experience in PHP and JavaScript, a little bit of Python, and can write TypeScript, Java, C#, etc. Rust is under study. I can use MySQL and PostgreSQL as databases. My favorite tools are Git and Docker.</p>
        </div>
      </div>
    </div>

    <div className="max-w-full my-2">
      <div className="bg-sky-950 rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-50 font-bold text-xl mb-2">History</div>
            <ul>
              <li className="text-gray-50">2999.01.01 My birthday.</li>
              <li className="text-gray-50">2999.12.31 R.I.P</li>
            </ul>
        </div>
      </div>
    </div>
    
    <div className="max-w-full my-2">
      <div className="bg-sky-950 rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-50 font-bold text-xl mb-2">Links & Contacts</div>
            <p className="text-gray-50 text-base">

              <div className="py-2">
                <h2 className="text-xl mb-0.5">Links</h2>
                <a href="https://github.com/superneko160" target="_blank">
                  <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                  <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  Github
                  </button>
                </a>
              </div>

              <div className="py-2">
                <h2 className="text-xl mb-0.5">Contacts</h2>
                <form className="max-w-sm">
                  <div className="relative mb-1">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                      </svg>
                    </div>
                    <input type="text" id="email-address-icon" className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Your@email.com" />
                  </div>
                  <div className="mb-1">
                    <textarea id="message" className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                  </div>
                  <div className="mb-1">
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send Message</button>
                  </div>
                </form>
              </div>

            </p>
        </div>
      </div>
    </div>

    <hr className="my-2" />
    </main>
  )
}

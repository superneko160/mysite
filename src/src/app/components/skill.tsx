export default function Skill() {
  return (
    <div className="max-w-full my-2">
      <div className="bg-stone-300 dark:bg-zinc-800 text-gray-600 dark:text-amber-100 rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-2">
          <h2 className="font-bold text-xl mb-2">
            Skill
          </h2>
          <div className="mt-5">
            <h3 className="text-xl mb-1">
              Programming Language
            </h3>
            <img
              src="https://skillicons.dev/icons?i=html,css,js,nodejs,ts,php,py,java,cs,rust&perline=5"
              alt="skill:programming language html,css,js,nodejs,ts,php,py,java,cs,rust"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-xl mb-1">
              Library and Framework
            </h3>
            <img
              src="https://skillicons.dev/icons?i=react,nextjs,laravel,tailwind,jquery"
              alt="skill:Library and Framework react,nextjs,laravel,tailwind,jquery"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-xl mb-1">
              Database
            </h3>
            <img
              src="https://skillicons.dev/icons?i=mysql,postgres,redis"
              alt="skill:Database mysql,postgres,redis"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-xl mb-1">
              Others
            </h3>
            <img
              src="https://skillicons.dev/icons?i=git,githubactions,bash,linux,vim,docker,prisma,vite,vitest,figma&perline=5"
              alt="skill:Others git,githubactions,bash,vim,docker,prisma,vite,vitest,figma"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

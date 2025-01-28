type SkillProps = { content: string };

export default function Skill({ content }: SkillProps) {
  return (
    <div className="max-w-full my-2">
      <div className="bg-sky-950 rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-2">
          <h2 className="text-gray-50 font-bold text-xl mb-2">Skill</h2>
          <p className="text-gray-50 text-base">{content}</p>
          <div className="mt-5">
            <h3 className="text-xl text-gray-50 mb-0.5">
              Programming Language
            </h3>
            <img src="https://skillicons.dev/icons?i=html,css,js,nodejs,ts,php,py,java,cs,rust&perline=5" />
          </div>
          <div className="mt-4">
            <h3 className="text-xl text-gray-50 mb-0.5">
              Library and Framework
            </h3>
            <img src="https://skillicons.dev/icons?i=react,nextjs,laravel,tailwind,jquery" />
          </div>
          <div className="mt-4">
            <h3 className="text-xl text-gray-50 mb-0.5">Database</h3>
            <img src="https://skillicons.dev/icons?i=mysql,postgres,sqlite" />
          </div>
          <div className="mt-4">
            <h3 className="text-xl text-gray-50 mb-0.5">Others</h3>
            <img src="https://skillicons.dev/icons?i=git,docker,bash,vim,figma" />
          </div>
        </div>
      </div>
    </div>
  );
}

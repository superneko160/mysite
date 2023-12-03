type SkillProps = { content: string };

export default function Skill({ content }: SkillProps) {
  return (
    <div className="max-w-full my-2">
      <div className="bg-sky-950 rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-50 font-bold text-xl mb-2">Skill</div>
          <p className="text-gray-50 text-base">{content}</p>
        </div>
      </div>
    </div>
  );
}

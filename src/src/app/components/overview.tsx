import ProfilePicture from "./profilePicture";

type OverviewProps = { content: string };

export default function Overview({ content }: OverviewProps) {
  return (
    <div className="max-w-full my-2">
      <div className="bg-stone-300 dark:bg-sky-950 rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-2">
          <h2 className="text-gray-600 dark:text-gray-50 font-bold text-xl mb-2">
            Overview
          </h2>
          <div className="sm:flex flex-none justify-center items-center gap-2 mt-3">
            <div className="flex justify-center items-center mb-4">
              <ProfilePicture />
            </div>
            <p className="text-gray-600 dark:text-gray-50 text-base">
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

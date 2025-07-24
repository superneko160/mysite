import type { HistoryData } from "./../types/HistoryData/";

type HistoryDataProps = {
  content: HistoryData[];
};

export default function History({ content }: HistoryDataProps) {
  return (
    <div className="max-w-full my-2">
      <div className="bg-stone-300 dark:bg-zinc-800 text-gray-600 dark:text-amber-100 rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-2">
          <h2 className="font-bold text-xl mb-2">
            History
          </h2>
          <div className="relative w-1/2 m-8">
            <div className="border-r-2 border-gray-600 dark:border-amber-100 absolute h-full top-0 left-3.5"></div>
            <ul className="list-none m-0 p-0">
              {content.map((history, index) => (
                <li key={index} className="mb-2">
                  <div className="flex items-center mb-1">
                    <div className="bg-gray-600 dark:bg-amber-100 rounded-full h-8 w-8"></div>
                    <div className="flex-1 ml-4 font-bold">
                      {history.title}
                    </div>
                  </div>
                  <div className="ml-12">
                    {history.content}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

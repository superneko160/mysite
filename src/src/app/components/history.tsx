import type { HistoryData } from "./historyData";

type HistoryDataProps = {
  content: HistoryData[];
};

export default function History({ content }: HistoryDataProps) {
  return (
    <div className="max-w-full my-2">
      <div className="bg-sky-950 rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <h2 className="text-gray-50 font-bold text-xl mb-2">History</h2>
          <div className="relative w-1/2 m-8">
            <div className="border-r-2 border-gray-50 absolute h-full top-0 left-3.5"></div>
            <ul className="list-none m-0 p-0">
              {content.map((history) => (
                <li className="mb-2">
                  <div className="flex items-center mb-1">
                    <div className="bg-gray-50 rounded-full h-8 w-8"></div>
                    <div className="flex-1 ml-4 text-gray-50 font-bold">{history.title}</div>
                  </div>
                  <div className="ml-12 text-gray-50">{history.content}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

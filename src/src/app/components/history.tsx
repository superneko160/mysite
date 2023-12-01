export default function History() {
  return (
    <div className="max-w-full my-2">
      <div className="bg-sky-950 rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-50 font-bold text-xl mb-2">History</div>
          <div className="relative w-1/2 m-8">
            <div className="border-r-2 border-gray-50 absolute h-full top-0 left-3.5"></div>
            <ul className="list-none m-0 p-0">
              <li className="mb-2">
                <div className="flex items-center mb-1">
                  <div className="bg-gray-50 rounded-full h-8 w-8"></div>
                  <div className="flex-1 ml-4 font-bold">Aug 1992</div>
                </div>
                <div className="ml-12">I was born.</div>
              </li>
              <li className="mb-2">
                <div className="flex items-center mb-1">
                  <div className="bg-gray-50 rounded-full h-8 w-8"></div>
                  <div className="flex-1 ml-4 font-bold">Apr 2015</div>
                </div>
                <div className="ml-12">First programming.</div>
              </li>
              <li className="mb-2">
                <div className="flex items-center mb-1">
                  <div className="bg-gray-50 rounded-full h-8 w-8"></div>
                  <div className="flex-1 ml-4 font-bold">Apr 2017</div>
                </div>
                <div className="ml-12">Joined a software development company.</div>
              </li>
              <li className="mb-2">
                <div className="flex items-center mb-1">
                  <div className="bg-gray-50 rounded-full h-8 w-8"></div>
                  <div className="flex-1 ml-4 font-bold">Jul 2999</div>
                </div>
                <div className="ml-12">R.I.P</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

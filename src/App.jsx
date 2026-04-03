import { useState } from "react";
import Bar from "./components/Bar.jsx";
import randomInteger from "./lib/randomInteger.js";

export default function App() {
  const [storagePercentageUsed] = useState(() => randomInteger(50, 90)); // 50%-90%
  const totalStorage = 1_000; // 1_000 GB
  const usedStorage = Math.floor((storagePercentageUsed / 100) * totalStorage);
  const freeStorage = totalStorage - usedStorage;

  return (
    <div className="min-h-screen bg-blue-950 bg-[url(/images/bg-mobile.png)] lg:bg-[url(/images/bg-desktop.png)] bg-no-repeat lg:bg-bottom lg:bg-size-[100%_50%] bg-size-[100%_100%] flex items-center justify-center px-8">
      <div className="flex flex-col gap-4 w-full max-w-2xl lg:flex-row lg:w-10/12 lg:max-w-5xl">
        <div className="bg-blue-850 p-10 rounded-lg rounded-tr-[106px] flex flex-col gap-8 lg:flex-2">
          <div>
            <span className="flex items-center justify-center w-37 h-10 md:w-45 md:h-13">
              <img
                src="/images/logo.svg"
                alt="Fylo"
                className="w-full h-full"
              />
            </span>
          </div>
          <div className="flex gap-4 items-center *:rounded-lg *:p-2.5 *:bg-blue-950 *:size-14 *:flex *:items-center *:justify-center ">
            <span>
              <img src="/images/icon-document.svg" alt="Upload file" />
            </span>
            <span>
              <img src="/images/icon-folder.svg" alt="Upload folder" />
            </span>
            <span>
              <img
                src="/images/icon-upload.svg"
                className="w-9/12"
                alt="Save to fylo cloud"
              />
            </span>
          </div>
        </div>
        <div className="rounded-md p-10 bg-blue-850 relative lg:flex-3 lg:self-end">
          <div className="flex gap-3 flex-col pb-4 lg:pb-0 relative">
            <p className="text-blue-200 text-lg">
              You&apos;ve used{" "}
              <span className="raleway-extrabold">{usedStorage}</span> of your
              storage
            </p>
            <div className="space-y-3">
              <Bar fillPercentage={storagePercentageUsed} />
              <div className="flex justify-between text-blue-200 raleway-extrabold">
                <span>0 GB</span>
                <span>1000 GB</span>
              </div>
            </div>
            <div className="absolute bg-white p-5 text-grayish-blue uppercase rounded-xl rounded-br-none right-0 -top-full  before:content-[''] before:block before:absolute before:-bottom-6 before:right-0 before:border-l-transparent before:border-l-24 before:border-t-24 before:border-t-white items-center gap-2 w-max hidden lg:flex">
              <span className="text-blue-950 raleway-extrabold text-5xl">
                {freeStorage}
              </span>{" "}
              <span className="">gb left</span>
            </div>
          </div>
          <div className="absolute bg-white p-5 text-grayish-blue uppercase rounded-xl left-1/2 flex items-center gap-2 w-max -translate-x-1/2 lg:hidden">
            <span className="text-blue-950 raleway-extrabold text-5xl">
              {freeStorage}
            </span>{" "}
            <span className="">gb left</span>
          </div>
        </div>
      </div>
    </div>
  );
}

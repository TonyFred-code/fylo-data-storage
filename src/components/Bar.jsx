import { number } from "prop-types";
import { useEffect, useState } from "react";

export default function Bar({ fillPercentage }) {
  const [widthPercentage, setWidthPercentage] = useState(10);

  useEffect(() => {
    setWidthPercentage(fillPercentage);
  }, [fillPercentage]);
  return (
    <div className="w-full h-6 rounded-full flex items-center bg-blue-950 p-0.75">
      <div
        className="bg-linear-to-r from-rose-200 rounded-full flex to-pink-400 h-full items-center justify-end transition-[width] duration-300 delay-300 ease-in"
        style={{ width: `${widthPercentage}%` }}
      >
        <div className="rounded-full bg-blue-200 size-3.25 mr-0.75"></div>
      </div>
    </div>
  );
}

Bar.propTypes = {
  fillPercentage: number.isRequired,
};

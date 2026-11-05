"use client";

import { useEffect, useState } from "react";


interface DataProps {
  data : string[]
}
export default function DynamicText({data}: DataProps) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        <h3
          key={index}
          className="text-center font-extrabold text-xl text-shadow-amber-200"
        >
          {data[index]}
        </h3>
      ) : (
        <p></p>
      )}
    </div>
  );
}

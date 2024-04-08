import React from "react";
import { SmallPicture } from "./SmallPicture";

interface NewItemProps {
  title: string;
  msj: string;
}

export const NewItem: React.FC<NewItemProps> = ({ title, msj }) => {
  return (
    <div className="p-12 md:w-1/2 flex flex-col items-start">
      <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
        CATEGORY
      </span>
      <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
        {title}
      </h2>
      <p className="leading-relaxed mb-8">{msj}</p>
    </div>
  );
};

import React from "react";

interface SmallPictureProps {
  src: string;
  name: string;
  publiDate: string;
}

export const SmallPicture: React.FC<SmallPictureProps> = ({
  src,
  name,
  publiDate,
}) => {
  return (
    <div>
      <a className="inline-flex items-center">
        <img alt="blog" src={src} className="" />
        <span className="flex-grow flex flex-col pl-4">
          <span className="title-font font-medium text-gray-900">{name}</span>
          <span className="text-gray-400 text-xs tracking-widest mt-0.5">
            {publiDate}
          </span>
        </span>
      </a>
    </div>
  );
};

"use client";
import { CldImage, CldUploadButton } from "next-cloudinary";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { AddTags } from "../gallery/action";
import { useState } from "react";

const View = ({ src, tag, fun }: { src: string; tag: string[]; fun: any }) => {
  const [fav, setFav] = useState(tag.includes("favourite"));

  return (
    <div className="relative">
      {/*View Image */}
      <CldImage
        className="rounded-sm"
        width="400"
        height="400"
        src={src}
        sizes="100vw"
        alt="Description of my image"
      />
      <div
        className="absolute top-1 right-1"
        onClick={() => {
          fun(src);
          setFav(!fav);
          AddTags(src, fav);
        }}
      >
        {fav ? (
          <AiFillHeart className="w-8 h-8 cursor-pointer text-red-500 hover:text-red-500 duration-300" />
        ) : (
          <AiOutlineHeart className="w-8 h-8 cursor-pointer text-white hover:text-red-500 duration-300" />
        )}
      </div>
    </div>
  );
};

export default View;

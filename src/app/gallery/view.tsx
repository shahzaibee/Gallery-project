"use client";
import { CldImage, CldUploadButton } from "next-cloudinary";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { AddTags } from "./action";
import { useState } from "react";
import Link from "next/link";
import AlbumDialog from "./albumDialog";

const View = ({ src, tag }: { src: string; tag: string[] }) => {
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
      {/* Heart Icon for favourite */}
      <div
        className="absolute top-1 right-1"
        onClick={() => {
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
      {/* edit icon for Editing page */}
      <div className="absolute top-0 left-1">
        <Link href={`/edit?${src}`}>
          <BiEditAlt className="w-8 h-8 cursor-pointer text-white hover:text-red-500 duration-300" />
        </Link>
      </div>

      {/* add to album */}
      <div className="absolute bottom-1 left-1">
        <AlbumDialog imageData={src}/>
      </div>
    </div>
  );
};

export default View;

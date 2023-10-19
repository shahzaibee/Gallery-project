"use client";
import { CldImage, CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";

interface UploadImage {
  event: "success";
  info: {
    public_id: string;
  };
}

export default function Home() {
  //Usestate to change the image
  const [imageId, setImageId] = useState("cld-sample-4");
  return (
    <main className="flex min-h-screen flex-col lg:flex-row items-center justify-between p-24">
      {/* upload Button */}
      <CldUploadButton
        uploadPreset="t7kiuinp"
        onUpload={(result) => {
          let res = result as UploadImage;
          setImageId(res.info.public_id);
        }}
      />
      {/*View Image */}
      <CldImage
        width="400"
        height="400"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
      />
    </main>
  );
}
